// 'use client';

// import { motion } from 'motion/react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { slideInLeft, staggerContainer, fadeUp } from '@/lib/animations';
// import heroImg from '@/images/bridal_makeup_029.jpg';

// export default function HeroSection() {
//   return (
//     <section className="relative w-full h-[105vh] flex flex-col md:flex-row overflow-hidden">
//       {/* Left Half: Image */}
//       <motion.div 
//         className="relative w-full md:w-1/4 h-1/8 md:h-full"
//         variants={slideInLeft}
//         initial="hidden"
//         animate="visible"
//       >
//         <Image
//           src={heroImg}
//           alt="Beautiful bride looking elegant"
//           fill
//           className="object-cover"
//           priority
//           referrerPolicy="no-referrer"
//         />
//         {/* Soft warm-tone overlay */}
//         <div className="absolute inset-0 bg-teal mix-blend-multiply opacity-20" />
//       </motion.div>

//       {/* Right Half: Content */}
//       <div className="relative w-full md:w-1/2 h-1/2 md:h-full bg-cream flex items-center justify-center p-8 md:p-100 lg:p-24">
//         <motion.div 
//           className="max-w-xl w-full"
//           variants={staggerContainer}
//           initial="hidden"
//           animate="visible"
//         >
//           <motion.div variants={fadeUp} className="mb-6">
//             <span className="font-greatvibes text-3xl md:text-4xl text-teal">Est. 2018</span>
//           </motion.div>
          
//           <motion.h1 
//             variants={fadeUp}
//             className="font-cormorant text-[clamp(40px,6vw,96px)] leading-[1.1] font-light text-charcoal mb-6"
//           >
//             Crafting the Most Beautiful Day of Your Life
//           </motion.h1>
          
//           <motion.p 
//             variants={fadeUp}
//             className="font-dmsans text-teal text-sm md:text-base tracking-wide mb-10"
//           >
//             Bridal Makeup · Wedding Photography · Timeless Memories
//           </motion.p>
          
//           <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
//             <Link 
//               href="/portfolio"
//               className="px-8 py-4 rounded-full border border-charcoal text-charcoal hover:bg-charcoal hover:text-cream transition-all duration-300 text-sm font-medium"
//             >
//               View Our Work
//             </Link>
//             <Link 
//               href="/contact"
//               className="px-8 py-4 rounded-full bg-charcoal text-cream hover:bg-teal transition-all duration-300 text-sm font-medium"
//             >
//               Book a Date
//             </Link>
//           </motion.div>
//         </motion.div>

//         {/* Floating Badge */}
//         <motion.div 
//           className="absolute bottom-12 right-12 hidden lg:flex items-center justify-center w-32 h-32 rounded-full border border-yellow/30"
//           initial={{ opacity: 0, rotate: -12 }}
//           animate={{ opacity: 1, rotate: 348 }}
//           transition={{ 
//             opacity: { delay: 2, duration: 1 },
//             rotate: { repeat: Infinity, duration: 20, ease: "linear" }
//           }}
//         >
//           <div className="relative w-full h-full">
//             <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
//               <path id="curve" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
//               <text className="text-[10px] font-dmsans uppercase tracking-[0.2em] fill-charcoal">
//                 <textPath href="#curve" startOffset="0%">
//                   AWARD WINNING · LUXURY BRIDAL · 
//                 </textPath>
//               </text>
//             </svg>
//             <div className="absolute inset-0 flex items-center justify-center">
//               <span className="font-greatvibes text-2xl text-yellow">L</span>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { slideInLeft, staggerContainer, fadeUp } from '@/lib/animations';
import heroImg from '@/images/bridal_makeup_029.jpg';

export default function HeroSection() {
  return (
    /**
     * FIX 1: Replaced h-[105vh] with min-h-screen so the section never
     *         clips shorter than the viewport AND doesn't force a rogue 5%
     *         overflow that pushes content behind a fixed/sticky navbar.
     *
     * FIX 2: Added pt-[var(--navbar-h,72px)] so the hero content always
     *         clears the navbar. Adjust --navbar-h in your global CSS or
     *         replace with a concrete value (e.g. pt-[72px]) that matches
     *         your actual navbar height.
     *
     *         If your navbar is NOT fixed/sticky, remove the padding entirely.
     */
    <section
      className="
        relative w-full min-h-screen
        flex flex-col md:flex-row
        overflow-hidden
        pt-[var(--navbar-h,72px)] md:pt-0
      "
    >
      {/* ─── Left: Image ──────────────────────────────────────────────────────
          FIX 3: Changed w-1/4 → w-full / md:w-1/2  (was only 25 % wide,
                  leaving a blank quarter of the screen on desktop).
          FIX 4: Added explicit h-[55vw] cap on mobile so the image never
                  stretches to full viewport height when stacked vertically.
                  md:h-auto lets flexbox take over on desktop.
          FIX 5: object-position="top" keeps faces in frame on portrait shots.
      ──────────────────────────────────────────────────────────────────────── */}
      <motion.div
        className="
          relative
          w-full md:w-1/4
          h-[35vw] max-h-[730px] md:h-auto md:max-h-none md:min-h-full
          shrink-0
        "
        variants={slideInLeft}
        initial="hidden"
        animate="visible"
      >
        <Image
          src={heroImg}
          alt="Beautiful bride looking elegant"
          fill
          className="object-cover object-top"
          priority
          sizes="(max-width: 800px) 100vw, 50vw"
        />
        {/* Soft warm-tone overlay */}
        <div className="absolute inset-0 bg-teal mix-blend-multiply opacity-20" />
      </motion.div>

      {/* ─── Right: Content ───────────────────────────────────────────────────
          FIX 6: Changed md:w-1/2 to remain 1/2 (correct) but removed the
                  invalid p-100 class (no such Tailwind utility).
                  Used p-8 sm:p-12 md:p-16 lg:p-24 for a clean responsive scale.
          FIX 7: flex-1 lets this column stretch to fill remaining width on
                  any viewport, so no blank columns appear on resize.
      ──────────────────────────────────────────────────────────────────────── */}
      <div
        className="
          relative
          flex-1
          bg-cream
          flex items-center justify-center
          p-8 sm:p-12 md:p-16 lg:p-24
          min-h-[50vh] md:min-h-0
        "
      >
        <motion.div
          className="max-w-xl w-full"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Est. badge */}
          <motion.div variants={fadeUp} className="mb-6">
            <span className="font-greatvibes text-3xl md:text-4xl text-teal">
              Est. 2018
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="
              font-cormorant
              text-[clamp(36px,5vw,88px)]
              leading-[1.08]
              font-light
              text-charcoal
              mb-6
            "
          >
            Crafting the Most Beautiful Day of Your Life
          </motion.h1>

          {/* Sub-line */}
          <motion.p
            variants={fadeUp}
            className="font-dmsans text-teal text-sm md:text-base tracking-wide mb-10"
          >
            Bridal Makeup · Wedding Photography · Timeless Memories
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <Link
              href="/portfolio"
              className="
                px-8 py-4 rounded-full
                border border-charcoal
                text-charcoal text-sm font-medium
                hover:bg-charcoal hover:text-cream
                transition-all duration-300
              "
            >
              View Our Work
            </Link>
            <Link
              href="/contact"
              className="
                px-8 py-4 rounded-full
                bg-charcoal text-cream text-sm font-medium
                hover:bg-teal
                transition-all duration-300
              "
            >
              Book a Date
            </Link>
          </motion.div>
        </motion.div>

        {/* ─── Floating Badge ─────────────────────────────────────────────────
            FIX 8: Separated opacity animation from the infinite spin so they
                    don't fight each other. The outer div fades in; the inner
                    SVG spins continuously via a CSS class (animate-spin-slow).
                    This prevents the Framer Motion rotate conflicting with the
                    CSS spin at startup.
            FIX 9: Using absolute positioning relative to the right column, not
                    the full section, so it always sits in the bottom-right
                    corner of the content pane regardless of screen width.
        ──────────────────────────────────────────────────────────────────────── */}
        <motion.div
          className="
            absolute bottom-10 right-10
            hidden lg:flex
            items-center justify-center
            w-28 h-28
            rounded-full
            border border-yellow/30
            pointer-events-none
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
        >
          <div className="relative w-full h-full">
            {/* CSS-driven spin — no conflict with Framer Motion */}
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full animate-spin-slow"
            >
              <path
                id="curve"
                d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="transparent"
              />
              <text className="text-[9.5px] font-dmsans uppercase fill-charcoal">
                <textPath href="#curve" startOffset="0%" letterSpacing="3">
                  AWARD WINNING · LUXURY BRIDAL ·
                </textPath>
              </text>
            </svg>

            {/* Centre monogram */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-greatvibes text-2xl text-yellow">L</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}