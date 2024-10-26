import React, { useState, useEffect, useRef } from 'react'
import NET from 'vanta/dist/vanta.net.min'
import * as THREE from 'three'
import Model from '@/utils/model'
import ProjectInfo from '@/components/project_info'
import styles from './project_slide.module.css'

const ProjectSlide = ({ id, bgColor, cellColor, modelName, content }) => {
	const [vantaEffect, setVantaEffect] = useState(0)
	const vantaRef = useRef(null)

	useEffect(() => {
		if (!vantaEffect) {
			setVantaEffect(
				NET({
					el: vantaRef.current,
					THREE: THREE,
					mouseControls: true,
					touchControls: true,
					gyroControls: false,
					minHeight: 200.0,
					minWidth: 200.0,
					scale: 1.0,
					scaleMobile: 1.0,
					color: cellColor,
					backgroundColor: bgColor,
					points: 17.0,
					maxDistance: 15.0,
					spacing: 14.0,
				})
			)
		}
		return () => {
			if (vantaEffect) vantaEffect.destroy()
		}
	}, [vantaEffect])
	return (
		<section id={id} ref={vantaRef} className={styles.slide}>
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
