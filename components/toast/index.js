import React from 'react'
import { MdErrorOutline, MdDone } from 'react-icons/md'
import { motion } from 'framer-motion'
import styles from './toast.module.css'

const Toast = ({ loading, status, message }) => {
	return (
		<motion.div
			className={styles.toast}
			initial={{ y: '100vh', opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: '100vh', opacity: 0 }}
			transition={{
				type: 'spring',
				stiffness: 500,
				damping: 100,
				duration: 0.2,
			}}
		>
			{loading ? (
				<div>
					<span className={styles.loader}></span>
				</div>
			) : status === 'error' ? (
				<div className={`${styles.iconBg} ${styles.danger}`}>
					<MdErrorOutline color='red' />
				</div>
			) : status === 'success' ? (
				<div className={`${styles.iconBg} ${styles.success}`}>
					<MdDone />
				</div>
			) : null}
			<p>{message}</p>
		</motion.div>
	)
}

export default Toast
