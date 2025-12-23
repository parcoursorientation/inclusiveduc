import type { Metadata } from 'next'
import { Inter, Cairo } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })
const cairo = Cairo({
  subsets: ['arabic'],
  variable: '--font-arabic',
  weight: ['400', '600', '700']
})

export const metadata: Metadata = {
  title: 'التربية الدامجة - جميع الأطفال يمكنهم أن يتعلموا',
  description: 'موقع متكامل حول التربية الدامجة للأطفال في وضعية إعاقة. موارد ودليل للأسر والمعلمين والجمعيات.',
  keywords: 'التربية الدامجة، الإعاقة، الدمج المدرسي، المشروع البيداغوجي الفردي، الكفايات المهنية، الأسر، المعلمين، الجمعيات',
  authors: [{ name: 'منصة التربية الدامجة' }],
  openGraph: {
    title: 'التربية الدامجة - جميع الأطفال يمكنهم أن يتعلموا',
    description: 'موقع متكامل حول التربية الدامجة للأطفال في وضعية إعاقة',
    type: 'website',
    locale: 'ar_AR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${inter.className} ${cairo.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            {children}
            <Toaster />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  )
}