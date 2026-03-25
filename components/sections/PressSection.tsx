'use client';

import { motion } from 'motion/react';
import { PRESS_LOGOS } from '@/lib/constants';

export default function PressSection() {
  return (
    <section className="py-16 md:py-24 bg-cream border-y border-teal/10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-4 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {PRESS_LOGOS.map((logo, index) => (
            <div key={index} className="flex items-center">
              <span className="font-cormorant italic text-2xl md:text-3xl text-teal/60 hover:text-teal transition-colors duration-300">
                {logo}
              </span>
              {index < PRESS_LOGOS.length - 1 && (
                <div className="hidden md:block w-px h-8 bg-teal/20 mx-8 lg:mx-12" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
