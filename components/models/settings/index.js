import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import { Suspense } from 'react'
import SettingsModel from './model'

const Settings = () => {
	return (
		<Canvas camera={{ position: [50, 30, 0], fov: 55 }}>
			<Stage environment='city' intensity={0.9}>
				<Suspense fallback={null}>
					<group scale={1.8} rotation={[0, Math.PI / 1.5, 0]}>
						<SettingsModel />
					</group>
				</Suspense>
			</Stage>
			<OrbitControls enableZoom={false} autoRotate enablePan={false} />
		</Canvas>
	)
}

export default Settings
