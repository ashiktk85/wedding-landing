import { notFound } from 'next/navigation';
import { getPortfolioProject, portfolioProjects } from '@/lib/portfolioData';
import PortfolioDetail from './components/PortfolioDetail';

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getPortfolioProject(slug);
  if (!project) return { title: 'Portfolio' };

  return {
    title: `${project.coupleNames} | Portfolio`,
    description: `${project.category} photography — ${project.coupleNames}`,
  };
}

export default async function PortfolioProjectPage({ params }) {
  const { slug } = await params;
  const project = getPortfolioProject(slug);

  if (!project) notFound();

  return <PortfolioDetail project={project} />;
}
