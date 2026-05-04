import { blogs } from '@/lib/blogData';
import BlogClient from './components/BlogClient';

export const metadata = {
  title: 'Journal | FocusMedia Productions',
  description: 'Read the latest stories, tips, and inspiration from the FocusMedia Productions team.',
};

export default function BlogPage() {
  return <BlogClient blogs={blogs} />;
}
