"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import IkImage from '@/components/IkImage';
import { siteImages } from '@/lib/imagePaths';
import { imageCardClass } from '@/lib/imageLayout';

const serviceCards = [
  {
    title: 'Maternity',
    description: 'Soft, natural-light maternity sessions in Kochi — at home or on location.',
    image: siteImages.services.maternity,
    alt: 'Maternity photography services',
  },
  {
    title: 'Pre/Post Wedding',
    description: 'Engagement, pre-wedding and post-wedding shoots across Kerala.',
    image: siteImages.services.prePostWedding,
    alt: 'Pre and post wedding photography services',
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-[#f4efe8] py-16 md:py-24 lg:py-28">
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={`${imageCardClass} w-full max-w-[480px] mx-auto lg:mx-0 lg:ml-auto shadow-2xl group`}
          >
            <IkImage
              src={siteImages.services.weddings}
              alt="Wedding photography services"
              fill
              preset="card"
              className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 480px"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
              <h3 className="text-white text-3xl sm:text-4xl md:text-5xl font-sans tracking-[0.25em] font-bold uppercase drop-shadow-xl mb-3">
                Weddings
              </h3>
              <p className="text-white/90 text-xs sm:text-sm max-w-xs leading-relaxed drop-shadow-md">
                Candid, cinematic coverage of Christian, Hindu and Muslim wedding ceremonies across Kerala.
              </p>
            </div>
          </motion.div>

          <div className="w-full flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-6 mb-8 md:mb-10"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#3d3a35] shrink-0">
                <span className="font-serif uppercase tracking-widest">Our</span>{' '}
                <span className="font-serif italic text-gray-500">Services</span>
              </h2>
              <div className="flex-1 h-px bg-gray-300 min-w-8" />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
              {serviceCards.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, delay: 0.15 + index * 0.1 }}
                  className={`${imageCardClass} w-full shadow-xl group`}
                >
                  <IkImage
                    src={service.image}
                    alt={service.alt}
                    fill
                    preset="card"
                    className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 280px"
                  />
                  <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition-colors duration-500" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
                    <h3 className="text-white text-base sm:text-lg font-sans tracking-[0.2em] font-bold uppercase drop-shadow-xl mb-2">
                      {service.title}
                    </h3>
                    <p className="text-white/90 text-[10px] sm:text-xs max-w-[220px] leading-relaxed drop-shadow-md">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-8 md:mt-10"
            >
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center bg-[#96826d] hover:bg-[#7a6a57] text-white text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] py-3.5 sm:py-4 px-8 sm:px-10 transition-colors duration-300 shadow-md"
              >
                Our Portfolio
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
