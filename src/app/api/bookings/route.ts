import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import prisma from '@/lib/prisma'
import { rateLimit } from '@/lib/rateLimiter'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { sendBookingConfirmation } from '@/lib/email'
import type { RateLimitResponse } from '@/lib/rateLimiter'

// Input validation schema
const bookingSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(6, 'Phone number must be at least 6 characters'),
  serviceId: z.string(),
  date: z.string(),
  time: z.string(),
  notes: z.string().optional()
})

export async function POST(request: NextRequest) {
  try {
    // Apply rate limiting
    const identifier = request.ip ?? 'anonymous'
    const { success }: RateLimitResponse = await rateLimit.booking(identifier)
    if (!success) {
      return NextResponse.json(
        { error: 'Too many booking requests. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const validated = bookingSchema.parse(body)

    // Check if the service exists
    const service = await prisma.service.findUnique({
      where: { id: validated.serviceId }
    })

    if (!service) {
      return NextResponse.json(
        { error: 'Selected service not found' },
        { status: 404 }
      )
    }

    // Check if the time slot is available
    const existingBooking = await prisma.booking.findFirst({
      where: {
        date: new Date(validated.date),
        time: validated.time,
        status: {
          in: ['PENDING', 'CONFIRMED']
        }
      }
    })

    if (existingBooking) {
      return NextResponse.json(
        { error: 'This time slot is no longer available' },
        { status: 409 }
      )
    }

    // Create the booking
    const booking = await prisma.booking.create({
      data: {
        name: validated.name,
        email: validated.email,
        phone: validated.phone,
        date: new Date(validated.date),
        time: validated.time,
        notes: validated.notes,
        status: 'PENDING',
        service: {
          connect: { id: validated.serviceId }
        }
      },
      include: {
        service: true
      }
    })

    // Send confirmation email
    await sendBookingConfirmation({
      to: validated.email,
      name: validated.name,
      date: validated.date,
      time: validated.time,
      service: service.name,
      bookingId: booking.id
    })

    return NextResponse.json(booking)
  } catch (error) {
    console.error('Booking error:', error)
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      )
    }
    return NextResponse.json(
      { error: 'Failed to create booking' },
      { status: 500 }
    )
  }
}

// Protected route for admin
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return new Response('Unauthorized', { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const date = searchParams.get('date')
    const status = searchParams.get('status')

    const where: any = {}
    if (date) {
      where.date = new Date(date)
    }
    if (status) {
      where.status = status
    }

    const bookings = await prisma.booking.findMany({
      where,
      include: {
        service: true
      },
      orderBy: {
        date: 'asc'
      }
    })

    return NextResponse.json(bookings)
  } catch (error) {
    console.error('Error fetching bookings:', error)
    return NextResponse.json(
      { error: 'Failed to fetch bookings' },
      { status: 500 }
    )
  }
}
