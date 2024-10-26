import React from 'react'
import ProjectButton from '@/components/project_button'
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
				<h1 className={styles.projectTitle}>{title}</h1>
			</div>
			<div className={styles.projectDesc}>{description}</div>
			<div className={styles.projectButtons}>
				{buttons.map((btn) => {
					return (
						<ProjectButton
							key={btn.id}
							id={btn.id}
							text={btn.text}
							external={btn.external}
							href={btn.href}
							lightColor={lightColor}
							darkColor={darkColor}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default ProjectInfo
