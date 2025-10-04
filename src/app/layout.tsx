import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Anglicana Vida',
  description: 'Site da Igreja Anglicana Vida',
  icons: {
    icon: 'logo.svg',
  },
  openGraph: {
    title: 'Igreja Anglicana Vida',
    description: 'Site oficial da Igreja Anglicana Vida',
    url: 'https://anglicanavida.com.br',
    siteName: 'Igreja Anglicana Vida',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Igreja Anglicana Vida',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta property="og:title" content="Igreja Anglicana Vida" />
        <meta property="og:description" content="Site oficial da Igreja Anglicana Vida" />
        <meta property="og:image" content="https://anglicanavida.com.br/logo.png" />
        <meta property="og:url" content="https://anglicanavida.com.br" />
        <meta property="og:type" content="website" />
      </head>
      <body className="h-dvh w-dvw antialiased bg-slate-200">{children}</body>
    </html>
  )
}
