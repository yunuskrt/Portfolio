import React from 'react'
import styles from './transition_slide.module.css'
const TransitionSlide = ({ id, bgColor1, bgColor2 }) => {
	return (
		<section
			id={id}
			className={styles.slide}
			style={{ '--bgColor1': bgColor1, '--bgColor2': bgColor2 }}
		/>
	)
}

export default TransitionSlide
