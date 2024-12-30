import { Inter } from 'next/font/google'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { locales, isValidLocale, isRtlLocale } from '@/config/i18n'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Generate metadata for the page
export function generateMetadata({ params }: { params: { locale: string }}) {
  return {
    title: 'peace',
    icons: {
      icon: [
        {
          url: '/blank-favicon.ico',
          sizes: 'any',
        },
      ],
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(params.locale);

  // Validate that the incoming `locale` parameter is valid
  if (!isValidLocale(params.locale)) notFound();

  const messages = await import(`../../../messages/${params.locale}.json`).then(
    (module) => module.default
  ).catch(() => {
    console.error(`Failed to load messages for locale ${params.locale}`);
    return {};
  });

  const direction = isRtlLocale(params.locale) ? 'rtl' : 'ltr';

  return (
    <html lang={params.locale} dir={direction} suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body suppressHydrationWarning>
        <div className={`${inter.className} flex flex-col min-h-screen`}>
          <NextIntlClientProvider locale={params.locale} messages={messages}>
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}
