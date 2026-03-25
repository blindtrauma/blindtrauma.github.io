'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import PageTransition from '@/components/layout/PageTransition';
import { TEAM_MEMBERS, TIMELINE } from '@/lib/constants';
import aboutHero from '@/images/bridal_portrait/bridal_portrait_001.jpg';

export default function AboutPage() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-cream">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="w-full lg:w-1/2 relative h-[70vh] rounded-[2rem] overflow-hidden"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src={aboutHero}
                alt="Manan Bajaj Portfolio Founders"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="font-cormorant text-5xl md:text-7xl text-charcoal mb-6">The Artists Behind the Lens & Brush</h1>
              <p className="font-dmsans text-charcoal/70 mb-6 leading-relaxed text-lg">
                Founded in 2018, Manan Bajaj Portfolio was born from a shared passion for authentic beauty and storytelling. We believe that your wedding day is a masterpiece waiting to be crafted.
              </p>
              <p className="font-dmsans text-charcoal/70 leading-relaxed">
                Our dual-service approach ensures a cohesive, seamless experience. We work in harmony—understanding how makeup translates to film, and how lighting enhances artistry—to deliver a truly flawless result.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          {TEAM_MEMBERS.map((member, index) => (
            <div key={member.name} className={`flex flex-col md:flex-row${index % 2 !== 0 ? '-reverse' : ''} items-center gap-12 ${index !== TEAM_MEMBERS.length - 1 ? 'mb-24' : ''}`}>
              <motion.div 
                className="w-full md:w-5/12 relative aspect-[3/4] rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Image src={member.image} alt={member.role} fill className="object-cover" referrerPolicy="no-referrer" />
              </motion.div>
              <motion.div 
                className={`w-full md:w-7/12 ${index % 2 !== 0 ? 'md:text-right flex flex-col md:items-end' : ''}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="font-cormorant text-4xl text-charcoal mb-2">{member.name}</h2>
                <p className="font-dmsans text-teal uppercase tracking-widest text-sm font-bold mb-6">{member.role}</p>
                <p className="font-dmsans text-charcoal/70 mb-8 leading-relaxed max-w-2xl">
                  {member.bio}
                </p>
                <div className={`flex flex-wrap gap-3 mb-8 ${index % 2 !== 0 ? 'md:justify-end' : ''}`}>
                  {member.specialties.map((specialty) => (
                    <span key={specialty} className="px-4 py-2 rounded-full bg-cream text-charcoal text-xs font-dmsans uppercase tracking-wider border border-teal/10">
                      {specialty}
                    </span>
                  ))}
                </div>
                <a href="#" className="font-dmsans text-sm font-bold uppercase tracking-wider text-charcoal hover:text-teal transition-colors">{member.instagram}</a>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="py-32 bg-cream relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[400px] font-cormorant text-yellow/10 leading-none select-none pointer-events-none">
          "
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.p 
            className="font-playfair italic text-3xl md:text-5xl text-charcoal max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            "We don't just take photographs or apply makeup. We preserve the feeling of the most important day of your life, so you can relive it forever."
          </motion.p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="text-center mb-20">
            <h2 className="font-cormorant text-5xl text-charcoal">Our Journey</h2>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-yellow/30 hidden md:block" />

            {TIMELINE.map((item, index) => (
              <motion.div 
                key={index}
                className={`flex flex-col md:flex-row items-center justify-between mb-16 last:mb-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-full md:w-5/12 text-center md:text-left p-6">
                  <h3 className={`font-cormorant text-3xl text-charcoal mb-2 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>{item.title}</h3>
                  <p className={`font-dmsans text-charcoal/70 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>{item.desc}</p>
                </div>
                
                <div className="w-12 h-12 rounded-full bg-cream border-2 border-yellow flex items-center justify-center z-10 my-4 md:my-0">
                  <span className="font-dmsans text-xs font-bold text-teal">{item.year}</span>
                </div>
                
                <div className="w-full md:w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
