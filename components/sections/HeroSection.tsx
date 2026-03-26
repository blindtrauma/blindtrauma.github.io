'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { slideInLeft, staggerContainer, fadeUp } from '@/lib/animations';
import heroImg from '@/images/bridal_makeup_029.jpg';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row overflow-hidden">

      {/* ── Left: Full-bleed image panel ── */}
      <motion.div
        className="relative w-full md:w-1 h-[60vw] max-h-[520px] md:h-auto md:max-h-none md:min-h-full shrink-0"
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
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Gradient vignette - fades into cream on right edge */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-cream/20" />
        <div className="absolute inset-0 bg-teal/10 mix-blend-multiply" />

        {/* Bottom image caption */}
        <div className="absolute bottom-8 left-8 right-8 flex items-center gap-3 hidden md:flex">
          <div className="w-6 h-px bg-cream/40" />
          <p className="font-dmsans text-[10px] tracking-[0.35em] text-cream/50 uppercase">
            Lumière Bridal Studio
          </p>
        </div>
      </motion.div>

      {/* ── Right: Content panel ── */}
      <div className="relative flex-1 bg-cream flex items-center justify-center p-8 sm:p-14 md:p-16 lg:p-20 min-h-[55vh] md:min-h-0">

        {/* Subtle grain */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }}
        />

        {/* Left rule */}
        <div className="absolute left-0 top-16 bottom-16 w-px bg-teal/15 hidden md:block" />

        <motion.div
          className="max-w-lg w-full relative z-10"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-7">
            <div className="w-7 h-px bg-teal/50" />
            <span className="font-dmsans text-[10px] tracking-[0.4em] text-teal uppercase">Est. 2018</span>
          </motion.div>

          {/* Script accent */}
          <motion.div variants={fadeUp} className="mb-1">
            <span className="font-greatvibes text-4xl md:text-5xl text-teal/60">Lumière</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-cormorant text-[clamp(38px,4.2vw,78px)] leading-[1.06] font-light text-charcoal mb-8"
          >
            Crafting the Most{' '}
            <em className="not-italic text-teal">Beautiful</em>{' '}
            Day of Your Life
          </motion.h1>

          {/* Flourish divider */}
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-7">
            <div className="flex-1 h-px bg-charcoal/12" />
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" className="text-teal/40 shrink-0">
              <path d="M6 0C6 3.314 3.314 6 0 6C3.314 6 6 8.686 6 12C6 8.686 8.686 6 12 6C8.686 6 6 3.314 6 0Z"/>
            </svg>
            <div className="flex-1 h-px bg-charcoal/12" />
          </motion.div>

          {/* Sub-line */}
          <motion.p variants={fadeUp} className="font-dmsans text-charcoal/45 text-[11px] tracking-[0.22em] uppercase mb-10">
            Bridal Makeup &nbsp;·&nbsp; Wedding Photography &nbsp;·&nbsp; Timeless Memories
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            <Link
              href="/portfolio"
              className="px-7 py-3.5 rounded-full border border-charcoal/25 text-charcoal text-[11px] font-medium tracking-[0.12em] uppercase hover:bg-charcoal hover:text-cream hover:border-charcoal transition-all duration-300"
            >
              View Our Work
            </Link>
            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-full bg-charcoal text-cream text-[11px] font-medium tracking-[0.12em] uppercase hover:bg-teal transition-all duration-300"
            >
              Book a Date
            </Link>
          </motion.div>
        </motion.div>

        {/* Rotating badge */}
        <motion.div
          className="absolute bottom-10 right-10 hidden lg:flex items-center justify-center w-[108px] h-[108px] rounded-full border border-teal/20 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 animate-spin-slow">
            <path id="badge-curve" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
            <text className="text-[9px] uppercase fill-charcoal/40">
              <textPath href="#badge-curve" startOffset="0%" letterSpacing="3.5">
                AWARD WINNING · LUXURY BRIDAL ·
              </textPath>
            </text>
          </svg>
          <span className="font-greatvibes text-2xl text-teal relative z-10">L</span>
        </motion.div>
      </div>
    </section>
  );
}

// 'use client';

// import { motion } from 'motion/react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { slideInLeft, staggerContainer, fadeUp } from '@/lib/animations';
// import heroImg from '@/images/bridal_makeup_029.jpg';

// export default function HeroSection() {
//   return (
//     /**
//      * FIX 1: Replaced h-[105vh] with min-h-screen so the section never
//      *         clips shorter than the viewport AND doesn't force a rogue 5%
//      *         overflow that pushes content behind a fixed/sticky navbar.
//      *
//      * FIX 2: Added pt-[var(--navbar-h,72px)] so the hero content always
//      *         clears the navbar. Adjust --navbar-h in your global CSS or
//      *         replace with a concrete value (e.g. pt-[72px]) that matches
//      *         your actual navbar height.
//      *
//      *         If your navbar is NOT fixed/sticky, remove the padding entirely.
//      */
//     <section
//       className="
//         relative w-full min-h-screen
//         flex flex-col md:flex-row
//         overflow-hidden
//         pt-[var(--navbar-h,72px)] md:pt-0
//       "
//     >
//       {/* ─── Left: Image ──────────────────────────────────────────────────────
//           FIX 3: Changed w-1/4 → w-full / md:w-1/2  (was only 25 % wide,
//                   leaving a blank quarter of the screen on desktop).
//           FIX 4: Added explicit h-[55vw] cap on mobile so the image never
//                   stretches to full viewport height when stacked vertically.
//                   md:h-auto lets flexbox take over on desktop.
//           FIX 5: object-position="top" keeps faces in frame on portrait shots.
//       ──────────────────────────────────────────────────────────────────────── */}
//       <motion.div
//         className="
//           relative
//           w-full md:w-1/4
//           h-[35vw] max-h-[730px] md:h-auto md:max-h-none md:min-h-full
//           shrink-0
//         "
//         variants={slideInLeft}
//         initial="hidden"
//         animate="visible"
//       >
//         <Image
//           src={heroImg}
//           alt="Beautiful bride looking elegant"
//           fill
//           className="object-cover object-top"
//           priority
//           sizes="(max-width: 800px) 100vw, 50vw"
//         />
//         {/* Soft warm-tone overlay */}
//         <div className="absolute inset-0 bg-teal mix-blend-multiply opacity-20" />
//       </motion.div>

//       {/* ─── Right: Content ───────────────────────────────────────────────────
//           FIX 6: Changed md:w-1/2 to remain 1/2 (correct) but removed the
//                   invalid p-100 class (no such Tailwind utility).
//                   Used p-8 sm:p-12 md:p-16 lg:p-24 for a clean responsive scale.
//           FIX 7: flex-1 lets this column stretch to fill remaining width on
//                   any viewport, so no blank columns appear on resize.
//       ──────────────────────────────────────────────────────────────────────── */}
//       <div
//         className="
//           relative
//           flex-1
//           bg-cream
//           flex items-center justify-center
//           p-8 sm:p-12 md:p-16 lg:p-24
//           min-h-[50vh] md:min-h-0
//         "
//       >
//         <motion.div
//           className="max-w-xl w-full"
//           variants={staggerContainer}
//           initial="hidden"
//           animate="visible"
//         >
//           {/* Est. badge */}
//           <motion.div variants={fadeUp} className="mb-6">
//             <span className="font-greatvibes text-3xl md:text-4xl text-teal">
//               Est. 2018
//             </span>
//           </motion.div>

//           {/* Headline */}
//           <motion.h1
//             variants={fadeUp}
//             className="
//               font-cormorant
//               text-[clamp(36px,5vw,88px)]
//               leading-[1.08]
//               font-light
//               text-charcoal
//               mb-6
//             "
//           >
//             Crafting the Most Beautiful Day of Your Life
//           </motion.h1>

//           {/* Sub-line */}
//           <motion.p
//             variants={fadeUp}
//             className="font-dmsans text-teal text-sm md:text-base tracking-wide mb-10"
//           >
//             Bridal Makeup · Wedding Photography · Timeless Memories
//           </motion.p>

//           {/* CTAs */}
//           <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
//             <Link
//               href="/portfolio"
//               className="
//                 px-8 py-4 rounded-full
//                 border border-charcoal
//                 text-charcoal text-sm font-medium
//                 hover:bg-charcoal hover:text-cream
//                 transition-all duration-300
//               "
//             >
//               View Our Work
//             </Link>
//             <Link
//               href="/contact"
//               className="
//                 px-8 py-4 rounded-full
//                 bg-charcoal text-cream text-sm font-medium
//                 hover:bg-teal
//                 transition-all duration-300
//               "
//             >
//               Book a Date
//             </Link>
//           </motion.div>
//         </motion.div>

//         {/* ─── Floating Badge ─────────────────────────────────────────────────
//             FIX 8: Separated opacity animation from the infinite spin so they
//                     don't fight each other. The outer div fades in; the inner
//                     SVG spins continuously via a CSS class (animate-spin-slow).
//                     This prevents the Framer Motion rotate conflicting with the
//                     CSS spin at startup.
//             FIX 9: Using absolute positioning relative to the right column, not
//                     the full section, so it always sits in the bottom-right
//                     corner of the content pane regardless of screen width.
//         ──────────────────────────────────────────────────────────────────────── */}
//         <motion.div
//           className="
//             absolute bottom-10 right-10
//             hidden lg:flex
//             items-center justify-center
//             w-28 h-28
//             rounded-full
//             border border-yellow/30
//             pointer-events-none
//           "
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.8, duration: 1 }}
//         >
//           <div className="relative w-full h-full">
//             {/* CSS-driven spin — no conflict with Framer Motion */}
//             <svg
//               viewBox="0 0 100 100"
//               className="w-full h-full animate-spin-slow"
//             >
//               <path
//                 id="curve"
//                 d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
//                 fill="transparent"
//               />
//               <text className="text-[9.5px] font-dmsans uppercase fill-charcoal">
//                 <textPath href="#curve" startOffset="0%" letterSpacing="3">
//                   AWARD WINNING · LUXURY BRIDAL ·
//                 </textPath>
//               </text>
//             </svg>

//             {/* Centre monogram */}
//             <div className="absolute inset-0 flex items-center justify-center">
//               <span className="font-greatvibes text-2xl text-yellow">L</span>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }