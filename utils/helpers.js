export const scrollIntoView = (sectionId) => {
	const section = document.getElementById(sectionId)
	const container = document.querySelector('#slides-container')

	if (section && container) {
		const sectionTop = section.offsetTop

		container.scrollTo({
			top: sectionTop,
			behavior: 'smooth',
		})
	}
}

// Function to display error messages of form fields
const showError = (field, errorText) => {
	field.current.classList.add('error')
	const errorElement = document.createElement('small')
	errorElement.classList.add('error-text')
	errorElement.innerText = errorText
	field.current.closest('.form-group').appendChild(errorElement)
}

// Function to handle form submission of contact form
export const submitContactForm = (nameRef, emailRef, commentRef) => {
	// Getting trimmed values from input fields
	const name = nameRef.current.value.trim()
	const email = emailRef.current.value.trim()
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
	if (comment === '') {
		showError(commentRef, 'Enter your comment')
		validForm = false
	}
	return validForm
	// Checking for any remaining errors before form submission
	// const errorInputs = document.querySelectorAll('.form-group .error')
	// if (errorInputs.length > 0) return
}

export const clearContactForm = (nameRef, emailRef, commentRef) => {
	nameRef.current.value = ''
	emailRef.current.value = ''
	commentRef.current.value = ''
}

export const sendMail = async (nameRef, emailRef, commentRef) => {
	// Getting trimmed values from input fields
	const name = nameRef.current.value.trim()
	const email = emailRef.current.value.trim()
	const comment = commentRef.current.value.trim()
	// Sending email to the server
	console.log({ name, email, comment })
}
