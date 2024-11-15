import axios from 'axios'

// Function to display error messages of form fields
const showError = (field, errorText) => {
	field.current.classList.add('error')
	const errorElement = document.createElement('small')
	errorElement.classList.add('error-text')
	errorElement.innerText = errorText
	field.current.closest('.form-group').appendChild(errorElement)
}

// Function to handle form submission of contact form
export const submitContactForm = (
	nameRef,
	emailRef,
	subjectRef,
	commentRef
) => {
	// Getting trimmed values from input fields
	const name = nameRef.current.value.trim()
	const email = emailRef.current.value.trim()
	const subject = subjectRef.current.value.trim()
	const comment = commentRef.current.value.trim()
	// Regular expression pattern for email validation
	const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
	// Clearing previous error messages
	document
		.querySelectorAll('.form-group .error')
		.forEach((field) => field.classList.remove('error'))
	document
		.querySelectorAll('.error-text')
		.forEach((errorText) => errorText.remove())
	// Performing validation checks
	let validForm = true
	if (name === '') {
		showError(nameRef, 'Enter your full name')
		validForm = false
	}
	if (!emailPattern.test(email)) {
		showError(emailRef, 'Enter a valid email address')
		validForm = false
	}
	if (subject === '') {
		showError(subjectRef, 'Enter the subject of your message')
		validForm = false
	}
	if (comment === '') {
		showError(commentRef, 'Enter your comment')
		validForm = false
	}
	return validForm
}

export const clearContactForm = (nameRef, emailRef, subjectRef, commentRef) => {
	nameRef.current.value = ''
	emailRef.current.value = ''
	subjectRef.current.value = ''
	commentRef.current.value = ''
}

export const sendMail = async (nameRef, emailRef, subjectRef, commentRef) => {
	// Getting trimmed values from input fields
	const name = nameRef.current.value.trim()
	const email = emailRef.current.value.trim()
	const subject = subjectRef.current.value.trim()
	const comment = commentRef.current.value.trim()

	try {
		const response = await axios.post('/api/v1/send-mail', {
			name,
			email,
			subject,
			comment,
		})
		return response.status === 200
	} catch (error) {
		return false
	}
}

// Object to draw company and school logos
export const drawSvg = {
	hidden: { pathLength: 0, opacity: 0 },
	visible: (i) => {
		const delay = 1 + i * 0.5
		return {
			pathLength: 1,
			opacity: 1,
			transition: {
				pathLength: {
					delay: delay,
					type: 'spring',
					duration: 0.1,
					bounce: 0,
				},
				opacity: { delay: i * 0.3, duration: 3.0 },
			},
		}
	},
}
