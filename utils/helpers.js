export const scrollIntoView = (sectionId) => {
	const section = document.getElementById(sectionId)
	const container = document.querySelector('#slides-container')

	if (section && container) {
		const sectionTop = section.offsetTop

		container.scrollTo({
			top: sectionTop,
			behavior: 'smooth',
		})
	}
}
