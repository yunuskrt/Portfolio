import React from 'react'

import Flags from '@models/flags'
import Stadium from '@models/stadium'
import Employee from '@models/employee'
import Cake from '@models/cake'
import Settings from '@models/settings'

const models = {
	flags: Flags,
	stadium: Stadium,
	employee: Employee,
	cake: Cake,
	settings: Settings,
}

const Model = ({ name }) => {
	const ModelComponent = models[name.toLowerCase()]
	return ModelComponent ? <ModelComponent /> : <div></div>
}

export default Model
