import React, { useEffect } from 'react'
import useSectionObserver from '@utils/useSectionObserver'
import TransitionSlide from '@/components/transition_slide'
import { scrollIntoView } from '@/utils/helpers'
import ProjectSlide from '@/components/layout/project_slide'

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
	const projects = [
		{
			id: 'diplomaticInteractions',
			bgColor: '#d2ccaa',
			cellColor: '#756a5d',
			modelName: 'flags',
			content: {
				identifier: '01',
				title: 'DIPLOMATIC INTERACTIONS',
				description:
					'Frontend application that visualizes the data of interactions among countries built with NextJS.\nOffers many dynamic visualization types such as tables, networks, cartography, bar chart.',
				buttons: [
					{
						id: 'eye',
						text: 'See More',
						external: false,
						href: '/projects/diplomatic-interactions',
					},
					{
						id: 'github',
						text: 'Github',
						external: true,
						href: 'https://github.com/yunuskrt/DiplomaticInteractions',
					},
				],
				lightColor: '#96897b',
				darkColor: '#534c44',
			},
		},
		{
			id: 'lineup',
			bgColor: '#89e285',
			cellColor: '#4e5c51',
			modelName: 'stadium',
			content: {
				identifier: '02',
				title: 'LINEUP',
				description:
					'Soccer squad guessing game using Flutter.\nWeb scraper and ETL pipeline that fetches match, player, team, and manager data from Transfermarkt, processes it, and stores it in MongoDB.\nREST API for a squad guessing game, managing soccer data with MongoDB.',
				buttons: [
					{
						id: 'eye',
						text: 'See More',
						external: false,
						href: '/projects/lineup',
					},
					{
						id: 'github',
						text: 'Github',
						detailText: '(Mobile)',
						external: true,
						href: 'https://github.com/yunuskrt/LineupApp',
					},
					{
						id: 'github',
						text: 'Github',
						detailText: '(Backend)',
						external: true,
						href: 'https://github.com/yunuskrt/LineupAPI',
					},
					{
						id: 'github',
						text: 'Github',
						detailText: '(Web Scraper)',
						external: true,
						href: 'https://github.com/yunuskrt/LineupScraper',
					},
				],
				lightColor: '#6c8070',
				darkColor: '#343d36',
			},
		},
		{
			id: 'empManagementDash',
			bgColor: '#ecd7d7',
			cellColor: '#8a577b',
			modelName: 'employee',
			content: {
				identifier: '03',
				title: 'EMPLOYEE MANAGEMENT DASHBOARD',
				description:
					'Full stack dashboard web app.\nUsed Semantic UI, HTML, CSS, jQuery for the front-end, MySQL database and PHP backend.',
				buttons: [
					{
						id: 'eye',
						text: 'See More',
						external: false,
						href: '/projects/employee-management-dashboard',
					},
					{
						id: 'github',
						text: 'Github',
						external: true,
						href: 'https://github.com/yunuskrt/UserMgmDashboard',
					},
				],
				lightColor: '#8f6b84',
				darkColor: '#4a2e42',
			},
		},
		{
			id: 'birthdayTracker',
			bgColor: '#00d4ff',
			cellColor: '#0b2f47',
			modelName: 'cake',
			content: {
				identifier: '04',
				title: 'BIRTHDAY TRACKER',
				description:
					'A web application to track the birthdays of your friends.\nBuilt with NestJS and NextJS.',
				buttons: [
					{
						id: 'eye',
						text: 'See More',
						external: false,
						href: '/projects/birthday-tracker',
					},
					{
						id: 'github',
						text: 'Github',
						external: true,
						href: 'https://github.com/yunuskrt/BirthdayTracker',
					},
				],
				lightColor: '#2d61ad',
				darkColor: '#11284a',
			},
		},
		{
			id: 'settingConfigurator',
			bgColor: '#ffc886',
			cellColor: '#665547',
			modelName: 'settings',
			content: {
				identifier: '05',
				title: 'SETTING CONFIGURATOR',
				description:
					'Full Stack Web App that serves the configurations for mobile apps.',
				buttons: [
					{
						id: 'eye',
						text: 'See More',
						external: false,
						href: '/projects/setting-configurator',
					},
					{
						id: 'github',
						text: 'Github',
						external: true,
						href: 'https://github.com/yunuskrt/SettingConfigurator',
					},
				],
				lightColor: '#87715f',
				darkColor: '#3d3228',
			},
		},
	]
	return (
		<div className={styles.slidesContainer} id='slides-container'>
			<TransitionSlide
				id='tsettingConfigurator'
				bgColor1='#d2ccaa'
				bgColor2='#fff8cf'
			/>
			{projects.map((project) => {
				return <ProjectSlide key={project.id} {...project} />
			})}
			<TransitionSlide
				id='tdiplomaticInteractions'
				bgColor1='#eec798'
				bgColor2='#ffc886'
			/>
		</div>
	)
}

export default Projects
