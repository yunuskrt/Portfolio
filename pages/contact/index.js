import React, { useState, useEffect, useRef } from 'react'
import GLOBE from 'vanta/dist/vanta.globe.min'
import * as THREE from 'three'
import { sendMail, submitContactForm, clearContactForm } from '@/utils/helpers'
import styles from './contact.module.css'

const Contact = () => {
	const [vantaEffect, setVantaEffect] = useState(0)
	const vantaRef = useRef(null)

	const nameRef = useRef(null)
	const emailRef = useRef(null)
	const commentRef = useRef(null)

	useEffect(() => {
		if (!vantaEffect) {
			setVantaEffect(
				GLOBE({
					el: vantaRef.current,
					THREE: THREE,
					mouseControls: true,
					touchControls: true,
					gyroControls: false,
					minHeight: 200.0,
					minWidth: 200.0,
					scale: 1.0,
					scaleMobile: 1.0,
				})
			)
		}
		return () => {
			if (vantaEffect) vantaEffect.destroy()
		}
	}, [vantaEffect])

	const handleFormSubmit = (e) => {
		e.preventDefault()
		const validForm = submitContactForm(nameRef, emailRef, commentRef)
		if (validForm) {
			sendMail(nameRef, emailRef, commentRef)
			clearContactForm(nameRef, emailRef, commentRef)
		} else {
			console.log('form is not valid')
		}
	}
	return (
		<div ref={vantaRef} style={{ height: '100vh', width: '100%' }}>
			<div
				style={{
					height: '100%',
					width: '50%',
					display: 'flex',
					justifyContent: 'flex-end',
					alignItems: 'center',
				}}
			>
				<form className={styles.contactForm} onSubmit={handleFormSubmit}>
					<h1 className={styles.contactTitle}>Contact</h1>
					<div className='form-group'>
						<input
							name='name'
							type='text'
							className={styles.feedbackInput}
							placeholder='Name'
							ref={nameRef}
						/>
					</div>
					<div className='form-group'>
						<input
							name='email'
							type='text'
							className={styles.feedbackInput}
							placeholder='Email'
							ref={emailRef}
						/>
					</div>
					<div className='form-group'>
						<textarea
							name='text'
							id='comment'
							className={styles.feedbackInput}
							placeholder='Comment'
							ref={commentRef}
						></textarea>
					</div>
					<input
						type='submit'
						value='SUBMIT'
						className={styles.submitFormBtn}
					/>
				</form>
			</div>
		</div>
	)
}
export default Contact
