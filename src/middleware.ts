import createMiddleware from "next-intl/middleware";
import { getSession } from "@/lib/authSession";
import { NextRequest, NextResponse } from "next/server";
import {
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
  publicNestedRoutes,
  publicRoutes,
} from "./routes";

const intlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: ["ar", "en", "fr"],
  // Used when no locale matches
  defaultLocale: "en",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(ar|en|fr)/:path*"],
};

export async function middleware(request: NextRequest) {
  const { nextUrl } = request;
  const isLoggedIn = !!(await getSession());
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isPublicNestedRoute = publicNestedRoutes.some((route) =>
    nextUrl.pathname.startsWith(route)
  );
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  if (isAuthRoute) {
    return NextResponse.next();
  }
  if (isLoggedIn) {
    return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
  }
  // If not logged in and trying to access a protected route, redirect to login
  // if (!isLoggedIn && !isPublicRoute && !isPublicNestedRoute) {
  //   return NextResponse.redirect(new URL(`${nextUrl.href}`, nextUrl));
  // }

  // Run next-intl middleware if all custom checks passed
  return intlMiddleware(request);
}
