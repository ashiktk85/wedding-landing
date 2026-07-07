import Hero from '@/components/Hero';
import IntroSection from '@/components/IntroSection';
import ServicesSection from '@/components/ServicesSection';
import ImageSliderSection from '@/components/ImageSliderSection';
import PortfolioSection from '@/components/PortfolioSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import { canonicalPath, defaultOpenGraph, homeKeywords } from '@/lib/metadata';

export const metadata = {
  title: 'Best Wedding Photographer in Kerala | Candid & Cinematic | FocusMedia',
  description:
    'Kochi-based wedding photography & videography studio capturing candid Christian, Hindu & Muslim weddings across Kerala — Munnar, Alleppey, Fort Kochi — plus destination weddings worldwide.',
  keywords: homeKeywords,
  ...canonicalPath('/'),
  openGraph: defaultOpenGraph({
    title: 'Best Wedding Photographer in Kerala | FocusMedia Productions',
    url: '/',
  }),
};

export default function Home() {
  return (
    <main className="w-full flex min-h-screen flex-col font-sans bg-white overflow-x-hidden">
      <Hero />
      <IntroSection />
      <ServicesSection />
      <ImageSliderSection />
      <PortfolioSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
