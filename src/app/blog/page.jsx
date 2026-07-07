import { blogs } from '@/lib/blogData';
import BlogClient from './components/BlogClient';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { canonicalPath, defaultOpenGraph } from '@/lib/metadata';

export const metadata = {
  title: 'Wedding Photography Journal | Tips, Stories & Kerala Wedding Guides',
  description:
    "Real wedding stories, planning advice, and behind-the-scenes insight from FocusMedia Productions — Kerala's candid wedding photography studio.",
  ...canonicalPath('/blog'),
  openGraph: defaultOpenGraph({
    title: 'Wedding Photography Journal | FocusMedia',
    url: '/blog',
  }),
};

export default function BlogPage() {
  return (
    <main className="w-full flex min-h-screen flex-col font-sans bg-[#faf9f6]">
      <Header />
      <BlogClient blogs={blogs} />
      <Footer />
    </main>
  );
}
