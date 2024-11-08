import React from 'react'
import { motion } from 'framer-motion'
import { opacity, expand } from './anim'
import styles from './stair_transition.module.css'

const StairTransition = ({ children }) => {
	const anim = (variants, custom = null) => {
		return {
			initial: 'initial',
			animate: 'enter',
			exit: 'exit',
			custom,
			variants,
		}
	}

	const nbOfColumns = 5
	return (
		<div className={`${styles.page} ${styles.stairs}`}>
			<motion.div {...anim(opacity)} className={styles.transitionBackground} />
			<div className={styles.transitionContainer}>
				{[...Array(nbOfColumns)].map((_, i) => {
					return <motion.div key={i} {...anim(expand, nbOfColumns - i)} />
				})}
			</div>
			{children}
		</div>
	)
}

export default StairTransition
