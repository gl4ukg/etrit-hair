'use client';

import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '@/lib/animations';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Regular Client',
    content: 'The best salon experience I\'ve ever had! The staff is incredibly professional and the results exceeded my expectations.',
    image: '/testimonials/avatar1.jpg'
  },
  {
    name: 'Emma Davis',
    role: 'Wedding Client',
    content: 'They did an amazing job for my wedding day. My hair and makeup stayed perfect throughout the entire celebration!',
    image: '/testimonials/avatar2.jpg'
  },
  {
    name: 'Maria Garcia',
    role: 'Loyal Customer',
    content: 'I\'ve been coming here for years and they never disappoint. The attention to detail and friendly atmosphere keep me coming back.',
    image: '/testimonials/avatar3.jpg'
  },
  {
    name: 'Lisa Chen',
    role: 'First-time Client',
    content: 'I was nervous about trying a new salon, but they made me feel so comfortable. The results were absolutely amazing!',
    image: '/testimonials/avatar4.jpg'
  }
];

export function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
    customPaging: (i: number) => (
      <div className="w-2 h-2 bg-primary rounded-full mt-8" />
    )
  };

  return (
    <section className="py-16 bg-neutral-light overflow-hidden">
      <div className="container max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-12"
        >
          <div className="text-center">
            <motion.h2 variants={itemVariants} className="section-title">
              What Our Clients Say
            </motion.h2>
            <motion.p variants={itemVariants} className="section-subtitle">
              Read about experiences from our valued customers
            </motion.p>
          </div>

          <motion.div variants={itemVariants} className="px-4">
            <Slider {...settings} className="testimonials-slider -mx-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-4">
                  <div className="bg-white rounded-lg p-8 shadow-md mx-auto max-w-3xl">
                    <div className="text-primary mb-6">
                      <FaQuoteLeft size={32} />
                    </div>
                    <p className="text-lg text-neutral-dark/80 italic mb-8">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-neutral-dark">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-neutral-dark/70">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
