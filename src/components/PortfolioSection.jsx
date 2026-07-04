"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import IkImage from '@/components/IkImage';
import { getFeaturedProjects } from '@/lib/portfolioData';

export default function PortfolioSection() {
  const featured = getFeaturedProjects(3);

  return (
    <section className="w-full bg-[#faf9f6] py-24 sm:py-32 relative">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 lg:mb-24"
      >
        <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-gray-500 mb-6">
          Featured Work
        </h2>
        <p className="font-script text-5xl md:text-6xl text-[#3d3a35]">
          Moments set in stone
        </p>
      </motion.div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">

          {featured.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              className={`relative group overflow-hidden shadow-lg ${
                index === 0 ? 'lg:mt-12 aspect-[3/4]' :
                index === 1 ? 'lg:-mt-12 aspect-square' :
                'lg:mt-24 aspect-[4/5]'
              }`}
            >
              <Link href={`/portfolio/${project.slug}`} className="block relative w-full h-full min-h-[300px]">
                <IkImage
                  src={project.thumbnail}
                  alt={`${project.coupleNames} — ${project.category}`}
                  fill
                  preset="card"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-center px-4">
                  <p className="text-white font-script text-2xl md:text-3xl mb-2">{project.coupleNames}</p>
                  <p className="text-white/80 uppercase tracking-[0.2em] text-xs">{project.category}</p>
                </div>
              </Link>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="w-full flex items-center justify-center p-8 bg-[#f4efe8] aspect-square shadow-lg lg:mt-24"
          >
            <div className="text-center">
              <p className="font-serif italic text-2xl text-gray-700 mb-4">View Complete</p>
              <p className="font-sans font-bold uppercase tracking-[0.2em] text-xs text-gray-500 mb-8 border-b border-gray-300 pb-4 inline-block">Collection</p>
              <div>
                <Link href="/portfolio" className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[#8b7355] text-[#8b7355] hover:bg-[#8b7355] hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
