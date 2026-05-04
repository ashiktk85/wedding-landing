import PortfolioGallery from './components/PortfolioGallery';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Portfolio | FocusMedia Productions',
  description: 'Explore the complete portfolio of FocusMedia Productions. View our work in weddings, editorial, and maternity.',
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
