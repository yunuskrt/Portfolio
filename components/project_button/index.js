import React from 'react'
import Icon from '@/utils/icon'
import Link from 'next/link'
import styles from './project_button.module.css'

const ProjectButton = ({
	id,
	text,
	external = true,
	href,
	lightColor,
	darkColor,
}) => {
	return external ? (
		<a
			className={styles.hvrIconPulseGrow}
			href={href}
			target='_blank'
			style={{ '--light': lightColor, '--dark': darkColor }}
		>
			{text} <Icon name={id} />
		</a>
	) : (
		<Link
			href={href}
			className={styles.hvrIconPulseGrow}
			style={{ '--light': lightColor, '--dark': darkColor }}
		>
			{text} <Icon name={id} />
		</Link>
	)
}

export default ProjectButton
