'use client';

import { motion } from 'motion/react';

const MARQUEE_ITEMS = [
  "Bridal Makeup",
  "Wedding Photography",
  "Luxury Experience",
  "Timeless Moments",
  "Destination Weddings"
];

const Flourish = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-8 text-teal">
    <path d="M12 0C12 6.62742 6.62742 12 0 12C6.62742 12 12 17.3726 12 24C12 17.3726 17.3726 12 24 12C17.3726 12 12 6.62742 12 0Z" fill="currentColor"/>
  </svg>
);

export default function MarqueeSection() {
  return (
    <section className="py-12 bg-charcoal overflow-hidden border-y border-yellow/20">
      {/* Top Row - Moving Left */}
      <div className="relative flex whitespace-nowrap mb-6">
        <motion.div 
          className="flex items-center w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        >
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center">
              {MARQUEE_ITEMS.map((item, j) => (
                <div key={j} className="flex items-center">
                  <span className="font-cormorant text-3xl md:text-5xl text-cream italic">{item}</span>
                  <Flourish />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Row - Moving Right */}
      <div className="relative flex whitespace-nowrap">
        <motion.div 
          className="flex items-center w-max"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
        >
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center">
              {MARQUEE_ITEMS.map((item, j) => (
                <div key={j} className="flex items-center">
                  <span className="font-cormorant text-3xl md:text-5xl text-yellow/80">{item}</span>
                  <Flourish />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
