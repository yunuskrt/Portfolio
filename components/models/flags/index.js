import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import FlagsModel from './model'
import { Suspense } from 'react'
const Flags = () => {
	return (
		<Canvas>
			<Stage environment='city' intensity={0.9}>
				<Suspense fallback={null}>
					<group scale={1.8} rotation={[0, Math.PI / 1.5, 0]}>
						<FlagsModel />
					</group>
				</Suspense>
			</Stage>

			<OrbitControls enableZoom={false} autoRotate enablePan={false} />
		</Canvas>
	)
}

export default Flags
