import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import NET from 'vanta/dist/vanta.net.min'
import * as THREE from 'three'
import ProjectButton from '@/components/project_button'
import styles from './experience_slide.module.css'

const ExperienceSlide = ({
	name,
	path,
	date,
	desc,
	src,
	href,
	lightColor,
	darkColor,
}) => {
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
					color: 0x828282,
					backgroundColor: 0xdedede,
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
		<div
			ref={vantaRef}
			className={styles.slide}
			style={{ '--light': lightColor, '--dark': darkColor }}
		>
			<div className={styles.content}>
				<div className={styles.left}>
					<div>
						<div className={styles.iconContainer}>
							<img src={path} alt={name} className={styles.icon} />
						</div>
						<div className={styles.dateContainer}>
							<div className={styles.date}>
								<span>{date}</span>
							</div>
						</div>
					</div>
					<ul>
						{desc
							.replace(/\\n/g, '\n')
							.split(/\r?\n/)
							.map((line, index) => (
								<li key={index} className={styles.desc}>
									{line}
								</li>
							))}
					</ul>
					<ProjectButton
						id='globe'
						text='Visit Website'
						href={href}
						lightColor={lightColor}
						darkColor={darkColor}
					/>
				</div>
				<div className={styles.right}>
					<Image
						className={styles.image}
						src={src}
						alt={name}
						width={400}
						height={400}
					/>
				</div>
			</div>
		</div>
	)
}
export default ExperienceSlide
