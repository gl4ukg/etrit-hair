import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { z } from 'zod';
import type { Booking, Service } from '@prisma/client';

type BookingWithService = Booking & {
  service: Service;
};

const querySchema = z.object({
  date: z.string(),
  serviceId: z.string()
});

// Define business hours
const BUSINESS_HOURS = {
  start: 9, // 9 AM
  end: 18,  // 6 PM
  interval: 30 // 30 minutes
};

function generateTimeSlots() {
  const slots: string[] = [];
  for (let hour = BUSINESS_HOURS.start; hour < BUSINESS_HOURS.end; hour++) {
    slots.push(`${hour}:00`);
    slots.push(`${hour}:30`);
  }
  return slots;
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date');
    const serviceId = searchParams.get('serviceId');

    if (!date || !serviceId) {
      return NextResponse.json(
        { error: 'Date and serviceId are required' },
        { status: 400 }
      );
    }

    // Validate input
    const validated = querySchema.parse({ date, serviceId });

    // Get booked slots for the date
    const bookedSlots = await prisma.booking.findMany({
      where: {
        date: new Date(validated.date),
        status: 'CONFIRMED'
      },
      include: {
        service: true
      }
    });

    // Generate all possible time slots
    const allSlots = generateTimeSlots();
    const unavailableSlots = new Set<string>();

    bookedSlots.forEach((booking: BookingWithService) => {
      const bookingHour = parseInt(booking.time.split(':')[0]);
      const duration = booking.service.duration;
      const slotsNeeded = Math.ceil(duration / BUSINESS_HOURS.interval);

      // Mark slots as unavailable
      for (let i = 0; i < slotsNeeded; i++) {
        const slotIndex = allSlots.findIndex(slot => slot === booking.time);
        if (slotIndex !== -1 && slotIndex + i < allSlots.length) {
          unavailableSlots.add(allSlots[slotIndex + i]);
        }
      }
    });

    // Filter out unavailable slots
    const availableSlots = allSlots.filter(slot => !unavailableSlots.has(slot));

    return NextResponse.json({
      date: validated.date,
      availableSlots
    });
  } catch (error) {
    console.error('Error getting available slots:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: 'Failed to get available slots' },
      { status: 500 }
    );
  }
}
