import React from 'react'
import StairTransition from '@components/stair_transition'
import VerticalSlider from '@layout/vertical_slider'
import ExperienceSlide from '@slides/experience_slide'

const Experience = () => {
	const experienceData = [
		{
			name: 'SabanciDx',
			date: 'June 2022 - August 2022',
			desc: 'Worked on a software project for a leading Turkish energy company, enabling real-time vehicle fleet tracking.\nDeveloped API CRUD operations using .NET.\nDesigned user interfaces with Figma.',
			src: '/banners/tech-overlay.png',
			href: 'https://sabancidx.com',
			role: 'Software Engineer',
			context: 'Internship',
			type: 'Remote',
			location: 'Istanbul',
			lightColor: '#34557d',
			darkColor: '#1a2a3d',
		},
		{
			name: 'Siemens',
			date: 'October 2023 - May 2024',
			desc: 'Contributed to a large modular software project for a factory, digitizing departmental operations.\nDeveloped secure backend systems using PHP and MySQL.\nBuilt Python data pipelines to streamline daily processes.\nDesigned user interfaces with Semantic UI, HTML, CSS, and jQuery.\nMonitored logs and errors using Datadog for efficient troubleshooting.',
			src: '/banners/smart-city.png',
			href: 'https://www.google.com/aclk?sa=l&ai=DChcSEwi1r9v_nbSJAxXOs4MHHZkCHNsYABAAGgJlZg&co=1&ase=2&gclid=Cj0KCQjwj4K5BhDYARIsAD1Ly2oycQJJeqAUBpJ-0dvS3-wdjQjDhdDBPWTgJl7JgxLZQ8qu8E1IdtsaAvplEALw_wcB&sig=AOD64_2Y6XvO6YL1IJ_1TZHirhjosBFnsA&q&nis=4&adurl&ved=2ahUKEwi5qdT_nbSJAxXM3gIHHUKNAOMQ0Qx6BAgKEAE',
			role: 'Full Stack',
			context: 'Part-time',
			type: 'Hybrid',
			location: 'Istanbul',
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
