import React from 'react'
import Model from '@utils/model'
import ProjectInfo from '@components/project_info'
import styles from './project_slide.module.css'

const ProjectSlide = (props) => {
	const { bgColor, modelName, ...content } = props
	return (
		<section className={styles.slide} style={{ '--background-color': bgColor }}>
			<div className={styles.content}>
				<div className={styles.left}>
					<Model name={modelName} />
				</div>
				<div className={styles.right}>
					<ProjectInfo {...content} />
				</div>
			</div>
		</section>
	)
}
export default ProjectSlide
