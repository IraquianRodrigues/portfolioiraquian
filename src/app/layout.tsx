import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://iraquian-portfolio.vercel.app'),
  title: {
    default: "Iraquian Rodrigues - Desenvolvedor Full Stack",
    template: "%s | Iraquian Rodrigues"
  },
  description: "Portfólio profissional de Iraquian Rodrigues, desenvolvedor Full Stack especializado em React, Next.js, TypeScript e Node.js. Criando soluções web modernas e escaláveis.",
  keywords: [
    "desenvolvedor full stack",
    "programador",
    "react developer",
    "next.js",
    "typescript",
    "node.js",
    "desenvolvimento web",
    "frontend",
    "backend",
    "portfólio",
    "iraquian rodrigues"
  ],
  authors: [{ name: "Iraquian Rodrigues" }],
  creator: "Iraquian Rodrigues",
  publisher: "Iraquian Rodrigues",
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
    locale: 'pt_BR',
    url: 'https://iraquian-portfolio.vercel.app',
    title: 'Iraquian Rodrigues - Desenvolvedor Full Stack',
    description: 'Portfólio profissional de desenvolvimento web com React, Next.js, TypeScript e mais tecnologias modernas.',
    siteName: 'Portfólio Iraquian Rodrigues',
    images: [
      {
        url: '/portfolio.png',
        width: 1200,
        height: 630,
        alt: 'Iraquian Rodrigues - Desenvolvedor Full Stack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iraquian Rodrigues - Desenvolvedor Full Stack',
    description: 'Portfólio profissional de desenvolvimento web com React, Next.js, TypeScript e mais tecnologias modernas.',
    images: ['/portfolio.png'],
    creator: '@iraquian',
  },
  alternates: {
    canonical: 'https://iraquian-portfolio.vercel.app',
  },
  category: 'technology',
  classification: 'Portfolio',
  viewport: "width=device-width, initial-scale=1",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" }
  ],
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta name="google-site-verification" content="your-verification-code" />
      </head>
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
