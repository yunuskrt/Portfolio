import React from 'react'
import ExperienceSlide from '@layout/experience_slide'
import styles from './experience.module.css'

const Experience = () => {
	return (
		<div className={styles.slidesContainer} id='slides-container'>
			<ExperienceSlide
				name='SabanciDx'
				path='/sabancidx.svg'
				date='June 2020 - August 2020'
				desc='Collaborated on a software project for a well-known Turkish energy company facilitating real-time tracking of their vehicle fleet status during service operations.\nImplemented CRUD operations for the project’s API using .NET.\nDesigned the user interface with Figma.'
				src='/tech-overlay.png'
				href='https://sabancidx.com'
				lightColor='#34557d'
				darkColor='#1a2a3d'
			/>
			<ExperienceSlide
				name='Siemens'
				path='/siemens.svg'
				date='October 2023 - May 2024'
				desc='Collaborated on a large software project for a factory environment, consisting of multiple modules which digitalize the operations of departments.\nUsed PHP and MySQL for the back end, ensured the security of module interactions.\nImplemented data pipelines with Python that accelerates the flow of daily operations.\nUsed Semantic UI, HTML, CSS, and jQuery for the implementation of user interfaces.\nUsed Datadog to track the logs, errors and warnings of programs.'
				src='/smart-city.png'
				href='https://www.google.com/aclk?sa=l&ai=DChcSEwi1r9v_nbSJAxXOs4MHHZkCHNsYABAAGgJlZg&co=1&ase=2&gclid=Cj0KCQjwj4K5BhDYARIsAD1Ly2oycQJJeqAUBpJ-0dvS3-wdjQjDhdDBPWTgJl7JgxLZQ8qu8E1IdtsaAvplEALw_wcB&sig=AOD64_2Y6XvO6YL1IJ_1TZHirhjosBFnsA&q&nis=4&adurl&ved=2ahUKEwi5qdT_nbSJAxXM3gIHHUKNAOMQ0Qx6BAgKEAE'
				lightColor='#196269'
				darkColor='#00183b'
			/>
		</div>
	)
}

export default Experience
