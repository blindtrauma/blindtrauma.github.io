// 'use client';

// import { motion } from 'motion/react';

// const MARQUEE_ITEMS = [
//   "Bridal Makeup",
//   "Wedding Photography",
//   "Luxury Experience",
//   "Timeless Moments",
//   "Destination Weddings"
// ];

// const Flourish = () => (
//   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-8 text-teal">
//     <path d="M12 0C12 6.62742 6.62742 12 0 12C6.62742 12 12 17.3726 12 24C12 17.3726 17.3726 12 24 12C17.3726 12 12 6.62742 12 0Z" fill="currentColor"/>
//   </svg>
// );

// export default function MarqueeSection() {
//   return (
//     <section className="py-12 bg-charcoal overflow-hidden border-y border-yellow/20">
//       {/* Top Row - Moving Left */}
//       <div className="relative flex whitespace-nowrap mb-6">
//         <motion.div 
//           className="flex items-center w-max"
//           animate={{ x: ["0%", "-50%"] }}
//           transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
//         >
//           {[...Array(4)].map((_, i) => (
//             <div key={i} className="flex items-center">
//               {MARQUEE_ITEMS.map((item, j) => (
//                 <div key={j} className="flex items-center">
//                   <span className="font-cormorant text-3xl md:text-5xl text-cream italic">{item}</span>
//                   <Flourish />
//                 </div>
//               ))}
//             </div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Bottom Row - Moving Right */}
//       <div className="relative flex whitespace-nowrap">
//         <motion.div 
//           className="flex items-center w-max"
//           animate={{ x: ["-50%", "0%"] }}
//           transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
//         >
//           {[...Array(4)].map((_, i) => (
//             <div key={i} className="flex items-center">
//               {MARQUEE_ITEMS.map((item, j) => (
//                 <div key={j} className="flex items-center">
//                   <span className="font-cormorant text-3xl md:text-5xl text-yellow/80">{item}</span>
//                   <Flourish />
//                 </div>
//               ))}
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }



'use client';

import { motion } from 'motion/react';

const MARQUEE_ITEMS = [
  'Bridal Makeup',
  'Wedding Photography',
  'Luxury Experience',
  'Timeless Moments',
  'Destination Weddings',
];

const Diamond = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" className="mx-6 md:mx-10 shrink-0 opacity-60">
    <path d="M5 0L10 5L5 10L0 5Z"/>
  </svg>
);

function MarqueeRow({
  direction,
  duration,
  textClass,
}: {
  direction: 'left' | 'right';
  duration: number;
  textClass: string;
}) {
  const from = direction === 'left' ? '0%' : '-50%';
  const to = direction === 'left' ? '-50%' : '0%';

  return (
    <div className="relative flex whitespace-nowrap overflow-hidden">
      <motion.div
        className="flex items-center w-max"
        animate={{ x: [from, to] }}
        transition={{ repeat: Infinity, ease: 'linear', duration }}
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            {MARQUEE_ITEMS.map((item, j) => (
              <div key={j} className={`flex items-center ${textClass}`}>
                <span className="font-cormorant text-[clamp(28px,4.5vw,60px)] leading-none">
                  {item}
                </span>
                <Diamond />
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function MarqueeSection() {
  return (
    <section className="py-10 md:py-14 bg-charcoal overflow-hidden border-y border-cream/10 relative">

      {/* Subtle vignette on left/right so text fades in/out */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-charcoal to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-charcoal to-transparent z-10 pointer-events-none" />

      <div className="flex flex-col gap-4">
        {/* Row 1 — cream italic, moves left */}
        <MarqueeRow
          direction="left"
          duration={28}
          textClass="text-cream italic"
        />
        {/* Row 2 — teal, moves right */}
        <MarqueeRow
          direction="right"
          duration={34}
          textClass="text-teal not-italic"
        />
      </div>
    </section>
  );
}