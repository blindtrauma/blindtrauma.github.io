import Link from 'next/link';
import { Instagram, Facebook, PinIcon as Pinterest } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream relative overflow-hidden noise-bg">
      <div className="container mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Col 1: Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex flex-col items-start group inline-block">
              <span className="font-cormorant text-3xl tracking-[0.15em] font-medium text-cream group-hover:text-yellow transition-colors">
                Manan Bajaj
              </span>
              <span className="font-dmsans text-[0.6rem] tracking-[0.2em] uppercase text-teal">
                Bridal
              </span>
            </Link>
            <p className="font-playfair italic text-cream/70 text-sm">
              Where Every Moment Becomes Forever.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://www.instagram.com/manan._.bajaj/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-teal hover:border-teal transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-teal hover:border-teal transition-all duration-300">
                <Pinterest size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-teal hover:border-teal transition-all duration-300">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-dmsans uppercase tracking-widest text-xs font-bold mb-6 text-yellow">Explore</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-cream/70 hover:text-teal transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="font-dmsans uppercase tracking-widest text-xs font-bold mb-6 text-yellow">Services</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/services" className="text-cream/70 hover:text-teal transition-colors text-sm">
                  Bridal Makeup
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-cream/70 hover:text-teal transition-colors text-sm">
                  Wedding Photography
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-cream/70 hover:text-teal transition-colors text-sm">
                  Engagement Sessions
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-cream/70 hover:text-teal transition-colors text-sm">
                  Destination Weddings
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="font-dmsans uppercase tracking-widest text-xs font-bold mb-6 text-yellow">Contact</h4>
            <ul className="space-y-4 text-sm text-cream/70 mb-8">
              <li><a href="mailto:mananbajaj4.mb@gmail.com" className="hover:text-teal transition-colors">mananbajaj4.mb@gmail.com</a></li>
              <li><a href="tel:+918384856272" className="hover:text-teal transition-colors">+918384856272</a></li>
              <li>New York, NY</li>
              <li>Available Worldwide</li>
            </ul>
            <Link 
              href="/contact"
              className="inline-block px-6 py-3 rounded-full border border-teal text-teal hover:bg-teal hover:text-charcoal transition-all duration-300 text-sm font-medium"
            >
              Book a Call
            </Link>
          </div>

        </div>

        <div className="mt-20 pt-8 border-t border-yellow/20 flex flex-col md:flex-row justify-between items-center text-xs text-cream/50">
          <p>&copy; {new Date().getFullYear()} Manan Bajaj Portfolio. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-cream transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-cream transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
