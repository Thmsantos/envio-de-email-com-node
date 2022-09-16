const nodemailer = require('nodemailer')
require('dotenv').config()

 const transportador = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    service: 'gmail',
    secure: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.SENHA
    }
 })

const emailASerEnviado = {
    from : process.env.EMAIL,
    to: 'example@email',
    subject: 'Teste',
    text: 'texto'
}

transportador.sendMail(emailASerEnviado, (err) => {
    if(err){
        console.log('seu burro')
        return
    }

    console.log('E-mail concluido!!!')
})