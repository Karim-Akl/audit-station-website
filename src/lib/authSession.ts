'use server';

import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
const secretKey = process.env.AUTH_SECRET;
if (!secretKey) {
  throw new Error('AUTH_SECRET environment variable is not set or is empty');
}
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload).setProtectedHeader({ alg: 'HS256' }).setIssuedAt().sign(key);
}

export async function decrypt(input: string): Promise<any> {
  if (!input) return null;
  const { payload } = await jwtVerify(input, key, {
    algorithms: ['HS256'],
  });
  return payload;
}

export async function getSession() {
  const session = cookies().get('session')?.value;
  if (!session) return null;
  return await decrypt(session);
}

export async function getXSRFToken() {
  const xsrfToken = cookies().get('XSRF-TOKEN')?.value;
  if (!xsrfToken) return null;
  return xsrfToken
}
