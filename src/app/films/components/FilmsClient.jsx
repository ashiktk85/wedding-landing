"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const filmsData = [
  {
    id: '1',
    title: 'The Tuscan Elopement',
    category: 'Destination',
    youtubeUrl: 'https://www.youtube.com/watch?v=aqz-KE-bpKQ', // Demo Video Link
    thumbnail: '/hero-bg.png'
  },
  {
    id: '2',
    title: 'A Winter Romance',
    category: 'Weddings',
    youtubeUrl: 'https://www.youtube.com/watch?v=2xcj9g_I_K8', // Demo Video Link
    thumbnail: '/services-weddings.png'
  },
  {
    id: '3',
    title: 'Editorial Splendor',
    category: 'Editorials',
    youtubeUrl: 'https://www.youtube.com/watch?v=aqz-KE-bpKQ', // Demo Video Link
    thumbnail: '/intro-main.png'
  },
  {
    id: '4',
    title: 'Quiet Moments',
    category: 'Maternity',
    youtubeUrl: 'https://www.youtube.com/watch?v=2xcj9g_I_K8', // Demo Video Link
    thumbnail: '/services-maternity.png'
  }
];

export default function FilmsClient() {
  return (
    <main className="w-full flex min-h-screen flex-col font-sans bg-[#1a1a1a]">
      {/* For dark theme header styling, we might need a dark-mode header variant, but we will use standard Header which has a white background. Actually, letting Header be white and main be dark is okay, but let's restyle the container if needed. */}
      {/* Using standard Header */}
      <Header />
      
      {/* Films Banner */}
      <section className="relative w-full pt-32 pb-16 md:pt-40 md:pb-24 flex flex-col items-center justify-center text-center px-4 mt-[-6rem] md:mt-[-7rem] z-10 select-none bg-black">
        {/* Cinematic Background Texture */}
        <div className="absolute inset-0 opacity-20 bg-[url('/hero-bg.png')] bg-cover bg-center mix-blend-overlay"></div>
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

      {/* Films Grid */}
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
                {/* Thumbnail Anchor via external link */}
                <a 
                   href={film.youtubeUrl} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="block relative aspect-[16/9] w-full mb-8 overflow-hidden shadow-2xl cursor-pointer bg-black"
                >
                   <Image 
                     src={film.thumbnail} 
                     alt={film.title} 
                     fill 
                     className="object-cover opacity-80 transition-all duration-1000 group-hover:scale-105 group-hover:opacity-60"
                     sizes="(max-width: 768px) 100vw, 50vw"
                   />
                   
                   {/* Play Button Overlay */}
                   <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                         <svg className="w-6 h-6 md:w-8 md:h-8 text-white ml-2" fill="currentColor" viewBox="0 0 24 24">
                           <path d="M3 22v-20l18 10-18 10z"/>
                         </svg>
                      </div>
                   </div>
                </a>

                {/* Details */}
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
