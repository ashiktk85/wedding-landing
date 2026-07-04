import { buildSrc } from '@imagekit/next';

export const imagekitUrlEndpoint =
  process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT ?? '';

export function ikSrc(src, transformation = []) {
  if (!imagekitUrlEndpoint) return src;
  return buildSrc({
    urlEndpoint: imagekitUrlEndpoint,
    src,
    transformation,
  });
}

export const ikTransformations = {
  thumbnail: [{ width: 600, height: 800, crop: 'maintain_ratio', quality: 80 }],
  hero: [{ width: 1920, quality: 80 }],
  gallery: [{ width: 1600, quality: 85 }],
  card: [{ width: 800, height: 1000, crop: 'maintain_ratio', quality: 80 }],
  banner: [{ width: 1920, height: 1080, crop: 'maintain_ratio', quality: 80 }],
};
