import React from 'react'
import SideNav from '@layout/sidenav'
import Slide from '@layout/slide'
import useSectionObserver from '@utils/useSectionObserver'

const Home = () => {
	useSectionObserver()
	return (
		<div className='slides-container'>
			<SideNav />
			<Slide id='home' bgColor1='#749dea' bgColor2='#00d4ff'>
				Home Section
			</Slide>
			<Slide id='experience' bgColor1='#83e86d' bgColor2='#89e285'>
				Experience Section
			</Slide>
			<Slide id='education' bgColor1='#e6c3bf' bgColor2='#ecd7d7'>
				Education Section
			</Slide>
			<Slide id='projects' bgColor1='#d2ccaa' bgColor2='#fff8cf'>
				Projects Section
			</Slide>
			<Slide id='contact' bgColor1='#eec798' bgColor2='#ffc886'>
				Contact Section
			</Slide>
		</div>
	)
}

export default Home
