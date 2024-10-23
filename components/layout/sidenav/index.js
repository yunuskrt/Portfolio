import React from 'react'
import { scrollToSection } from '@utils/helpers'
import { FaHome, FaProjectDiagram, FaPhoneAlt } from 'react-icons/fa'
import { MdSchool, MdBusinessCenter } from 'react-icons/md'
import styles from './sidenav.module.css'

const SideNav = ({ itemBackground = '#30305a' }) => {
	return (
		<div className={styles.sidenavContainer}>
			<nav className={styles.sidenav}>
				<ul className={styles.navList}>
					<li
						onClick={() => scrollToSection('home')}
						className={styles.hvrBounceToTop}
						style={{
							'--background-hover': itemBackground,
						}}
					>
						<FaHome className={styles.navIcon} />
						<span className={styles.navDesc}>Home</span>
					</li>
					<li
						onClick={() => scrollToSection('experience')}
						className={styles.hvrBounceToTop}
						style={{
							'--background-hover': itemBackground,
						}}
					>
						<MdBusinessCenter className={styles.navIcon} />
						<span className={styles.navDesc}>Experience</span>
					</li>
					<li
						onClick={() => scrollToSection('education')}
						className={styles.hvrBounceToTop}
						style={{
							'--background-hover': itemBackground,
						}}
					>
						<MdSchool className={styles.navIcon} />
						<span className={styles.navDesc}>Education</span>
					</li>
					<li
						onClick={() => scrollToSection('projects')}
						className={styles.hvrBounceToTop}
						style={{
							'--background-hover': itemBackground,
						}}
					>
						<FaProjectDiagram className={styles.navIcon} />
						<span className={styles.navDesc}>Projects</span>
					</li>
					<li
						onClick={() => scrollToSection('contact')}
						className={styles.hvrBounceToTop}
						style={{
							'--background-hover': itemBackground,
						}}
					>
						<FaPhoneAlt className={styles.navIcon} />
						<span className={styles.navDesc}>Contact</span>
					</li>
				</ul>
			</nav>
		</div>
	)
}
export default SideNav
