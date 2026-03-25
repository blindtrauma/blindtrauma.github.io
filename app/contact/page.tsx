'use client';

import { useState, useTransition } from 'react';
import { motion } from 'motion/react';
import PageTransition from '@/components/layout/PageTransition';
import { MapPin, Phone, Mail, Instagram, Facebook, PinIcon as Pinterest, CheckCircle2, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { submitContactForm } from '@/app/actions';
import mapImg from '@/images/wedding_details/wedding_details_002.jpg';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  date: z.string().min(1, 'Please select a wedding date'),
  service: z.string().min(1, 'Please select a service'),
  venue: z.string().optional(),
  source: z.string().optional(),
  vision: z.string().min(10, 'Please tell us a bit more about your vision')
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      date: '',
      service: '',
      venue: '',
      source: '',
      vision: ''
    }
  });

  const onSubmit = (data: ContactFormValues) => {
    setServerError(null);
    startTransition(async () => {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value) formData.append(key, value);
      });

      const result = await submitContactForm(null, formData);
      
      if (result.success) {
        setIsSubmitted(true);
        reset();
      } else {
        setServerError(result.message || 'Failed to submit form.');
      }
    });
  };

  return (
    <PageTransition>
      <section className="pt-32 pb-24 bg-cream min-h-screen">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="text-center mb-16">
            <motion.h1 
              className="font-cormorant text-5xl md:text-7xl text-charcoal mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Let's Connect
            </motion.h1>
            <motion.p 
              className="font-dmsans text-charcoal/60 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We would be honored to be part of your special day. Fill out the form below, and we'll get back to you within 24 hours.
            </motion.p>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
            
            {/* Left Side: Contact Info */}
            <motion.div 
              className="w-full lg:w-2/5 space-y-12"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div>
                <h3 className="font-cormorant text-3xl text-charcoal mb-6">Contact Information</h3>
                <ul className="space-y-6 font-dmsans text-charcoal/80">
                  <li className="flex items-start">
                    <MapPin className="w-5 h-5 text-teal mr-4 mt-1 flex-shrink-0" />
                    <span>123 Bridal Avenue, Suite 400<br/>New York, NY 10001<br/>Available Worldwide</span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="w-5 h-5 text-teal mr-4 flex-shrink-0" />
                    <a href="tel:+918384856272" className="hover:text-teal transition-colors">+918384856272</a>
                  </li>
                  <li className="flex items-center">
                    <Mail className="w-5 h-5 text-teal mr-4 flex-shrink-0" />
                    <a href="mailto:mananbajaj4.mb@gmail.com" className="hover:text-teal transition-colors">mananbajaj4.mb@gmail.com</a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-cormorant text-2xl text-charcoal mb-4">Studio Hours</h3>
                <ul className="space-y-2 font-dmsans text-charcoal/80 text-sm">
                  <li className="flex justify-between border-b border-teal/10 pb-2"><span>Tuesday - Friday</span> <span>10:00 AM - 6:00 PM</span></li>
                  <li className="flex justify-between border-b border-teal/10 pb-2 pt-2"><span>Saturday</span> <span>By Appointment (Weddings)</span></li>
                  <li className="flex justify-between pt-2"><span>Sunday - Monday</span> <span>Closed</span></li>
                </ul>
              </div>

              <div>
                <h3 className="font-cormorant text-2xl text-charcoal mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/manan._.bajaj/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-teal/20 flex items-center justify-center text-teal hover:bg-teal hover:text-cream transition-all duration-300">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full border border-teal/20 flex items-center justify-center text-teal hover:bg-teal hover:text-cream transition-all duration-300">
                    <Pinterest size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full border border-teal/20 flex items-center justify-center text-teal hover:bg-teal hover:text-cream transition-all duration-300">
                    <Facebook size={20} />
                  </a>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-48 bg-white rounded-xl border border-teal/10 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500" style={{ backgroundImage: `url(${mapImg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div className="relative z-10 w-12 h-12 bg-cream rounded-full flex items-center justify-center shadow-lg">
                  <MapPin className="text-teal w-6 h-6" />
                </div>
              </div>
            </motion.div>

            {/* Right Side: Form */}
            <motion.div 
              className="w-full lg:w-3/5 bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-teal/5"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {isSubmitted ? (
                <motion.div 
                  className="h-full flex flex-col items-center justify-center text-center py-20"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-20 h-20 bg-cream rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-teal" />
                  </div>
                  <h3 className="font-cormorant text-4xl text-charcoal mb-4">Inquiry Received</h3>
                  <p className="font-dmsans text-charcoal/70 mb-8 max-w-md">
                    Thank you for reaching out! We've received your details and will be in touch within 24 hours to schedule your consultation.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="font-dmsans text-sm font-bold uppercase tracking-wider text-teal hover:text-charcoal transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-px after:bg-teal after:origin-right hover:after:origin-left hover:after:scale-x-0 transition-all"
                  >
                    Send Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  {serverError && (
                    <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm font-dmsans">
                      {serverError}
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative">
                      <input 
                        type="text" 
                        {...register('name')}
                        className={`w-full bg-transparent border-b py-3 text-charcoal font-dmsans focus:outline-none transition-colors peer placeholder-transparent ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-charcoal/20 focus:border-teal'}`}
                        placeholder="Full Name"
                      />
                      <label className="absolute left-0 top-3 text-charcoal/50 font-dmsans text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-teal peer-valid:-top-4 peer-valid:text-xs">Full Name *</label>
                      {errors.name && <p className="text-red-500 text-xs mt-1 absolute -bottom-5">{errors.name.message}</p>}
                    </div>
                    <div className="relative">
                      <input 
                        type="email" 
                        {...register('email')}
                        className={`w-full bg-transparent border-b py-3 text-charcoal font-dmsans focus:outline-none transition-colors peer placeholder-transparent ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-charcoal/20 focus:border-teal'}`}
                        placeholder="Email Address"
                      />
                      <label className="absolute left-0 top-3 text-charcoal/50 font-dmsans text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-teal peer-valid:-top-4 peer-valid:text-xs">Email Address *</label>
                      {errors.email && <p className="text-red-500 text-xs mt-1 absolute -bottom-5">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative">
                      <input 
                        type="tel" 
                        {...register('phone')}
                        className={`w-full bg-transparent border-b py-3 text-charcoal font-dmsans focus:outline-none transition-colors peer placeholder-transparent ${errors.phone ? 'border-red-500 focus:border-red-500' : 'border-charcoal/20 focus:border-teal'}`}
                        placeholder="Phone Number"
                      />
                      <label className="absolute left-0 top-3 text-charcoal/50 font-dmsans text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-teal peer-valid:-top-4 peer-valid:text-xs">Phone Number</label>
                      {errors.phone && <p className="text-red-500 text-xs mt-1 absolute -bottom-5">{errors.phone.message}</p>}
                    </div>
                    <div className="relative">
                      <input 
                        type="date" 
                        {...register('date')}
                        className={`w-full bg-transparent border-b py-3 text-charcoal font-dmsans focus:outline-none transition-colors peer ${errors.date ? 'border-red-500 focus:border-red-500' : 'border-charcoal/20 focus:border-teal'}`}
                      />
                      <label className="absolute left-0 -top-4 text-xs text-charcoal/50 font-dmsans">Wedding Date *</label>
                      {errors.date && <p className="text-red-500 text-xs mt-1 absolute -bottom-5">{errors.date.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative">
                      <select 
                        {...register('service')}
                        defaultValue=""
                        className={`w-full bg-transparent border-b py-3 text-charcoal font-dmsans focus:outline-none transition-colors appearance-none ${errors.service ? 'border-red-500 focus:border-red-500' : 'border-charcoal/20 focus:border-teal'}`}
                      >
                        <option value="" disabled>Select Service *</option>
                        <option value="makeup">Bridal Makeup</option>
                        <option value="photography">Wedding Photography</option>
                        <option value="both">Both Services</option>
                      </select>
                      {errors.service && <p className="text-red-500 text-xs mt-1 absolute -bottom-5">{errors.service.message}</p>}
                    </div>
                    <div className="relative">
                      <input 
                        type="text" 
                        {...register('venue')}
                        className={`w-full bg-transparent border-b py-3 text-charcoal font-dmsans focus:outline-none transition-colors peer placeholder-transparent ${errors.venue ? 'border-red-500 focus:border-red-500' : 'border-charcoal/20 focus:border-teal'}`}
                        placeholder="Venue / Location"
                      />
                      <label className="absolute left-0 top-3 text-charcoal/50 font-dmsans text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-teal peer-valid:-top-4 peer-valid:text-xs">Venue / Location</label>
                      {errors.venue && <p className="text-red-500 text-xs mt-1 absolute -bottom-5">{errors.venue.message}</p>}
                    </div>
                  </div>

                  <div className="relative">
                    <select 
                      {...register('source')}
                      defaultValue=""
                      className={`w-full bg-transparent border-b py-3 text-charcoal font-dmsans focus:outline-none transition-colors appearance-none ${errors.source ? 'border-red-500 focus:border-red-500' : 'border-charcoal/20 focus:border-teal'}`}
                    >
                      <option value="" disabled>How did you hear about us?</option>
                      <option value="instagram">Instagram</option>
                      <option value="google">Google Search</option>
                      <option value="referral">Friend / Referral</option>
                      <option value="vendor">Vendor Recommendation</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.source && <p className="text-red-500 text-xs mt-1 absolute -bottom-5">{errors.source.message}</p>}
                  </div>

                  <div className="relative">
                    <textarea 
                      {...register('vision')}
                      rows={4}
                      className={`w-full bg-transparent border-b py-3 text-charcoal font-dmsans focus:outline-none transition-colors peer placeholder-transparent resize-none ${errors.vision ? 'border-red-500 focus:border-red-500' : 'border-charcoal/20 focus:border-teal'}`}
                      placeholder="Tell us about your vision"
                    />
                    <label className="absolute left-0 top-3 text-charcoal/50 font-dmsans text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-teal peer-valid:-top-4 peer-valid:text-xs">Tell us about your vision *</label>
                    {errors.vision && <p className="text-red-500 text-xs mt-1 absolute -bottom-5">{errors.vision.message}</p>}
                  </div>

                  <button 
                    type="submit"
                    disabled={isPending}
                    className="w-full py-4 rounded-full bg-charcoal text-cream hover:bg-teal transition-all duration-300 text-sm font-medium tracking-wider uppercase disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send My Inquiry \u2192'
                    )}
                  </button>
                </form>
              )}
            </motion.div>

          </div>
        </div>
      </section>
    </PageTransition>
  );
}
