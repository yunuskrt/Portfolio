import React from 'react'
import Head from 'next/head'
import ProjectInfoSlide from '@slides/project_info_slide'
import StairTransition from '@components/stair_transition'
import {
	DiplomaticInteractions,
	Lineup,
	EmployeeManagementDashboard,
	BirthdayTracker,
	SettingConfigurator,
} from './data'

const Project = ({ project }) => {
	const projectData = {
		'diplomatic-interactions': {
			data: DiplomaticInteractions,
			color: '#534c44',
			title: 'Diplomatic Interactions',
		},
		lineup: { data: Lineup, color: '#343d36', title: 'Lineup' },
		'employee-management-dashboard': {
			data: EmployeeManagementDashboard,
			color: '#4a2e42',
			title: 'Employee Management Dashboard',
		},
		'birthday-tracker': {
			data: BirthdayTracker,
			color: '#11284a',
			title: 'Birthday Tracker',
		},
		'setting-configurator': {
			data: SettingConfigurator,
			color: '#3d3228',
			title: 'Setting Configurator',
		},
	}
	let projectInfo = projectData[project]
	return (
		<>
			<Head>
				<title>Project | {projectInfo.title}</title>
			</Head>
			<StairTransition bgColor={projectInfo.color}>
				<ProjectInfoSlide {...projectInfo.data} />
			</StairTransition>
		</>
	)
}

export async function getServerSideProps(context) {
	const { project } = context.params

	if (
		![
			'diplomatic-interactions',
			'lineup',
			'employee-management-dashboard',
			'birthday-tracker',
			'setting-configurator',
		].includes(project)
	) {
		return {
			redirect: {
				destination: '/404',
				permanent: false,
			},
		}
	}

	return {
		props: { project },
	}
}

export default Project
