import Hero from '@/components/Hero';
import IntroSection from '@/components/IntroSection';
import ServicesSection from '@/components/ServicesSection';
import ImageSliderSection from '@/components/ImageSliderSection';
import PortfolioSection from '@/components/PortfolioSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Best Wedding Photography in Kerala | FocusMedia',
  description: 'Looking for the best wedding photographer in Kerala? FocusMedia Productions provides cinematic wedding videography, destination wedding photography, and corporate video production services in Kochi and across Kerala.',
  keywords: [
    'wedding photography',
    'wedding photographer',
    'wedding videography',
    'video production company',
    'event photography',
    'event videography',
    'corporate video production',
    'wedding photography kochi',
    'best wedding photography in kerala',
    'wedding videography kerala',
    'best wedding photographer kerala',
    'candid wedding photography kerala',
    'cinematic wedding videography Kerala',
    'destination wedding photographer Kerala',
    'corporate video production kerala',
    'video production services kerala',
    'ad film production kerala',
    'commercial video production india',
    'promotional video production',
    'wedding photography packages kerala',
    'wedding videography price kerala',
    'hire wedding photographer kerala',
    'affordable wedding photography kerala',
    'corporate video production services kerala'
  ],
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <main className="w-full flex min-h-screen flex-col font-sans bg-white">
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
