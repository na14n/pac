const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 587,
    tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false,
    },
    auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD
    },
})

export default transporter