import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import { Suspense } from 'react'
import StadiumModel from './model'
const Stadium = () => {
	return (
		<Canvas camera={{ position: [0, 50, 0], fov: 35 }}>
			<Stage environment='city' intensity={0.9}>
				<Suspense fallback={null}>
					<group scale={1.2} rotation={[4, 1.1, 8]}>
						<StadiumModel />
					</group>
				</Suspense>
			</Stage>

			<OrbitControls enableZoom={false} enablePan={false} />
		</Canvas>
	)
}

export default Stadium
