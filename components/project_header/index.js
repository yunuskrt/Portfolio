import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import Animation from '@utils/animation'
import ProjectButton from '@components/project_button'

import styles from './project_header.module.css'

const ProjectHeader = ({
	lightColor,
	darkColor,
	animName,
	title,
	description,
	buttons,
}) => {
	return (
		<div
			className={styles.container}
			style={{ '--light': lightColor, '--dark': darkColor }}
		>
			<div className={styles.left}>
				<h1 className={styles.projectTitle}>{title}</h1>
				<div className={styles.quoteWrapper}>
					<div className={styles.quoteBorder}></div>
					<TypeAnimation
						key={title}
						sequence={[description]}
						wrapper='h1'
						cursor={false}
						repeat={1}
						className={styles.quoteText}
					/>
					<div className={styles.quoteBorder}></div>
				</div>
				<motion.div
					className={styles.projectButtons}
					initial={{ x: '-100vw' }}
					animate={{
						x: 1,
						transition: {
							type: 'spring',
							stiffness: 10,
							damping: 5,
							delay: 1,
						},
					}}
				>
					{buttons.map((btn) => (
						<ProjectButton
							key={btn.id}
							id={btn.id}
							text={btn.text}
							detailText={btn.detailText}
							external={btn.external}
							href={btn.href}
							lightColor={darkColor}
							darkColor={darkColor}
						/>
					))}
				</motion.div>
			</div>
			<div className={styles.right}>
				<Animation name={animName} />
			</div>
		</div>
	)
}

export default ProjectHeader
