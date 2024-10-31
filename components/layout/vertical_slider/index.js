import React, { useState, useEffect, useRef } from 'react'
import NET from 'vanta/dist/vanta.net.min'
import * as THREE from 'three'
import Slider from 'react-slick'
import styles from './vertical_slider.module.css'

const VerticalSlider = ({ autoPlay = true, children }) => {
	const settings = {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		fade: true,
		infinite: true,
		draggable: true,
		swipeToSlide: true,
		vertical: true,
		verticalSwiping: true,
		centerMode: false,
		autoplay: autoPlay,
		speed: 1000,
		autoplaySpeed: 15000,
		// beforeChange: (currentSlide, nextSlide) => {
		// 	console.log('before change', currentSlide, nextSlide)
		// },
		// afterChange: function (index) {
		// 	console.log(
		// 		`Slider Changed to: ${index + 1}, background: #222; color: #bada55`
		// 	)
		// },
		appendDots: (dots) => (
			<div
				style={{
					width: '50px',
					position: 'absolute',
					height: '100%',
					top: '0',
					left: '0',
					display: 'flex',
					alignItems: 'center',
				}}
			>
				<ul
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '20px',
						fontSize: '30px',
					}}
				>
					{' '}
					{dots}{' '}
				</ul>
			</div>
		),
		customPaging: (i) => <div className='slick-dot'></div>,
	}
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
					color: 0x828282,
					backgroundColor: 0xdedede,
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
		<div className={styles.background} ref={vantaRef}>
			<Slider {...settings}>{children}</Slider>
		</div>
	)
}

export default VerticalSlider
