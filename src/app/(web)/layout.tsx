import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import './globals.css'
import ThemeProvider from './_components/layout/provider/ThemeProvider'
import NextAuthProvider from './_components/layout/provider/NextAuthProvider'
import Toast from './_components/layout/Toast'
import Header from './_components/layout/Header'
import Footer from './_components/layout/Footer'

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['400', '500', '700', '900'],
	style: ['italic', 'normal'],
	variable: '--font-poppins',
})
export const metadata: Metadata = {
	title: 'Hotel Management App',
	description: 'Discover the Best Hotel Rooms',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<head>
				<title>...</title>
			</head>
			<body className={poppins.className}>
				<NextAuthProvider>
					<ThemeProvider>
						<Toast />
						<main className='font-normal'>
							<Header />
							{children}
							<Footer />
						</main>
					</ThemeProvider>
				</NextAuthProvider>
			</body>
		</html>
	)
}
