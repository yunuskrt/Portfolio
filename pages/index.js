import React, { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import StairTransition from '@components/stair_transition'
import RINGS from 'vanta/dist/vanta.rings.min'
import * as THREE from 'three'
import HeroSlide from '@slides/hero_slide'
import styles from './index.module.css'

const Home = () => {
	const [vantaEffect, setVantaEffect] = useState(0)
	const vantaRef = useRef(null)

	useEffect(() => {
		if (!vantaEffect) {
			setVantaEffect(
				RINGS({
					el: vantaRef.current,
					THREE: THREE,
					mouseControls: true,
					touchControls: true,
					gyroControls: false,
					minHeight: 200.0,
					minWidth: 200.0,
					scale: 1.0,
					scaleMobile: 1.0,
					backgroundColor: 0xdedede,
					color: 0xe1ff,
				})
			)
		}
		return () => {
			if (vantaEffect) vantaEffect.destroy()
		}
	}, [vantaEffect])
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<StairTransition>
				<div ref={vantaRef} className={styles.background}>
					<HeroSlide />
				</div>
			</StairTransition>
		</>
	)
}
export default Home
