/**
 * An array of routes that are public
 * @type {string[]}
 */
export const publicRoutes = [
  "/en",
  "/services",
  "/blogs",
  "/about",
  "/contact",
  "/authError",
  "/privacy-policy",
  "/api/refresh-token",
];

/**
 * An array of nested routes that are public
 * @type {string[]}
 */
export const publicNestedRoutes = ["/blogs", "/services"];

/**
 * An array of the query params that opens the authentication modals
 * @type {string}
 */
export const authRoutes = [
  "/en/login",
  "/registration",
  "/forgot-password",
  "/reset-password",
  "/otp",
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
