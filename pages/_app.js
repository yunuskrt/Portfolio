import Layout from '@components/layout'
import { AnimatePresence } from 'framer-motion'
import '../public/globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function MyApp({ Component, pageProps, router }) {
	return (
		<Layout>
			<AnimatePresence mode='wait'>
				<Component key={router.route} {...pageProps} />
			</AnimatePresence>
		</Layout>
	)
}

export default MyApp
