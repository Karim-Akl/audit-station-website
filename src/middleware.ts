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
  const session = await getSession();
  const type = session?.user?.data;
  const mainRoute = nextUrl.pathname.split("/")[2];
  const locale = nextUrl.pathname.split("/")[1];
  const isLoggedIn = !!session;
  const isPublicRoute = publicRoutes.includes(mainRoute);
  const isAuthRoute = authRoutes.includes(mainRoute);

  if (isAuthRoute) {
    if (isLoggedIn) {
      return NextResponse.redirect(
        new URL(DEFAULT_LOGIN_REDIRECT, request.url)
      );
    }
  }

  // if (type) {
  //   const {
  //     reached_company,
  //     reached_instructor,
  //     reached_accountant,
  //     reached_certified,
  //     reached_interviewer,
  //   } = type;

  //   switch (true) {
  //     case reached_accountant &&
  //       mainRoute !== "accountant" &&
  //       (mainRoute == "user" ||
  //         mainRoute == "instructor" ||
  //         mainRoute == "interviewer" ||
  //         mainRoute == "company" ||
  //         mainRoute == "certified"):
  //       return NextResponse.redirect(
  //         new URL(`${locale}/accountant/dashboard`, request.url)
  //       );
  //     case reached_instructor &&
  //       (mainRoute == "user" ||
  //         mainRoute == "interviewer" ||
  //         mainRoute == "accountant" ||
  //         mainRoute == "company" ||  
  //         mainRoute == "certified"):
  //       return NextResponse.redirect(
  //         new URL(`${locale}/instructor/dashboard`, request.url)
  //       );
  //     case reached_interviewer &&
  //       mainRoute !== "interviewer" &&
  //       (mainRoute == "user" ||
  //         mainRoute == "instructor" ||
  //         mainRoute == "accountant" ||
  //         mainRoute == "company" ||
  //         mainRoute == "certified"):
  //       return NextResponse.redirect(
  //         new URL(`${locale}/interviewer/dashboard`, request.url)
  //       );
  //     case reached_company && mainRoute !== "company":
  //       return NextResponse.redirect(new URL("/company", request.url));
  //     case reached_certified &&
  //       mainRoute !== "certified" &&
  //       (mainRoute == "user" ||
  //         mainRoute == "instructor" ||
  //         mainRoute == "accountant" ||
  //         mainRoute == "company" ||
  //         mainRoute == "interviewer"):
  //       return NextResponse.redirect(
  //         new URL(`${locale}/certified/dashboard`, request.url)
  //       );
  //     default:
  //       console.log("User type is:", type);
  //     // Handle default case here
  //   }
  // }

  // Run next-intl middleware if all custom checks passed
  return intlMiddleware(request);
}
