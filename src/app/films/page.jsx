import { canonicalPath, defaultOpenGraph } from '@/lib/metadata';

export const metadata = {
  title: 'Cinematic Wedding Films Kerala | FocusMedia Productions',
  description:
    'Watch cinematic wedding highlight films by FocusMedia — Kerala weddings and destination celebrations shot and edited with a documentary-meets-editorial style.',
  ...canonicalPath('/films'),
  openGraph: defaultOpenGraph({
    title: 'Cinematic Wedding Films Kerala | FocusMedia',
    url: '/films',
  }),
};

export { default } from './components/FilmsClient';
