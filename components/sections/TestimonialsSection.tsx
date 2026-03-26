// 'use client';

// import { useRef, useState, useEffect } from 'react';
// import { motion, useAnimation, useMotionValue } from 'motion/react';
// import { TESTIMONIALS } from '@/lib/constants';

// export default function TestimonialsSection() {
//   const [width, setWidth] = useState(0);
//   const carouselRef = useRef<HTMLDivElement>(null);
//   const controls = useAnimation();
//   const x = useMotionValue(0);
//   const [isHovered, setIsHovered] = useState(false);

//   useEffect(() => {
//     const updateWidth = () => {
//       if (carouselRef.current) {
//         setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
//       }
//     };

//     updateWidth();
//     window.addEventListener('resize', updateWidth);
//     return () => window.removeEventListener('resize', updateWidth);
//   }, []);

//   useEffect(() => {
//     let animation: any;
    
//     const startAnimation = async () => {
//       if (!isHovered && width > 0) {
//         animation = controls.start({
//           x: -width,
//           transition: {
//             duration: width / 50, // Adjust speed based on width
//             ease: "linear",
//             repeat: Infinity,
//             repeatType: "reverse"
//           }
//         });
//       } else {
//         controls.stop();
//       }
//     };

//     startAnimation();

//     return () => {
//       if (animation) controls.stop();
//     };
//   }, [width, isHovered, controls]);

//   return (
//     <section className="py-24 md:py-32 bg-white overflow-hidden">
//       <div className="container mx-auto px-6 md:px-12 mb-16 text-center">
//         <motion.h2 
//           className="font-greatvibes text-5xl md:text-7xl text-teal mb-4"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           Love Stories
//         </motion.h2>
//         <motion.p 
//           className="font-dmsans text-charcoal/60 uppercase tracking-widest text-sm"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//           What our brides say
//         </motion.p>
//       </div>

//       <div className="pl-6 md:pl-12">
//         <motion.div 
//           ref={carouselRef}
//           className="cursor-grab active:cursor-grabbing overflow-hidden"
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           <motion.div 
//             drag="x"
//             dragConstraints={{ right: 0, left: -width }}
//             animate={controls}
//             style={{ x }}
//             className="flex gap-6 md:gap-8 w-max pr-6 md:pr-12 pb-12"
//           >
//             {TESTIMONIALS.map((testimonial, index) => (
//               <motion.div 
//                 key={index}
//                 className="w-[320px] md:w-[380px] bg-gradient-to-br from-cream to-white p-8 md:p-10 rounded-2xl shadow-sm border border-teal/10 flex-shrink-0"
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//               >
//                 <div className="flex text-yellow mb-6">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
//                       <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//                     </svg>
//                   ))}
//                 </div>
//                 <p className="font-playfair italic text-lg md:text-xl text-charcoal mb-8 leading-relaxed">
//                   "{testimonial.quote}"
//                 </p>
//                 <div>
//                   <p className="font-dmsans font-bold text-charcoal text-sm uppercase tracking-wider mb-1">
//                     {testimonial.name}
//                   </p>
//                   <p className="font-dmsans text-teal text-xs uppercase tracking-widest">
//                     {testimonial.date}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useAnimation, useMotionValue } from 'motion/react';
import { TESTIMONIALS } from '@/lib/constants';

const StarIcon = () => (
  <svg className="w-3.5 h-3.5 fill-yellow" viewBox="0 0 24 24">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

export default function TestimonialsSection() {
  const [trackWidth, setTrackWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const measure = () => {
      if (carouselRef.current) {
        setTrackWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => {
    if (!isHovered && trackWidth > 0) {
      controls.start({
        x: -trackWidth,
        transition: { duration: trackWidth / 40, ease: 'linear', repeat: Infinity, repeatType: 'reverse' },
      });
    } else {
      controls.stop();
    }
  }, [trackWidth, isHovered, controls]);

  return (
    <section className="py-28 md:py-36 bg-cream overflow-hidden">

      {/* Header */}
      <div className="container mx-auto px-6 md:px-12 mb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <motion.p
              className="font-dmsans text-[10px] tracking-[0.4em] text-teal uppercase mb-4 flex items-center gap-3"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="w-6 h-px bg-teal inline-block" />
              Testimonials
            </motion.p>
            <motion.h2
              className="font-greatvibes text-5xl md:text-7xl text-charcoal leading-none"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Love Stories
            </motion.h2>
          </div>
          <motion.p
            className="font-dmsans text-[10px] tracking-[0.3em] text-charcoal/40 uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Drag to explore
          </motion.p>
        </div>
      </div>

      {/* Carousel */}
      <div className="pl-6 md:pl-12">
        <motion.div
          ref={carouselRef}
          className="cursor-grab active:cursor-grabbing overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -trackWidth }}
            animate={controls}
            style={{ x }}
            className="flex gap-5 w-max pr-12 pb-10"
          >
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                className="w-[320px] md:w-[370px] flex-shrink-0 select-none"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                {/* Card */}
                <div className="relative bg-white rounded-2xl p-8 md:p-9 border border-charcoal/6 shadow-[0_2px_24px_rgba(0,0,0,0.05)] h-full flex flex-col">

                  {/* Opening quote mark */}
                  <div className="absolute top-6 right-8 font-cormorant text-[80px] leading-none text-teal/10 select-none pointer-events-none">
                    "
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(t.rating)].map((_, j) => <StarIcon key={j} />)}
                  </div>

                  {/* Quote */}
                  <p className="font-cormorant italic text-lg md:text-xl text-charcoal/80 leading-relaxed mb-8 flex-1">
                    "{t.quote}"
                  </p>

                  {/* Divider */}
                  <div className="w-8 h-px bg-teal/30 mb-6" />

                  {/* Attribution */}
                  <div>
                    <p className="font-dmsans font-semibold text-charcoal text-[12px] tracking-[0.15em] uppercase mb-1">
                      {t.name}
                    </p>
                    <p className="font-dmsans text-teal text-[10px] tracking-[0.25em] uppercase">
                      {t.date}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}