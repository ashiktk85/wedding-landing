import { getBlogBySlug, blogs } from '@/lib/blogData';
import { notFound } from 'next/navigation';
import BlogDetailClient from './components/BlogDetailClient';
import JsonLd from '@/components/JsonLd';
import { articleSchema } from '@/lib/schema';
import { canonicalPath, defaultOpenGraph } from '@/lib/metadata';
import { siteConfig } from '@/lib/siteConfig';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const blog = getBlogBySlug(resolvedParams.slug);

  if (!blog) {
    return {
      title: 'Post Not Found | FocusMedia Productions',
    };
  }

  return {
    title: `${blog.title} | Journal | FocusMedia Productions`,
    description: blog.excerpt,
    ...canonicalPath(`/blog/${blog.slug}`),
    openGraph: defaultOpenGraph({
      type: 'article',
      title: blog.title,
      description: blog.excerpt,
      url: `/blog/${blog.slug}`,
      images: [{ url: blog.image, alt: blog.title }],
      publishedTime: blog.datePublished,
      authors: [siteConfig.name],
    }),
  };
}

export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogDetailPage({ params }) {
  const resolvedParams = await params;
  const blog = getBlogBySlug(resolvedParams.slug);

  if (!blog) {
    notFound();
  }

  const schema = articleSchema({
    title: blog.title,
    datePublished: blog.datePublished,
    image: blog.image,
  });

  return (
    <>
      <JsonLd data={schema} />
      <BlogDetailClient blog={blog} />
    </>
  );
}
