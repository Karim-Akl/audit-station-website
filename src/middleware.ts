import createMiddleware from "next-intl/middleware";
import { getSession } from "@/lib/authSession";
import { NextRequest, NextResponse } from "next/server";
import {
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
  publicNestedRoutes,
  publicRoutes,
} from "./routes";
import { getLocale } from "next-intl/server";

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
  console.log("middleware", nextUrl);
  
  const session = await getSession();
  const isLoggedIn = !!session;
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isPublicNestedRoute = publicNestedRoutes.some((route) =>
    nextUrl.pathname.startsWith(route)
  );
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  console.log(
    "middleware",
    { isLoggedIn, isPublicRoute, isPublicNestedRoute, isAuthRoute, session }
  );

  if (isAuthRoute) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, request.url));
    }
    return;
  }
  // If not logged in and trying to access a protected route, redirect to login
  // if (!isLoggedIn && !isPublicRoute && !isPublicNestedRoute) {
  //   return NextResponse.redirect(new URL(`${nextUrl.href}`, nextUrl));
  // }

  // Run next-intl middleware if all custom checks passed
  return intlMiddleware(request);
}
