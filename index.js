const http = require('http');
const petshop = require('./petshop');

const server = http.createServer((req,res)=>{
    
    if(req.url == "/listapet"){
       let resultado = petshop.listarPets();
       return res.end(resultado);
    }

    res.setHeader("Content-Type","text/html;charset=utf8")
    res.write("Olá, você está no sistema PetShop");
    res.end()
});



server.listen(3000, 'localhost', ()=>{console.log("servidor iniciado")});