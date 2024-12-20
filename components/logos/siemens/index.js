import React from 'react'
import { motion } from 'framer-motion'
import { drawSvg } from '@utils/helpers'

const Siemens = () => {
	return (
		<motion.svg
			version='1.0'
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 316.000000 50.000000'
			preserveAspectRatio='xMidYMid meet'
			initial='hidden'
			animate='visible'
		>
			<g
				transform='translate(0.000000,50.000000) scale(0.100000,-0.100000)'
				fill='#439794'
				stroke='none'
			>
				<motion.path
					d='M138 490 c-50 -9 -101 -39 -118 -70 -6 -10 -10 -42 -10 -71 0 -46 4
-55 34 -84 19 -17 60 -42 93 -55 82 -33 103 -49 103 -76 0 -36 -33 -47 -114
-41 -39 3 -81 9 -94 12 -21 7 -22 4 -22 -38 0 -42 2 -45 31 -51 69 -13 203 -6
246 14 51 23 83 70 83 123 0 68 -21 92 -125 143 -104 50 -120 64 -110 93 10
33 84 39 173 15 20 -6 22 -3 22 34 0 30 -5 42 -17 46 -39 10 -131 14 -175 6z'
					variants={drawSvg}
					custom={1}
				/>
				<motion.path
					d='M450 255 l0 -235 65 0 65 0 0 235 0 235 -65 0 -65 0 0 -235z'
					variants={drawSvg}
					custom={1.3}
				/>
				<motion.path
					d='M701 255 l0 -235 175 0 174 0 0 40 0 40 -110 0 -110 0 0 60 0 60 95
0 95 0 0 35 0 35 -95 0 -95 0 0 60 0 60 110 0 110 0 0 40 0 40 -174 0 -174 0
-1 -235z'
					variants={drawSvg}
					custom={1.6}
				/>
				<motion.path
					d='M1140 255 l0 -235 45 0 45 0 0 162 c0 90 4 158 9 153 4 -6 36 -81 71
-168 l63 -158 40 3 41 3 66 157 c36 87 69 160 73 164 4 4 7 -65 7 -154 l0
-162 60 0 60 0 0 235 0 235 -79 0 -79 0 -45 -108 c-25 -59 -53 -126 -62 -150
-10 -24 -20 -40 -24 -37 -3 4 -31 70 -62 148 l-57 142 -86 3 -86 3 0 -236z'
					variants={drawSvg}
					custom={1.9}
				/>
				<motion.path
					d='M1848 255 l-3 -235 173 0 172 0 0 40 0 40 -110 0 -110 0 0 60 0 60
95 0 95 0 0 35 0 34 -92 3 -93 3 -3 58 -3 57 111 0 110 0 0 40 0 40 -170 0
-169 0 -3 -235z'
					variants={drawSvg}
					custom={2.2}
				/>
				<motion.path
					d='M2280 255 l0 -235 45 0 44 0 3 158 3 157 85 -157 85 -158 73 0 72 0
0 235 0 235 -40 0 -40 0 0 -155 c0 -85 -3 -155 -7 -155 -5 0 -44 70 -88 155
l-80 155 -77 0 -78 0 0 -235z'
					variants={drawSvg}
					custom={2.5}
				/>
				<motion.path
					d='M2930 493 c-90 -16 -138 -56 -147 -123 -10 -73 16 -106 123 -156 49
-23 96 -49 103 -58 18 -21 4 -55 -26 -62 -26 -7 -133 0 -170 12 -21 6 -23 3
-23 -39 0 -42 2 -45 31 -51 51 -10 183 -7 220 5 78 26 122 104 99 173 -14 44
-52 74 -151 119 -84 38 -99 57 -69 87 24 24 95 26 153 6 l37 -14 0 43 c0 39
-3 44 -27 49 -49 9 -127 14 -153 9z'
					variants={drawSvg}
					custom={2.8}
				/>
			</g>
		</motion.svg>
	)
}

export default Siemens
