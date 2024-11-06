import React from 'react'
import VerticalSlider from '@layout/vertical_slider'
import EducationSlide from '@slides/education_slide'
const Education = () => {
	const educationData = [
		{
			name: 'Sainté Pulcherie',
			field: 'Science - Mathematics',
			detail: 'Dalf C1',
			gradDate: 'June 2019',
			logo: 'saintePulcherie',
			date: '2014 - 2019',
			src: '/banners/eiffel.png',
			href: 'https://www.sp.k12.tr',
			lightColor: '#4ca7ec',
			darkColor: '#051381',
		},
		{
			name: 'Sabanci University',
			field: 'Computer Science and Engineering',
			detail: '3.13',
			gradDate: 'June 2024',
			logo: 'sabanciUniv',
			date: '2019 - 2024',
			src: '/banners/univ.png',
			href: 'https://sabanciuniv.edu/tr',
			lightColor: '#1a3996',
			darkColor: '#061338',
		},
	]
	return (
		<VerticalSlider>
			{educationData.map((data, index) => (
				<EducationSlide key={index} {...data} />
			))}
		</VerticalSlider>
	)
}
export default Education
