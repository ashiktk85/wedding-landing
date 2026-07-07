"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '@/lib/testimonialsData';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];

  return (
    <section className="w-full bg-[#f6f2eb] py-24 sm:py-32 relative flex items-center justify-center overflow-hidden">

      <div className="absolute left-[10%] top-[10%] opacity-5 text-[#dfd9ce] font-serif text-[200px] leading-none pointer-events-none select-none">
        &ldquo;
      </div>
      <div className="absolute right-[10%] bottom-[10%] opacity-5 text-[#dfd9ce] font-serif text-[200px] leading-none pointer-events-none select-none transform rotate-180">
        &ldquo;
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-bold uppercase tracking-[0.3em] text-[#a08b77] mb-12"
        >
          Kind Words
        </motion.p>

        <motion.h3
          key={activeIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-gray-800 leading-relaxed mb-10"
        >
          &ldquo;{active.quote}&rdquo;
        </motion.h3>

        <motion.div
          key={`author-${activeIndex}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center"
        >
          <div className="w-12 h-[1px] bg-[#a08b77] mb-6"></div>
          <p className="font-script text-4xl sm:text-5xl text-[#5c544d]">
            {active.names}
          </p>
          <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-gray-400 mt-4">
            {active.subtitle}
          </p>
        </motion.div>

        <div className="flex justify-center items-center space-x-3 mt-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Show testimonial ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                activeIndex === index ? 'bg-[#a08b77] w-6' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
