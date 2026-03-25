'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram } from 'lucide-react';
import { BridalPortraitImages } from '@/lib/images';

export default function InstagramSection() {
  const images = BridalPortraitImages.slice(0, 6);

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            className="font-dmsans text-sm uppercase tracking-[0.2em] text-charcoal mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Follow Our Journey &middot; <a href="https://www.instagram.com/manan._.bajaj/" target="_blank" rel="noopener noreferrer" className="text-teal hover:text-charcoal transition-colors">@manan._.bajaj</a>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mb-12">
          {images.map((src, index) => (
            <motion.a
              key={index}
              href="#"
              className="relative aspect-square group overflow-hidden bg-black"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={src}
                alt={`Instagram post ${index + 1}`}
                fill
                className="object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-teal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="text-cream w-8 h-8" />
              </div>
            </motion.a>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="https://www.instagram.com/manan._.bajaj/"
            target="_blank"
            className="inline-flex items-center space-x-2 font-dmsans text-sm font-bold uppercase tracking-wider text-teal hover:text-charcoal transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-px after:bg-teal after:origin-right hover:after:origin-left hover:after:scale-x-0 transition-all"
          >
            <span>Follow on Instagram</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
