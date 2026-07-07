"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import IkImage from '@/components/IkImage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { imageCardClass, imageGridClass } from '@/lib/imageLayout';

export default function LocationClient({ page, projects }) {
  return (
    <main className="w-full flex min-h-screen flex-col font-sans bg-[#faf9f6]">
      <Header />

      <section className="w-full pt-32 pb-12 md:pt-40 md:pb-16 flex flex-col items-center text-center px-4 mt-[-6rem] md:mt-[-7rem] relative z-10 max-w-4xl mx-auto">
        <div className="h-20"></div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#8b7355] uppercase tracking-[0.3em] text-xs font-bold mb-4"
        >
          Kerala Wedding Photography
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-script text-[#3d3a35] text-4xl md:text-6xl mb-6 leading-tight"
        >
          {page.h1}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 text-sm md:text-base leading-relaxed font-medium"
        >
          {page.intro}
        </motion.p>
      </section>

      <section className="max-w-3xl mx-auto px-6 md:px-12 pb-12 relative z-10">
        <div
          className="text-gray-600 text-sm md:text-[15px] leading-relaxed font-medium space-y-4 [&>p]:mb-4"
          dangerouslySetInnerHTML={{ __html: page.body }}
        />
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
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
            Check Availability
          </Link>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto w-full px-4 sm:px-6 md:px-12 pb-24 relative z-10">
        <h2 className="font-serif text-2xl md:text-3xl text-center text-gray-800 mb-12">
          Recent work in this region
        </h2>
        <div className={imageGridClass}>
          {projects.slice(0, 8).map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className={`${imageCardClass} group shadow-lg ${project.span ?? ''}`}
            >
              <Link href={`/portfolio/${project.slug}`} className="block absolute inset-0">
                <IkImage
                  src={project.thumbnail}
                  alt={`${project.coupleNames} — ${project.category}`}
                  fill
                  preset="card"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-center px-4">
                  <p className="text-white font-script text-xl md:text-2xl mb-1">{project.coupleNames}</p>
                  <p className="text-white/80 uppercase tracking-[0.2em] text-[10px]">{project.category}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
