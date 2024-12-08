'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: Date;
  time: string;
  notes: string;
}

const services = [
  'Hair Cut',
  'Hair Styling',
  'Hair Coloring',
  'Makeup - Natural',
  'Makeup - Evening',
  'Makeup - Bridal'
];

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00',
  '13:00', '14:00', '15:00', '16:00',
  '17:00', '18:00'
];

export function BookingForm() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<BookingFormData>();

  const onSubmit = async (data: BookingFormData) => {
    // Here you would typically send the data to your backend
    console.log(data);
    // For now, just reset the form
    reset();
    setSelectedDate(null);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-xl mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="space-y-6">
        {/* Name */}
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

        {/* Email */}
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

        {/* Phone */}
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

        {/* Service */}
        <div>
          <label className="block text-sm font-medium mb-2">Service</label>
          <select
            {...register('service', { required: 'Please select a service' })}
            className="w-full px-4 py-2 rounded-md border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
          )}
        </div>

        {/* Date */}
        <div>
          <label className="block text-sm font-medium mb-2">Date</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            minDate={new Date()}
            className="w-full px-4 py-2 rounded-md border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholderText="Select a date"
            excludeDates={[]} // You can add dates to exclude here
          />
        </div>

        {/* Time */}
        <div>
          <label className="block text-sm font-medium mb-2">Time</label>
          <select
            {...register('time', { required: 'Please select a time' })}
            className="w-full px-4 py-2 rounded-md border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Select a time</option>
            {timeSlots.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
          {errors.time && (
            <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
          )}
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-medium mb-2">Notes (Optional)</label>
          <textarea
            {...register('notes')}
            className="w-full px-4 py-2 rounded-md border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary"
            rows={4}
            placeholder="Any special requests or notes?"
          />
        </div>

        {/* Submit Button */}
        <Button type="submit" size="lg" className="w-full">
          Book Appointment
        </Button>
      </div>
    </motion.form>
  );
}
