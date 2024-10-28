import React, { useState, useEffect, useRef } from 'react'
import NET from 'vanta/dist/vanta.net.min'
import * as THREE from 'three'
import styles from './experience_slide.module.css'
import ProjectButton from '@/components/project_button'

const ExperienceSlide = () => {
	const [vantaEffect, setVantaEffect] = useState(0)
	const vantaRef = useRef(null)

	useEffect(() => {
		if (!vantaEffect) {
			setVantaEffect(
				NET({
					el: vantaRef.current,
					THREE: THREE,
					mouseControls: true,
					touchControls: true,
					gyroControls: false,
					minHeight: 200.0,
					minWidth: 200.0,
					scale: 1.0,
					scaleMobile: 1.0,
					color: 0x333e54,
					backgroundColor: 0x8eadec,
					points: 17.0,
					maxDistance: 15.0,
					spacing: 14.0,
				})
			)
		}
		return () => {
			if (vantaEffect) vantaEffect.destroy()
		}
	}, [vantaEffect])

	return (
		<div ref={vantaRef} className={styles.background}>
			<div className={styles.content}>
				<div
					style={{
						height: '80px',
					}}
				>
					<img
						src='/sabancidx.svg'
						alt='SabanciDx Logo'
						style={{
							height: '100%',
							objectFit: 'cover',
						}}
					/>
				</div>
				<div className={styles.dateContainer}>
					<div className={styles.date}>
						<span>June 2020 - August 2020</span>
					</div>
				</div>
				<div>
					<p className={styles.desc}>
						• Collaborated on a software project for a well-known Turkish energy
						company facilitating real-time tracking of their vehicle fleet
						status during service operations.
					</p>
					<p className={styles.desc}>
						• Implemented CRUD operations for the project’s API using .NET
					</p>
					<p className={styles.desc}>
						• Designed the user interface with Figma.
					</p>
				</div>
				<ProjectButton
					id='globe'
					text='Visit Website'
					href='https://sabancidx.com'
					lightColor='#34557d'
					darkColor='#1a2a3d'
				/>
			</div>
		</div>
	)
}
export default ExperienceSlide

// dark color - #1a2a3d
// light color - #34557d
