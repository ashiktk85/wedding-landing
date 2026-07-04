"use client";

import { motion } from 'framer-motion';
import IkImage from '@/components/IkImage';
import { siteImages } from '@/lib/imagePaths';

export default function ServicesSection() {
  return (
    <section className="w-full min-h-screen flex items-center bg-[#f4efe8] relative overflow-hidden py-12 lg:py-0">

      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full sm:w-[85%] lg:w-4/5 mx-auto lg:ml-auto lg:mr-0 h-[50vh] sm:h-[400px] lg:h-[70vh] min-h-[400px] max-h-[700px] overflow-hidden shadow-2xl z-10 group"
        >
          <IkImage
            src={siteImages.services.weddings}
            alt="Wedding Photography Services"
            fill
            preset="card"
            className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h3 className="text-white text-3xl sm:text-4xl md:text-5xl font-sans tracking-[0.25em] font-bold uppercase drop-shadow-xl select-none">
              Weddings
            </h3>
          </div>
        </motion.div>

        <div className="w-full flex flex-col justify-center">

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center mb-6 sm:mb-8"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#3d3a35] whitespace-nowrap">
              <span className="font-serif uppercase tracking-widest">Our</span>{' '}
              <span className="font-serif italic text-gray-500">SERVICES</span>
            </h2>
            <div className="flex-1 h-px bg-gray-300 ml-6 md:ml-10 min-w-[50px]"></div>
          </motion.div>

          <div className="relative w-full px-4 sm:px-0">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-[80%] sm:w-[70%] lg:w-[70%] max-w-[400px] aspect-4/3 overflow-hidden shadow-xl group z-10"
            >
              <IkImage
                src={siteImages.services.maternity}
                alt="Maternity Photography Services"
                fill
                preset="card"
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition-colors duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-sans tracking-[0.25em] font-bold uppercase drop-shadow-xl select-none">
                  Maternity
                </h3>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative w-[70%] sm:w-[60%] lg:w-[60%] max-w-[320px] aspect-4/3 overflow-hidden shadow-2xl -mt-[15%] sm:-mt-[15%] ml-auto z-20 group"
            >
              <IkImage
                src={siteImages.services.family}
                alt="Family Photography Services"
                fill
                preset="card"
                className="object-cover object-bottom-right transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition-colors duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <h3 className="text-white text-base sm:text-lg lg:text-xl font-sans tracking-[0.25em] font-bold uppercase drop-shadow-xl select-none">
                  Family
                </h3>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-4 sm:mt-8 flex justify-end"
            >
              <a
                href="/packages"
                className="inline-flex items-center justify-center bg-[#96826d] hover:bg-[#7a6a57] text-white text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] py-3 sm:py-4 px-6 sm:px-8 transition-colors duration-300 shadow-md"
              >
                See Packages <span className="ml-4 tabular-nums">—</span>
              </a>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
