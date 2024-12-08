'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from './Button';
import { fadeIn, containerVariants, itemVariants } from '@/lib/animations';

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  className?: string;
  backgroundImage?: string;
}

export function Hero({
  title,
  subtitle,
  ctaText,
  ctaLink,
  className,
  backgroundImage,
}: HeroProps) {
  return (
    <section className={cn('relative h-[80vh] flex items-center justify-center overflow-hidden', className)}>
      {backgroundImage && (
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-dark/20" 
      />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container relative z-10 text-center"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl font-bold text-primary-dark mb-6"
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p
            variants={itemVariants}
            className="text-xl mb-8 text-neutral-dark"
          >
            {subtitle}
          </motion.p>
        )}
        
        {ctaText && ctaLink && (
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              onClick={() => window.location.href = ctaLink}
              className="shadow-lg hover:shadow-xl transition-shadow"
            >
              {ctaText}
            </Button>
          </motion.div>
        )}
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute -top-20 -right-20 w-64 h-64 bg-primary rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary-dark rounded-full blur-3xl"
      />
    </section>
  );
}
