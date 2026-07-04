"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import IkImage from '@/components/IkImage';
import { approachSlides } from '@/lib/imagePaths';

export default function ImageSliderSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % approachSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-white relative overflow-hidden flex flex-col min-h-screen lg:h-screen">
      <div className="w-full flex-grow grid grid-cols-1 lg:grid-cols-2 lg:h-full">

        <div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-full bg-black overflow-hidden order-2 lg:order-1">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentIndex}
              initial={{ x: "-100%", opacity: 0.5 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0.5 }}
              transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <IkImage
                src={approachSlides[currentIndex]}
                alt={`Wedding slider frame ${currentIndex + 1}`}
                fill
                preset="hero"
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
            {approachSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                 currentIndex === idx ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              ></button>
            ))}
          </div>
        </div>

        <div className="relative w-full flex flex-col justify-center px-8 sm:px-16 lg:pl-20 xl:pl-32 lg:pr-12 xl:pr-32 py-16 lg:py-24 order-1 lg:order-2">
           <div className="max-w-2xl">
             <motion.h2
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="font-serif italic text-[#a08b77] text-2xl md:text-3xl lg:text-4xl mb-4"
             >
                 Our Approach
             </motion.h2>
             <motion.h3
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="font-sans text-3xl md:text-5xl lg:text-5xl uppercase tracking-[0.2em] font-bold text-gray-800 mb-8 leading-tight"
             >
                 Crafting Timeless <br/><span className="text-gray-400">Masterpieces</span>
             </motion.h3>
             <motion.p
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.4 }}
               className="font-sans text-gray-500 leading-relaxed mb-10"
             >
                 We believe that every love story is unique and deserves to be told with absolute authenticity. Our approach is unobtrusive, allowing natural moments to unfold organically. We blend seamlessly into your day, capturing the fleeting gestures, the joyous tears, and the grand celebrations with a cinematic eye.
             </motion.p>

             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.6 }}
             >
                 <a
                   href="/about"
                   className="inline-block border-b border-gray-800 pb-2 text-xs uppercase tracking-[0.3em] font-bold text-gray-800 hover:text-[#a08b77] hover:border-[#a08b77] transition-colors"
                 >
                   Discover Our Story
                 </a>
             </motion.div>
           </div>
        </div>

      </div>
    </section>
  );
}
