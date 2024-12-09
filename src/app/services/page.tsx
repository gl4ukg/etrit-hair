'use client';

import { motion } from 'framer-motion';
import { BiCut } from 'react-icons/bi';
import { FaPalette, FaMagic, FaRegClock, FaCheck } from 'react-icons/fa';
import Link from 'next/link';
import { Hero } from '@/components/ui/Hero';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { PageWrapper } from '@/components/ui/PageWrapper';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { containerVariants, itemVariants } from '@/lib/animations';

const services = [
  {
    icon: <BiCut className="text-4xl" />,
    name: 'Hair Styling',
    description: 'Transform your look with our expert styling services. Our skilled stylists will create the perfect style to match your personality and lifestyle.',
    price: 'Starting from €20',
    details: [
      'Haircuts & Styling',
      'Professional Hair Coloring',
      'Highlights & Balayage',
      'Hair Treatments',
      'Blow Dry & Styling'
    ]
  },
  {
    icon: <FaPalette className="text-4xl" />,
    name: 'Makeup',
    description: 'Enhance your natural beauty with our professional makeup services. Perfect for any occasion, from natural day looks to glamorous evening styles.',
    price: 'Starting from €30',
    details: [
      'Natural Makeup',
      'Evening & Party Makeup',
      'Bridal Makeup',
      'Special Occasion Makeup',
      'Makeup Consultation'
    ]
  },
  {
    icon: <FaMagic className="text-4xl" />,
    name: 'Special Packages',
    description: 'Experience complete transformation with our carefully curated beauty packages. Perfect for weddings, special events, or when you want to feel extra special.',
    price: 'Starting from €50',
    details: [
      'Bridal Package',
      'Party Ready Package',
      'Complete Makeover',
      'Hair & Makeup Combo',
      'Group Packages'
    ]
  }
];

const pricingTiers = [
  {
    name: "Basic",
    price: "€20",
    description: "Essential hair services",
    features: [
      "Basic Haircut",
      "Wash & Style",
      "Basic Consultation",
      "Product Recommendations"
    ]
  },
  {
    name: "Premium",
    price: "€50",
    description: "Advanced styling and coloring",
    features: [
      "Premium Haircut",
      "Color Treatment",
      "Deep Conditioning",
      "Style Consultation",
      "Free Touch-up"
    ]
  },
  {
    name: "Luxury",
    price: "€100",
    description: "Complete beauty transformation",
    features: [
      "Premium Haircut & Style",
      "Full Color Service",
      "Makeup Application",
      "Hair Treatment",
      "Complimentary Products",
      "Priority Booking"
    ]
  }
];

const faqs = [
  {
    question: "How long does a typical appointment take?",
    answer: "Appointment duration varies based on the service. Basic haircuts take about 45 minutes, while color treatments can take 2-3 hours. We'll provide a specific time estimate when you book."
  },
  {
    question: "What happens during a consultation?",
    answer: "During your consultation, we'll discuss your desired style, assess your hair type and condition, and recommend the best treatments. This helps ensure you get exactly the look you want."
  },
  {
    question: "Do you offer wedding packages?",
    answer: "Yes! We offer comprehensive wedding packages that include trials, day-of styling, and makeup for the entire bridal party. Contact us for a custom quote."
  },
  {
    question: "What brands do you use?",
    answer: "We use premium, professional-grade products from leading brands. All our products are carefully selected for quality and effectiveness."
  }
];

export default function Services() {
  return (
    <PageWrapper>
      <ScrollProgress />
      
      <Hero
        title="Our Services"
        subtitle="Discover our range of professional beauty services"
        className="h-[60vh]"
      />

      {/* Main Services Section */}
      <Section className="bg-neutral-50">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="h-full"
            >
              <Card className="flex flex-col h-full">
                <div className="flex-1">
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="text-primary mb-6 flex justify-center"
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3 text-neutral-900">{service.name}</h3>
                  <p className="text-neutral-600 mb-6 flex-grow">{service.description}</p>
                  <motion.p
                    whileHover={{ scale: 1.05 }}
                    className="text-primary font-semibold mb-6"
                  >
                    {service.price}
                  </motion.p>
                  <motion.ul
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    {service.details.map((detail, idx) => (
                      <motion.li
                        key={detail}
                        variants={itemVariants}
                        className="flex items-center text-neutral-600"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {detail}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
                <div className="mt-8">
                  <Link 
                    href="/booking"
                    className="inline-block w-full text-center bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary-light transition-colors duration-300"
                  >
                    Book Now
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Pricing Tiers */}
      <Section className="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Pricing Plans
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Choose the perfect package for your needs. All plans include consultation
            with our expert stylists.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 flex flex-col h-full justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">{tier.name}</h3>
                <p className="text-3xl font-bold text-primary mb-4">{tier.price}</p>
                <p className="text-neutral-600 mb-6">{tier.description}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center text-neutral-600">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Link 
                href="/booking"
                className="block w-full text-center bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary-light transition-all duration-300 hover:transform hover:scale-105"
              >
                Choose Plan
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact CTA */}
      <Section className="bg-neutral-50 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl text-primary md:text-4xl font-bold mb-6">
            Ready to Transform Your Look?
          </h2>
          <p className="text-l text-primary mb-8 opacity-90">
            Book your appointment today or contact us for a personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              variant="black"
              size="xl"
            >
              <Link href="/booking">Book Appointment</Link>
            </Button>
            <Button
              variant="outline"
              size="xl"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </Section>
    </PageWrapper>
  );
}
