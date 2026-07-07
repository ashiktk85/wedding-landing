import { notFound } from 'next/navigation';
import { getLocationPage, locationPages } from '@/lib/locationPages';
import { getProjectsByShootLocation } from '@/lib/portfolioData';
import LocationClient from './LocationClient';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { canonicalPath, defaultOpenGraph } from '@/lib/metadata';

export function generateStaticParams() {
  return locationPages.map((page) => ({ location: page.slug }));
}

export async function generateMetadata({ params }) {
  const { location } = await params;
  const page = getLocationPage(location);
  if (!page) return { title: 'Location' };

  return {
    title: `${page.title} | FocusMedia Productions`,
    description: page.description,
    keywords: page.keywords,
    ...canonicalPath(`/wedding-photography/${page.slug}`),
    openGraph: defaultOpenGraph({
      title: page.title,
      description: page.description,
      url: `/wedding-photography/${page.slug}`,
    }),
  };
}

export default async function LocationPage({ params }) {
  const { location } = await params;
  const page = getLocationPage(location);

  if (!page) notFound();

  const projects = getProjectsByShootLocation(location);
  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: page.title, path: `/wedding-photography/${page.slug}` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <LocationClient page={page} projects={projects} />
    </>
  );
}
