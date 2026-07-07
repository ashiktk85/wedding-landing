import { canonicalPath, defaultOpenGraph } from '@/lib/metadata';

export const metadata = {
  title: 'Contact FocusMedia Productions | Kochi Wedding Photographers',
  description:
    'Get in touch with FocusMedia Productions to check availability for your Kerala or destination wedding. We reply within 24 hours.',
  ...canonicalPath('/contact'),
  openGraph: defaultOpenGraph({
    title: 'Contact FocusMedia Productions',
    url: '/contact',
  }),
};

export { default } from './components/ContactClient';
