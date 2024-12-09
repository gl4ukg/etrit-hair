import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import prisma from '@/lib/prisma'
import { rateLimit } from '@/lib/rateLimiter'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]/route'
import { sendEmail, getContactFormEmail } from '@/lib/email'
import type { RateLimitResponse } from '@/lib/rateLimiter'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message must not exceed 1000 characters')
})

export async function POST(request: NextRequest) {
  try {
    // Apply rate limiting
    const identifier = request.ip ?? 'anonymous'
    const { success }: RateLimitResponse = await rateLimit.contact(identifier)
    if (!success) {
      return NextResponse.json(
        { error: 'Too many contact attempts. Please try again later.' },
        { status: 429 }
      )
    }

    // Validate input
    const body = await request.json()
    const validated = contactSchema.parse(body)

    // Create contact message
    const contact = await prisma.contact.create({
      data: {
        ...validated,
        status: 'UNREAD'
      }
    })

    // Send email notification to admin
    if (process.env.ADMIN_EMAIL) {
      await sendEmail({
        to: process.env.ADMIN_EMAIL,
        ...getContactFormEmail(contact)
      })
    }

    // Send auto-reply to user
    await sendEmail({
      to: validated.email,
      subject: 'Thank you for contacting Etrit Hair',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333;">Thank You for Contacting Us</h1>
          <p>Dear ${validated.name},</p>
          <p>Thank you for reaching out to Etrit Hair. We have received your message and will get back to you as soon as possible.</p>
          <p>For urgent matters, please contact us directly at:</p>
          <p>Phone: +38345680679</p>
          <p>Email: info@etrithair.com</p>
          <p style="margin-top: 30px;">Best regards,<br>Etrit Hair Team</p>
        </div>
      `
    })

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully'
    })
  } catch (error) {
    console.error('Contact error:', error)
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      )
    }
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}

// Protected route for admin to get contact messages
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return new Response('Unauthorized', { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const skip = (page - 1) * limit

    const where: any = {}
    if (status) {
      where.status = status
    }

    const [messages, total] = await Promise.all([
      prisma.contact.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit
      }),
      prisma.contact.count({ where })
    ])

    return NextResponse.json({
      messages,
      pagination: {
        total,
        pages: Math.ceil(total / limit),
        currentPage: page,
        perPage: limit
      }
    })
  } catch (error) {
    console.error('Fetch contacts error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch messages' },
      { status: 500 }
    )
  }
}
