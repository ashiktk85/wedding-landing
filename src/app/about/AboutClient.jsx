"use client";

import { motion } from 'framer-motion';
import IkImage from '@/components/IkImage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteImages } from '@/lib/imagePaths';
import { siteConfig } from '@/lib/siteConfig';

export default function AboutClient() {
  return (
    <main className="w-full flex min-h-screen flex-col font-sans bg-white">
      <Header />

      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-black mt-[-3rem] md:mt-[-5rem] z-10 pt-20 group">
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <IkImage
            src={siteImages.aboutBanner}
            alt="About FocusMedia Productions"
            fill
            preset="banner"
            className="object-cover object-center opacity-70"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/30 z-10 transition-colors duration-500 group-hover:bg-black/20"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="relative z-20 text-center px-4 flex flex-col items-center mt-8"
        >
          <p className="text-white/80 uppercase tracking-[0.3em] text-[10px] sm:text-xs font-bold mb-4 drop-shadow-md">The Visionary</p>
          <h1 className="text-white font-serif text-3xl sm:text-5xl md:text-6xl tracking-[0.15em] uppercase shadow-sm drop-shadow-lg">
            Our Story
          </h1>
        </motion.div>
      </section>

      <section className="w-full py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            <div className="flex items-center gap-6 mb-10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "4rem" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="h-[1px] bg-gray-400"
              ></motion.div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-800 tracking-[0.1em] whitespace-nowrap">
                Meet The <span className="italic">Artist</span>
              </h2>
            </div>

            <div className="text-gray-600 text-sm md:text-[15px] space-y-6 leading-relaxed font-medium text-justify">
              <p>
                Founded in {siteConfig.foundingYear} and based in Kochi, FocusMedia Productions began as a solo endeavor driven by a profound passion for documenting life&apos;s most fleeting and beautiful moments, and has blossomed into a full-scale creative studio dedicated to artistic storytelling.
              </p>
              <p>
                We believe that every love story is entirely unique, and deserves to be captured in a way that feels organic, authentic, and undeniably yours. Our approach blends editorial elegance with a documentary spirit, ensuring your memories are preserved in their truest form.
              </p>
              <p>
                From intimate elopements to grand celebrations, we pour our hearts into every frame. We are not just your photographers; we are your visual biographers, quietly capturing the laughter, the tears, and the quiet moments in between.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 flex flex-col items-center lg:items-start"
            >
               <p className="font-script text-3xl md:text-4xl text-[#a08b77] mt-4 ml-4 transform -rotate-3">FocusMedia Studio</p>
            </motion.div>
          </motion.div>

          <div className="relative w-full order-1 lg:order-2 self-center flex items-center justify-center p-4">
            <div className="relative w-full max-w-[420px] mx-auto lg:mr-0 z-20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo/393384292_351225920720259_4853708852247536020_n.jpg"
                alt="FocusMedia Productions"
                width={1080}
                height={1080}
                className="w-full h-auto block shadow-2xl"
              />
            </div>
            <div className="absolute top-[5%] md:top-10 bottom-[5%] md:bottom-10 right-0 left-8 md:left-12 border border-[#a08b77]/30 z-10 pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 w-64 h-64 md:w-80 md:h-80 bg-[#e2d5c5]/20 -z-10" />
          </div>

        </div>
      </section>

      <section className="w-full bg-[#1a1a1a] py-24 md:py-32 px-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <IkImage src={siteImages.services.weddings} alt="Textures" fill preset="hero" className="object-cover grayscale" />
        </div>
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="relative z-10 max-w-4xl mx-auto"
        >
          <svg className="w-12 h-12 text-[#a08b77] mx-auto mb-8 opacity-80" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
          <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white leading-loose tracking-wide">
            "To capture the essence of a moment is to freeze <span className="font-script text-[#a08b77] text-4xl md:text-5xl lg:text-6xl mx-2 lowercase inline-block transform translate-y-2">time</span> itself, creating a legacy of love that speaks long after the day is gone."
          </h3>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
