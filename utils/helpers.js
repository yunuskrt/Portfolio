export const scrollToSection = (id) => {
	const element = document.getElementById(id)
	if (element) {
		element.scrollIntoView({
			block: 'start',
			behavior: 'smooth',
		})
		window.location.hash = `#${id}`
	}
}

export const scrollIntoView = (sectionId) => {
	const section = document.getElementById(sectionId)
	const container = document.querySelector('.slides-container')

	if (section && container) {
		// Calculate the section's position relative to the container
		const sectionTop = section.offsetTop

		container.scrollTo({
			top: sectionTop,
			behavior: 'smooth',
		})
	}
}
