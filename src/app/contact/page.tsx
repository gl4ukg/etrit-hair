'use client';

import { Hero } from '@/components/ui/Hero';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import { ContactForm } from '@/components/contact/ContactForm';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    name: 'Facebook',
    icon: FaFacebookF,
    url: 'https://facebook.com/etrithair'
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    url: 'https://instagram.com/etrithair'
  },
  {
    name: 'TikTok',
    icon: FaTiktok,
    url: 'https://tiktok.com/@etrithair'
  }
];

const contactInfo = [
  {
    icon: FaMapMarkerAlt,
    title: 'Location',
    content: 'Prishtina, Nura Group'
  },
  {
    icon: FaPhone,
    title: 'Phone',
    content: '+38345680679'
  },
  {
    icon: FaEnvelope,
    title: 'Email',
    content: 'info@etrithair.com'
  },
  {
    icon: FaClock,
    title: 'Working Hours',
    content: (
      <>
        Tuesday - Saturday: 9:00 AM - 7:00 PM<br />
        Sunday - Monday: Closed
      </>
    )
  }
];

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Hero
        title="Contact Us"
        subtitle="Get in touch with us"
        className="h-[60vh]"
      />

      <Section className="bg-neutral-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
            
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1) }}
              >
                <Card>
                  <div className="flex items-start space-x-4">
                    <info.icon className="text-2xl text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      <p className="text-neutral-700">{info.content}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8"
            >
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + (index * 0.1) }}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
              <ContactForm />
            </Card>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
