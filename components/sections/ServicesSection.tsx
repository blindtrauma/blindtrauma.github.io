// 'use client';

// import { motion } from 'motion/react';
// import Image from 'next/image';
// import Link from 'next/link';
// import makeupImg from '@/images/bridal_makeup/bridal_makeup_013.jpg';
// import photoImg from '@/images/wedding_couple/wedding_couple_012.jpg';

// export default function ServicesSection() {
//   return (
//     <section className="py-24 md:py-32 bg-cream px-6 md:px-12">
//       <div className="container mx-auto max-w-7xl">
//         <div className="text-center mb-20">
//           <motion.h2 
//             className="font-cormorant text-4xl md:text-[52px] text-charcoal mb-4"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.8 }}
//             transition={{ duration: 0.6 }}
//           >
//             What We Offer
//           </motion.h2>
//           <motion.p 
//             className="font-playfair italic text-xl md:text-2xl text-teal"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.8 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             Two services. One vision. Your perfect day.
//           </motion.p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
//           {/* Service 1: Makeup */}
//           <motion.div 
//             className="group relative rounded-[2rem] overflow-hidden bg-white shadow-sm"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden bg-black">
//               <Image
//                 src={makeupImg}
//                 alt="Bridal Makeup"
//                 fill
//                 className="object-contain"
//                 referrerPolicy="no-referrer"
//               />
//               <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
//                 <Link href="/services" className="text-cream font-dmsans tracking-widest uppercase text-sm border border-cream px-6 py-3 rounded-full hover:bg-cream hover:text-charcoal transition-colors">
//                   Explore Service &rarr;
//                 </Link>
//               </div>
//             </div>
//             <div className="p-8 md:p-10 bg-white relative z-10">
//               <h3 className="font-cormorant text-3xl text-charcoal mb-3">Bridal Makeup</h3>
//               <p className="font-dmsans text-charcoal/70 mb-6 line-clamp-2">
//                 Flawless, long-lasting artistry tailored to enhance your natural beauty. From soft glam to editorial elegance, we create a look that feels uniquely you.
//               </p>
//               <Link href="/services" className="inline-block font-dmsans text-sm font-bold uppercase tracking-wider text-teal hover:text-charcoal transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-px after:bg-teal after:origin-right hover:after:origin-left hover:after:scale-x-0 transition-all">
//                 Learn More
//               </Link>
//             </div>
//           </motion.div>

//           {/* Service 2: Photography */}
//           <motion.div 
//             className="group relative rounded-[2rem] overflow-hidden bg-white shadow-sm"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden bg-black">
//               <Image
//                 src={photoImg}
//                 alt="Wedding Photography"
//                 fill
//                 className="object-contain"
//                 referrerPolicy="no-referrer"
//               />
//               <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
//                 <Link href="/services" className="text-cream font-dmsans tracking-widest uppercase text-sm border border-cream px-6 py-3 rounded-full hover:bg-cream hover:text-charcoal transition-colors">
//                   Explore Service &rarr;
//                 </Link>
//               </div>
//             </div>
//             <div className="p-8 md:p-10 bg-white relative z-10">
//               <h3 className="font-cormorant text-3xl text-charcoal mb-3">Wedding Photography</h3>
//               <p className="font-dmsans text-charcoal/70 mb-6 line-clamp-2">
//                 Cinematic, editorial-style documentation of your day. We capture the grand moments and the quiet, intimate in-betweens with an artistic eye.
//               </p>
//               <Link href="/services" className="inline-block font-dmsans text-sm font-bold uppercase tracking-wider text-teal hover:text-charcoal transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-px after:bg-teal after:origin-right hover:after:origin-left hover:after:scale-x-0 transition-all">
//                 Learn More
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import makeupImg from '@/images/bridal_makeup/bridal_makeup_013.jpg';
import photoImg from '@/images/wedding_couple/wedding_couple_012.jpg';

const services = [
  {
    src: makeupImg,
    alt: 'Bridal Makeup',
    title: 'Bridal Makeup',
    tag: '01 — Artistry',
    description:
      'Flawless, long-lasting artistry tailored to enhance your natural beauty. From soft glam to editorial elegance, every look feels unmistakably you.',
    href: '/services',
  },
  {
    src: photoImg,
    alt: 'Wedding Photography',
    title: 'Wedding Photography',
    tag: '02 — Photography',
    description:
      'Cinematic, editorial-style documentation of your day. Grand moments and quiet in-betweens — captured with an artistic eye that lasts a lifetime.',
    href: '/services',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-28 md:py-36 bg-cream px-6 md:px-12">
      <div className="container mx-auto max-w-7xl">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <div>
            <motion.p
              className="font-dmsans text-[10px] tracking-[0.4em] text-teal uppercase mb-4 flex items-center gap-3"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="w-6 h-px bg-teal inline-block" />
              Our Services
            </motion.p>
            <motion.h2
              className="font-cormorant text-4xl md:text-[54px] leading-[1.05] font-light text-charcoal"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              What We Offer
            </motion.h2>
          </div>
          <motion.p
            className="font-cormorant italic text-xl md:text-2xl text-teal/70 md:text-right max-w-xs"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Two services. One vision. Your perfect day.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              className="group relative rounded-2xl overflow-hidden bg-charcoal"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
            >
              {/* Image — fills the card fully */}
              <div className="relative h-[65vh] md:h-[72vh] w-full overflow-hidden">
                <Image
                  src={svc.src}
                  alt={svc.alt}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Gradient overlay — always present, darkens at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />
              </div>

              {/* Content overlay — lives inside the image card */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                {/* Tag */}
                <p className="font-dmsans text-[10px] tracking-[0.35em] text-cream/50 uppercase mb-3 transition-all duration-300 group-hover:text-teal">
                  {svc.tag}
                </p>

                {/* Title */}
                <h3 className="font-cormorant text-3xl md:text-4xl text-cream font-light mb-4 leading-tight">
                  {svc.title}
                </h3>

                {/* Description — slides up on hover */}
                <div className="overflow-hidden">
                  <p className="font-dmsans text-cream/70 text-sm leading-relaxed mb-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                    {svc.description}
                  </p>
                </div>

                {/* CTA */}
                <Link
                  href={svc.href}
                  className="inline-flex items-center gap-3 font-dmsans text-[11px] tracking-[0.2em] uppercase text-cream border-b border-cream/30 pb-0.5 w-fit hover:border-teal hover:text-teal transition-all duration-300"
                >
                  Explore Service
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}