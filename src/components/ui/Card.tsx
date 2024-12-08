'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
}

export function Card({ children, className, index = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className={cn(
        'bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
