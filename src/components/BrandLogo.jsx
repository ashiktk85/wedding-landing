import { siteConfig } from '@/lib/siteConfig';

const sizeClasses = {
  sm: 'h-10 w-auto max-w-none',
  md: 'h-14 md:h-16 w-auto max-w-none',
  lg: 'h-16 md:h-20 w-auto max-w-none',
  xl: 'h-20 md:h-24 lg:h-28 w-auto max-w-none',
  nav: 'h-11 md:h-12 w-auto max-w-none',
  'nav-hero': 'h-16 md:h-24 lg:h-28 w-auto max-w-none',
  footer: 'h-20 md:h-24 w-auto max-w-none',
};

const wrapperClasses = {
  nav: 'pb-1',
  'nav-hero': 'pb-1.5',
  footer: 'pb-2',
};

export default function BrandLogo({
  variant = 'black',
  size = 'md',
  className = '',
  priority = false,
}) {
  const src = variant === 'white' ? siteConfig.logo.white : siteConfig.logo.black;

  return (
    <span className={`inline-flex leading-none ${wrapperClasses[size] ?? ''}`.trim()}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={siteConfig.name}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        className={`block ${sizeClasses[size] ?? sizeClasses.md} object-contain ${className}`.trim()}
      />
    </span>
  );
}
