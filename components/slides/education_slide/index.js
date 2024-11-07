import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import SabanciUniv from '@logos/sabanci_univ'
import SaintePulcherie from '@logos/sainte_pulcherie'
import ProjectButton from '@components/project_button'
import { TbCertificate } from 'react-icons/tb'
import { FaBook, FaUniversity, FaGraduationCap } from 'react-icons/fa'
import styles from './education_slide.module.css'

const EducationSlide = ({
	name,
	field,
	detail,
	gradDate,
	date,
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
		if (currentIndex == slideIndex) {
			// Start animations when slide is active
			dateControls.start({
				opacity: 1,
				transition: { delay: 0.5, duration: 2 },
			})

			infoControls.start({
				x: 0,
				transition: { type: 'spring', stiffness: 50, damping: 10 },
			})

			buttonControls.start({
				y: -10,
				transition: { type: 'spring', stiffness: 10, damping: 5, delay: 1 },
			})
		} else {
			// Reset animations when slide is inactive
			dateControls.start({ opacity: 0 })
			infoControls.start({ x: '-100vw' })
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
							{slideIndex == 0 ? <SaintePulcherie /> : <SabanciUniv />}
						</div>
						<div className={styles.dateContainer}>
							<motion.div
								className={styles.date}
								animate={dateControls}
								initial={{ opacity: 0 }}
							>
								<span>{date}</span>
							</motion.div>
						</div>
					</div>
					<motion.div
						className={styles.infoContainer}
						animate={infoControls}
						initial={{ x: '-100vw' }}
					>
						<div className={styles.info}>
							<FaUniversity /> <span>{name}</span>
						</div>
						<div className={styles.info}>
							<FaBook /> <span>{field}</span>
						</div>
						<div className={styles.info}>
							<TbCertificate /> <span>{detail}</span>
						</div>
						<div className={styles.info}>
							<FaGraduationCap /> <span>{gradDate}</span>
						</div>
					</motion.div>
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
						width={600}
						height={450}
					/>
				</div>
			</div>
		</div>
	)
}
export default EducationSlide
