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
    icon: <BiCut className="text-5xl text-primary" />,
    title: 'Hair Styling',
    description: 'From cuts to coloring, we create the perfect look for you',
    details: [
      'Custom haircuts and styling',
      'Professional hair coloring',
      'Highlights and balayage',
      'Hair treatments and masks'
    ]
  },
  {
    icon: <FaPalette className="text-5xl text-primary" />,
    title: 'Makeup',
    description: 'Professional makeup for any occasion',
    details: [
      'Bridal and special event makeup',
      'Natural and glamour looks',
      'Long-lasting techniques',
      'Skin preparation and care'
    ]
  },
  {
    icon: <FaClock className="text-5xl text-primary" />,
    title: 'Quick Service',
    description: 'Efficient service without compromising quality',
    details: [
      'Express styling sessions',
      'Quick touch-ups',
      'Flexible scheduling',
      'Walk-ins welcome'
    ]
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
              <Card className="text-center hover:shadow-lg transition-shadow h-full flex flex-col justify-between p-6">
                <div>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="flex justify-center items-center mb-6 h-20"
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-neutral-dark/80 mb-4">{service.description}</p>
                  <ul className="space-y-2 text-sm text-left">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="mt-6"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.location.href = '/services'}
                  >
                    Learn More
                  </Button>
                </motion.div>
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
