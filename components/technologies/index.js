import React, { useEffect, useRef } from 'react'
import { useInView, motion, useAnimation } from 'framer-motion'
import styles from './technologies.module.css'

const Technologies = ({ lightColor, darkColor, icons }) => {
	const containerRef = useRef(null)
	const isInView = useInView(containerRef, { once: true })
	const controls = useAnimation()

	useEffect(() => {
		if (isInView) {
			controls.start('visible')
		}
	}, [isInView, controls])

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.5,
			},
		},
	}

	const iconVariants = {
		hidden: { y: 50, opacity: 0 },
		visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
	}

	return (
		<div
			className={styles.container}
			style={{ '--light': lightColor, '--dark': darkColor }}
			ref={containerRef}
		>
			<h2 className={styles.techText}>Technologies</h2>
			<motion.div
				className={styles.techIcons}
				variants={containerVariants}
				initial='hidden'
				animate={controls}
			>
				{icons.map((icon, index) => (
					<motion.div
						key={index}
						className={styles.iconContainer}
						variants={iconVariants}
					>
						<img src={icon.src} alt={icon.text} />
						<span className={styles.hoverText}>{icon.text}</span>
					</motion.div>
				))}
			</motion.div>
		</div>
	)
}

export default Technologies
