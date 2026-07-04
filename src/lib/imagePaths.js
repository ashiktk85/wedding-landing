export const siteImages = {
  hero: '/banners/hero-bg.jpg',
  aboutBanner: '/banners/about-banner.jpg',
  services: {
    weddings: '/site/services-weddings.jpg',
    maternity: '/site/services-maternity.jpg',
    family: '/site/services-family.jpg',
  },
  intro: {
    main: '/site/intro-main.jpg',
    bouquet: '/site/intro-bouquet.jpg',
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
];
