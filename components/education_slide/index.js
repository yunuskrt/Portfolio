import React from 'react'
import Image from 'next/image'
import ProjectButton from '@/components/project_button'
import { TbCertificate } from 'react-icons/tb'
import { FaBook, FaUniversity, FaGraduationCap } from 'react-icons/fa'
import styles from './education_slide.module.css'

const EducationSlide = ({
	name,
	field,
	detail,
	gradDate,
	path,
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
							<img src={path} alt={name} className={styles.icon} />
						</div>
						<div className={styles.dateContainer}>
							<div className={styles.date}>
								<span>{date}</span>
							</div>
						</div>
					</div>
					<div className={styles.infoContainer}>
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
					</div>

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
						width={600}
						height={450}
					/>
				</div>
			</div>
		</div>
	)
}
export default EducationSlide
