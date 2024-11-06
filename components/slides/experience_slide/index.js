import React from 'react'
import Image from 'next/image'
import Logo from '@utils/logo'
import ProjectButton from '@components/project_button'
import styles from './experience_slide.module.css'

const ExperienceSlide = ({
	name,
	logo,
	date,
	desc,
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
