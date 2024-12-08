'use client';

import { Hero } from '@/components/ui/Hero';
import { Section } from '@/components/ui/Section';
import { GalleryGrid } from '@/components/gallery/GalleryGrid';

// This would typically come from your backend or CMS
const galleryImages = [
  {
    src: '/gallery/image1.jpg', // You'll need to add these images to your public folder
    alt: 'Hair Styling Example 1',
    category: 'Hair Styling'
  },
  {
    src: '/gallery/image2.jpg',
    alt: 'Makeup Example 1',
    category: 'Makeup'
  },
  // Add more images here
];

const categories = ['Hair Styling', 'Makeup', 'Special Occasions'];

export default function Gallery() {
  return (
    <div className="min-h-screen">
      <Hero
        title="Our Gallery"
        subtitle="Explore our latest works and get inspired"
        className="h-[60vh]"
      />

      <Section
        title="Portfolio"
        subtitle="Browse through our collection of beautiful transformations"
      >
        <GalleryGrid images={galleryImages} categories={categories} />
      </Section>
    </div>
  );
}
