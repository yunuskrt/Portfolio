import React, { useState, useEffect, useRef } from 'react'
import NET from 'vanta/dist/vanta.net.min'
import * as THREE from 'three'
import Slider from 'react-slick'
import styles from './vertical_slider.module.css'

const VerticalSlider = ({ id = '', autoPlay = true, children }) => {
	const [slideIndex, setSlideIndex] = useState(0)
	const colors = {
		color:
			id === 'projects'
				? slideIndex === 0
					? '#534c44'
					: slideIndex === 1
					? '#343d36'
					: slideIndex === 2
					? '#4a2e42'
					: slideIndex === 3
					? '#11284a'
					: slideIndex === 4
					? '#3d3228'
					: '#706f6f'
				: '#706f6f',
		activeColor:
			id === 'projects'
				? slideIndex === 0
					? '#96897b'
					: slideIndex === 1
					? '#6c8070'
					: slideIndex === 2
					? '#8f6b84'
					: slideIndex === 3
					? '#2d61ad'
					: slideIndex === 4
					? '#87715f'
					: '#a39c89'
				: '#a39c89',
	}

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
		afterChange: function (index) {
			setSlideIndex(index)
		},
		appendDots: (dots) => (
			<div
				style={{
					'--slick-dot-bg': colors.color,
					'--slick-dot-bg-active': colors.activeColor,
				}}
			>
				<ul className={styles.dotList}> {dots} </ul>
			</div>
		),
		customPaging: (i) => <div className={styles.slickDot}></div>,
	}

	const sliderRef = useRef(null)
	const next = () => {
		if (sliderRef.current) {
			sliderRef.current.slickNext()
		}
	}
	const previous = () => {
		if (sliderRef.current) {
			sliderRef.current.slickPrev()
		}
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

	const debounceTimeout = useRef(null)
	useEffect(() => {
		const handleWheel = (event) => {
			if (Math.abs(event.deltaY) >= 100) {
				clearTimeout(debounceTimeout.current)
				debounceTimeout.current = setTimeout(() => {
					if (event.deltaY > 0) {
						next()
					} else {
						previous()
					}
				}, 40)
			}
		}

		window.addEventListener('wheel', handleWheel)

		return () => {
			window.removeEventListener('wheel', handleWheel)
			clearTimeout(debounceTimeout.current)
		}
	}, [])

	return (
		<div className={styles.background} ref={vantaRef}>
			<Slider ref={sliderRef} {...settings}>
				{/* {children} */}
				{React.Children.map(children, (child) =>
					React.cloneElement(child, { slideIndex })
				)}
			</Slider>
		</div>
	)
}

export default VerticalSlider
