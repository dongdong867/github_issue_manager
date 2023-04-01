import './global.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
	variable: '--font-Montserrat',
	display: 'swap',
	preload: false
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' className={`${montserrat.variable}`}>
			<body>{children}</body>
		</html>
	)
}
