import Script from 'next/script'
import Head from 'next/head'
import Layout from '@components/layout'
import { AnimatePresence } from 'framer-motion'
import '../public/globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function MyApp({ Component, pageProps, router }) {
	return (
		<>
			{/* <Script
				strategy='afterInteractive'
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
			/>
			<Script id='google-analytics' strategy='afterInteractive'>
				{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
    `}
			</Script> */}

			<Layout>
				<Head>
					<link rel='icon' href='favicon.png' />
				</Head>
				<AnimatePresence mode='wait'>
					<Component key={router.route} {...pageProps} />
				</AnimatePresence>
			</Layout>
		</>
	)
}

export default MyApp
