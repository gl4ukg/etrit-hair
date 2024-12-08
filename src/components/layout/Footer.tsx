'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-neutral-dark text-neutral-light py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">Prishtina, Nura Group</p>
            <p className="mb-2">Phone: +38345680679</p>
            <p>Email: [Coming Soon]</p>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Opening Hours</h3>
            <p className="mb-2">Tuesday - Saturday</p>
            <p className="mb-2">Sunday - Monday: Closed</p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Facebook
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Instagram
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                TikTok
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} EtritHair. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
