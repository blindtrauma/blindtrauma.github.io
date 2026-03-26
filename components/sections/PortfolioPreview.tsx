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



// 'use client';

// import { motion } from 'motion/react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { WeddingDetailsImages } from '@/lib/images';

// const gridItems = [
//   { colSpan: 'md:col-span-1 md:row-span-2', mobileH: 'h-[72vw] max-h-[480px]', label: 'Details' },
//   { colSpan: 'md:col-span-1 md:row-span-1', mobileH: 'h-[55vw] max-h-[340px]', label: 'Ceremony' },
//   { colSpan: 'md:col-span-2 md:row-span-1', mobileH: 'h-[55vw] max-h-[340px]', label: 'Portraits' },
//   { colSpan: 'md:col-span-1 md:row-span-1', mobileH: 'h-[55vw] max-h-[340px]', label: 'Reception' },
//   { colSpan: 'md:col-span-2 md:row-span-1', mobileH: 'h-[55vw] max-h-[340px]', label: 'Candid' },
// ];

// export default function PortfolioPreview() {
//   return (
//     <section className="py-28 md:py-36 bg-white px-6 md:px-12">
//       <div className="container mx-auto max-w-7xl">

//         {/* Section header */}
//         <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
//           <div>
//             <motion.p
//               className="font-dmsans text-[10px] tracking-[0.4em] text-teal uppercase mb-4 flex items-center gap-3"
//               initial={{ opacity: 0, y: 16 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//             >
//               <span className="w-6 h-px bg-teal inline-block" />
//               Portfolio
//             </motion.p>
//             <motion.h2
//               className="font-cormorant text-4xl md:text-[54px] leading-[1.05] font-light text-charcoal"
//               initial={{ opacity: 0, y: 16 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//             >
//               A Glimpse Into Our World
//             </motion.h2>
//           </div>

//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//           >
//             <Link
//               href="/portfolio"
//               className="hidden md:inline-flex items-center gap-3 font-dmsans text-[11px] tracking-[0.2em] uppercase text-charcoal border-b border-charcoal/30 pb-0.5 hover:text-teal hover:border-teal transition-all duration-300"
//             >
//               View Full Portfolio
//               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//                 <line x1="5" y1="12" x2="19" y2="12"/>
//                 <polyline points="12 5 19 12 12 19"/>
//               </svg>
//             </Link>
//           </motion.div>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-3 md:gap-4 md:h-[820px] mb-12">
//           {gridItems.map((item, i) => (
//             <motion.div
//               key={i}
//               className={`relative rounded-xl overflow-hidden cursor-pointer group ${item.colSpan} ${item.mobileH} md:h-full`}
//               initial={{ opacity: 0, y: 24 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: i * 0.08 }}
//             >
//               <Image
//                 src={WeddingDetailsImages[i]}
//                 alt={`Portfolio — ${item.label}`}
//                 fill
//                 className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
//                 sizes="(max-width: 768px) 100vw, 25vw"
//               />

//               {/* Hover overlay */}
//               <div className="absolute inset-0 bg-charcoal/50 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-center justify-center gap-2">
//                 <span className="font-dmsans text-[10px] tracking-[0.35em] text-cream/70 uppercase">{item.label}</span>
//                 <div className="w-8 h-px bg-cream/50" />
//                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
//                   <line x1="12" y1="5" x2="12" y2="19"/>
//                   <line x1="5" y1="12" x2="19" y2="12"/>
//                 </svg>
//               </div>

//               {/* Always-visible category pill */}
//               <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-cream/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <span className="font-dmsans text-[9px] tracking-[0.25em] text-charcoal uppercase">{item.label}</span>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Mobile CTA */}
//         <div className="text-center md:hidden">
//           <Link
//             href="/portfolio"
//             className="inline-block px-8 py-3.5 rounded-full border border-charcoal/25 text-charcoal text-[11px] tracking-[0.15em] uppercase font-medium hover:bg-charcoal hover:text-cream transition-all duration-300"
//           >
//             View Full Portfolio
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }