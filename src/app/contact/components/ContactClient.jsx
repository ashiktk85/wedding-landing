"use client";

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteConfig } from '@/lib/siteConfig';

export default function ContactClient() {
  return (
    <main className="w-full flex min-h-screen flex-col font-sans bg-[#faf9f6]">
      <Header />
      
      {/* Contact Banner */}
      <section className="relative w-full pt-32 pb-16 md:pt-40 md:pb-24 flex flex-col items-center justify-center text-center px-4 mt-[-6rem] md:mt-[-7rem] z-10 select-none">
        <div className="h-20"></div>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-gray-500 uppercase tracking-[0.4em] text-xs font-bold mb-6"
        >
          Let's Connect
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-script text-[#3d3a35] text-5xl md:text-7xl mb-8 leading-tight"
        >
          Get in Touch
        </motion.h1>
      </section>

      {/* Main Content Area */}
      <section className="max-w-6xl mx-auto w-full px-6 md:px-12 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-20">
        
        {/* Left Side: Info & Socials */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col gap-10"
        >
          <div>
             <h2 className="font-serif text-3xl md:text-4xl text-gray-800 mb-6 border-b border-[#e2d5c5]/50 pb-4 inline-block">
               We'd love to hear from you.
             </h2>
             <p className="text-gray-600 leading-relaxed font-medium text-[18px] max-w-md">
               Whether you're planning a grand wedding or an intimate elopement, we want to hear your story. Reach out to check our availability or simply say hello.
             </p>
          </div>

          <div className="space-y-6">
             <div>
               <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-1">Email</p>
               <a href={`mailto:${siteConfig.email}`} className="font-serif italic text-xl text-[#8b7355] hover:text-gray-800 transition-colors">{siteConfig.email}</a>
             </div>
             <div>
               <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-1">Phone</p>
               <a href={`tel:${siteConfig.phone}`} className="font-serif italic text-xl text-[#8b7355] hover:text-gray-800 transition-colors">{siteConfig.phoneDisplay}</a>
             </div>
          </div>

          {/* Socials */}
          <div className="pt-8">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4">Follow Us</p>
            <div className="flex gap-4">
               {/* Instagram */}
               <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-[#8b7355]/30 flex items-center justify-center text-[#8b7355] hover:bg-[#8b7355] hover:text-white transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
               </a>
               {/* Facebook */}
               <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-[#8b7355]/30 flex items-center justify-center text-[#8b7355] hover:bg-[#8b7355] hover:text-white transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
               </a>
               {/* WhatsApp */}
               <a href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-[#8b7355]/30 flex items-center justify-center text-[#8b7355] hover:bg-[#8b7355] hover:text-white transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
               </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#e2d5c5]/20"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="space-y-2">
                 <label htmlFor="firstName" className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">First Name</label>
                 <input type="text" id="firstName" className="w-full bg-[#faf9f6] border-b border-gray-200 py-3 px-4 focus:outline-none focus:border-[#8b7355] transition-colors text-sm text-gray-700" placeholder="Jane" />
               </div>
               <div className="space-y-2">
                 <label htmlFor="lastName" className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Last Name</label>
                 <input type="text" id="lastName" className="w-full bg-[#faf9f6] border-b border-gray-200 py-3 px-4 focus:outline-none focus:border-[#8b7355] transition-colors text-sm text-gray-700" placeholder="Doe" />
               </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="space-y-2">
                 <label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Email Address</label>
                 <input type="email" id="email" className="w-full bg-[#faf9f6] border-b border-gray-200 py-3 px-4 focus:outline-none focus:border-[#8b7355] transition-colors text-sm text-gray-700" placeholder="jane@example.com" />
               </div>
               <div className="space-y-2">
                 <label htmlFor="phone" className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Phone Number</label>
                 <input type="tel" id="phone" className="w-full bg-[#faf9f6] border-b border-gray-200 py-3 px-4 focus:outline-none focus:border-[#8b7355] transition-colors text-sm text-gray-700" placeholder="+1 234 567 890" />
               </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="date" className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Event Date & Location</label>
              <input type="text" id="date" className="w-full bg-[#faf9f6] border-b border-gray-200 py-3 px-4 focus:outline-none focus:border-[#8b7355] transition-colors text-sm text-gray-700" placeholder="e.g. October 15, Tuscany" />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Tell Us About Your Day</label>
              <textarea id="message" rows="4" className="w-full bg-[#faf9f6] border-b border-gray-200 py-3 px-4 focus:outline-none focus:border-[#8b7355] transition-colors text-sm text-gray-700 resize-none" placeholder="Share some details with us..."></textarea>
            </div>

            <button type="submit" className="w-full bg-[#3d3a35] text-white uppercase tracking-[0.2em] text-xs font-bold py-4 hover:bg-[#8b7355] transition-colors duration-300 mt-4">
              Send Message
            </button>
          </form>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
