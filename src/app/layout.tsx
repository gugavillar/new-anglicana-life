import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata } from 'next'

import { MicrosoftClarity } from '@/components'
import './globals.css'

export const metadata: Metadata = {
	description: 'Site da Igreja Anglicana Vida',
	icons: {
		icon: 'logo.svg',
	},
	metadataBase: new URL('https://anglicanavida.com.br/'),
	openGraph: {
		description: 'Site oficial da Igreja Anglicana Vida',
		images: [
			{
				alt: 'Igreja Anglicana Vida',
				height: 630,
				url: '/logo.png',
				width: 1200,
			},
		],
		locale: 'pt_BR',
		siteName: 'Igreja Anglicana Vida',
		title: 'Igreja Anglicana Vida',
		type: 'website',
		url: 'https://anglicanavida.com.br',
	},
	title: 'Anglicana Vida',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const isDevelopment = process.env.NODE_ENV === 'development'
	const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

	return (
		<html lang="pt-BR">
			<head>
				<meta content="Igreja Anglicana Vida" property="og:title" />
				<meta content="Site oficial da Igreja Anglicana Vida" property="og:description" />
				<meta content="https://anglicanavida.com.br/logo.png" property="og:image" />
				<meta content="https://anglicanavida.com.br" property="og:url" />
				<meta content="website" property="og:type" />
			</head>
			<body className="h-dvh w-dvw antialiased bg-background text-white">{children}</body>
			{!isDevelopment && gaId && <GoogleAnalytics gaId={gaId} />}
			{!isDevelopment && <MicrosoftClarity />}
		</html>
	)
}
