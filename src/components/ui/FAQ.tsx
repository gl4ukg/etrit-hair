'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import { containerVariants, itemVariants } from '@/lib/animations';

const faqs = [
  {
    question: 'How long does a typical hair appointment take?',
    answer: 'The duration varies depending on the service. A basic haircut typically takes 45-60 minutes, while coloring services can take 2-3 hours. We\'ll provide a more accurate estimate when you book your appointment.'
  },
  {
    question: 'Do I need to book an appointment in advance?',
    answer: 'Yes, we recommend booking appointments in advance to ensure availability. You can easily book through our online booking system or give us a call.'
  },
  {
    question: 'What hair care products do you use?',
    answer: 'We use high-quality, professional-grade products from renowned brands. Our stylists can recommend specific products based on your hair type and needs.'
  },
  {
    question: 'Do you offer bridal services?',
    answer: 'Yes, we offer comprehensive bridal packages including hair styling and makeup for the bride and bridal party. We recommend booking these services at least 3 months in advance.'
  },
  {
    question: 'What if I need to cancel my appointment?',
    answer: 'We appreciate 24 hours notice for cancellations. This allows us to accommodate other clients who may be waiting for an appointment.'
  }
];

function AccordionItem({ question, answer, isOpen, onClick }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      variants={itemVariants}
      className="border-b border-neutral-200"
    >
      <button
        className="w-full py-4 flex justify-between items-center text-left"
        onClick={onClick}
      >
        <span className="font-medium text-neutral-dark">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-primary"
        >
          <FiChevronDown size={20} />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-neutral-dark/80">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16">
      <div className="container max-w-4xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-12"
        >
          <div className="text-center">
            <motion.h2 variants={itemVariants} className="section-title">
              Frequently Asked Questions
            </motion.h2>
            <motion.p variants={itemVariants} className="section-subtitle">
              Find answers to common questions about our services
            </motion.p>
          </div>

          <motion.div variants={containerVariants} className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
