"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-[#e2d5c5] text-gray-700 uppercase text-[10px] sm:text-xs tracking-[0.2em] py-2 text-center w-full z-[70] relative font-medium">
        Now taking bookings for summer <span className="ml-4 opacity-50 cursor-pointer hover:opacity-100 transition">Inquire Now</span>
      </div>

      {/* Navigation */}
      <header className="bg-white w-full z-[60] relative shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]">
        <div className="w-full px-4 md:px-12 lg:px-24">
          <div className="flex justify-between items-center h-20 md:h-28 relative">
            
            {/* Left Nav */}
            <nav className="hidden md:flex flex-1 items-center justify-start space-x-6 lg:space-x-12">
              <Link href="/about" className="text-gray-600 uppercase text-[10px] lg:text-xs tracking-[0.25em] font-medium hover:text-black transition-colors relative group">
                About
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/portfolio" className="text-gray-600 uppercase text-[10px] lg:text-xs tracking-[0.25em] font-medium hover:text-black transition-colors relative group">
                Portfolio
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/films" className="text-gray-600 uppercase text-[10px] lg:text-xs tracking-[0.25em] font-medium hover:text-black transition-colors relative group">
                Films
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </nav>

            {/* Logo area */}
            <div className="flex-shrink-0 flex flex-col items-center justify-center z-[70]">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="font-serif text-2xl md:text-4xl tracking-[0.1em] text-[#2c2a26]">
                FOCUSMEDIA
              </Link>
              <span className="font-script text-[#a08b77] text-base md:text-lg -mt-1 md:-mt-2">Productions</span>
            </div>

            {/* Right Nav */}
            <nav className="hidden md:flex flex-1 items-center justify-end space-x-6 lg:space-x-12">
              <Link href="/blog" className="text-gray-600 uppercase text-[10px] lg:text-xs tracking-[0.25em] font-medium hover:text-black transition-colors relative group">
                Journal
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/packages" className="text-gray-600 uppercase text-[10px] lg:text-xs tracking-[0.25em] font-medium hover:text-black transition-colors relative group">
                Packages
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/contact" className="text-gray-600 uppercase text-[10px] lg:text-xs tracking-[0.25em] font-medium hover:text-black transition-colors relative group">
                Contact
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center flex-1 justify-end z-[70]">
               <button 
                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                 className="text-gray-800 focus:outline-none p-2"
                 aria-label="Toggle Menu"
               >
                 {isMobileMenuOpen ? (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                 ) : (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />
                    </svg>
                 )}
               </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[50] bg-[#faf9f6]/95 backdrop-blur-md flex flex-col items-center md:hidden pt-32 pb-10 px-4 h-screen"
          >
             <nav className="flex flex-col items-center space-y-8 text-center mt-12 w-full">
                <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-[#3d3a35] uppercase text-xl sm:text-2xl tracking-[0.25em] font-medium hover:text-[#a08b77] transition-colors">About</Link>
                <Link href="/portfolio" onClick={() => setIsMobileMenuOpen(false)} className="text-[#3d3a35] uppercase text-xl sm:text-2xl tracking-[0.25em] font-medium hover:text-[#a08b77] transition-colors">Portfolio</Link>
                <Link href="/films" onClick={() => setIsMobileMenuOpen(false)} className="text-[#3d3a35] uppercase text-xl sm:text-2xl tracking-[0.25em] font-medium hover:text-[#a08b77] transition-colors">Films</Link>
                <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-[#3d3a35] uppercase text-xl sm:text-2xl tracking-[0.25em] font-medium hover:text-[#a08b77] transition-colors">Journal</Link>
                <Link href="/packages" onClick={() => setIsMobileMenuOpen(false)} className="text-[#3d3a35] uppercase text-xl sm:text-2xl tracking-[0.25em] font-medium hover:text-[#a08b77] transition-colors">Packages</Link>
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-[#3d3a35] uppercase text-xl sm:text-2xl tracking-[0.25em] font-medium hover:text-[#a08b77] transition-colors">Contact</Link>
             </nav>
             <div className="mt-auto flex flex-col items-center justify-center pb-8 border-t border-[#e2d5c5] w-full max-w-[250px] pt-8">
               <span className="font-script text-[#a08b77] text-3xl mb-4">FocusMedia</span>
               <a href="mailto:hello@focusmediaproductions.com" className="uppercase text-[9px] tracking-[0.2em] text-gray-500">hello@focusmediaproductions.com</a>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
