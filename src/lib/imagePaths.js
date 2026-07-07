import { portfolioProjects } from './portfolioData';

function project(slug) {
  const match = portfolioProjects.find((item) => item.slug === slug);
  if (!match) {
    throw new Error(`Missing portfolio project: ${slug}`);
  }
  return match;
}

function galleryImage(slug, index = 0) {
  const { gallery, thumbnail } = project(slug);
  return gallery[index] ?? thumbnail;
}

export const siteImages = {
  /** Wide banner / fallback hero still */
  hero: project('sahal-and-nahala').thumbnail,
  aboutBanner: galleryImage('fathima-and-aadhil', 0),
  about: {
    artist: '/logo/393384292_351225920720259_4853708852247536020_n.jpg',
  },
  services: {
    weddings: project('nehla-and-morsy').thumbnail,
    maternity: galleryImage('maternity-glow', 7),
    newborn: galleryImage('newborn-fayas', 1),
    prePostWedding: project('jickson-and-jeni').thumbnail,
  },
  intro: {
    main: project('rejula-and-nefsal').thumbnail,
    bouquet: galleryImage('rejula-and-nefsal', 7),
  },
  blog: {
    destination: project('vipin-and-aiswarya').thumbnail,
    light: galleryImage('harsha-and-anwar', 0),
    details: galleryImage('rejula-and-nefsal', 7),
  },
  films: {
    destination: project('said-ali-and-sasna-wedding').thumbnail,
    weddings: project('asif-and-shabiya').thumbnail,
    editorial: galleryImage('shuhaib-and-nasrin', 0),
    maternity: project('maternity-glow').thumbnail,
  },
};

/** Hero banner — autoplay background video from ImageKit */
export const heroMedia = {
  mode: 'video',
  video: '/Banner/fathima eve single.MOV',
  /** First frame while video loads (ImageKit auto-generates from video) */
  poster: '/Banner/fathima eve single.MOV/ik-thumbnail.jpg',
  /** Rotate video: 90, 180, 270, or "N90" for counter-clockwise */
  rotation: 270,
};

export const heroSlides = [
  heroMedia.poster,
  siteImages.services.weddings,
  siteImages.services.maternity,
];

export const approachSlides = [
  siteImages.services.weddings,
  siteImages.intro.main,
  siteImages.hero,
  siteImages.services.maternity,
  siteImages.services.newborn,
];
