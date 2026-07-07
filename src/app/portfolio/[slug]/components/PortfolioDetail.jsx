"use client";

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import IkImage from '@/components/IkImage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { imageCardClass, imageGridClass } from '@/lib/imageLayout';

export default function PortfolioDetail({ project }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const showPrev = useCallback(() => {
    setLightboxIndex((current) =>
      current === null ? null : (current - 1 + project.gallery.length) % project.gallery.length
    );
  }, [project.gallery.length]);

  const showNext = useCallback(() => {
    setLightboxIndex((current) =>
      current === null ? null : (current + 1) % project.gallery.length
    );
  }, [project.gallery.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeLightbox();
      if (event.key === 'ArrowLeft') showPrev();
      if (event.key === 'ArrowRight') showNext();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  return (
    <main className="w-full flex min-h-screen flex-col font-sans bg-[#faf9f6]">
      <Header />

      <section className="w-full pt-32 pb-12 md:pt-40 md:pb-16 flex flex-col items-center text-center px-4 mt-[-6rem] md:mt-[-7rem] relative z-10">
        <div className="h-20"></div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#8b7355] uppercase tracking-[0.3em] text-xs font-bold mb-4"
        >
          {project.category}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-script text-[#3d3a35] text-5xl md:text-7xl mb-4 leading-tight"
        >
          {project.coupleNames}
        </motion.h1>
        {(project.date || project.location) && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 text-sm uppercase tracking-[0.2em]"
          >
            {[project.date, project.location].filter(Boolean).join(' · ')}
          </motion.p>
        )}
      </section>

      <section className="max-w-[1400px] mx-auto w-full px-4 sm:px-6 md:px-12 pb-24 relative z-10">
        <div className={imageGridClass}>
          {project.gallery.map((src, index) => (
            <motion.button
              key={src}
              type="button"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => setLightboxIndex(index)}
              className={`${imageCardClass} bg-gray-200 shadow-md hover:shadow-xl transition-shadow group cursor-pointer`}
            >
              <IkImage
                src={src}
                alt={`${project.coupleNames} — photo ${index + 1}`}
                fill
                preset="card"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.button>
          ))}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/packages"
            className="inline-block bg-[#8b7355] text-white uppercase tracking-[0.2em] text-xs font-bold py-3 px-8 hover:bg-[#7a6a57] transition-colors"
          >
            View Packages
          </Link>
          <Link
            href="/contact"
            className="inline-block border border-[#8b7355] text-[#8b7355] uppercase tracking-[0.2em] text-xs font-bold py-3 px-8 hover:bg-[#8b7355] hover:text-white transition-colors"
          >
            Inquire Now
          </Link>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center text-xs uppercase tracking-[0.2em] font-bold text-gray-500 hover:text-[#8b7355] transition-colors group"
          >
            <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Portfolio
          </Link>
        </div>
      </section>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.coupleNames} gallery viewer`}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white z-10 p-2"
            aria-label="Close gallery"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            type="button"
            onClick={showPrev}
            className="absolute left-4 md:left-8 text-white/70 hover:text-white z-10 p-2"
            aria-label="Previous image"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="relative w-full h-full max-w-6xl max-h-[85vh] mx-4 md:mx-16">
            <IkImage
              src={project.gallery[lightboxIndex]}
              alt={`${project.coupleNames} — photo ${lightboxIndex + 1}`}
              fill
              preset="gallery"
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          <button
            type="button"
            onClick={showNext}
            className="absolute right-4 md:right-8 text-white/70 hover:text-white z-10 p-2"
            aria-label="Next image"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-xs uppercase tracking-[0.2em]">
            {lightboxIndex + 1} / {project.gallery.length}
          </p>
        </div>
      )}

      <Footer />
    </main>
  );
}
