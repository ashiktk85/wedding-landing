"use client";

import { motion } from 'framer-motion';
import IkImage from '@/components/IkImage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteImages } from '@/lib/imagePaths';
import { ikSrc, ikTransformations } from '@/lib/imagekit';

const filmsData = [
  {
    id: '1',
    title: 'The Tuscan Elopement',
    category: 'Destination',
    youtubeUrl: 'https://www.youtube.com/watch?v=aqz-KE-bpKQ',
    thumbnail: siteImages.hero,
  },
  {
    id: '2',
    title: 'A Winter Romance',
    category: 'Weddings',
    youtubeUrl: 'https://www.youtube.com/watch?v=2xcj9g_I_K8',
    thumbnail: siteImages.services.weddings,
  },
  {
    id: '3',
    title: 'Editorial Splendor',
    category: 'Editorials',
    youtubeUrl: 'https://www.youtube.com/watch?v=aqz-KE-bpKQ',
    thumbnail: siteImages.intro.main,
  },
  {
    id: '4',
    title: 'Quiet Moments',
    category: 'Maternity',
    youtubeUrl: 'https://www.youtube.com/watch?v=2xcj9g_I_K8',
    thumbnail: siteImages.services.maternity,
  },
];

const filmsBannerBg = ikSrc(siteImages.hero, ikTransformations.hero);

export default function FilmsClient() {
  return (
    <main className="w-full flex min-h-screen flex-col font-sans bg-[#1a1a1a]">
      <Header />

      <section className="relative w-full pt-32 pb-16 md:pt-40 md:pb-24 flex flex-col items-center justify-center text-center px-4 mt-[-6rem] md:mt-[-7rem] z-10 select-none bg-black">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-overlay"
          style={{ backgroundImage: `url('${filmsBannerBg}')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-[#1a1a1a]"></div>

        <div className="h-20 relative z-10"></div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white/60 uppercase tracking-[0.4em] text-xs font-bold mb-6 relative z-10"
        >
          Cinematic Storytelling
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-serif text-white text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight relative z-10 tracking-[0.1em] uppercase"
        >
          Our Films
        </motion.h1>
      </section>

      <section className="max-w-7xl mx-auto w-full px-6 md:px-12 pb-32 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {filmsData.map((film, index) => (
             <motion.div
               key={film.id}
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.8, delay: index * 0.1 }}
               className="flex flex-col group"
             >
                <a
                   href={film.youtubeUrl}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="block relative aspect-[16/9] w-full mb-8 overflow-hidden shadow-2xl cursor-pointer bg-black"
                >
                   <IkImage
                     src={film.thumbnail}
                     alt={film.title}
                     fill
                     preset="banner"
                     className="object-cover opacity-80 transition-all duration-1000 group-hover:scale-105 group-hover:opacity-60"
                     sizes="(max-width: 768px) 100vw, 50vw"
                   />

                   <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                         <svg className="w-6 h-6 md:w-8 md:h-8 text-white ml-2" fill="currentColor" viewBox="0 0 24 24">
                           <path d="M3 22v-20l18 10-18 10z"/>
                         </svg>
                      </div>
                   </div>
                </a>

                <div className="flex flex-col items-center text-center">
                   <div className="flex items-center text-[10px] uppercase tracking-[0.3em] text-[#a08b77] font-bold mb-4">
                     <span>{film.category}</span>
                   </div>
                   <h2 className="font-serif text-3xl text-white mb-4 hover:text-[#a08b77] transition-colors">
                     {film.title}
                   </h2>
                </div>
             </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
