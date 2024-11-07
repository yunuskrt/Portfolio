import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import Model from '@utils/model'
import ProjectButton from '@components/project_button'
import styles from './project_slide.module.css'

const ProjectSlide = ({
	bgColor,
	modelName,
	lightColor,
	darkColor,
	identifier,
	title,
	description,
	buttons,
	currentIndex,
	slideIndex,
}) => {
	const infoControls = useAnimation()
	const buttonControls = useAnimation()
	useEffect(() => {
		if (currentIndex === slideIndex) {
			// Start animations when slide is active
			infoControls.start('visible')
			buttonControls.start({
				y: -10,
				transition: { type: 'spring', stiffness: 10, damping: 5, delay: 1 },
			})
		} else {
			// Reset animations when slide is inactive
			infoControls.start('hidden')
			buttonControls.start({ y: '100vh' })
		}
	}, [slideIndex])

	return (
		<section className={styles.slide} style={{ '--background-color': bgColor }}>
			<div className={styles.content}>
				<div className={styles.left}>
					<Model name={modelName} />
				</div>
				<div className={styles.right}>
					<div
						className={styles.projectInfoContainer}
						style={{ '--light': lightColor, '--dark': darkColor }}
					>
						<div className={styles.projectHeader}>
							<span className={styles.projectIdentifier}>{identifier}.</span>
							<TypeAnimation
								key={slideIndex}
								sequence={[title]}
								wrapper='h1'
								cursor={false}
								repeat={1}
								className={styles.projectTitle}
							/>
						</div>
						<motion.ul
							className={styles.projectInfoList}
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
							{description
								.replace(/\\n/g, '\n')
								.split(/\r?\n/)
								.map((line, index) => (
									<motion.li
										key={index}
										className={styles.projectDesc}
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
							className={styles.projectButtons}
							animate={buttonControls}
							initial={{ y: '100vh' }}
						>
							{buttons.map((btn) => {
								return (
									<ProjectButton
										key={btn.id}
										id={btn.id}
										text={btn.text}
										detailText={btn.detailText}
										external={btn.external}
										href={btn.href}
										lightColor={lightColor}
										darkColor={darkColor}
									/>
								)
							})}
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default ProjectSlide
