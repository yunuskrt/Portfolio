import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { sendMail, submitContactForm, clearContactForm } from '@utils/helpers'
import Toast from '@components/toast'
import styles from './contact_slide.module.css'

const ContactSlide = () => {
	const nameRef = useRef(null)
	const emailRef = useRef(null)
	const subjectRef = useRef(null)
	const commentRef = useRef(null)

	const [showToast, setShowToast] = useState(false)
	const [disableBtn, setDisableBtn] = useState(false)
	const [toast, setToast] = useState({ loading: true, status: '', message: '' })

	const handleFormSubmit = async (e) => {
		e.preventDefault()

		setDisableBtn(true)
		setShowToast(true)

		// Form validation and frontend error handling
		const validForm = submitContactForm(
			nameRef,
			emailRef,
			subjectRef,
			commentRef
		)
		if (validForm) {
			const mailResult = await sendMail(
				nameRef,
				emailRef,
				subjectRef,
				commentRef
			)
			if (mailResult) {
				alertToast('success', 'Email sent')
			} else {
				alertToast('error', 'An error occured')
			}
			clearContactForm(nameRef, emailRef, subjectRef, commentRef)
		} else {
			alertToast('error', 'Form is not valid')
		}
		setDisableBtn(false)
	}

	const alertToast = (status, message) => {
		setToast({ loading: false, status, message })
		setTimeout(() => {
			setToast({ loading: true, status: '', message: '' })
			setShowToast(false)
		}, 4000)
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
				<button
					type='submit'
					className={`${styles.submitFormBtn} ${
						disableBtn ? styles.disabledBtn : ''
					}`}
					disabled={disableBtn}
				>
					SEND
				</button>
			</motion.form>
			{showToast ? <Toast {...toast} /> : null}
		</div>
	)
}

export default ContactSlide
