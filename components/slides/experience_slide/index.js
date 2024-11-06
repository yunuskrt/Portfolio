import React from 'react'
import { motion } from 'framer-motion'
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
					</div>
					<motion.ul
						initial='hidden'
						animate='visible'
						variants={{
							visible: {
								transition: {
									staggerChildren: 0.1, // Staggers each child by 0.1s
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
						width={400}
						height={400}
					/>
				</div>
			</div>
		</div>
	)
}
export default ExperienceSlide
