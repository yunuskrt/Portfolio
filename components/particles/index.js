import Particles, { initParticlesEngine } from '@tsparticles/react'
import { useEffect, useState } from 'react'
import { loadSlim } from '@tsparticles/slim'

const ParticlesBackground = ({
	id,
	particleColor = '#000',
	linkColor = '#30305a',
	shape = 'circle',
	minSize = 1,
	maxSize = 1,
}) => {
	const [init, setInit] = useState(false)
	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine)
		}).then(() => {
			setInit(true)
		})
	}, [])

	const particlesLoaded = (container) => {
		console.log(container)
	}
	const options = {
		fpsLimit: 120,
		interactivity: {
			events: {
				onClick: {
					enable: true,
					mode: 'repulse',
				},
				onHover: {
					enable: true,
					mode: 'grab',
				},
			},
			modes: {
				push: {
					distance: 200,
					duration: 5,
				},
				grab: {
					distance: 150,
				},
			},
		},
		particles: {
			color: {
				value: particleColor,
			},
			links: {
				color: linkColor,
				distance: 150,
				enable: true,
				opacity: 0.6,
				width: 5,
			},
			move: {
				direction: 'none',
				enable: true,
				outModes: {
					default: 'bounce',
				},
				random: true,
				speed: 0.5,
				straight: false,
			},
			number: {
				density: {
					enable: true,
				},
				value: 50,
			},
			opacity: {
				value: 1.0,
			},
			shape: {
				type: shape,
			},
			size: {
				value: { min: minSize, max: maxSize },
			},
		},
		detectRetina: true,
	}

	return <Particles id={id} init={particlesLoaded} options={options} />
}

export default ParticlesBackground
