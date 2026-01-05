import type { Metadata, Viewport } from 'next';
import { Inter, Syne, Roboto_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { cn } from '@/lib/utils';
import './globals.css';

// Fonts
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://personal-websitedev.vercel.app'),
  title: {
    default: 'Mokwa | Architectural Portfolio Engine',
    template: '%s | Mokwa Portfolio'
  },
  description: 'A hyper-modern, architecturally sound personal portfolio engine engineered for high-impact digital presence. Showcasing Senior-level Full Stack engineering with cinematic motion design.',
  keywords: [
    'portfolio', 'developer', 'designer', 'full-stack', 'next.js', 'react', 
    'typescript', 'tailwind', 'framer-motion', 'architecture', 'engineering'
  ],
  authors: [{ name: 'Mokwa', url: 'https://github.com/mokwathedeveloper' }],
  creator: 'Mokwa',
  publisher: 'Mokwa',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://personal-websitedev.vercel.app',
    title: 'Mokwa | Architectural Portfolio Engine',
    description: 'A hyper-modern, architecturally sound personal portfolio engine engineered for high-impact digital presence.',
    siteName: 'Mokwa Portfolio',
    images: [
      {
        url: '/images/profile.webp',
        width: 1200,
        height: 630,
        alt: 'Mokwa Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mokwa | Architectural Portfolio Engine',
    description: 'A hyper-modern, architecturally sound personal portfolio engine engineered for high-impact digital presence.',
    creator: '@mokwathedeveloper',
    images: ['/images/profile.webp'],
  },
  alternates: {
    canonical: 'https://personal-websitedev.vercel.app',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={cn(
          'min-h-screen bg-background font-sans antialiased flex flex-col',
          inter.variable,
          syne.variable,
          robotoMono.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="flex-grow">
            {children}
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}