/**
 * An array of routes that are public
 * @type {string[]}
 */
export const publicRoutes = [
  "/en/",
  "/en/services",
  "/en/blogs",
  "/en/about",
  "/en/contact",
  "/en/authError",
  "/en/privacy-policy",
  "/en/api/refresh-token",
];

/**
 * An array of nested routes that are public
 * @type {string[]}
 */
export const publicNestedRoutes = ["/blogs", "/services"];

/**
 * An array of the query params that opens the authentication modals
 * @   {string}
 */
export const authRoutes = [
  `/en/login`,
  "/en/registration",
  "/en/forgot-password",
  "/en/reset-password",
  "/en/otp",
];

/**
 * The prefix for the authentication API
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after a successful login
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = `/`;
