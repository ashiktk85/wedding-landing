import { siteConfig } from '@/lib/siteConfig';
import { canonicalPath, defaultOpenGraph } from '@/lib/metadata';

export const metadata = {
  title: `Our Story | Kerala Wedding Photographers Since ${siteConfig.foundingYear} | FocusMedia`,
  description:
    'Meet the team behind FocusMedia Productions — a Kochi wedding photography studio blending documentary honesty with fine-art storytelling for Kerala & destination weddings.',
  ...canonicalPath('/about'),
  openGraph: defaultOpenGraph({
    title: `Our Story | FocusMedia Productions Since ${siteConfig.foundingYear}`,
    url: '/about',
  }),
};

export { default } from './AboutClient';
