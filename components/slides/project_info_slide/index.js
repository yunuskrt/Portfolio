import React from 'react'
import ProjectGallery from '@components/project_gallery'
import ProjectHeader from '@components/project_header'
import Technologies from '@components/technologies'
import styles from './project_info_slide.module.css'
const ProjectInfoSlide = ({
	lightColor,
	darkColor,
	title,
	description,
	modelName,
	buttons,
	icons,
	imageWidth = '500px',
	images,
}) => {
	return (
		<div className={styles.slideContainer} style={{ '--light': lightColor }}>
			<ProjectHeader
				lightColor={lightColor}
				darkColor={darkColor}
				title={title}
				description={description}
				modelName={modelName}
				buttons={buttons}
			/>
			<Technologies
				lightColor={lightColor}
				darkColor={darkColor}
				icons={icons}
			/>
			<ProjectGallery
				lightColor={lightColor}
				darkColor={darkColor}
				imageWidth={imageWidth}
				images={images}
			/>
		</div>
	)
}

export default ProjectInfoSlide
