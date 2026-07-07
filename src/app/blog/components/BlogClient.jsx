"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import IkImage from '@/components/IkImage';
import { imageCardClass } from '@/lib/imageLayout';

export default function BlogClient({ blogs }) {
  return (
    <>
      <section className="relative w-full pt-32 pb-16 md:pt-40 md:pb-24 flex flex-col items-center justify-center text-center px-4 mt-[-6rem] md:mt-[-7rem] z-10 select-none">
        <div className="h-20"></div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-gray-500 uppercase tracking-[0.4em] text-xs font-bold mb-6"
        >
          Insights & Stories
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-script text-[#3d3a35] text-5xl md:text-7xl mb-8 leading-tight"
        >
          Our Journal
        </motion.h1>
      </section>

      <section className="max-w-6xl mx-auto w-full px-6 md:px-12 pb-32 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {blogs.map((blog, index) => (
             <motion.article
               key={blog.slug}
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, delay: index * 0.2 }}
               className="flex flex-col group cursor-pointer"
             >
                <Link href={`/blog/${blog.slug}`} className={`block mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500 ${imageCardClass}`}>
                   <IkImage
                     src={blog.image}
                     alt={blog.title}
                     fill
                     preset="card"
                     className="object-cover transition-transform duration-1000 group-hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-500"></div>
                </Link>
                <div className="flex flex-col flex-grow">
                   <div className="flex items-center text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-4">
                     <span>{blog.date}</span>
                     <span className="mx-3 w-1 h-1 bg-gray-300 rounded-full"></span>
                     <span className="text-[#8b7355]">{blog.category}</span>
                   </div>
                   <Link href={`/blog/${blog.slug}`}>
                     <h2 className="font-serif text-2xl text-gray-800 mb-4 hover:text-[#8b7355] transition-colors line-clamp-2">
                       {blog.title}
                     </h2>
                   </Link>
                   <p className="text-sm text-gray-500 leading-relaxed font-medium line-clamp-3 mb-6">
                     {blog.excerpt}
                   </p>
                   <Link
                     href={`/blog/${blog.slug}`}
                     className="mt-auto inline-flex items-center text-xs uppercase tracking-[0.2em] font-bold text-[#3d3a35] hover:text-[#8b7355] transition-colors group/link"
                   >
                     Read Story
                     <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                   </Link>
                </div>
             </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}
