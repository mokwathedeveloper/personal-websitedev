import type { Metadata, Viewport } from 'next';
import { Inter, Sora, Roboto_Mono } from 'next/font/google';
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

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
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
};

export const metadata: Metadata = {
  title: 'Mokwa | Portfolio',
  description: 'Personal portfolio showcasing my work and skills',
  keywords: ['portfolio', 'developer', 'designer', 'freelancer'],
  authors: [{ name: 'Mokwa' }],
  creator: 'Mokwa',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mokwa.dev',
    title: 'Mokwa | Portfolio',
    description: 'Personal portfolio showcasing my work and skills',
    siteName: 'Mokwa Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mokwa | Portfolio',
    description: 'Personal portfolio showcasing my work and skills',
    creator: '@mokwa',
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
          sora.variable,
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