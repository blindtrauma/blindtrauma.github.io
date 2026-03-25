'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import PageTransition from '@/components/layout/PageTransition';
import { MAKEUP_PACKAGES, PHOTO_PACKAGES, FAQS } from '@/lib/constants';
import { Plus, Minus } from 'lucide-react';
import servicesHero from '@/images/wedding_ceremony/wedding_ceremony_001.jpg';
import makeupDetail from '@/images/bridal_makeup/bridal_makeup_012.jpg';
import photoDetail from '@/images/wedding_couple/wedding_couple_011.jpg';

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={servicesHero}
            alt="Services Hero"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-charcoal/50 mix-blend-multiply" />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-dmsans text-teal text-sm uppercase tracking-[0.2em] mb-4">Our Offerings</p>
            <h1 className="font-cormorant text-5xl md:text-7xl text-cream mb-6">Services & Pricing</h1>
          </motion.div>
        </div>
      </section>

      {/* Service 1: Bridal Makeup */}
      <section className="py-24 md:py-32 bg-cream overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="w-full lg:w-1/2 relative h-[600px] rounded-[2rem] overflow-hidden"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src={makeupDetail}
                alt="Bridal Makeup Details"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-cormorant text-4xl md:text-5xl text-charcoal mb-6">Bridal Makeup Artistry</h2>
              <p className="font-dmsans text-charcoal/70 mb-8 leading-relaxed">
                Your wedding day look should be a reflection of your most beautiful self. We specialize in creating flawless, long-lasting makeup that looks stunning in person and translates perfectly on camera. From the initial trial to the final touch-up, we ensure a seamless, relaxing experience.
              </p>
              
              <div className="mb-12">
                <h3 className="font-dmsans font-bold uppercase tracking-widest text-sm text-teal mb-4">What's Included</h3>
                <ul className="space-y-2 font-dmsans text-charcoal/80">
                  <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-teal mr-3" /> Pre-wedding consultation & trial</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-teal mr-3" /> Wedding day skin prep & glam</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-teal mr-3" /> Premium false lashes</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-teal mr-3" /> Customized touch-up kit</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {MAKEUP_PACKAGES.map((pkg, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-teal/10">
                    <h4 className="font-cormorant text-2xl text-charcoal mb-2">{pkg.name}</h4>
                    <p className="font-dmsans text-xl text-teal mb-6">{pkg.price}</p>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="font-dmsans text-sm text-charcoal/70 flex items-start">
                          <span className="text-teal mr-2">✓</span> {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className="block w-full text-center py-3 rounded-full border border-charcoal text-charcoal hover:bg-charcoal hover:text-cream transition-colors text-sm font-medium">
                      Book {pkg.name}
                    </Link>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service 2: Photography */}
      <section className="py-24 md:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <motion.div 
              className="w-full lg:w-1/2 relative h-[600px] rounded-[2rem] overflow-hidden"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src={photoDetail}
                alt="Wedding Photography Details"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-cormorant text-4xl md:text-5xl text-charcoal mb-6">Wedding Photography</h2>
              <p className="font-dmsans text-charcoal/70 mb-8 leading-relaxed">
                We believe in capturing the authentic, unscripted moments of your day. Our approach is editorial yet unobtrusive, ensuring we document the genuine emotion, the grand details, and the fleeting glances that make your love story unique.
              </p>
              
              <div className="mb-12">
                <h3 className="font-dmsans font-bold uppercase tracking-widest text-sm text-teal mb-4">What's Included</h3>
                <ul className="space-y-2 font-dmsans text-charcoal/80">
                  <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-teal mr-3" /> Timeline planning consultation</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-teal mr-3" /> High-resolution edited images</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-teal mr-3" /> Private online gallery</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-teal mr-3" /> Print release rights</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {PHOTO_PACKAGES.map((pkg, idx) => (
                  <div key={idx} className="bg-cream p-8 rounded-2xl shadow-sm border border-teal/10">
                    <h4 className="font-cormorant text-2xl text-charcoal mb-2">{pkg.name}</h4>
                    <p className="font-dmsans text-xl text-teal mb-6">{pkg.price}</p>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="font-dmsans text-sm text-charcoal/70 flex items-start">
                          <span className="text-teal mr-2">✓</span> {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className="block w-full text-center py-3 rounded-full border border-charcoal text-charcoal hover:bg-charcoal hover:text-cream transition-colors text-sm font-medium">
                      Book {pkg.name}
                    </Link>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 bg-cream border-t border-teal/10">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-4xl md:text-5xl text-charcoal mb-4">Frequently Asked Questions</h2>
            <p className="font-dmsans text-charcoal/60">Everything you need to know about working with us.</p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-teal/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-cormorant text-xl text-charcoal font-medium">{faq.question}</span>
                  <span className="text-teal ml-4 flex-shrink-0">
                    {openFaq === index ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-6 font-dmsans text-charcoal/70 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
