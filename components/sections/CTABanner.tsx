'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import ctaImg from '@/images/wedding_ceremony/wedding_ceremony_002.jpg';

export default function CTABanner() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={ref} className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden flex items-center justify-center">
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 w-full h-[140%] -top-[20%]"
        style={{ y }}
      >
        <Image
          src={ctaImg}
          alt="Bride walking in landscape"
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-charcoal/60 mix-blend-multiply" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-cormorant text-5xl md:text-7xl text-cream mb-6 leading-tight">
            Your Dream Wedding Begins Here
          </h2>
          <p className="font-dmsans text-cream/80 text-sm md:text-base tracking-widest uppercase mb-10">
            Limited dates available for 2025 & 2026 seasons
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link 
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-yellow text-yellow hover:bg-yellow hover:text-charcoal transition-all duration-300 text-sm font-medium"
            >
              Check Availability
            </Link>
            <Link 
              href="/services"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-cream text-charcoal hover:bg-teal hover:text-cream transition-all duration-300 text-sm font-medium"
            >
              View Packages
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
