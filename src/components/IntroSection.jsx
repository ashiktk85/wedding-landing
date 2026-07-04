"use client";

import { motion } from 'framer-motion';
import IkImage from '@/components/IkImage';
import { siteImages } from '@/lib/imagePaths';

export default function IntroSection() {
  return (
    <section className="w-full">
      <div className="w-full bg-[#f3efe8] py-16 px-4 md:px-8 flex flex-col items-center justify-center text-center overflow-hidden">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-gray-800 uppercase tracking-[0.25em] text-xs font-bold mb-6"
        >
          Wedding & Lifestyle Photographer
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-serif text-gray-700 text-lg md:text-xl lg:text-2xl max-w-2xl leading-relaxed"
        >
          Capturing the light of life's most events and the
          <br className="hidden md:block" />
          blissful beauty of quiet, everyday moments.
        </motion.p>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 relative min-h-[800px] bg-white overflow-hidden">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex flex-col justify-center px-8 md:px-16 lg:px-24 py-24 order-2 lg:order-1 h-full z-10"
        >

          <div className="relative z-10 max-w-md mx-auto lg:mr-auto lg:ml-0 w-full">
            <div className="flex bg-white items-center gap-6 mb-8 lg:-mr-4">
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="font-serif text-4xl sm:text-5xl lg:text-6xl text-gray-800 whitespace-nowrap"
                >
                  <span className="italic">HERE'S</span> TO LIFE
                </motion.h2>
              </div>
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "5rem" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="w-[1px] bg-gray-300 ml-4"
              ></motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-[0.6rem] tracking-[0.3em] text-gray-400 rotate-180"
                style={{ writingMode: 'vertical-rl' }}
              >
                SINCE TWO THOUSAND AND FOUR
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-gray-600 text-sm md:text-[15px] space-y-4 leading-relaxed font-medium text-justify"
            >
              <p>
                It's time to let people know that you are the business they have been searching for.
                Tiramisu bafouh lollipop candy canes I love liquorice sesame snaps lollipop cheesecake.
                Jelly-o pie pie pastry halluth. Chocolate cake gingerbread jujubes chupa chups dessert I love pudding jelly-o.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full h-[500px] lg:h-auto min-h-[600px] order-1 lg:order-2 bg-[#1a1a1a]"
        >
          <div className="relative w-full h-full lg:w-4/5 lg:absolute lg:right-0 lg:top-0 lg:bottom-0">
            <IkImage
              src={siteImages.intro.main}
              alt="Elegant couple portrait"
              fill
              preset="card"
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute top-[10%] lg:top-[12%] left-4 lg:left-[-15%] w-48 h-72 sm:w-64 sm:h-96 md:w-72 md:h-[28rem] shadow-2xl z-20 hidden sm:block"
          >
            <IkImage
              src={siteImages.intro.bouquet}
              alt="Fine art wedding bouquet"
              fill
              preset="card"
              className="object-cover object-center border-[6px] border-white/10"
              sizes="(max-width: 1024px) 300px, 400px"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, rotate: -3, scale: 0.9 }}
            whileInView={{ opacity: 1, rotate: -3, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute bottom-12 right-8 lg:right-16 z-30 transform -rotate-3 text-right"
          >
            <p className="font-script text-white text-3xl md:text-5xl lg:text-6xl drop-shadow-lg opacity-90 leading-tight">
              Capturing the beauty of <br /> life's memories
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
