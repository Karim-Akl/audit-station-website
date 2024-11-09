import createMiddleware from "next-intl/middleware";
import {
  DEFAULT_LOGIN_REDIRECT,
  authRoutes,
  publicNestedRoutes,
  publicRoutes,
} from "@/routes";
import { encrypt, getSession } from "@/lib/authSession";
import { NextRequest, NextResponse } from "next/server";
import { getLocale } from "next-intl/server";
export default createMiddleware({
  // A list of all locales that are supported
  locales: ["ar", "en", "fr"],
  // Used when no locale matches
  defaultLocale: "en",
});
// export async function middleware(request: NextRequest) {
//   const { nextUrl } = request;
//   const isLoggedIn = !!(await getSession());
//   const accessToken = request.cookies.get("session")?.value;
//   const session = await getSession();
//   const locale = getLocale();
//   const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
//   const isPublicNestedRoute = publicNestedRoutes.some((route) =>
//     nextUrl.pathname.startsWith(route)
//   );
//   const isAuthRoute = authRoutes.includes(nextUrl.searchParams.toString());
//   if (isAuthRoute) {
//     if (isLoggedIn) {
//       return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
//     }
//     return;
//   }

//   if (!isLoggedIn && !isPublicRoute && !isPublicNestedRoute) {
//     return Response.redirect(new URL(`/${locale}/login`, nextUrl));
//   }

// }
export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(ar|en|fr)/:path*"],
};
