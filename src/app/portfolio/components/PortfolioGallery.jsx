"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const portfolioItems = [
  { id: 1, src: '/hero-bg.png', category: 'Editorials', span: 'md:col-span-2 md:row-span-2' },
  { id: 2, src: '/intro-bouquet.png', category: 'Details', span: 'col-span-1 row-span-1' },
  { id: 3, src: '/intro-main.png', category: 'Editorials', span: 'col-span-1 md:row-span-2' },
  { id: 4, src: '/services-maternity.png', category: 'Maternity', span: 'col-span-1 row-span-1' },
  { id: 5, src: '/services-weddings.png', category: 'Weddings', span: 'md:col-span-2 row-span-1' },
  { id: 6, src: '/services-family.png', category: 'Maternity', span: 'col-span-1 row-span-1' },
];

const categories = ['All', 'Weddings', 'Editorials', 'Maternity', 'Details'];

export default function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section className="w-full flex-grow bg-[#faf9f6] pb-24 relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none w-96 h-96 transform translate-x-1/3 -translate-y-1/3">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#8b7355" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-16.2,89.5,-0.3C89,15.7,85.4,31.4,77.7,44.9C69.9,58.4,58.1,69.7,44.1,77.6C30.1,85.5,15.1,90,0.6,89.1C-13.9,88.1,-27.8,81.6,-41.1,73.5C-54.4,65.3,-67.2,55.5,-75.7,42.7C-84.2,29.8,-88.4,14.9,-88.2,0.1C-88,-14.7,-83.4,-29.4,-74.6,-41.7C-65.8,-54,-52.8,-63.9,-38.9,-71.3C-25,-78.7,-12.5,-83.6,1.4,-86C15.3,-88.4,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>

      {/* Portfolio Header Banner */}
      <div className="w-full pt-20 pb-16 md:pt-32 md:pb-24 flex flex-col items-center justify-center text-center relative z-10 px-4 mt-[-6rem] md:mt-[-7rem]">
        <div className="h-28 md:h-28"></div> {/* Spacer for fixed/absolute headers if any */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-gray-500 uppercase tracking-[0.4em] text-xs font-bold mb-6"
        >
          Selected Works
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-script text-[#3d3a35] text-6xl md:text-8xl mb-8 leading-tight"
        >
          Our Portfolio
        </motion.h1>
      </div>

      {/* Filter Menu */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-4xl mx-auto px-4 mb-16 relative z-10"
      >
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 border-b border-[#e2d5c5]/70 pb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-xs md:text-sm uppercase tracking-[0.2em] font-medium transition-colors duration-300 relative ${
                activeCategory === category ? 'text-[#8b7355]' : 'text-gray-400 hover:text-gray-700'
              }`}
            >
              {category}
              {activeCategory === category && (
                <motion.span 
                  layoutId="activeTab"
                  className="absolute -bottom-[25px] left-0 right-0 h-[2px] bg-[#8b7355]"
                />
              )}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Gallery Grid */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 min-h-[600px] relative z-10">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-flow-dense auto-rows-[300px] md:auto-rows-[350px] gap-4 lg:gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ duration: 0.6 }}
                className={`relative group overflow-hidden bg-gray-200 shadow-md hover:shadow-xl transition-shadow ${
                  activeCategory === 'All' ? item.span : 'col-span-1 row-span-1'
                }`}
              >
                <Image
                  src={item.src}
                  alt={`${item.category} photography`}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-[1.05]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-center">
                  <p className="text-white font-serif italic text-2xl mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.category}</p>
                  <div className="w-12 h-[1px] bg-white mx-auto scale-0 group-hover:scale-100 transition-transform duration-500 delay-100"></div>
                  <p className="text-white/80 uppercase tracking-[0.2em] text-xs mt-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">View Project</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
           <div className="w-fulltext-center py-24 text-gray-500 italic font-serif text-xl border-dashed border border-[#e2d5c5]/50 flex items-center justify-center h-48">
             No projects found in this category.
           </div>
        )}
      </div>

    </section>
  );
}
