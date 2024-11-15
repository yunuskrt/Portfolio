import React from 'react'
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
		},
		lineup: { data: Lineup, color: '#343d36' },
		'employee-management-dashboard': {
			data: EmployeeManagementDashboard,
			color: '#4a2e42',
		},
		'birthday-tracker': { data: BirthdayTracker, color: '#11284a' },
		'setting-configurator': { data: SettingConfigurator, color: '#3d3228' },
	}
	let projectInfo = projectData[project]
	return (
		<StairTransition bgColor={projectInfo.color}>
			<ProjectInfoSlide {...projectInfo.data} />
		</StairTransition>
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
