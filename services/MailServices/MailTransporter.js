const { createTransport } = require("nodemailer");

exports.Transporter = createTransport({
  service: process.env.MAIL_SERVICE,
  secure: false,
  pool: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  tls:{
         rejectUnauthorized: false
    }
});
