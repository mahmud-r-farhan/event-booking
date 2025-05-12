const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

function sendConfirmationEmail(email, name) {
  return transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Event Registration Confirmation',
    html: `<h3>Hello ${name},</h3><p>Thank you for registering for our event!</p>`,
  });
}

module.exports = { sendConfirmationEmail };
