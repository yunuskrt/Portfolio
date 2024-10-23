import { useEffect } from 'react'

const useSectionObserver = (options = { threshold: 0.6 }) => {
	useEffect(() => {
		const sections = document.querySelectorAll('section')

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const newHash = `#${entry.target.id}`
					if (window.location.hash !== newHash) {
						window.history.pushState(null, null, newHash)
						// Dispatch a custom event for hash changes
						window.dispatchEvent(new Event('hashchange'))
					}
				}
			})
		}, options)

		sections.forEach((section) => {
			observer.observe(section)
		})
		return () => {
			sections.forEach((section) => {
				observer.unobserve(section)
			})
		}
	}, [options])
}

export default useSectionObserver
