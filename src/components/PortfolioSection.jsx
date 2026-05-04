"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function PortfolioSection() {
  return (
    <section className="w-full bg-[#faf9f6] py-24 sm:py-32 relative">
      
      {/* Header section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 lg:mb-24"
      >
        <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-gray-500 mb-6">
          Featured Work
        </h2>
        <p className="font-script text-5xl md:text-6xl text-[#3d3a35]">
          Moments set in stone
        </p>
      </motion.div>

      {/* Masonry / Staggered Layout */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          
          {/* Column 1 - Pushed down slightly */}
          <motion.div 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="flex flex-col gap-6 lg:gap-10 lg:mt-12"
          >
             <div className="relative w-full aspect-[3/4] overflow-hidden group shadow-lg">
                <Image 
                  src="/services-weddings.png" 
                  alt="Wedding ceremony" 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
             </div>
             <div className="relative w-full aspect-square overflow-hidden group shadow-lg">
                <Image 
                  src="/intro-bouquet.png" 
                  alt="Floral detail" 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
             </div>
          </motion.div>

          {/* Column 2 - Pushed up */}
          <motion.div 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
             className="flex flex-col gap-6 lg:gap-10 mt-6 lg:-mt-12"
          >
             <div className="relative w-full aspect-square overflow-hidden group shadow-lg">
                <Image 
                  src="/intro-main.png" 
                  alt="Couple portrait" 
                  fill 
                  className="object-cover object-top transition-transform duration-1000 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
             </div>
             <div className="relative w-full aspect-[4/5] overflow-hidden group shadow-lg">
                <Image 
                  src="/services-maternity.png" 
                  alt="Maternity photography" 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
             </div>
          </motion.div>

          {/* Column 3 - Centered vertically more */}
          <motion.div 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
             className="flex flex-col gap-6 lg:gap-10 lg:mt-24"
          >
             <div className="relative w-full aspect-[4/5] overflow-hidden group shadow-lg">
                <Image 
                  src="/hero-bg.png" 
                  alt="Landscape wide shot" 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
             </div>
             <div className="w-full flex items-center justify-center p-8 bg-[#f4efe8] aspect-square shadow-lg">
                <div className="text-center">
                   <p className="font-serif italic text-2xl text-gray-700 mb-4">View Complete</p>
                   <p className="font-sans font-bold uppercase tracking-[0.2em] text-xs text-gray-500 mb-8 border-b border-gray-300 pb-4 inline-block">Collection</p>
                   <div>
                       <a href="/portfolio" className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[#8b7355] text-[#8b7355] hover:bg-[#8b7355] hover:text-white transition-colors">
                           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                       </a>
                   </div>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
