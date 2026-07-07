import PackagesClient from './components/PackagesClient';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { packageServiceSchema, faqSchema } from '@/lib/schema';
import { packageFaqs } from '@/lib/faqData';
import { canonicalPath, defaultOpenGraph } from '@/lib/metadata';

export const metadata = {
  title: 'Wedding Photography Packages & Pricing Kerala | FocusMedia',
  description:
    'Transparent wedding photography & videography packages in Kerala starting at ₹50,000 — Essential, Premium & Signature tiers, plus custom quotes for destination weddings.',
  keywords: [
    'wedding photography cost kerala',
    'wedding photographer price kochi',
    'affordable wedding photography package kerala',
    'wedding videography package kerala',
  ],
  ...canonicalPath('/packages'),
  openGraph: defaultOpenGraph({
    title: 'Wedding Photography Packages Kerala | FocusMedia',
    url: '/packages',
  }),
};

const packageSchemas = [
  packageServiceSchema({ name: 'The Essential Wedding Package', price: 50000 }),
  packageServiceSchema({ name: 'The Premium Wedding Package', price: 85000 }),
  packageServiceSchema({ name: 'The Signature Wedding Package', price: 150000 }),
];

export default function PackagesPage() {
  return (
    <main className="w-full flex min-h-screen flex-col font-sans bg-[#faf9f6]">
      {packageSchemas.map((schema) => (
        <JsonLd key={schema.name} data={schema} />
      ))}
      <JsonLd data={faqSchema(packageFaqs)} />
      <Header />
      <PackagesClient />
      <Footer />
    </main>
  );
}
