"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BrandLogo from '@/components/BrandLogo';
import { siteConfig } from '@/lib/siteConfig';

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

const bannerKeywords = [
  'Weddings',
  'Editorials',
  'Maternity',
  'Destination Films',
  'Summer 2026',
];

function TopBanner() {
  const [keywordIndex, setKeywordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setKeywordIndex((current) => (current + 1) % bannerKeywords.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden bg-[#e2d5c5] text-gray-700 uppercase text-[9px] sm:text-[10px] tracking-[0.18em] py-1 text-center w-full font-medium">
      <span className="opacity-60">Now booking</span>
      <span className="mx-2 sm:mx-3 inline-flex items-center justify-center align-middle">
        <span className="relative inline-block h-[1.25em] min-w-[9rem] sm:min-w-[10rem] overflow-hidden align-middle">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={bannerKeywords[keywordIndex]}
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '-100%', opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 flex items-center justify-center text-[#8b7355] font-bold tracking-[0.15em]"
            >
              {bannerKeywords[keywordIndex]}
            </motion.span>
          </AnimatePresence>
        </span>
      </span>
      <Link
        href="/contact"
        className="opacity-50 hover:opacity-100 transition"
      >
        Inquire
      </Link>
    </div>
  );
}

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
  const isCompactNav = heroScroll ? isScrolled : true;

  const navHeightClass = isCompactNav
    ? 'min-h-[4.75rem] md:min-h-[6rem] py-3'
    : 'min-h-[7rem] md:min-h-[9rem] lg:min-h-[10rem] py-3.5 md:py-5';
  const logoSize = isCompactNav ? 'nav' : 'nav-hero';
  const menuIconClass = isCompactNav ? 'w-6 h-6' : 'w-7 h-7';

  return (
    <>
      <motion.div
        initial={heroScroll && isHeroOverlay ? { opacity: 0, y: -20 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`${
          heroScroll ? 'fixed top-0 left-0 right-0' : 'relative'
        } w-full z-[70] transition-all duration-300`}
      >
        <AnimatePresence>
          {showTopBanner && (
            <motion.div
              initial={heroScroll ? { height: 0, opacity: 0 } : false}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <TopBanner />
            </motion.div>
          )}
        </AnimatePresence>

        <header
          className={`w-full z-[60] transition-all duration-300 overflow-visible ${
            isHeroOverlay
              ? 'bg-transparent shadow-none'
              : 'bg-white shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]'
          }`}
        >
          <div className="w-full px-4 md:px-12 lg:px-24">
            <motion.div
              className={`flex justify-between items-center relative transition-all duration-300 overflow-visible ${navHeightClass}`}
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
                className="shrink-0 flex items-center justify-center z-[70] overflow-visible px-2"
              >
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block overflow-visible transition-opacity duration-300 hover:opacity-90"
                  aria-label={siteConfig.name}
                >
                  <BrandLogo
                    variant={isHeroOverlay ? 'white' : 'black'}
                    size={logoSize}
                    priority
                  />
                </Link>
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
                    <svg className={menuIconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className={menuIconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            className="fixed inset-0 z-[50] bg-[#faf9f6]/95 backdrop-blur-md flex flex-col items-center md:hidden pt-24 pb-10 px-4 h-screen"
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
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} aria-label={siteConfig.name}>
                <BrandLogo variant="black" size="md" />
              </Link>
              <a href={`mailto:${siteConfig.email}`} className="uppercase text-[9px] tracking-[0.2em] text-gray-500 mt-4">
                {siteConfig.email}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
