export const scrollToSection = (id) => {
	const element = document.getElementById(id)
	if (element) {
		element.scrollIntoView({
			block: 'start',
			behavior: 'auto',
		})
		window.location.hash = `#${id}`
	}
}
