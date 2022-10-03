const nodemailer = require('nodemailer');

let num_Um = []
for(let x = 0; x < 3; x++){
    let numero = Math.floor(Math.random() * 10)
    num_Um.push(numero)
}
num_Um = num_Um.join("")

let num_Dois = []
for(let x = 0; x < 2; x++){
    let numero = Math.floor(Math.random() * 10)
    num_Dois.push(numero)
}
num_Dois = num_Dois.join("")

let numero = num_Dois + num_Um

let transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: "thiagomessias411@outlook.com",
        pass: "######"
    }
});

let mailOptions = {
    from: 'thiagomessias411@outlook.com',
    to: 'othiagosantos23@gmail.com', 
    subject: 'recuperação de senha',
    html: `<h1>${numero}</h1>`
};

transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log('Email Esent!!!');
});

console.log(numero)
