// 'use client';

// import { motion } from 'motion/react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { Instagram } from 'lucide-react';
// import { BridalPortraitImages } from '@/lib/images';

// export default function InstagramSection() {
//   const images = BridalPortraitImages.slice(0, 6);

//   return (
//     <section className="py-24 md:py-32 bg-white">
//       <div className="container mx-auto px-6 md:px-12">
//         <div className="text-center mb-16">
//           <motion.h2 
//             className="font-dmsans text-sm uppercase tracking-[0.2em] text-charcoal mb-4"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             Follow Our Journey &middot; <a href="https://www.instagram.com/manan._.bajaj/" target="_blank" rel="noopener noreferrer" className="text-teal hover:text-charcoal transition-colors">@manan._.bajaj</a>
//           </motion.h2>
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mb-12">
//           {images.map((src, index) => (
//             <motion.a
//               key={index}
//               href="#"
//               className="relative aspect-square group overflow-hidden bg-black"
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <Image
//                 src={src}
//                 alt={`Instagram post ${index + 1}`}
//                 fill
//                 className="object-contain"
//                 referrerPolicy="no-referrer"
//               />
//               <div className="absolute inset-0 bg-teal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                 <Instagram className="text-cream w-8 h-8" />
//               </div>
//             </motion.a>
//           ))}
//         </div>

//         <div className="text-center">
//           <Link 
//             href="https://www.instagram.com/manan._.bajaj/"
//             target="_blank"
//             className="inline-flex items-center space-x-2 font-dmsans text-sm font-bold uppercase tracking-wider text-teal hover:text-charcoal transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-px after:bg-teal after:origin-right hover:after:origin-left hover:after:scale-x-0 transition-all"
//           >
//             <span>Follow on Instagram</span>
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <line x1="5" y1="12" x2="19" y2="12"></line>
//               <polyline points="12 5 19 12 12 19"></polyline>
//             </svg>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram } from 'lucide-react';
import { BridalPortraitImages } from '@/lib/images';

export default function InstagramSection() {
  const images = BridalPortraitImages.slice(0, 6);

  return (
    <section className="py-28 md:py-36 bg-cream overflow-hidden">

      {/* Header */}
      <div className="container mx-auto px-6 md:px-12 mb-14">
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
              Instagram
            </motion.p>
            <motion.h2
              className="font-cormorant text-4xl md:text-[54px] leading-[1.05] font-light text-charcoal"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Follow Our Journey
            </motion.h2>
          </div>

          <motion.a
            href="#"
            className="font-dmsans text-[11px] tracking-[0.2em] uppercase text-teal border-b border-teal/40 pb-0.5 hover:text-charcoal hover:border-charcoal transition-all duration-300 self-start md:self-end"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            @lumiere.bridal
          </motion.a>
        </div>
      </div>

      {/* Grid — 2 col on mobile, 3 col on desktop */}
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 md:gap-3 mb-14">
          {images.map((src, i) => (
            <motion.a
              key={i}
              href="#"
              className="relative aspect-square group overflow-hidden rounded-xl"
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <Image
                src={src}
                alt={`Instagram — post ${i + 1}`}
                fill
                className="object-cover object-center transition-transform duration-600 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-charcoal/55 opacity-0 group-hover:opacity-100 transition-opacity duration-350 flex items-center justify-center">
                <div className="flex flex-col items-center gap-2">
                  <Instagram className="text-cream w-6 h-6 stroke-[1.5]" />
                  <span className="font-dmsans text-[9px] tracking-[0.25em] text-cream/80 uppercase">View Post</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="#"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-charcoal/20 text-charcoal text-[11px] font-medium tracking-[0.15em] uppercase hover:bg-charcoal hover:text-cream transition-all duration-300"
            >
              <Instagram className="w-3.5 h-3.5 stroke-[1.5]" />
              Follow on Instagram
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}