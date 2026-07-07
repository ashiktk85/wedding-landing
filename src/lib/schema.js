import { siteConfig } from './siteConfig';
import { siteUrl } from './metadata';

const businessId = `${siteConfig.url}/#business`;
const logoUrl = siteUrl(siteConfig.logo.black);

export function businessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': businessId,
    name: siteConfig.name,
    image: siteConfig.ogImage,
    logo: logoUrl,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    priceRange: '₹₹-₹₹₹',
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    areaServed: [
      { '@type': 'State', name: 'Kerala' },
      { '@type': 'Country', name: 'India' },
    ],
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      siteConfig.social.pinterest,
    ],
    makesOffer: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wedding Photography' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wedding Videography' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Maternity Photography' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Newborn Photography' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Destination Wedding Photography' } },
    ],
  };
}

export function packageServiceSchema({ name, price }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Wedding Photography Package',
    name,
    provider: { '@id': businessId },
    areaServed: 'Kerala, India',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: String(price),
      availability: 'https://schema.org/InStock',
    },
  };
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: siteUrl(item.path),
    })),
  };
}

export function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };
}

export function articleSchema({ title, datePublished, dateModified, image }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: { '@type': 'Organization', name: siteConfig.name },
    publisher: { '@id': businessId },
    image,
  };
}
