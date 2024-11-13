import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Slider from 'react-slick'
import styles from './project_gallery.module.css'

const ProjectGallery = ({ lightColor, darkColor, imageWidth, images }) => {
	const [slideIndex, setSlideIndex] = useState(0)
	const settings = {
		dots: true,
		fade: true,
		dotsClass: styles.dots,
		arrows: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		customPaging: (i) => (
			<div
				className={`${styles.paginationDot} ${
					i === slideIndex ? styles.active : ''
				}`}
			></div>
		),

		afterChange: function (index) {
			setSlideIndex(index)
		},
	}
	const infoControls = useAnimation()
	useEffect(() => {
		infoControls.start('visible')
	}, [slideIndex])
	return (
		<div
			className={styles.container}
			style={{
				'--light': lightColor,
				'--dark': darkColor,
				'--image-width': imageWidth,
			}}
		>
			<div className={styles.left}>
				<Slider {...settings}>
					{images.map((item) => (
						<div key={item.id}>
							<img src={item.src} alt={item.alt} className={styles.img} />
						</div>
					))}
				</Slider>
			</div>
			<div className={styles.right}>
				<h2 className={styles.pageTitle}>{images[slideIndex].title}</h2>
				<motion.ul
					key={slideIndex}
					className={styles.projectInfoList}
					initial='hidden'
					animate={infoControls}
					variants={{
						visible: {
							transition: {
								staggerChildren: 0.1,
							},
						},
					}}
				>
					{images[slideIndex].description
						.replace(/\\n/g, '\n')
						.split(/\r?\n/)
						.map((line, index) => (
							<motion.li
								key={index}
								className={styles.projectDesc}
								variants={{
									hidden: { opacity: 0, x: -20 },
									visible: { opacity: 1, x: 0 },
								}}
								transition={{ type: 'spring', stiffness: 50, damping: 10 }}
							>
								{line}
							</motion.li>
						))}
				</motion.ul>
			</div>
		</div>
	)
}

export default ProjectGallery
