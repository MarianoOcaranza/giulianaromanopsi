const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require('dotenv').config({path: '../.env'});

const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.VITE_EMAIL_USER,
        pass: process.env.VITE_EMAIL_PASS,
    },
});

app.post('/api/send-email', async(req, res)=> {
    const { firstName, lastName, email, phone, shortMessage } = req.body;

    if (!firstName || !lastName || !email || !phone || !shortMessage) {
        return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    const mailOptions = {
        from: email, // Remitente
        to: process.env.VITE_EMAIL_USER, // Destinatario (email de la psicóloga)
        subject: `WebSite Req - ${firstName} ${lastName}`,
        text: `Nombre: ${firstName} ${lastName}\nTeléfono: ${phone}\nEmail: ${email}\n\nMensaje:\n${shortMessage}`,
      };
    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).json({message: "Correo enviado"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "ERROR"})
    }
});

const PORT = process.env.VITE_PORT || 5000;
app.listen(PORT, ()=> console.log('Running'));

