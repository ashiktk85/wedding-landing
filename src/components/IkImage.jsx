import { Image } from '@imagekit/next';
import { ikTransformations } from '@/lib/imagekit';

const presetMap = {
  thumbnail: ikTransformations.thumbnail,
  hero: ikTransformations.hero,
  gallery: ikTransformations.gallery,
  card: ikTransformations.card,
  banner: ikTransformations.banner,
};

export default function IkImage({
  src,
  alt,
  preset,
  transformation,
  ...props
}) {
  const resolvedTransformation =
    transformation ?? (preset ? presetMap[preset] : undefined);

  return (
    <Image
      src={src}
      alt={alt}
      transformation={resolvedTransformation}
      {...props}
    />
  );
}
