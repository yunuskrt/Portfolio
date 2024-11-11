import React from 'react'
import { TbError404Off } from 'react-icons/tb'
import SliderPuzzle from '@components/slider_puzzle'
import styles from './404.module.css'

const NotFound = () => {
	return (
		<div className={styles.gameContainer}>
			<div className={styles.notFoundText}>
				<TbError404Off />
				<span>Page Not Exists.</span>
			</div>
			<SliderPuzzle />
		</div>
	)
}

export default NotFound
