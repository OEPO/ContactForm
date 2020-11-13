const { Router } = require('express');
const nodemailer = require('nodemailer');


const router = Router();

router.post('/send-email', async(req, res) => {
    const { name, email, phone, message } = req.body;
    contentHTML = `
    <h1>Informacion de usuario</h1>
    <ul>
    <li>usuario:${name}</li>
    <li>email:${email}</li>
    <li>Telefono:${phone}</li>
    <li>mensaje:${message}</li>
    </ul>
    `;
    const transporter = nodemailer.createTransport({
        host: "#",
        port: "#",
        secure: "#",
        auth: {
            user: "#",
            pass: "#"
        },
        tls: {
            rejectUnauthorized: false
        }


    });

    const info = await transporter.sendMail({
        from: "'Test Server' <mail@mail.xyz>",
        to: '#',
        subject: 'Test email',
        text: 'test success'
    });

    // console.log("mensaje enviado", info.messageId, info.response);
    res.redirect("/success.html");
});

module.exports = router;