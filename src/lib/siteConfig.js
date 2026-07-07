import { siteImages } from './imagePaths';

export const siteConfig = {
  name: 'FocusMedia Productions',
  shortName: 'FocusMedia',
  logo: {
    black: '/logo/logo-black.svg',
    white: '/logo/logo-white.svg',
  },
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://focusmediaproductions.com',
  email: 'hello@focusmediaproductions.com',
  phone: '+919876543210',
  phoneDisplay: '+91 98765 43210',
  foundingYear: 2004,
  address: {
    locality: 'Kochi',
    region: 'Kerala',
    country: 'IN',
  },
  social: {
    instagram: 'https://instagram.com/focusmediaproductions',
    facebook: 'https://www.facebook.com/focusmediaproductions',
    pinterest: 'https://in.pinterest.com/focusmediaproductions',
    whatsapp: 'https://wa.me/919876543210',
  },
  ogImage: siteImages.hero,
  films: [
    {
      id: '1',
      title: 'The Tuscan Elopement',
      category: 'Destination',
      youtubeUrl: 'https://www.youtube.com/watch?v=aqz-KE-bpKQ',
      thumbnail: siteImages.films.destination,
      ready: false,
    },
    {
      id: '2',
      title: 'A Winter Romance',
      category: 'Weddings',
      youtubeUrl: 'https://www.youtube.com/watch?v=2xcj9g_I_K8',
      thumbnail: siteImages.films.weddings,
      ready: false,
    },
    {
      id: '3',
      title: 'Editorial Splendor',
      category: 'Editorials',
      youtubeUrl: 'https://www.youtube.com/watch?v=aqz-KE-bpKQ',
      thumbnail: siteImages.films.editorial,
      ready: false,
    },
    {
      id: '4',
      title: 'Quiet Moments',
      category: 'Maternity',
      youtubeUrl: 'https://www.youtube.com/watch?v=2xcj9g_I_K8',
      thumbnail: siteImages.films.maternity,
      ready: false,
    },
  ],
};
