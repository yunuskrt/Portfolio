import React from 'react'
import { FiGithub } from 'react-icons/fi'
import { FaEye } from 'react-icons/fa'

const icons = {
	github: FiGithub,
	eye: FaEye,
}

const Icon = ({ name }) => {
	const IconComponent = icons[name.toLowerCase()]
	return IconComponent ? <IconComponent /> : <div></div>
}

export default Icon
