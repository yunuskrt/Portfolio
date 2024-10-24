import React from 'react'
import SideNav from './sidenav'
import styles from './layout.module.css'

const Layout = ({ children }) => {
	return (
		<div className={styles.container}>
			<SideNav />
			{children}
		</div>
	)
}

export default Layout
