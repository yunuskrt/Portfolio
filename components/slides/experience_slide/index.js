import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import SabanciDx from '@logos/sabanci_dx'
import Siemens from '@logos/siemens'
import ProjectButton from '@components/project_button'
import styles from './experience_slide.module.css'

const ExperienceSlide = ({
	name,
	date,
	desc,
	src,
	href,
	lightColor,
	darkColor,
	currentIndex,
	slideIndex,
}) => {
	const dateControls = useAnimation()
	const infoControls = useAnimation()
	const buttonControls = useAnimation()
	useEffect(() => {
		if (currentIndex === slideIndex) {
			// Start animations when slide is active
			dateControls.start({
				opacity: 1,
				transition: { delay: 0.5, duration: 2 },
			})
			infoControls.start('visible')
			buttonControls.start({
				y: -10,
				transition: { type: 'spring', stiffness: 10, damping: 5, delay: 1 },
			})
		} else {
			// Reset animations when slide is inactive
			dateControls.start({ opacity: 0 })
			infoControls.start('hidden')
			buttonControls.start({ y: '100vh' })
		}
	}, [slideIndex])
	return (
		<div
			className={styles.slide}
			style={{ '--light': lightColor, '--dark': darkColor }}
		>
			<div className={styles.content}>
				<div className={styles.left}>
					<div>
						<div className={styles.iconContainer}>
							{slideIndex === 0 ? <SabanciDx /> : <Siemens />}
						</div>
						<div className={styles.dateContainer}>
							<div className={styles.date}>
								<motion.div className={styles.date} animate={dateControls}>
									<span>{date}</span>
								</motion.div>
							</div>
						</div>
					</div>
					<motion.ul
						initial='hidden'
						animate={infoControls}
						variants={{
							visible: {
								transition: {
									staggerChildren: 0.1,
								},
							},
						}}
					>
						{desc
							.replace(/\\n/g, '\n')
							.split(/\r?\n/)
							.map((line, index) => (
								<motion.li
									key={index}
									className={styles.desc}
									variants={{
										hidden: { opacity: 0, x: -20 },
										visible: { opacity: 1, x: 0 },
									}}
									transition={{ type: 'spring', stiffness: 50, damping: 10 }}
								>
									{line}
								</motion.li>
							))}
					</motion.ul>
					<motion.div
						className={styles.projectBtn}
						animate={buttonControls}
						initial={{ y: '100vh' }}
					>
						<ProjectButton
							id='globe'
							text='Visit Website'
							href={href}
							lightColor={lightColor}
							darkColor={darkColor}
						/>
					</motion.div>
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
