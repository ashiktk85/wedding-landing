"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';

const heroImages = [
  '/hero-bg.png',
  '/services-weddings.png',
  '/services-maternity.png'
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play the slider every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);

  return (
    <section className="relative w-full overflow-hidden">
      <Header />

      {/* Hero Image Slider & Content */}
      <div className="relative w-full h-[80vh] md:h-screen flex flex-col items-center justify-center mt-[-3rem] md:mt-[-5rem] z-10 pt-20 bg-black overflow-hidden group">
        
        {/* Animated Background Images */}
        <AnimatePresence initial={false}>
          <motion.div
             key={currentIndex}
             initial={{ opacity: 0, scale: 1.05 }}
             animate={{ opacity: 1, scale: 1 }}
             exit={{ opacity: 0 }}
             transition={{ duration: 1.5 }}
             className="absolute inset-0 w-full h-full"
          >
            <Image
              src={heroImages[currentIndex]}
              alt={`Capture Hero Banner ${currentIndex + 1}`}
              fill
              priority
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/20 z-10"></div>
        
        {/* Centered Text */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="relative z-20 text-center px-4 flex flex-col items-center mt-8"
        >
            <h1 className="text-white font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[0.25em] uppercase mb-8 shadow-sm drop-shadow-md">
                Capturing the beauty of life
            </h1>
            <h2 className="sr-only">Best Wedding Photography in Kerala</h2>
            <Link 
              href="/contact" 
              className="inline-block border border-white text-white uppercase text-xs sm:text-sm tracking-[0.2em] py-3 px-8 hover:bg-white hover:text-gray-900 transition-colors duration-300 drop-shadow-md"
            >
              Inquire Now
            </Link>
        </motion.div>

        {/* Carousel Arrow Controls Details */}
        <div className="absolute bottom-8 md:bottom-16 right-8 md:right-24 z-30 flex items-center space-x-6 sm:space-x-8">
           <button 
             onClick={handlePrev}
             className="text-white/70 hover:text-white transition-all duration-500 transform hover:-translate-x-2"
             aria-label="Previous Slide"
           >
             <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" /></svg>
           </button>
           <div className="w-[1px] h-6 bg-white/30 hidden sm:block"></div>
           <button 
             onClick={handleNext}
             className="text-white/70 hover:text-white transition-all duration-500 transform hover:translate-x-2"
             aria-label="Next Slide"
           >
             <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" /></svg>
           </button>
        </div>

      </div>
    </section>
  );
}
