import React, { useState, useEffect, useRef } from 'react'
import StairTransition from '@components/stair_transition'
import GLOBE from 'vanta/dist/vanta.globe.min'
import * as THREE from 'three'
import ContactSlide from '@slides/contact_slide'
import styles from './contact.module.css'

const Contact = () => {
	const [vantaEffect, setVantaEffect] = useState(0)
	const vantaRef = useRef(null)

	useEffect(() => {
		if (!vantaEffect) {
			setVantaEffect(
				GLOBE({
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
					color: 0x2d59c0,
				})
			)
		}
		return () => {
			if (vantaEffect) vantaEffect.destroy()
		}
	}, [vantaEffect])

	return (
		<StairTransition>
			<div ref={vantaRef} className={styles.background}>
				<ContactSlide />
			</div>
		</StairTransition>
	)
}
export default Contact
