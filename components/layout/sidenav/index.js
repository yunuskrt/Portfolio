import React from 'react'
import { FaHome, FaProjectDiagram, FaPhoneAlt } from 'react-icons/fa'
import { MdSchool, MdBusinessCenter } from 'react-icons/md'
import Link from 'next/link'
import styles from './sidenav.module.css'

const SideNav = ({ itemBackground = '#30305a' }) => {
	return (
		<div className={styles.sidenavContainer}>
			<nav className={styles.sidenav}>
				<ul className={styles.navList}>
					<Link
						href='/'
						className={styles.hvrBounceToTop}
						style={{
							'--background-hover': itemBackground,
						}}
					>
						<FaHome className={styles.navIcon} />
						<span className={styles.navDesc}>Home</span>
					</Link>
					<Link
						href='/education'
						className={styles.hvrBounceToTop}
						style={{
							'--background-hover': itemBackground,
						}}
					>
						<MdSchool className={styles.navIcon} />
						<span className={styles.navDesc}>Education</span>
					</Link>
					<Link
						href='/experience'
						className={styles.hvrBounceToTop}
						style={{
							'--background-hover': itemBackground,
						}}
					>
						<MdBusinessCenter className={styles.navIcon} />
						<span className={styles.navDesc}>Experience</span>
					</Link>
					<Link
						href='/projects'
						className={styles.hvrBounceToTop}
						style={{
							'--background-hover': itemBackground,
						}}
					>
						<FaProjectDiagram className={styles.navIcon} />
						<span className={styles.navDesc}>Projects</span>
					</Link>
					<Link
						href='/contact'
						className={styles.hvrBounceToTop}
						style={{
							'--background-hover': itemBackground,
						}}
					>
						<FaPhoneAlt className={styles.navIcon} />
						<span className={styles.navDesc}>Contact</span>
					</Link>
				</ul>
			</nav>
		</div>
	)
}
export default SideNav
