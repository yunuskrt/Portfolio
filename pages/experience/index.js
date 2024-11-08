import React from 'react'
import StairTransition from '@components/stair_transition'
import VerticalSlider from '@layout/vertical_slider'
import ExperienceSlide from '@slides/experience_slide'

const Experience = () => {
	const experienceData = [
		{
			name: 'SabanciDx',
			date: 'June 2020 - August 2020',
			desc: 'Collaborated on a software project for a well-known Turkish energy company facilitating real-time tracking of their vehicle fleet status during service operations.\nImplemented CRUD operations for the project’s API using .NET.\nDesigned the user interface with Figma.',
			src: '/banners/tech-overlay.png',
			href: 'https://sabancidx.com',
			lightColor: '#34557d',
			darkColor: '#1a2a3d',
		},
		{
			name: 'Siemens',
			date: 'October 2023 - May 2024',
			desc: 'Collaborated on a large software project for a factory environment, consisting of multiple modules which digitalize the operations of departments.\nUsed PHP and MySQL for the back end, ensured the security of module interactions.\nImplemented data pipelines with Python that accelerates the flow of daily operations.\nUsed Semantic UI, HTML, CSS, and jQuery for the implementation of user interfaces.\nUsed Datadog to track the logs, errors and warnings of programs.',
			src: '/banners/smart-city.png',
			href: 'https://www.google.com/aclk?sa=l&ai=DChcSEwi1r9v_nbSJAxXOs4MHHZkCHNsYABAAGgJlZg&co=1&ase=2&gclid=Cj0KCQjwj4K5BhDYARIsAD1Ly2oycQJJeqAUBpJ-0dvS3-wdjQjDhdDBPWTgJl7JgxLZQ8qu8E1IdtsaAvplEALw_wcB&sig=AOD64_2Y6XvO6YL1IJ_1TZHirhjosBFnsA&q&nis=4&adurl&ved=2ahUKEwi5qdT_nbSJAxXM3gIHHUKNAOMQ0Qx6BAgKEAE',
			lightColor: '#196269',
			darkColor: '#00183b',
		},
	]
	return (
		<StairTransition>
			<VerticalSlider>
				{experienceData.map((data, index) => (
					<ExperienceSlide key={index} currentIndex={index} {...data} />
				))}
			</VerticalSlider>
		</StairTransition>
	)
}

export default Experience
