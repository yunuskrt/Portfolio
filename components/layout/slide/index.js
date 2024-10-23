import React from 'react'
import styles from './slide.module.css'
import ParticlesBackground from '@/components/particles'
const Slide = ({ id, bgColor1, bgColor2, children }) => {
	return (
		<section
			id={id}
			className={styles.slide}
			style={{ '--bgColor1': bgColor1, '--bgColor2': bgColor2 }}
		>
			<ParticlesBackground id={id} className={styles.particles} />
			{children}
		</section>
	)
}

export default Slide
