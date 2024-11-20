import React from 'react'

import WorldAnimation from '@animations/diplomatic-interactions.json'
import LineupAnimation from '@animations/lineup.json'
import EmployeeAnimation from '@animations/emp-management-dash.json'
import BirthdayAnimation from '@animations/birthday-tracker.json'
import SettingAnimation from '@animations/setting-configurator.json'
import ClassroomAnimation from '@animations/classroom.json'
import ComputerScienceAnimation from '@animations/computer-science.json'

import Lottie from 'lottie-react'

const animations = {
	birthday: BirthdayAnimation,
	employee: EmployeeAnimation,
	lineup: LineupAnimation,
	setting: SettingAnimation,
	world: WorldAnimation,
	classroom: ClassroomAnimation,
	computerScience: ComputerScienceAnimation,
}

const Animation = ({ name }) => {
	const animationData = animations[name]

	return animationData ? (
		<Lottie animationData={animationData} loop={true} />
	) : (
		<div></div>
	)
}

export default Animation
