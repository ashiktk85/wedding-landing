"use client";

import { motion } from 'framer-motion';
import { packageFaqs } from '@/lib/faqData';

const packages = [
  {
    id: 'essential',
    name: 'The Essential',
    price: 'Starting at ₹50,000',
    description: 'Perfect for intimate celebrations and civil ceremonies, focusing on the beautiful core moments of your day.',
    popular: false,
    features: [
      'Up to 6 hours of continuous coverage',
      '1 Lead Photographer',
      'High-resolution edited images (300+)',
      'Private online gallery delivery',
      'Pre-wedding consultation'
    ]
  },
  {
    id: 'premium',
    name: 'The Premium',
    price: 'Starting at ₹85,000',
    description: 'Our most popular choice for comprehensive wedding day coverage, ensuring no detail goes unnoticed.',
    popular: true,
    features: [
      'Up to 10 hours of continuous coverage',
      '2 Photographers (Lead + Second Shooter)',
      'High-resolution edited images (600+)',
      'Complimentary Engagement Session',
      'Private online gallery delivery',
      'Custom fine art wedding album (20 pages)'
    ]
  },
  {
    id: 'signature',
    name: 'The Signature',
    price: 'Starting at ₹1,50,000',
    description: 'The ultimate luxury experience for grand multi-day celebrations with full creative storytelling.',
    popular: false,
    features: [
      'Full weekend coverage (Up to 3 days)',
      'Creative Team (2 Photographers, 1 Assistant)',
      'High-resolution edited images (1000+)',
      'Cinematic highlight film (5-7 mins)',
      'Complimentary Engagement & Mehndi coverage',
      'Premium heirloom wedding album (40 pages)',
      'Next-day sneak peek preview gallery'
    ]
  }
];

const addOns = [
  { name: 'Cinematic Wedding Film', price: '₹40,000' },
  { name: 'Additional Photographer', price: '₹15,000 / day' },
  { name: 'Engagement Session', price: '₹20,000' },
  { name: 'Drone Coverage', price: '₹10,000 / day' },
  { name: 'Canvas Prints & Wall Art', price: 'Custom Quote' },
];

export default function PackagesClient() {
  return (
    <section className="w-full flex-grow bg-[#faf9f6] pb-24 relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 left-0 opacity-5 pointer-events-none w-96 h-96 transform -translate-x-1/3 -translate-y-1/3">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#8b7355" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-16.2,89.5,-0.3C89,15.7,85.4,31.4,77.7,44.9C69.9,58.4,58.1,69.7,44.1,77.6C30.1,85.5,15.1,90,0.6,89.1C-13.9,88.1,-27.8,81.6,-41.1,73.5C-54.4,65.3,-67.2,55.5,-75.7,42.7C-84.2,29.8,-88.4,14.9,-88.2,0.1C-88,-14.7,-83.4,-29.4,-74.6,-41.7C-65.8,-54,-52.8,-63.9,-38.9,-71.3C-25,-78.7,-12.5,-83.6,1.4,-86C15.3,-88.4,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>

      {/* Header Banner */}
      <div className="w-full pt-20 pb-16 md:pt-32 md:pb-24 flex flex-col items-center justify-center text-center relative z-10 px-4 mt-[-6rem] md:mt-[-7rem]">
        <div className="h-28 md:h-28"></div> {/* Spacer for fixed/absolute headers if any */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-gray-500 uppercase tracking-[0.4em] text-xs font-bold mb-6"
        >
          Investment
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-script text-[#3d3a35] text-6xl md:text-8xl mb-8 leading-tight"
        >
          Our Packages
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="font-sans text-gray-500 max-w-2xl text-sm md:text-base leading-relaxed"
        >
          We believe in transparent pricing and exceptional value. Every love story is unique, and we offer carefully curated packages to beautifully capture yours. We also offer bespoke options tailored to your exact needs.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          className="font-sans text-gray-600 max-w-2xl text-sm md:text-base leading-relaxed mt-6"
        >
          We believe pricing shouldn&apos;t be a mystery. Here&apos;s exactly what&apos;s included in every package — no hidden costs, no vague &apos;starting from&apos; games.
        </motion.p>
      </div>

      {/* Packages Grid */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col relative overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
                pkg.popular 
                  ? 'bg-white border focus-within:ring-2 ring-[#8b7355] border-[#8b7355] shadow-2xl z-10 scale-100 md:scale-105' 
                  : 'bg-white border border-[#e2d5c5]/50 shadow-md'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 bg-[#8b7355] text-white text-center py-1.5 uppercase tracking-[0.2em] text-[10px] font-bold">
                  Most Popular
                </div>
              )}
              
              <div className={`p-8 md:p-10 flex-grow flex flex-col ${pkg.popular ? 'pt-12' : ''}`}>
                <h3 className="font-serif italic text-3xl text-[#3d3a35] mb-2">{pkg.name}</h3>
                <p className="font-sans text-[#8b7355] font-semibold text-lg mb-6">{pkg.price}</p>
                <div className="w-12 h-[1px] bg-[#e2d5c5] mb-6"></div>
                <p className="font-sans text-gray-500 text-sm leading-relaxed mb-8 h-auto md:h-16">
                  {pkg.description}
                </p>

                <div className="flex-grow">
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-600">
                        <svg className="w-4 h-4 text-[#8b7355] mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a 
                  href="/contact" 
                  className={`mt-auto block text-center uppercase tracking-widest text-xs font-bold py-4 border transition-colors duration-300 ${
                    pkg.popular 
                      ? 'bg-[#8b7355] border-[#8b7355] text-white hover:bg-transparent hover:text-[#8b7355]' 
                      : 'bg-transparent border-[#e2d5c5] text-gray-600 hover:bg-[#1a1a1a] hover:border-[#1a1a1a] hover:text-white'
                  }`}
                >
                  Inquire Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Add-Ons Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto px-4 mt-32 relative z-10"
      >
        <div className="text-center mb-12">
          <h2 className="font-serif italic text-4xl text-[#3d3a35] mb-4">A La Carte & Add-Ons</h2>
          <p className="font-sans text-gray-500 text-sm uppercase tracking-widest">Customize your perfect collection</p>
        </div>

        <div className="bg-white border border-[#e2d5c5]/50 shadow-sm p-8 md:p-12">
          <ul className="divide-y divide-[#e2d5c5]/30">
            {addOns.map((item, index) => (
              <li key={index} className="py-4 flex flex-col md:flex-row md:items-center justify-between group">
                <span className="font-serif text-lg text-gray-800 group-hover:text-[#8b7355] transition-colors">{item.name}</span>
                <span className="font-sans text-sm text-gray-500 tracking-wider mt-1 md:mt-0">{item.price}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <p className="text-sm text-gray-500 italic mb-6">Looking for something else? We offer fully custom packages.</p>
            <a href="/contact" className="inline-block text-xs uppercase tracking-[0.2em] font-bold text-[#8b7355] hover:text-gray-900 border-b border-[#8b7355] pb-1 transition-colors">Request a Custom Quote</a>
          </div>
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto px-4 mt-32 relative z-10"
      >
        <div className="text-center mb-12">
          <h2 className="font-serif italic text-4xl text-[#3d3a35] mb-4">Frequently Asked Questions</h2>
          <p className="font-sans text-gray-500 text-sm uppercase tracking-widest">Wedding photography in Kerala</p>
        </div>

        <div className="space-y-3">
          {packageFaqs.map((faq) => (
            <details key={faq.question} className="bg-white border border-[#e2d5c5]/50 shadow-sm overflow-hidden group">
              <summary className="px-6 py-5 flex justify-between items-center gap-4 cursor-pointer list-none hover:bg-[#faf9f6] transition-colors [&::-webkit-details-marker]:hidden">
                <span className="font-serif text-lg text-gray-800">{faq.question}</span>
                <span className="text-[#8b7355] text-xl flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-[#e2d5c5]/30 pt-4">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
