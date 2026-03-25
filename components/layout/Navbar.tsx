'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          isScrolled ? 'bg-cream/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 2.5 }} // Delay for loading screen
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-center group">
            <span className="font-cormorant text-2xl md:text-3xl tracking-[0.15em] font-medium text-charcoal group-hover:text-teal transition-colors">
              Manan Bajaj
            </span>
            <span className="font-dmsans text-[0.6rem] tracking-[0.2em] uppercase text-teal">
              Bridal
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="relative text-sm font-medium text-charcoal/80 hover:text-charcoal transition-colors group py-2"
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-teal transform origin-left transition-transform duration-300 ${
                  pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              href="/contact"
              className="inline-block px-6 py-3 rounded-full bg-teal text-cream text-sm font-medium tracking-wide border border-transparent hover:bg-transparent hover:text-teal hover:border-teal transition-all duration-300"
            >
              Book a Consultation
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-charcoal p-2"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-cream flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          >
            <div className="flex justify-between items-center p-6">
              <Link href="/" className="flex flex-col items-center" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="font-cormorant text-2xl tracking-[0.15em] font-medium text-charcoal">
                  Manan Bajaj
                </span>
                <span className="font-dmsans text-[0.6rem] tracking-[0.2em] uppercase text-teal">
                  Bridal
                </span>
              </Link>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-charcoal"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center px-12 space-y-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                >
                  <Link 
                    href={link.href}
                    className="font-cormorant text-4xl text-charcoal hover:text-teal transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="pt-8"
              >
                <Link 
                  href="/contact"
                  className="inline-block px-8 py-4 rounded-full bg-teal text-cream text-sm font-medium tracking-wide text-center w-full"
                >
                  Book a Consultation
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
