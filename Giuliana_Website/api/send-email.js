import {VercelRequest, VercelResponse} from '@vercel/node'
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({error: 'Method not allowed'});
    }
    const {firstName, lastName, email, phone, shortMessage} = req.body;

    const msg = {
        to: process.env.RECEIVING_EMAIL,
        from: process.env.SENDGRID_VERIFIED_EMAIL,
        subject: `Consulta de ${firstName} ${lastName}`,
        text: `
        Nombre: ${firstName} ${lastName}\n
        Telefono: ${phone}\n
        Email: ${email}\n\n
        Mensaje/Motivo de consulta:\n
        ${shortMessage}  `
    };

    try {
        await sgMail.send(msg);
        return res.status(200).json({message: 'Enviado con exito'})
    } catch(error) {
        console.error('Error al enviar el correo ', error)
        return res.status(500).json({error: 'Error enviando el correo'})
    }
}