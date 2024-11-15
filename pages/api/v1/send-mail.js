import nodemailer from 'nodemailer'

export default async function handler(req, res) {
	if (req.method !== 'POST') {
		return res.status(405).json({ message: 'Only POST requests allowed' })
	}
	// Check req body contains onlt the required fields
	const { name, email, subject, comment } = req.body
	if (
		!name ||
		!email ||
		!subject ||
		!comment ||
		Object.keys(req.body).length !== 4
	) {
		return res.status(400).json({ message: 'Missing required fields' })
	}

	// Server-side input validation
	const nameValue = name.trim()
	const emailValue = email.trim()
	const subjectValue = subject.trim()
	const commentValue = comment.trim()
	const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
	if (
		!emailPattern.test(emailValue) ||
		nameValue === '' ||
		subjectValue === '' ||
		commentValue === ''
	) {
		return res.status(400).json({ message: 'Invalid input' })
	}
	try {
		// Create reusable transporter object using the default SMTP transport
		const transporter = nodemailer.createTransport({
			service: 'Gmail',
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS,
			},
		})
		// Define the email options
		const mailOptions = {
			from: email, // Sender email
			to: process.env.RECEIVER_EMAIL, // Recipient email
			subject: `Portfolio Contact - ${subject}`,
			html: `
	    <div style="padding:40px 20px; background-color:#3a68b6; border-radius:10px;">
	      <table width="100%" cellpadding="0" cellspacing="0" style="width: 100%;">
	        <tr>
	          <td>
	            <h2 style="color:#fff;">Email from: ${email}, Name: ${name}</h2>
	          </td>
	        </tr>
	        <tr>
	          <td>
	            <h4 style="color:#fff;">Subject: ${subject}</h4>
	          </td>
	        </tr>
	        <tr>
	          <td>
	            <p style="line-height:2.5em; font-weight:bold;color:#fff;">${comment}</p>
	          </td>
	        </tr>
	      </table>
	    </div>
	  `, // Email content
		}
		// Send the email
		await transporter.sendMail(mailOptions)

		// Send success response
		res.status(200).json({ message: 'Email sent successfully' })
	} catch (error) {
		return res.status(500).json({ message: 'Internal server error' })
	}
}
