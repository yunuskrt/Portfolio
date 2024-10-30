import React from 'react'
import EducationSlide from '@layout/education_slide'
import styles from './education.module.css'

const Education = () => {
	return (
		<div className={styles.slidesContainer} id='slides-container'>
			<EducationSlide
				name='Sainté Pulcherie'
				field='Science - Mathematics'
				detail='Dalf C1'
				gradDate='June 2019'
				path='/sainte-pulcherie.svg'
				date='2014 - 2019'
				src='/eiffel.png'
				href='https://www.sp.k12.tr'
				lightColor='#4ca7ec'
				darkColor='#051381'
			/>
			<EducationSlide
				name='Sabanci University'
				field='Computer Science and Engineering'
				detail='3.13'
				gradDate='June 2024'
				path='/sabanci-univ.svg'
				date='2019 - 2024'
				src='/univ.png'
				href='https://sabanciuniv.edu/tr'
				lightColor='#1a3996'
				darkColor='#061338'
			/>
		</div>
	)
}

export default Education
