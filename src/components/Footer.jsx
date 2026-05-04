import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#1a1a1a] text-white">
      {/* Top massive CTA area */}
      <div className="max-w-5xl mx-auto px-4 py-24 sm:py-32 text-center border-b border-white/10">
        <h2 className="font-script text-5xl md:text-7xl lg:text-8xl text-[#d4cdbf] mb-8">
          Let's capture your story
        </h2>
        <p className="font-sans text-sm md:text-base text-gray-400 max-w-xl mx-auto mb-12">
          Dates for upcoming wedding seasons book incredibly quickly. Get in touch early to secure your date and discuss your beautiful vision for the day.
        </p>
        <Link 
          href="/contact" 
          className="inline-block bg-transparent border border-white text-white uppercase text-xs sm:text-sm font-bold tracking-[0.2em] py-4 px-10 hover:bg-white hover:text-[#1a1a1a] transition-colors duration-300"
        >
          Inquire Now
        </Link>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        
        {/* Navigation */}
        <div className="flex flex-col items-center md:items-start space-y-4">
           <h4 className="font-serif italic text-xl text-[#d4cdbf] mb-2">Explore</h4>
           <Link href="/about" className="uppercase text-[10px] tracking-widest text-gray-400 hover:text-white transition">About</Link>
           <Link href="/portfolio" className="uppercase text-[10px] tracking-widest text-gray-400 hover:text-white transition">Portfolio</Link>
           <Link href="/packages" className="uppercase text-[10px] tracking-widest text-gray-400 hover:text-white transition">Packages</Link>
           <Link href="/contact" className="uppercase text-[10px] tracking-widest text-gray-400 hover:text-white transition">Contact</Link>
        </div>

        {/* Brand / Logo */}
        <div className="flex flex-col items-center justify-center">
           <Link href="/" className="font-serif text-2xl tracking-[0.15em] text-white mb-4">
             FOCUSMEDIA
           </Link>
           <p className="font-sans uppercase text-[9px] tracking-widest text-gray-500">
             Kerala, India & Worldwide Destination
           </p>
        </div>

        {/* Socials & Contact */}
        <div className="flex flex-col items-center md:items-end space-y-4">
           <h4 className="font-serif italic text-xl text-[#d4cdbf] mb-2">Connect</h4>
           <a href="mailto:hello@focusmediaproductions.com" className="uppercase text-[10px] tracking-widest text-gray-400 hover:text-white transition">hello@focusmediaproductions.com</a>
           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="uppercase text-[10px] tracking-widest text-gray-400 hover:text-white transition">Instagram</a>
           <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="uppercase text-[10px] tracking-widest text-gray-400 hover:text-white transition">Pinterest</a>
           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="uppercase text-[10px] tracking-widest text-gray-400 hover:text-white transition">Facebook</a>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full text-center py-8 border-t border-white/5">
        <p className="font-sans uppercase text-[9px] tracking-[0.2em] text-gray-600">
          &copy; {new Date().getFullYear()} FocusMedia Productions. All Rights Reserved. Designed with Elegance.
        </p>
      </div>
    </footer>
  );
}
