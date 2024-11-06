/**
 * An array of routes that are public
 * @type {string[]}
 */
export const publicRoutes = [
  "/",
  "/services",
  "/blogs",
  "/memberships",
  "/gallery",
  "/about-us",
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
  "auth=login",
  "auth=signup",
  "auth=verify",
  "auth=login-with-otp",
];

/**
 * The prefix for the authentication API
 * @type {string}
 */

/**
 * The default redirect path after a successful login
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/";
