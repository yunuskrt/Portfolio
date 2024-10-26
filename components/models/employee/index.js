import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import EmployeeModel from './model'
import { Suspense } from 'react'

const Employee = () => {
	return (
		<Canvas camera={{ position: [50, 0, 0], fov: 35 }}>
			<Stage environment='city' intensity={0.9}>
				<Suspense fallback={null}>
					<group scale={1.8} rotation={[0, Math.PI / 1.5, 0]}>
						<EmployeeModel />
					</group>
				</Suspense>
			</Stage>
			<OrbitControls enableZoom={false} autoRotate enablePan={false} />
		</Canvas>
	)
}

export default Employee
