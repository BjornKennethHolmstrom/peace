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
  return locales.map((locale) => ({ locale }))
}

export function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return {
    title: 'peace',
    description: 'Global peace for humanity',
    icons: {
      icon: [
        { url: '/peace-heart.svg', type: 'image/svg+xml' },
      ],
    },
  }
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  // Enable static rendering
  unstable_setRequestLocale(locale)

  // Validate the locale
  if (!isValidLocale(locale)) notFound()

  let messages
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html lang={locale} dir={isRtlLocale(locale) ? 'rtl' : 'ltr'}>
      <body>
        <div className={`${inter.className} flex flex-col min-h-screen`}>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  )
}
