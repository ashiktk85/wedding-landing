import { siteConfig } from './siteConfig';

export function siteUrl(path = '') {
  const base = siteConfig.url.replace(/\/$/, '');
  if (!path || path === '/') return base;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

export function canonicalPath(path) {
  return {
    alternates: {
      canonical: path === '/' ? '/' : path,
    },
  };
}

export function defaultOpenGraph(overrides = {}) {
  return {
    type: 'website',
    locale: 'en_IN',
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
    ...overrides,
  };
}

export const homeKeywords = [
  'wedding photography',
  'wedding photographer',
  'wedding videography',
  'wedding photography kochi',
  'best wedding photography in kerala',
  'wedding videography kerala',
  'best wedding photographer kerala',
  'candid wedding photography kerala',
  'cinematic wedding videography kerala',
  'destination wedding photographer kerala',
  'wedding photography packages kerala',
  'wedding videography price kerala',
  'hire wedding photographer kerala',
  'affordable wedding photography kerala',
  'candid wedding photography kochi',
  'christian wedding photographer kerala',
  'hindu wedding photography kerala',
  'muslim wedding photography kerala',
  'destination wedding photographer kerala for dubai couples',
  'wedding photography munnar',
  'wedding photography alleppey backwaters',
  'wedding photographer fort kochi',
  'best candid wedding photographer kerala',
  'corporate video production kerala',
  'video production services kerala',
];
