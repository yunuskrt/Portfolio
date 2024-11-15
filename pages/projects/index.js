import React from 'react'
import StairTransition from '@components/stair_transition'
import VerticalSlider from '@layout/vertical_slider'
import ProjectSlide from '@slides/project_slide'

const Projects = () => {
	const projectsData = [
		{
			bgColor: '#d2ccaa4d',
			modelName: 'flags',
			identifier: '01',
			title: 'DIPLOMATIC INTERACTIONS',
			description:
				'Developed the front end of a web app visualizing country relationships via cartography, tables, and heatmaps.\nBuilt with Next.js & Typescript, and Semantic UI React.',
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
				'Soccer squad guessing game using interconnected CS components.\nPython web scraper and ETL tool to collect and process soccer data from Transfermarkt into MongoDB.\nNestJS REST API for dynamic data filtering (league, season, round, country).\nFlutter mobile app for guessing squads, using FutureBuilder and Provider for state management.',
			buttons: [
				{
					id: 'eye',
					text: 'See More',
					external: false,
					href: '/projects/lineup',
				},
				{
					id: 'github-mobile',
					text: 'Github',
					detailText: '(Mobile)',
					external: true,
					href: 'https://github.com/yunuskrt/LineupApp',
				},
				{
					id: 'github-backend',
					text: 'Github',
					detailText: '(Backend)',
					external: true,
					href: 'https://github.com/yunuskrt/LineupAPI',
				},
				{
					id: 'github-scraper',
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
				'Developed a full-stack dashboard for project and employee tracking in corporate environments.\nUtilized Semantic UI, jQuery, AJAX, DataTables, and Highcharts for the front end, and PHP with MySQL for the back end.',
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
				'Full-stack web application to track the birthdays of your friends.\nBuilt with NestJS and NextJS.',
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
				'Full Stack Web App that serves the configurations for mobile apps.\nBuilt with Node.js, Vue.js, and Firebase.',
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
		<StairTransition>
			<VerticalSlider id='projects'>
				{projectsData.map((data, index) => (
					<ProjectSlide key={index} currentIndex={index} {...data} />
				))}
			</VerticalSlider>
		</StairTransition>
	)
}

export default Projects
