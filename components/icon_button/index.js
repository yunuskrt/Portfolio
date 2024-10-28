import React from 'react'
import styles from './icon_button.module.css'

const IconButton = ({ children, href }) => {
	return (
		<a href={href} className={styles.hvrRadialOut} target='_blank'>
			{children}
		</a>
	)
}

export default IconButton
