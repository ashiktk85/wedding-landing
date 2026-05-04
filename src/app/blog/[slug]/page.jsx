import { getBlogBySlug, blogs } from '@/lib/blogData';
import { notFound } from 'next/navigation';
import BlogDetailClient from './components/BlogDetailClient';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const blog = getBlogBySlug(resolvedParams.slug);
  
  if (!blog) {
    return {
      title: 'Post Not Found | FocusMedia Productions'
    };
  }

  return {
    title: `${blog.title} | Journal | FocusMedia Productions`,
    description: blog.excerpt,
  };
}

export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogDetailPage({ params }) {
  // Await the params to fix the 'params should be awaited' error in Next 15+
  const resolvedParams = await params;
  const blog = getBlogBySlug(resolvedParams.slug);

  if (!blog) {
    notFound();
  }

  return <BlogDetailClient blog={blog} />;
}
