import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Logo from '@utils/logo'
import ProjectButton from '@components/project_button'
import { TbCertificate } from 'react-icons/tb'
import { FaBook, FaUniversity, FaGraduationCap } from 'react-icons/fa'
import styles from './education_slide.module.css'

const EducationSlide = ({
	name,
	field,
	detail,
	gradDate,
	logo,
	date,
	src,
	href,
	lightColor,
	darkColor,
}) => {
	return (
		<div
			className={styles.slide}
			style={{ '--light': lightColor, '--dark': darkColor }}
		>
			<div className={styles.content}>
				<div className={styles.left}>
					<div>
						<div className={styles.iconContainer}>
							<Logo name={logo} />
						</div>
						<div className={styles.dateContainer}>
							<motion.div
								className={styles.date}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.5, duration: 2 }}
							>
								<span>{date}</span>
							</motion.div>
						</div>
					</div>
					<motion.div
						className={styles.infoContainer}
						initial={{ x: '-100vw' }}
						animate={{ x: 0 }}
						transition={{ type: 'spring', stiffness: 50, damping: 10 }}
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
						initial={{ y: '100vh' }}
						animate={{ y: -10 }}
						transition={{
							type: 'spring',
							stiffness: 10,
							damping: 5,
							delay: 1,
						}}
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
