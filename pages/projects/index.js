import React from 'react'
import VerticalSlider from '@layout/vertical_slider'
import ProjectSlide from '@slides/project_slide'

const Swiper = () => {
	const projectsData = [
		{
			bgColor: '#d2ccaa4d',
			modelName: 'flags',
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
		{
			bgColor: '#89e2854d',
			modelName: 'stadium',
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
		{
			bgColor: '#ecd7d74d',
			modelName: 'employee',
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
		{
			bgColor: '#00d4ff4d',
			modelName: 'cake',
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
		{
			bgColor: '#ffc8864d',
			modelName: 'settings',
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
	]
	return (
		<VerticalSlider id='projects'>
			{projectsData.map((data, index) => (
				<ProjectSlide key={index} currentIndex={index} {...data} />
			))}
		</VerticalSlider>
	)
}

export default Swiper
