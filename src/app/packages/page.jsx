import PackagesClient from './components/PackagesClient';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Investment & Packages | FocusMedia Productions',
  description: 'Explore our wedding photography and videography packages. We offer customized solutions for intimate weddings to grand celebrations.',
};

export default function PackagesPage() {
  return (
    <main className="w-full flex min-h-screen flex-col font-sans bg-[#faf9f6]">
      <Header />
      <PackagesClient />
      <Footer />
    </main>
  );
}
