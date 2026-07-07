import { siteConfig } from '@/lib/siteConfig';
import { blogs } from '@/lib/blogData';
import { locationPages } from '@/lib/locationPages';
import { portfolioProjects } from '@/lib/portfolioData';

export default function sitemap() {
  const staticRoutes = [
    '',
    '/about',
    '/portfolio',
    '/films',
    '/blog',
    '/packages',
    '/contact',
  ];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  const portfolioEntries = portfolioProjects.map((project) => ({
    url: `${siteConfig.url}/portfolio/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const blogEntries = blogs.map((blog) => ({
    url: `${siteConfig.url}/blog/${blog.slug}`,
    lastModified: new Date(blog.datePublished),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const locationEntries = locationPages.map((page) => ({
    url: `${siteConfig.url}/wedding-photography/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  return [...staticEntries, ...portfolioEntries, ...blogEntries, ...locationEntries];
}
