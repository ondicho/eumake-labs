// sendEmail.js
const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, text) => {
  // Create a nodemailer transporter with Gmail credentials
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ondichoondondo@gmail.com',
      pass: 'Mpenzi@123#sloppy',
    },
  });

  // Email options
  const mailOptions = {
    from: 'ondichoondondo@gmail.com',
    to,
    subject,
    text,
  };

  // Send email
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = sendEmail;
