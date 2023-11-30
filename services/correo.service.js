

const nodemailer = require('nodemailer');

// Configuración del transporte de correo
const transporter = nodemailer.createTransport({
  host: 'sandbox.smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '41b04d6be3e740',
    pass: '47dae142c7ac14',
  },
});

// Función para enviar un correo electrónico
const enviarCorreo = async (destinatario, asunto, contenido) => {
  const mensaje = {
    from: 'jose.24172688@ucaldas.edu.co', 
    to: destinatario,
    subject: asunto,
    html: contenido,
  };

  try {
    await transporter.sendMail(mensaje);
    console.log('Correo electrónico enviado con éxito');
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error);
  }
};

module.exports = enviarCorreo;
