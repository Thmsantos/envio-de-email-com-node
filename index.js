onst nodemailer = require('nodemailer');

const msg = {
    from: "thiagosantos9225@gmail.com",
    to: "thiagomessias411@gmail.com",
    subject: "testando nodemaile",
    text: "Santos Futebol Clube é um clube poliesportivo brasileiro da cidade de Santos, São Paulo. Foi fundado em 14 de abril de 1912, suas cores iniciais seriam o branco, azul e dourado, mas um ano após a sua fundação, ficou decidido que as cores do clube passariam a ser branco e preto" 
};

nodemailer.createTransport({
    service: "gmail",
    auth:{
        user: "thiagosantos9225@gmail.com",
        pass: "######"
    },
    port: 465,
    host: 'smtp.gmail.com',
})

.sendMail(msg, (err)=>{
    if(err){
       return console.log("Error",err)
    }
    else{
       return console.log("email enviado")
    }
})  
