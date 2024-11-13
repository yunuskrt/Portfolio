import React, { useEffect } from 'react'
import ProjectInfoSlide from '@components/slides/project_info_slide'
import {
	DiplomaticInteractions,
	Lineup,
	EmployeeManagementDashboard,
	BirthdayTracker,
	SettingConfigurator,
} from './data'

const Project = ({ project }) => {
	useEffect(() => {
		console.log({ project })
	}, [])
	let projectData = {
		'diplomatic-interactions': DiplomaticInteractions,
		lineup: Lineup,
		'employee-management-dashboard': EmployeeManagementDashboard,
		'birthday-tracker': BirthdayTracker,
		'setting-configurator': SettingConfigurator,
	}
	let projectInfo = projectData[project]
	return <ProjectInfoSlide {...projectInfo} />
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
