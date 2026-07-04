import { getUploadAuthParams } from '@imagekit/next/server';

export async function GET(request) {
  const secret = process.env.UPLOAD_AUTH_SECRET;
  if (secret) {
    const authHeader = request.headers.get('x-upload-auth-secret');
    if (authHeader !== secret) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }
  }

  const privateKey = process.env.IMAGEKIT_PRIVATE_KEY;
  const publicKey = process.env.IMAGEKIT_PUBLIC_KEY;

  if (!privateKey || !publicKey) {
    return Response.json(
      { error: 'ImageKit credentials are not configured' },
      { status: 500 }
    );
  }

  const { token, expire, signature } = getUploadAuthParams({
    privateKey,
    publicKey,
  });

  return Response.json({ token, expire, signature, publicKey });
}
