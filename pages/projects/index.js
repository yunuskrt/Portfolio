import React, { useEffect } from 'react'
import Slide from '@layout/slide'
import useSectionObserver from '@utils/useSectionObserver'
import TransitionSlide from '@/components/transition_slide'
import { scrollIntoView } from '@/utils/helpers'
import styles from './projects.module.css'

const Projects = () => {
	useSectionObserver()
	useEffect(() => {
		scrollIntoView('diplomaticInteractions')
		// Check if window is defined
		if (typeof window !== 'undefined') {
			const logHash = () => {
				console.log(window.location.hash)
				const hash = window.location.hash
				if (hash.endsWith('tsettingConfigurator')) {
					scrollIntoView('settingConfigurator')
				} else if (hash.endsWith('tdiplomaticInteractions')) {
					scrollIntoView('diplomaticInteractions')
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
		<div className={styles.slidesContainer} id='slides-container'>
			<TransitionSlide
				id='tsettingConfigurator'
				bgColor1='#d2ccaa'
				bgColor2='#fff8cf'
			/>
			<Slide id='diplomaticInteractions' bgColor1='#d2ccaa' bgColor2='#fff8cf'>
				Diplomatic Interactions Section
			</Slide>
			<Slide id='lineup' bgColor1='#83e86d' bgColor2='#89e285'>
				Lineup Section
			</Slide>
			<Slide id='empManagementDash' bgColor1='#e6c3bf' bgColor2='#ecd7d7'>
				Employee Management Dashboard Section
			</Slide>
			<Slide id='diplomaticInteractions' bgColor1='#749dea' bgColor2='#00d4ff'>
				Birthday Tracker Section
			</Slide>
			<Slide id='settingConfigurator' bgColor1='#eec798' bgColor2='#ffc886'>
				Setting Configurator Section
			</Slide>
			<TransitionSlide
				id='tdiplomaticInteractions'
				bgColor1='#eec798'
				bgColor2='#ffc886'
			/>
		</div>
	)
}

export default Projects
