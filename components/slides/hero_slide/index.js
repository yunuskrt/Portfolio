import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import Image from 'next/image'
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import IconButton from '@components/icon_button'
import { FaLinkedinIn } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'
import styles from './hero_slide.module.css'

const HeroSlide = () => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<div className={styles.left}>
					<div className={styles.titleContainer}>
						<h1 className={styles.hello}>
							Hi there, I'm
							<span className={styles.name}>Yunus Kerestecioglu</span>
						</h1>
						<div className={styles.codeContainer}>
							<span className={styles.lineNumber}>1</span>
							<TypeAnimation
								sequence={['I am a Software Engineer']}
								wrapper='p'
								cursor={true}
								repeat={1}
							/>
						</div>
						<motion.div
							animate={{
								y: 15,
								x: 25,
								scale: 1.1,
								transition: {
									yoyo: Infinity,
									duration: 5,
									ease: 'backInOut',
								},
							}}
							className={styles.profileButtons}
						>
							<IconButton href='https://www.linkedin.com/in/yunus-kerestecio%C4%9Flu-8b6570249/'>
								<FaLinkedinIn size={20} />
							</IconButton>
							<IconButton href='https://github.com/yunuskrt'>
								<FiGithub size={20} />
							</IconButton>
							<IconButton href='https://leetcode.com/u/ykerestecioglu/'>
								<SiLeetcode size={20} />
							</IconButton>
						</motion.div>
					</div>
				</div>
				<div className={styles.right}>
					<Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
						<OrbitControls enableZoom={false} autoRotate />
						<ambientLight intensity={3} />
						<directionalLight position={[3, 2, 1]} />
						<Sphere args={[1, 100, 200]} scale={1.4}>
							<MeshDistortMaterial
								color='#2d59c0'
								attach='material'
								distort={0.5}
								speed={1}
							/>
						</Sphere>
					</Canvas>
					<motion.div
						className={styles.nonagonBorder}
						animate={{
							scale: 1.3,
						}}
					>
						<div className={styles.nonagonImage}>
							<Image
								src='/profile-photo.jpeg'
								alt='Profile Photo'
								width={400}
								height={400}
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	)
}

export default HeroSlide
