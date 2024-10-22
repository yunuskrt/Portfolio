import { useState, useEffect } from 'react'

export const useHash = () => {
	const [hash, setHash] = useState('')

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setHash(window.location.hash) // Initialize with current hash
			const onHashChange = () => {
				setHash(window.location.hash)
			}
			window.addEventListener('hashchange', onHashChange)

			return () => window.removeEventListener('hashchange', onHashChange)
		}
	}, [])

	return hash
}
