import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import ProjectButton from '@components/project_button'
import styles from './project-info.module.css'

const ProjectInfo = ({
	identifier,
	title,
	description,
	buttons,
	lightColor,
	darkColor,
}) => {
	return (
		<div
			className={styles.projectInfoContainer}
			style={{ '--light': lightColor, '--dark': darkColor }}
		>
			<div className={styles.projectHeader}>
				<span className={styles.projectIdentifier}>{identifier}.</span>
				<TypeAnimation
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
				animate='visible'
				variants={{
					visible: {
						transition: {
							staggerChildren: 0.1, // Staggers each child by 0.1s
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
				initial={{ y: '100vh' }}
				animate={{ y: -10 }}
				transition={{
					type: 'spring',
					stiffness: 10,
					damping: 5,
					delay: 1,
				}}
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
	)
}

export default ProjectInfo
