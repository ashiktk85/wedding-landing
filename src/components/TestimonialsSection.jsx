"use client";

import { motion } from 'framer-motion';

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-[#f6f2eb] py-24 sm:py-32 relative flex items-center justify-center overflow-hidden">
      
      {/* Decorative large quotes in background */}
      <div className="absolute left-[10%] top-[10%] opacity-5 text-[#dfd9ce] font-serif text-[200px] leading-none pointer-events-none select-none">
        &ldquo;
      </div>
      <div className="absolute right-[10%] bottom-[10%] opacity-5 text-[#dfd9ce] font-serif text-[200px] leading-none pointer-events-none select-none transform rotate-180">
        &ldquo;
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Eyebrow */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-bold uppercase tracking-[0.3em] text-[#a08b77] mb-12"
        >
          Kind Words
        </motion.p>

        {/* Quote */}
        <motion.h3 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-gray-800 leading-relaxed mb-10"
        >
          "They captured the pure essence and emotion of our wedding day. Every time we look at our photos, we are instantly transported back to those magical moments. Truly an artist with a visionary eye."
        </motion.h3>

        {/* Author / Signature */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center"
        >
          <div className="w-12 h-[1px] bg-[#a08b77] mb-6"></div>
          <p className="font-script text-4xl sm:text-5xl text-[#5c544d]">
            Sarah & Michael
          </p>
          <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-gray-400 mt-4">
            Destination Wedding in Kerala
          </p>
        </motion.div>

        {/* Pager Dots */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center items-center space-x-3 mt-16"
        >
           <button className="w-2 h-2 rounded-full bg-[#a08b77] transition-all"></button>
           <button className="w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-400 transition-all"></button>
           <button className="w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-400 transition-all"></button>
        </motion.div>

      </div>
    </section>
  );
}
