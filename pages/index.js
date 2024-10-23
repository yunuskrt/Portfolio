import React, { useState, useEffect } from 'react'
import SideNav from '@layout/sidenav'
import Slide from '@layout/slide'
import useSectionObserver from '@utils/useSectionObserver'
import TransitionSlide from '@/components/transition_slide'
import { scrollIntoView } from '@/utils/helpers'

const Home = () => {
	useSectionObserver()
	useEffect(() => {
		scrollIntoView('home')
		// Check if window is defined
		if (typeof window !== 'undefined') {
			const logHash = () => {
				console.log(window.location.hash)
				const hash = window.location.hash
				if (hash.endsWith('tcontact')) {
					scrollIntoView('contact')
				} else if (hash.endsWith('thome')) {
					scrollIntoView('home')
				}
			}
			// Add event listener
			window.addEventListener('hashchange', logHash)
			// Cleanup the event listener
			return () => {
				window.removeEventListener('hashchange', logHash)
			}
		}
	}, [])
	return (
		<div className='slides-container'>
			<SideNav />
			<TransitionSlide id='tcontact' bgColor1='#749dea' bgColor2='#00d4ff' />
			<Slide id='home' bgColor1='#749dea' bgColor2='#00d4ff'>
				Home Section
			</Slide>
			<Slide id='experience' bgColor1='#83e86d' bgColor2='#89e285'>
				Experience Section
			</Slide>
			<Slide id='education' bgColor1='#e6c3bf' bgColor2='#ecd7d7'>
				Education Section
			</Slide>
			<Slide id='projects' bgColor1='#d2ccaa' bgColor2='#fff8cf'>
				Projects Section
			</Slide>
			<Slide id='contact' bgColor1='#eec798' bgColor2='#ffc886'>
				Contact Section
			</Slide>
			<TransitionSlide id='thome' bgColor1='#eec798' bgColor2='#ffc886' />
		</div>
	)
}

export default Home
