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
	let projectData = {
		'diplomatic-interactions': DiplomaticInteractions,
		lineup: Lineup,
		'employee-management-dashboard': EmployeeManagementDashboard,
		'birthday-tracker': BirthdayTracker,
		'setting-configurator': SettingConfigurator,
	}
	let projectInfo = projectData[project]
	return (
		<StairTransition>
			<ProjectInfoSlide {...projectInfo} />
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
