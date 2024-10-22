import React from 'react'
import Navbar from '@/components/navbar'
import useSectionObserver from '@/utils/useSectionObserver'

const Home = () => {
	useSectionObserver()
	return (
		<div
			style={{
				height: '100vh',
				overflowY: 'scroll',
				scrollSnapType: 'y mandatory',
				scrollBehavior: 'smooth',
				position: 'relative',
			}}
		>
			<Navbar />
			<section
				id='home'
				style={{
					height: '100vh',
					display: 'flex',
					backgroundColor: 'yellow',
					scrollSnapAlign: 'center',
				}}
			>
				Home Section
			</section>
			<section
				id='skills'
				style={{
					height: '100vh',
					display: 'flex',
					backgroundColor: 'green',
					scrollSnapAlign: 'center',
				}}
			>
				Skills Section
			</section>
			<section
				id='experience'
				style={{
					height: '100vh',
					display: 'flex',
					backgroundColor: 'blue',
					scrollSnapAlign: 'center',
				}}
			>
				Experience Section
			</section>
			<section
				id='projects'
				style={{
					height: '100vh',
					display: 'flex',
					backgroundColor: 'orange',
					scrollSnapAlign: 'center',
				}}
			>
				Projects Section
			</section>
			<section
				id='blog'
				style={{
					height: '100vh',
					display: 'flex',
					backgroundColor: 'purple',
					scrollSnapAlign: 'center',
				}}
			>
				Blog Section
			</section>
		</div>
	)
}

export default Home
