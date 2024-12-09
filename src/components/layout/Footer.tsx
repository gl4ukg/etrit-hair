'use client';

import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';
import { FaTiktok } from 'react-icons/fa';

const Footer = () => {
  const workingHours = [
    { day: 'Tuesday - Friday', hours: '9:00 - 20:00' },
    { day: 'Saturday', hours: '9:00 - 18:00' },
    { day: 'Sunday - Monday', hours: 'Closed' },
  ];

  const services = [
    { label: 'Haircut', href: '/services/haircut' },
    { label: 'Hair Styling', href: '/services/styling' },
    { label: 'Hair Coloring', href: '/services/coloring' },
    { label: 'Makeup', href: '/services/makeup' },
    { label: 'Treatments', href: '/services/treatments' },
  ];

  const legalLinks = [
    { label: 'Privacy', href: '/legal/privacy-policy' },
    { label: 'Terms', href: '/legal/terms-of-service' },
    { label: 'Cookies', href: '/legal/cookie-policy' },
  ];

  return (
    <footer className="bg-neutral-900 text-neutral-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <Image
                src="/images/logo-white.png"
                alt="Etrit Hair Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-neutral-400 mb-6">
              Experience the art of hairstyling at its finest. Our team of expert stylists
              is dedicated to helping you achieve your perfect look.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-neutral-400 hover:text-white transition-colors duration-300"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-white transition-colors duration-300"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-white transition-colors duration-300"
              >
                <FaTiktok className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Working Hours */}
          <div className="lg:col-span-4">
            <h3 className="text-white font-semibold text-lg mb-4">Working Hours</h3>
            <div className="space-y-2">
              {workingHours.map((day) => (
                <div key={day.day} className="flex justify-between items-center">
                  <span className="text-neutral-400">{day.day}</span>
                  <span className="text-neutral-300">{day.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-neutral-400 hover:text-white transition-colors duration-300"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Etrit Hair. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                href="/privacy-policy"
                className="text-neutral-500 hover:text-white text-sm transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-neutral-500 hover:text-white text-sm transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
