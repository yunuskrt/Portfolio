import React from 'react'
import Head from 'next/head'
import StairTransition from '@components/stair_transition'
import VerticalSlider from '@layout/vertical_slider'
import EducationSlide from '@slides/education_slide'

const Education = () => {
	const educationData = [
		{
			name: 'Sainté Pulcherie',
			field: 'Science - Mathematics',
			detail: 'Dalf C1',
			gradDate: 'June 2019',
			date: '2014 - 2019',
			animName: 'classroom',
			href: 'https://www.sp.k12.tr',
			lightColor: '#4ca7ec',
			darkColor: '#051381',
		},
		{
			name: 'Sabanci University',
			field: 'Computer Science and Engineering',
			detail: '3.13',
			gradDate: 'June 2024',
			date: '2019 - 2024',
			animName: 'computerScience',
			href: 'https://sabanciuniv.edu/tr',
			size: 120,
			lightColor: '#1a3996',
			darkColor: '#061338',
		},
	]
	return (
		<>
			<Head>
				<title>Education</title>
			</Head>
			<StairTransition>
				<VerticalSlider>
					{educationData.map((data, index) => (
						<EducationSlide key={index} currentIndex={index} {...data} />
					))}
				</VerticalSlider>
			</StairTransition>
		</>
	)
}
export default Education
