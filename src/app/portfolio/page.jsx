import PortfolioGallery from './components/PortfolioGallery';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { canonicalPath, defaultOpenGraph } from '@/lib/metadata';

export const metadata = {
  title: 'Wedding Photography Portfolio Kerala | Real Weddings | FocusMedia',
  description:
    'Browse real Kerala weddings shot by FocusMedia Productions — candid Christian, Hindu & Muslim ceremonies, pre-wedding shoots, maternity and newborn sessions across Kochi and beyond.',
  keywords: [
    'kerala wedding photo gallery',
    'candid wedding photos kerala',
    'real wedding kochi photography',
  ],
  ...canonicalPath('/portfolio'),
  openGraph: defaultOpenGraph({
    title: 'Wedding Photography Portfolio Kerala | FocusMedia',
    url: '/portfolio',
  }),
};

export default function PortfolioPage() {
  return (
    <main className="w-full flex min-h-screen flex-col font-sans bg-[#faf9f6]">
      <Header />
      <PortfolioGallery />
      <Footer />
    </main>
  );
}
