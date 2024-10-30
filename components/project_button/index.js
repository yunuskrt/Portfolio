import React from 'react'
import Icon from '@/utils/icon'
import Link from 'next/link'
import styles from './project_button.module.css'

const ProjectButton = ({
	id,
	text,
	detailText = '',
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
			<div className={styles.content}>
				<span>{text}</span>
				{detailText != '' && (
					<span className={styles.detailText}>{detailText}</span>
				)}
			</div>
			<Icon name={id} />
		</a>
	) : (
		<Link
			href={href}
			className={styles.hvrIconPulseGrow}
			style={{ '--light': lightColor, '--dark': darkColor }}
		>
			<div className={styles.content}>
				<span>{text}</span>
				{detailText != '' && (
					<span className={styles.detailText}>(Backend)</span>
				)}
			</div>
			<Icon name={id} />
		</Link>
	)
}

export default ProjectButton
