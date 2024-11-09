import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { Toaster } from "@/components/ui/sonner";
import { getMessages } from "next-intl/server";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider/theme-provider";
import { cn } from "@/lib/utils";
import { Saira, Tajawal } from "@/fonts";
import { getSession } from "@/lib/authSession";
import { SessionProvider } from "next-auth/react";
import Providers from "@/lib/query-provider";
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
      className={locale === "ar" ? cn(Tajawal.variable) : cn(Saira.variable)}
      dir={locale === "ar" ? "rtl" : "ltr"}
      lang={locale}
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Providers>{children}</Providers>
          </ThemeProvider>
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
