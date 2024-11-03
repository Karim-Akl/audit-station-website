import type { Metadata } from "next";
import Head from "next/head";
import { NextIntlClientProvider } from "next-intl";
import { Tajawal, Saira } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { getMessages } from "next-intl/server";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider/theme-provider";
import { cn } from "@/lib/utils";
import {Sira} from "@/fonts";

const inter = Saira({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: "200",
});
export const metadata: Metadata & {
  title: { template: string; default: string };
} = {
  title: {
    template: "%s | audit ",
    default: " audit-station-dashboard",
  },
  description: "audit-station-dashboard",

  // date: "2024-04-26T03:04:34+03:00", // Removed invalid property
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html
      className={cn(Sira.variable)}
      dir={locale === "ar" ? "rtl" : "ltr"}
      lang={locale}
    >
      <Head>
        <title>{metadata.title.default ?? "Default Title"}</title>
        <meta name="description" content={metadata.description ?? ""} />

        {/* Removed invalid date meta tag */}
      </Head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
