'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useAnimation, useMotionValue } from 'motion/react';
import { TESTIMONIALS } from '@/lib/constants';

export default function TestimonialsSection() {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  useEffect(() => {
    let animation: any;
    
    const startAnimation = async () => {
      if (!isHovered && width > 0) {
        animation = controls.start({
          x: -width,
          transition: {
            duration: width / 50, // Adjust speed based on width
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
          }
        });
      } else {
        controls.stop();
      }
    };

    startAnimation();

    return () => {
      if (animation) controls.stop();
    };
  }, [width, isHovered, controls]);

  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-16 text-center">
        <motion.h2 
          className="font-greatvibes text-5xl md:text-7xl text-teal mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Love Stories
        </motion.h2>
        <motion.p 
          className="font-dmsans text-charcoal/60 uppercase tracking-widest text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          What our brides say
        </motion.p>
      </div>

      <div className="pl-6 md:pl-12">
        <motion.div 
          ref={carouselRef}
          className="cursor-grab active:cursor-grabbing overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div 
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            animate={controls}
            style={{ x }}
            className="flex gap-6 md:gap-8 w-max pr-6 md:pr-12 pb-12"
          >
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="w-[320px] md:w-[380px] bg-gradient-to-br from-cream to-white p-8 md:p-10 rounded-2xl shadow-sm border border-teal/10 flex-shrink-0"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex text-yellow mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="font-playfair italic text-lg md:text-xl text-charcoal mb-8 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-dmsans font-bold text-charcoal text-sm uppercase tracking-wider mb-1">
                    {testimonial.name}
                  </p>
                  <p className="font-dmsans text-teal text-xs uppercase tracking-widest">
                    {testimonial.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
