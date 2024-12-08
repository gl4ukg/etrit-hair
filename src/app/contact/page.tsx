'use client';

import { Hero } from '@/components/ui/Hero';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    // Here you would typically send the data to your backend
    console.log(data);
    reset();
  };

  return (
    <div className="min-h-screen">
      <Hero
        title="Contact Us"
        subtitle="Get in touch with us"
        className="h-[60vh]"
      />

      <Section className="bg-neutral-light">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
            
            <Card>
              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="text-2xl text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-neutral-dark">Prishtina, Nura Group</p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start space-x-4">
                <FaPhone className="text-2xl text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-neutral-dark">+38345680679</p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start space-x-4">
                <FaClock className="text-2xl text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Working Hours</h3>
                  <p className="text-neutral-dark">
                    Tuesday - Saturday: 9:00 AM - 7:00 PM<br />
                    Sunday - Monday: Closed
                  </p>
                </div>
              </div>
            </Card>

            <div className="mt-8">
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-primary hover:text-primary-dark transition-colors">
                  Facebook
                </a>
                <a href="#" className="text-primary hover:text-primary-dark transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-primary hover:text-primary-dark transition-colors">
                  TikTok
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    className="w-full px-4 py-2 rounded-md border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary"
                    rows={4}
                    placeholder="Your message"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
}
