import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import { Suspense } from 'react'
import CakeModel from './model'

const Cake = () => {
	return (
		<Canvas camera={{ position: [50, 0, 0], fov: 35 }}>
			<Stage environment='city' intensity={0.9}>
				<Suspense fallback={null}>
					<group scale={1.8} rotation={[0, Math.PI / 1.5, 0]}>
						<CakeModel />
					</group>
				</Suspense>
			</Stage>
			<OrbitControls enableZoom={false} autoRotate enablePan={false} />
		</Canvas>
	)
}

export default Cake
