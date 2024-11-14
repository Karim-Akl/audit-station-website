import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider/theme-provider';
import { cn } from '@/lib/utils';
import { Saira, Tajawal } from '@/fonts';
import { Toaster as ReactHotToast } from "react-hot-toast";
import { Toaster as SonnerToaster } from '@/components/ui/sonner'; 

import Providers from '@/lib/query-provider';
import ReduxProvider from '@/lip/redux/ReduxProvider';

export const metadata: Metadata & {
  title: { template: string; default: string };
} = {
  title: {
    template: '%s | audit ',
    default: 'audit-station-dashboard',
  },
  description: 'audit-station-dashboard',
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
      className={locale === 'ar' ? cn(Tajawal.variable) : cn(Saira.variable)}
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      lang={locale}
    >
      <body>
        <ReduxProvider>
          <NextIntlClientProvider messages={messages}>
            <ThemeProvider
              attribute='class'
              defaultTheme='system'
              enableSystem
              disableTransitionOnChange
            >
              <ReactHotToast />
              <SonnerToaster />
              <Providers>{children}</Providers>
            </ThemeProvider>
          </NextIntlClientProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
