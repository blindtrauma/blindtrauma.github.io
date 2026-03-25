'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import makeupImg from '@/images/bridal_makeup/bridal_makeup_013.jpg';
import photoImg from '@/images/wedding_couple/wedding_couple_012.jpg';

export default function ServicesSection() {
  return (
    <section className="py-24 md:py-32 bg-cream px-6 md:px-12">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <motion.h2 
            className="font-cormorant text-4xl md:text-[52px] text-charcoal mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6 }}
          >
            What We Offer
          </motion.h2>
          <motion.p 
            className="font-playfair italic text-xl md:text-2xl text-teal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Two services. One vision. Your perfect day.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Service 1: Makeup */}
          <motion.div 
            className="group relative rounded-[2rem] overflow-hidden bg-white shadow-sm"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden bg-black">
              <Image
                src={makeupImg}
                alt="Bridal Makeup"
                fill
                className="object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <Link href="/services" className="text-cream font-dmsans tracking-widest uppercase text-sm border border-cream px-6 py-3 rounded-full hover:bg-cream hover:text-charcoal transition-colors">
                  Explore Service &rarr;
                </Link>
              </div>
            </div>
            <div className="p-8 md:p-10 bg-white relative z-10">
              <h3 className="font-cormorant text-3xl text-charcoal mb-3">Bridal Makeup</h3>
              <p className="font-dmsans text-charcoal/70 mb-6 line-clamp-2">
                Flawless, long-lasting artistry tailored to enhance your natural beauty. From soft glam to editorial elegance, we create a look that feels uniquely you.
              </p>
              <Link href="/services" className="inline-block font-dmsans text-sm font-bold uppercase tracking-wider text-teal hover:text-charcoal transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-px after:bg-teal after:origin-right hover:after:origin-left hover:after:scale-x-0 transition-all">
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Service 2: Photography */}
          <motion.div 
            className="group relative rounded-[2rem] overflow-hidden bg-white shadow-sm"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden bg-black">
              <Image
                src={photoImg}
                alt="Wedding Photography"
                fill
                className="object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <Link href="/services" className="text-cream font-dmsans tracking-widest uppercase text-sm border border-cream px-6 py-3 rounded-full hover:bg-cream hover:text-charcoal transition-colors">
                  Explore Service &rarr;
                </Link>
              </div>
            </div>
            <div className="p-8 md:p-10 bg-white relative z-10">
              <h3 className="font-cormorant text-3xl text-charcoal mb-3">Wedding Photography</h3>
              <p className="font-dmsans text-charcoal/70 mb-6 line-clamp-2">
                Cinematic, editorial-style documentation of your day. We capture the grand moments and the quiet, intimate in-betweens with an artistic eye.
              </p>
              <Link href="/services" className="inline-block font-dmsans text-sm font-bold uppercase tracking-wider text-teal hover:text-charcoal transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-px after:bg-teal after:origin-right hover:after:origin-left hover:after:scale-x-0 transition-all">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
