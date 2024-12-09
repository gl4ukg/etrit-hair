'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

interface Booking {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: {
    name: string;
  };
  date: string;
  time: string;
  status: 'PENDING' | 'CONFIRMED' | 'CANCELLED';
  notes?: string;
}

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, [selectedDate, selectedStatus]);

  async function fetchBookings() {
    try {
      const params = new URLSearchParams();
      if (selectedDate) {
        params.append('date', selectedDate.toISOString().split('T')[0]);
      }
      if (selectedStatus) {
        params.append('status', selectedStatus);
      }

      const response = await fetch(`/api/bookings?${params.toString()}`);
      if (!response.ok) throw new Error('Failed to fetch bookings');
      
      const data = await response.json();
      setBookings(data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    } finally {
      setLoading(false);
    }
  }

  async function updateBookingStatus(bookingId: string, newStatus: string) {
    try {
      const response = await fetch(`/api/bookings/${bookingId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) throw new Error('Failed to update booking');
      
      fetchBookings();
    } catch (error) {
      console.error('Error updating booking:', error);
    }
  }

  if (status === 'loading') {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (status === 'unauthenticated') {
    return <div className="min-h-screen flex items-center justify-center">Access Denied</div>;
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <Section>
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        
        <div className="mb-8 flex flex-wrap gap-4">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="yyyy-MM-dd"
            className="px-4 py-2 rounded-md border border-neutral-200"
            placeholderText="Filter by date"
          />
          
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-4 py-2 rounded-md border border-neutral-200"
          >
            <option value="">All statuses</option>
            <option value="PENDING">Pending</option>
            <option value="CONFIRMED">Confirmed</option>
            <option value="CANCELLED">Cancelled</option>
          </select>
        </div>

        {loading ? (
          <div>Loading bookings...</div>
        ) : (
          <div className="grid gap-6">
            {bookings.map((booking) => (
              <motion.div
                key={booking.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Card className="p-6">
                  <div className="flex flex-wrap justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold">{booking.name}</h3>
                      <p className="text-neutral-600">{booking.email}</p>
                      <p className="text-neutral-600">{booking.phone}</p>
                    </div>
                    
                    <div className="text-right">
                      <p className="font-medium">{booking.service.name}</p>
                      <p>{new Date(booking.date).toLocaleDateString()}</p>
                      <p>{booking.time}</p>
                    </div>
                  </div>

                  {booking.notes && (
                    <p className="mt-4 text-neutral-600">
                      Notes: {booking.notes}
                    </p>
                  )}

                  <div className="mt-6 flex flex-wrap gap-4">
                    {booking.status === 'PENDING' && (
                      <>
                        <Button
                          onClick={() => updateBookingStatus(booking.id, 'CONFIRMED')}
                          variant="default"
                        >
                          Confirm
                        </Button>
                        <Button
                          onClick={() => updateBookingStatus(booking.id, 'CANCELLED')}
                          variant="outline"
                        >
                          Cancel
                        </Button>
                      </>
                    )}
                    
                    <div className={`
                      px-3 py-1 rounded-full text-sm
                      ${booking.status === 'CONFIRMED' ? 'bg-green-100 text-green-800' : ''}
                      ${booking.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' : ''}
                      ${booking.status === 'CANCELLED' ? 'bg-red-100 text-red-800' : ''}
                    `}>
                      {booking.status}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </Section>
    </div>
  );
}
