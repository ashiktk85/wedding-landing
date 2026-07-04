"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = {
  left: [
    { href: '/about', label: 'About' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/films', label: 'Films' },
  ],
  right: [
    { href: '/blog', label: 'Journal' },
    { href: '/packages', label: 'Packages' },
    { href: '/contact', label: 'Contact' },
  ],
};

const heroNavContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.35 },
  },
};

const heroNavItemLeft = {
  hidden: { opacity: 0, y: -12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const heroNavItemRight = {
  hidden: { opacity: 0, y: -12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const heroLogo = {
  hidden: { opacity: 0, y: -20, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
  },
};

const heroMenuButton = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.5 },
  },
};

export default function Header({ heroScroll = false }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isHeroOverlay = heroScroll && !isScrolled;
  const showHeroIntro = isHeroOverlay;

  const navRowMotion = showHeroIntro
    ? { variants: heroNavContainer, initial: 'hidden', animate: 'visible' }
    : { initial: false, animate: { opacity: 1, y: 0 } };

  const logoMotion = showHeroIntro
    ? { variants: heroLogo }
    : { initial: false, animate: { opacity: 1, y: 0, scale: 1 } };

  const menuButtonMotion = showHeroIntro
    ? { variants: heroMenuButton }
    : { initial: false, animate: { opacity: 1, y: 0 } };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!heroScroll) return;

    const onScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [heroScroll]);

  const linkClass = isHeroOverlay
    ? 'text-white/90 uppercase text-[10px] lg:text-xs tracking-[0.25em] font-medium hover:text-white transition-colors relative group'
    : 'text-gray-600 uppercase text-[10px] lg:text-xs tracking-[0.25em] font-medium hover:text-black transition-colors relative group';

  const underlineClass = isHeroOverlay
    ? 'absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full'
    : 'absolute -bottom-2 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full';

  const showTopBanner = !heroScroll || isScrolled;

  return (
    <>
      <motion.div
        initial={heroScroll && isHeroOverlay ? { opacity: 0, y: -20 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`${
          heroScroll ? 'fixed top-0 left-0 right-0' : 'relative'
        } w-full z-[70] transition-all duration-300 overflow-x-hidden`}
      >
        <AnimatePresence>
          {showTopBanner && (
            <motion.div
              initial={heroScroll ? { height: 0, opacity: 0 } : false}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="overflow-hidden bg-[#e2d5c5] text-gray-700 uppercase text-[10px] sm:text-xs tracking-[0.2em] py-2 text-center w-full font-medium"
            >
              Now taking bookings for summer{' '}
              <Link
                href="/contact"
                className="ml-4 opacity-50 hover:opacity-100 transition"
              >
                Inquire Now
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        <header
          className={`w-full z-[60] transition-all duration-300 ${
            isHeroOverlay
              ? 'bg-transparent shadow-none'
              : 'bg-white shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]'
          }`}
        >
          <div className="w-full px-4 md:px-12 lg:px-24">
            <motion.div
              className="flex justify-between items-center h-20 md:h-28 relative"
              {...navRowMotion}
            >

              <nav className="hidden md:flex flex-1 items-center justify-start space-x-6 lg:space-x-12">
                {navLinks.left.map(({ href, label }) => (
                  <motion.div
                    key={href}
                    {...(showHeroIntro
                      ? { variants: heroNavItemLeft }
                      : { initial: false, animate: { opacity: 1, y: 0 } })}
                  >
                    <Link href={href} className={linkClass}>
                      {label}
                      <span className={underlineClass}></span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                {...logoMotion}
                className="flex-shrink-0 flex flex-col items-center justify-center z-[70]"
              >
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-serif text-2xl md:text-4xl tracking-[0.1em] transition-colors duration-300 ${
                    isHeroOverlay ? 'text-white' : 'text-[#2c2a26]'
                  }`}
                >
                  FOCUSMEDIA
                </Link>
                <span
                  className={`font-script text-base md:text-lg -mt-1 md:-mt-2 transition-colors duration-300 ${
                    isHeroOverlay ? 'text-white/80' : 'text-[#a08b77]'
                  }`}
                >
                  Productions
                </span>
              </motion.div>

              <nav className="hidden md:flex flex-1 items-center justify-end space-x-6 lg:space-x-12">
                {navLinks.right.map(({ href, label }) => (
                  <motion.div
                    key={href}
                    {...(showHeroIntro
                      ? { variants: heroNavItemRight }
                      : { initial: false, animate: { opacity: 1, y: 0 } })}
                  >
                    <Link href={href} className={linkClass}>
                      {label}
                      <span className={underlineClass}></span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                {...menuButtonMotion}
                className="md:hidden flex items-center flex-1 justify-end z-[70]"
              >
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className={`focus:outline-none p-2 transition-colors duration-300 ${
                    isHeroOverlay ? 'text-white' : 'text-gray-800'
                  }`}
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
              </motion.div>
            </motion.div>
          </div>
        </header>
      </motion.div>

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
              {[...navLinks.left, ...navLinks.right].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[#3d3a35] uppercase text-xl sm:text-2xl tracking-[0.25em] font-medium hover:text-[#a08b77] transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto flex flex-col items-center justify-center pb-8 border-t border-[#e2d5c5] w-full max-w-[250px] pt-8">
              <span className="font-script text-[#a08b77] text-3xl mb-4">FocusMedia</span>
              <a href="mailto:hello@focusmediaproductions.com" className="uppercase text-[9px] tracking-[0.2em] text-gray-500">
                hello@focusmediaproductions.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
