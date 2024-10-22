import React, { useEffect } from 'react'
import { useHash } from '@/utils/useHash'
import { scrollToSection } from '@/utils/helpers'

const Navbar = () => {
	const hash = useHash()
	useEffect(() => {
		const section = hash.replace('#', '')
		if (section) scrollToSection(section)
	}, [hash])
	return (
		<nav style={{ position: 'absolute', top: '10px', right: '10px' }}>
			<button onClick={() => scrollToSection('home')}>Home</button>
			<button onClick={() => scrollToSection('skills')}>Skills</button>
			<button onClick={() => scrollToSection('experience')}>Experience</button>
			<button onClick={() => scrollToSection('projects')}>Projects</button>
			<button onClick={() => scrollToSection('blog')}>Blog</button>
		</nav>
	)
}
export default Navbar
