'use client';

import { BiCut } from 'react-icons/bi';
import { FaPalette } from 'react-icons/fa';
import { FaClock } from 'react-icons/fa';
import { Hero } from '@/components/ui/Hero';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { PageWrapper } from '@/components/ui/PageWrapper';
import { Testimonials } from '@/components/ui/Testimonials';
import { FAQ } from '@/components/ui/FAQ';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '@/lib/animations';

const services = [
  {
    icon: <BiCut className="text-4xl text-primary" />,
    title: 'Hair Styling',
    description: 'From cuts to coloring, we create the perfect look for you'
  },
  {
    icon: <FaPalette className="text-4xl text-primary" />,
    title: 'Makeup',
    description: 'Professional makeup for any occasion'
  },
  {
    icon: <FaClock className="text-4xl text-primary" />,
    title: 'Quick Service',
    description: 'Efficient service without compromising quality'
  }
];

export default function Home() {
  return (
    <PageWrapper>
      <Hero
        title="Welcome to EtritHair"
        subtitle="Your premier destination for beauty and style in Prishtina"
        ctaText="Book Now"
        ctaLink="/booking"
      />

      <Section
        title="Our Services"
        subtitle="Discover our range of professional beauty services"
        className="bg-neutral-light"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              custom={index}
            >
              <Card className="text-center hover:shadow-lg transition-shadow">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="mb-4"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-neutral-dark/80">{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Testimonials />

      <FAQ />

      <Section className="bg-primary/10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Ready to Transform Your Look?
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Visit us at our salon in Prishtina and let our expert team help you achieve the look you've always wanted.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button
              size="lg"
              onClick={() => window.location.href = '/booking'}
              className="mt-8"
            >
              Book Your Appointment
            </Button>
          </motion.div>
        </motion.div>
      </Section>
    </PageWrapper>
  );
}
