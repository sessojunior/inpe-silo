import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

import { Roboto } from "next/font/google"

const roboto = Roboto({
	weight: ["400", "700"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	display: "swap",
})

export const metadata: Metadata = {
	title: "Silo",
	description: "Sistema de gerenciamento de serviços",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='pt-br'>
			<body className={`${roboto.className} antialiased`}>{children}</body>
		</html>
	)
}
