import React, { useState, useEffect } from 'react'
import { flattenArray, getPuzzle } from './helpers'
import { IoFootsteps, IoTimer } from 'react-icons/io5'
import styles from './slider_puzzle.module.css'

const SliderPuzzle = () => {
	const [puzzle, setPuzzle] = useState([])
	const [complete, setComplete] = useState(false)
	const [moves, setMoves] = useState(0)
	const [seconds, setSeconds] = useState(0)
	const [timeRunning, setTimeRunning] = useState(true)
	let intervalId

	useEffect(() => {
		setPuzzle(getPuzzle())
	}, [])
	useEffect(() => {
		if (timeRunning) {
			intervalId = setInterval(() => {
				setSeconds((prevSeconds) => prevSeconds + 1)
			}, 1000)
		}

		return () => clearInterval(intervalId)
	}, [timeRunning])

	const movePiece = (x, y) => {
		if (!complete) {
			if (checkNeighbours(x, y) || checkNeighbours(x, y, 2)) {
				const emptySlot = checkNeighbours(x, y) || checkNeighbours(x, y, 2)

				const newPuzzle = puzzle.map((row) => row.slice())

				if (x === emptySlot.x && y < emptySlot.y) {
					newPuzzle[emptySlot.x][emptySlot.y] = puzzle[x][y + 1]
					newPuzzle[x][y + 1] = newPuzzle[x][y]
					newPuzzle[x][y] = 0
				} else if (x === emptySlot.x && y > emptySlot.y) {
					newPuzzle[emptySlot.x][emptySlot.y] = puzzle[x][y - 1]
					newPuzzle[x][y - 1] = newPuzzle[x][y]
					newPuzzle[x][y] = 0
				}

				if (y === emptySlot.y && x < emptySlot.x) {
					newPuzzle[emptySlot.x][emptySlot.y] = puzzle[x + 1][y]
					newPuzzle[x + 1][y] = newPuzzle[x][y]
					newPuzzle[x][y] = 0
				} else if (y === emptySlot.y && x > emptySlot.x) {
					newPuzzle[emptySlot.x][emptySlot.y] = puzzle[x - 1][y]
					newPuzzle[x - 1][y] = newPuzzle[x][y]
					newPuzzle[x][y] = 0
				}

				setPuzzle(newPuzzle)

				setMoves(moves + 1)

				checkCompletion(newPuzzle)
			}
		}
	}
	const checkCompletion = (puzzle) => {
		if (flattenArray(puzzle).join('') === '123456780') {
			setComplete(true)
			setTimeRunning(false)
		}
	}
	const checkNeighbours = (x, y, d = 1) => {
		const neighbours = []

		if (puzzle[x][y] !== 0) {
			neighbours.push(
				puzzle[x - d] && puzzle[x - d][y] === 0 && { x: x - d, y: y }
			)
			neighbours.push(puzzle[x][y + d] === 0 && { x: x, y: y + d })
			neighbours.push(
				puzzle[x + d] && puzzle[x + d][y] === 0 && { x: x + d, y: y }
			)
			neighbours.push(puzzle[x][y - d] === 0 && { x: x, y: y - d })
		}

		const emptySlot = neighbours.find((el) => typeof el === 'object')

		return emptySlot
	}
	const resetPuzzle = () => {
		setComplete(false)
		setPuzzle(getPuzzle())
		setMoves(0)
		setTimeRunning(true)
		setSeconds(0)
	}
	return (
		<div className={styles.game}>
			<div
				className={`${styles.boardContainer} ${
					complete ? styles.completeBorder : styles.incompleteBorder
				}`}
			>
				{puzzle.map((row, i) => (
					<div key={i} className={styles.row}>
						{row.map((col, j) => {
							const correctValue = i * 3 + j + 1
							return (
								<div
									key={`${i}-${j}`}
									onClick={() => movePiece(i, j)}
									className={`${styles.tile} ${
										col === 0
											? styles.empty
											: col === correctValue
											? styles.correct
											: styles.incorrect
									} ${complete ? styles.notAllowed : styles.pointer}`}
								>
									<span className={styles.number}>{col !== 0 && col}</span>
								</div>
							)
						})}
					</div>
				))}
			</div>
			<div className={styles.infoContainer}>
				<div className={styles.infoRow}>
					<IoFootsteps />
					<span>Moves:</span>
					<span>{moves}</span>
				</div>
				<div className={styles.infoRow}>
					<IoTimer />
					<span>Time:</span>
					<span>{seconds}s</span>
				</div>
				<button
					onClick={() => {
						resetPuzzle()
					}}
					className={`${styles.btn} ${
						complete ? styles.correct : styles.incorrect
					}`}
				>
					{complete ? 'Play Again' : 'Reset'}
				</button>
			</div>
		</div>
	)
}

export default SliderPuzzle
