"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import IkImage from '@/components/IkImage';
import IkVideo from '@/components/IkVideo';
import Header from './Header';
import { heroMedia } from '@/lib/imagePaths';

export default function Hero() {
  const [videoFailed, setVideoFailed] = useState(false);
  const showVideo = heroMedia.mode === 'video' && heroMedia.video && !videoFailed;

  return (
    <section className="relative w-full overflow-hidden">
      <Header heroScroll />

      <div className="relative w-full h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
        {showVideo ? (
          <div className="absolute inset-0 overflow-hidden">
            <IkVideo
              src={heroMedia.video}
              poster={heroMedia.poster}
              transformation={
                heroMedia.rotation
                  ? [{ rotation: heroMedia.rotation }]
                  : undefined
              }
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              onError={() => setVideoFailed(true)}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full"
          >
            <IkImage
              src={heroMedia.poster}
              alt="Sahal & Nahala wedding — FocusMedia Productions"
              fill
              priority
              preset="hero"
              className="object-cover object-center"
            />
          </motion.div>
        )}

        <div className="absolute inset-0 bg-black/20 z-10"></div>

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
      </div>
    </section>
  );
}
