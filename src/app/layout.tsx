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
    default: "Iraquian Rodrigues - Gestor de Automação e Especialista em N8N",
    template: "%s | Iraquian Rodrigues"
  },
  description: "Portfólio profissional de Iraquian Rodrigues, gestor de automação e especialista em N8N, com soluções de IA para captação de leads, atendimento e operação comercial.",
  keywords: [
    "gestor de automação",
    "especialista em n8n",
    "automação com ia",
    "n8n",
    "captação de leads",
    "automação de processos",
    "desenvolvimento web",
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
    title: 'Iraquian Rodrigues - Gestor de Automação e Especialista em N8N',
    description: 'Portfólio profissional com soluções de automação, N8N e IA para escala operacional e comercial.',
    siteName: 'Portfólio Iraquian Rodrigues',
    images: [
      {
        url: '/portfolio.png',
        width: 1200,
        height: 630,
        alt: 'Iraquian Rodrigues - Gestor de Automação e Especialista em N8N',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iraquian Rodrigues - Gestor de Automação e Especialista em N8N',
    description: 'Portfólio profissional com soluções de automação, N8N e IA para escala operacional e comercial.',
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
    { media: "(prefers-color-scheme: light)", color: "#f97316" },
    { media: "(prefers-color-scheme: dark)", color: "#050505" }
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

import { GoogleAnalytics } from '@next/third-parties/google';

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
      <body className={`${inter.className} bg-orange-50 dark:bg-black text-neutral-900 dark:text-neutral-100 antialiased`}>
        {children}
        <GoogleAnalytics gaId="G-50GWKXQFKK" />
      </body>
    </html>
  );
}
