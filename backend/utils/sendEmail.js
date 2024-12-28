const nodemailer = require('nodemailer');

const sendEmail = async ({ to, subject, text }) => {
  // Looking to send emails in production? Check out our Email API/SMTP product!
var transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "b9911afcfc1cca",
      pass: "9dc6b6838919a2"
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to,
    subject,
    text,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
