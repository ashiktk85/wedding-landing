"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import IkImage from '@/components/IkImage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { imageCardClass } from '@/lib/imageLayout';

export default function BlogDetailClient({ blog }) {
  return (
    <main className="w-full flex min-h-screen flex-col font-sans bg-[#faf9f6]">
      <Header />

      <article className="w-full flex-grow relative z-20 pt-8 pb-32 mt-0 md:mt-[-5rem] z-10 px-4">
         <div className="max-w-4xl mx-auto pt-24 md:pt-32">

            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               className="flex items-center justify-center text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gray-500 font-bold mb-6 md:mb-8"
            >
               <span className="text-[#8b7355]">{blog.category}</span>
               <span className="mx-4 w-1 h-1 bg-gray-300 rounded-full"></span>
               <span>{blog.date}</span>
            </motion.div>

            <motion.h1
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.1 }}
               className="font-serif text-center text-4xl sm:text-5xl md:text-6xl text-gray-900 leading-tight mb-12 max-w-3xl mx-auto"
            >
               {blog.title}
            </motion.h1>

            <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className={`w-full shadow-lg mb-16 ${imageCardClass}`}
            >
               <IkImage
                 src={blog.image}
                 alt={blog.title}
                 fill
                 preset="banner"
                 className="object-cover object-center"
                 priority
               />
            </motion.div>

            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.8, delay: 0.4 }}
               className="max-w-2xl mx-auto px-4 md:px-0"
            >
               <div
                  className="max-w-none text-gray-600 font-medium leading-relaxed text-justify [&>p]:mb-6 [&>h3]:font-serif [&>h3]:text-gray-900 [&>h3]:font-normal [&>h3]:text-3xl [&>h3]:mt-12 [&>h3]:mb-6"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
               />

               <div className="mt-20 pt-10 border-t border-[#e2d5c5]/50 flex justify-center">
                  <Link
                     href="/blog"
                     className="inline-flex items-center text-xs uppercase tracking-[0.2em] font-bold text-gray-500 hover:text-[#8b7355] transition-colors group"
                  >
                     <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                     Back to Journal
                  </Link>
               </div>
            </motion.div>
         </div>
      </article>

      <Footer />
    </main>
  );
}
