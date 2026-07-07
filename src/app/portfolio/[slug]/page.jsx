import { notFound } from 'next/navigation';
import { getPortfolioProject, portfolioProjects } from '@/lib/portfolioData';
import PortfolioDetail from './components/PortfolioDetail';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { canonicalPath } from '@/lib/metadata';

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getPortfolioProject(slug);
  if (!project) return { title: 'Portfolio' };

  const locationLabel = project.location ?? 'Kerala';

  return {
    title: `${project.coupleNames} — ${project.category} Wedding Photography Kerala | FocusMedia`,
    description: `${project.category} wedding photography by FocusMedia Productions — ${project.coupleNames}'s ${locationLabel} celebration captured in candid, cinematic style.`,
    ...canonicalPath(`/portfolio/${project.slug}`),
  };
}

export default async function PortfolioProjectPage({ params }) {
  const { slug } = await params;
  const project = getPortfolioProject(slug);

  if (!project) notFound();

  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: project.coupleNames, path: `/portfolio/${project.slug}` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <PortfolioDetail project={project} />
    </>
  );
}
