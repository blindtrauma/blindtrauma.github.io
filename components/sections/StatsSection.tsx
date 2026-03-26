// 'use client';

// import { useEffect, useState, useRef } from 'react';
// import { motion, useInView } from 'motion/react';
// import { STATS } from '@/lib/constants';

// function AnimatedCounter({ value }: { value: string }) {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.5 });
//   const [count, setCount] = useState(0);
  
//   // Extract number and suffix
//   const numMatch = value.match(/\d+/);
//   const target = numMatch ? parseInt(numMatch[0], 10) : 0;
//   const suffix = value.replace(/[0-9]/g, '');

//   useEffect(() => {
//     if (isInView && target > 0) {
//       let start = 0;
//       const duration = 2000; // 2 seconds
//       const increment = target / (duration / 16); // 60fps
      
//       const timer = setInterval(() => {
//         start += increment;
//         if (start >= target) {
//           setCount(target);
//           clearInterval(timer);
//         } else {
//           setCount(Math.floor(start));
//         }
//       }, 16);
      
//       return () => clearInterval(timer);
//     }
//   }, [isInView, target]);

//   return (
//     <span ref={ref}>
//       {target > 0 ? count : ''}{suffix}
//     </span>
//   );
// }

// export default function StatsSection() {
//   return (
//     <section className="py-24 bg-cream border-y border-teal/10">
//       <div className="container mx-auto px-6 md:px-12">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 text-center">
//           {STATS.map((stat, index) => (
//             <motion.div 
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className="flex flex-col items-center justify-center"
//             >
//               <h3 className="font-cormorant text-5xl md:text-[72px] text-teal mb-4 leading-none">
//                 <AnimatedCounter value={stat.value} />
//               </h3>
//               <p className="font-dmsans text-xs md:text-sm uppercase tracking-[0.15em] text-charcoal/60 font-medium">
//                 {stat.label}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { STATS } from '@/lib/constants';

function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  const numMatch = value.match(/\d+/);
  const target = numMatch ? parseInt(numMatch[0], 10) : 0;
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (!isInView || target === 0) return;

    let start = 0;
    const duration = 1800;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {target > 0 ? count : '—'}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-24 md:py-32 bg-charcoal relative overflow-hidden">

      {/* Background decorative element */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-cream/[0.04]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-cream/[0.04]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Section label */}
        <motion.p
          className="font-dmsans text-[10px] tracking-[0.45em] text-teal uppercase mb-16 flex items-center gap-3 justify-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="w-6 h-px bg-teal inline-block" />
          By the Numbers
          <span className="w-6 h-px bg-teal inline-block" />
        </motion.p>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center justify-center py-10 md:py-12 px-4 relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {/* Vertical divider between stats */}
              {i > 0 && (
                <div className="absolute left-0 top-1/4 bottom-1/4 w-px bg-cream/10 hidden md:block" />
              )}

              {/* Number */}
              <h3 className="font-cormorant text-[clamp(52px,7vw,90px)] leading-none text-cream mb-3 tabular-nums">
                <AnimatedCounter value={stat.value} />
              </h3>

              {/* Flourish */}
              <div className="w-5 h-px bg-teal/50 mb-4" />

              {/* Label */}
              <p className="font-dmsans text-[10px] md:text-[11px] tracking-[0.2em] text-cream/40 uppercase text-center leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
