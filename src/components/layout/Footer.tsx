'use client';

import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-neutral-dark py-16">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left Section: Brand and Hours */}
          <div className="flex flex-col md:flex-row gap-16 md:w-7/12">
            {/* Brand Section */}
            <div className="flex-1">
              <h2 className="text-white text-2xl font-bold mb-4">EtritHair</h2>
              <p className="text-neutral-400 mb-6">
                Your trusted beauty salon for a confident look.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  <FaFacebook size={20} />
                </a>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex-1">
              <h3 className="text-white font-semibold mb-4">Working Hours</h3>
              <ul className="space-y-2">
                <li className="text-neutral-400">
                  <span className="flex justify-between">
                    <span>Tuesday - Friday</span>
                    <span>9:00 - 20:00</span>
                  </span>
                </li>
                <li className="text-neutral-400">
                  <span className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 - 18:00</span>
                  </span>
                </li>
                <li className="text-neutral-400">
                  <span className="flex justify-between">
                    <span>Sunday - Monday</span>
                    <span>Closed</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section: Links */}
          <div className="flex gap-16 mt-8 md:mt-0 md:w-4/12">
            {/* Services */}
            <div className="flex-1">
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/haircut" className="text-neutral-400 hover:text-white transition-colors">
                    Haircut
                  </Link>
                </li>
                <li>
                  <Link href="/services/styling" className="text-neutral-400 hover:text-white transition-colors">
                    Hair Styling
                  </Link>
                </li>
                <li>
                  <Link href="/services/coloring" className="text-neutral-400 hover:text-white transition-colors">
                    Hair Coloring
                  </Link>
                </li>
                <li>
                  <Link href="/services/makeup" className="text-neutral-400 hover:text-white transition-colors">
                    Makeup
                  </Link>
                </li>
                <li>
                  <Link href="/services/treatments" className="text-neutral-400 hover:text-white transition-colors">
                    Treatments
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="flex-1">
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/legal/privacy-policy" className="text-neutral-400 hover:text-white transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/legal/terms-of-service" className="text-neutral-400 hover:text-white transition-colors">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="/legal/cookie-policy" className="text-neutral-400 hover:text-white transition-colors">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-neutral-800">
          <p className="text-neutral-400 text-sm">
            &copy; {new Date().getFullYear()} EtritHair. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
