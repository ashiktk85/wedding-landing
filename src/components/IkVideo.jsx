import { Video, buildSrc } from '@imagekit/next';
import { imagekitUrlEndpoint } from '@/lib/imagekit';

export default function IkVideo({
  src,
  poster,
  transformation,
  posterTransformation,
  className,
  ...props
}) {
  const posterUrl =
    poster && imagekitUrlEndpoint
      ? buildSrc({
          urlEndpoint: imagekitUrlEndpoint,
          src: poster,
          transformation: posterTransformation ?? [
            { width: 1920, quality: 80 },
            ...(transformation ?? []),
          ],
        })
      : undefined;

  return (
    <Video
      src={src}
      poster={posterUrl}
      transformation={transformation}
      className={className}
      {...props}
    />
  );
}
