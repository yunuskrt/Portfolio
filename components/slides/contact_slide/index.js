import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { sendMail, submitContactForm, clearContactForm } from '@utils/helpers'
import styles from './contact_slide.module.css'

const ContactSlide = () => {
	const nameRef = useRef(null)
	const emailRef = useRef(null)
	const subjectRef = useRef(null)
	const commentRef = useRef(null)

	const handleFormSubmit = (e) => {
		e.preventDefault()
		const validForm = submitContactForm(
			nameRef,
			emailRef,
			subjectRef,
			commentRef
		)
		if (validForm) {
			sendMail(nameRef, emailRef, subjectRef, commentRef)
			clearContactForm(nameRef, emailRef, subjectRef, commentRef)
		} else {
			console.log('form is not valid')
		}
	}
	return (
		<div className={styles.left}>
			<motion.form
				className={styles.contactForm}
				onSubmit={handleFormSubmit}
				animate={{
					scale: 1.05,
					transition: {
						duration: 1.5,
						ease: 'easeInOut',
					},
				}}
			>
				<h1 className={styles.contactTitle}>Contact</h1>
				<div className='form-group'>
					<input
						name='name'
						type='text'
						className={styles.feedbackInput}
						placeholder='Name'
						ref={nameRef}
						autoComplete='off'
					/>
				</div>
				<div className='form-group'>
					<input
						name='email'
						type='text'
						className={styles.feedbackInput}
						placeholder='Email'
						ref={emailRef}
						autoComplete='off'
					/>
				</div>
				<div className='form-group'>
					<input
						name='subject'
						type='text'
						className={styles.feedbackInput}
						placeholder='Subject'
						ref={subjectRef}
						autoComplete='off'
					/>
				</div>
				<div className='form-group'>
					<textarea
						name='text'
						className={styles.feedbackInput}
						placeholder='Comment'
						rows={3}
						ref={commentRef}
						autoComplete='off'
					></textarea>
				</div>
				<button type='submit' className={styles.submitFormBtn}>
					SEND
				</button>
			</motion.form>
		</div>
	)
}

export default ContactSlide
