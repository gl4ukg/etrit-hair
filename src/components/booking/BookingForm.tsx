'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import { toast } from 'react-hot-toast';

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  serviceId: string;
  date: Date;
  time: string;
  notes: string;
}

interface Service {
  id: string;
  name: string;
  duration: number;
  price: number;
}

const services: Service[] = [
  { id: '1', name: 'Hair Cut', duration: 60, price: 30 },
  { id: '2', name: 'Hair Styling', duration: 90, price: 50 },
  { id: '3', name: 'Hair Coloring', duration: 120, price: 80 },
  { id: '4', name: 'Makeup - Natural', duration: 60, price: 40 },
  { id: '5', name: 'Makeup - Evening', duration: 90, price: 60 },
  { id: '6', name: 'Makeup - Bridal', duration: 120, price: 100 }
];

export function BookingForm() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm<BookingFormData>();
  const watchService = watch('serviceId');

  useEffect(() => {
    const service = services.find(s => s.id === watchService);
    setSelectedService(service || null);
  }, [watchService]);

  useEffect(() => {
    if (selectedDate && selectedService) {
      fetchAvailableSlots();
    }
  }, [selectedDate, selectedService]);

  async function fetchAvailableSlots() {
    try {
      const params = new URLSearchParams({
        date: selectedDate!.toISOString().split('T')[0],
        serviceId: selectedService!.id
      });

      const response = await fetch(`/api/bookings/available?${params}`);
      if (!response.ok) throw new Error('Failed to fetch slots');
      
      const data = await response.json();
      setAvailableSlots(data.availableSlots);
    } catch (error) {
      console.error('Error fetching slots:', error);
      toast.error('Failed to fetch available slots');
    }
  }

  async function onSubmit(data: BookingFormData) {
    setLoading(true);
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          date: selectedDate?.toISOString().split('T')[0],
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to create booking');
      }

      toast.success('Booking created successfully!');
      reset();
      setSelectedDate(null);
      setAvailableSlots([]);
    } catch (error) {
      console.error('Booking error:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to create booking');
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-xl mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="space-y-6">
        {/* Service Selection */}
        <div>
          <label className="block text-sm font-medium mb-2">Service</label>
          <select
            {...register('serviceId', { required: 'Please select a service' })}
            className="w-full px-4 py-2 rounded-md border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.name} - ${service.price} ({service.duration} min)
              </option>
            ))}
          </select>
          {errors.serviceId && (
            <p className="text-red-500 text-sm mt-1">{errors.serviceId.message}</p>
          )}
        </div>

        {/* Date Selection */}
        <div>
          <label className="block text-sm font-medium mb-2">Date</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            minDate={new Date()}
            dateFormat="MMMM d, yyyy"
            className="w-full px-4 py-2 rounded-md border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholderText="Select a date"
          />
        </div>

        {/* Time Selection */}
        {selectedDate && availableSlots.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
          >
            <label className="block text-sm font-medium mb-2">Time</label>
            <div className="grid grid-cols-3 gap-2">
              {availableSlots.map((slot) => (
                <label
                  key={slot}
                  className="relative flex items-center justify-center"
                >
                  <input
                    type="radio"
                    {...register('time', { required: 'Please select a time' })}
                    value={slot}
                    className="sr-only"
                  />
                  <span className={`
                    w-full py-2 text-center rounded-md cursor-pointer transition-colors
                    ${watch('time') === slot
                      ? 'bg-primary text-white'
                      : 'bg-neutral-100 hover:bg-neutral-200'
                    }
                  `}>
                    {slot}
                  </span>
                </label>
              ))}
            </div>
            {errors.time && (
              <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
            )}
          </motion.div>
        )}

        {/* Personal Information */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              {...register('name', { required: 'Name is required' })}
              className="w-full px-4 py-2 rounded-md border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
              className="w-full px-4 py-2 rounded-md border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="your@email.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Phone</label>
            <input
              {...register('phone', { required: 'Phone number is required' })}
              className="w-full px-4 py-2 rounded-md border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your phone number"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Notes (Optional)</label>
            <textarea
              {...register('notes')}
              className="w-full px-4 py-2 rounded-md border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary"
              rows={3}
              placeholder="Any special requests or notes"
            />
          </div>
        </div>

        <Button
          type="submit"
          disabled={loading || !selectedDate || !watch('time')}
          className="w-full"
        >
          {loading ? 'Booking...' : 'Book Appointment'}
        </Button>
      </div>
    </motion.form>
  );
}
