'use client';

import { Hero } from '@/components/ui/Hero';
import { Section } from '@/components/ui/Section';
import { BookingForm } from '@/components/booking/BookingForm';
import { Card } from '@/components/ui/Card';
import { FaClock, FaCalendarAlt, FaPhoneAlt } from 'react-icons/fa';

export default function Booking() {
  return (
    <div className="min-h-screen">
      <Hero
        title="Book an Appointment"
        subtitle="Schedule your visit with us"
        className="h-[60vh]"
      />

      <Section className="bg-neutral-light">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card>
            <div className="text-center">
              <FaClock className="text-4xl text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
              <p className="text-neutral-dark">
                Tuesday - Saturday<br />
                9:00 AM - 7:00 PM
              </p>
            </div>
          </Card>

          <Card>
            <div className="text-center">
              <FaCalendarAlt className="text-4xl text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy Scheduling</h3>
              <p className="text-neutral-dark">
                Book your preferred time<br />
                Get instant confirmation
              </p>
            </div>
          </Card>

          <Card>
            <div className="text-center">
              <FaPhoneAlt className="text-4xl text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
              <p className="text-neutral-dark">
                +38345680679<br />
                For any questions
              </p>
            </div>
          </Card>
        </div>

        <BookingForm />
      </Section>
    </div>
  );
}
