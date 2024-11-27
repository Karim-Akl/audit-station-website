export const BASE_URL = process.env.NEXT_PUBLIC_BASIC_URL;

export const revalidateTime = 300; // 5 minutes

export let productionUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/en'
    : process.env.NEXT_PUBLIC_PRODUCTION_URL;

export const DEFAULT_REQUEST_SIZE = 25;
