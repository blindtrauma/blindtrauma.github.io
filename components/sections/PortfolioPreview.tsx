'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import { PORTFOLIO_IMAGES } from '@/lib/constants';

export default function PortfolioPreview() {
  return (
    <section className="py-24 md:py-32 bg-cream px-6 md:px-12">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            className="font-cormorant text-4xl md:text-[52px] text-charcoal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            A Glimpse Into Our World
          </motion.h2>
        </div>

        {/* Preview Grid: first 12 images from full portfolio */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {PORTFOLIO_IMAGES.slice(0, 12).map((image, index) => (
            <motion.div
              key={image.id}
              className="relative aspect-[3/4] rounded-xl overflow-hidden group cursor-pointer bg-black"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: Math.min(index, 8) * 0.05 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Plus className="text-cream w-8 h-8" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/portfolio"
            className="inline-block px-8 py-4 rounded-full border border-charcoal text-charcoal hover:bg-charcoal hover:text-cream transition-all duration-300 text-sm font-medium"
          >
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
