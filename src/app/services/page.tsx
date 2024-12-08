'use client';

import { motion } from 'framer-motion';
import { BiCut } from 'react-icons/bi';
import { FaPalette } from 'react-icons/fa';
import { FaMagic } from 'react-icons/fa';
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
    description: 'Expert styling for any occasion',
    price: 'Starting from €20',
    details: [
      'Haircuts',
      'Styling',
      'Hair Coloring',
      'Highlights',
      'Treatment'
    ]
  },
  {
    icon: <FaPalette className="text-4xl" />,
    name: 'Makeup',
    description: 'Professional makeup services',
    price: 'Starting from €30',
    details: [
      'Natural Makeup',
      'Evening Makeup',
      'Bridal Makeup',
      'Special Occasion'
    ]
  },
  {
    icon: <FaMagic className="text-4xl" />,
    name: 'Special Packages',
    description: 'Complete beauty packages',
    price: 'Starting from €50',
    details: [
      'Wedding Package',
      'Party Package',
      'Complete Makeover'
    ]
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

      <Section className="bg-neutral-light">
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
            >
              <Card>
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="text-primary mb-4"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-neutral-dark mb-4">{service.description}</p>
                <motion.p
                  whileHover={{ scale: 1.05 }}
                  className="text-primary-dark font-semibold mb-4"
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
                  {service.details.map((detail, detailIndex) => (
                    <motion.li
                      key={detail}
                      variants={itemVariants}
                      custom={detailIndex}
                      className="flex items-center space-x-2"
                    >
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: detailIndex * 0.1 }}
                        className="w-1.5 h-1.5 bg-primary rounded-full"
                      />
                      <span>{detail}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            onClick={() => window.location.href = '/booking'}
            className="shadow-lg hover:shadow-xl transition-shadow"
          >
            Book an Appointment
          </Button>
        </motion.div>
      </Section>
    </PageWrapper>
  );
}
