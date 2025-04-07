const http = require("http")
http.createServer((req,res)=>{
    if(res.url==="/pago"){
        resta.write("pago completado")
        return res.end()
    }
    res.write("hola desde servidor node")
    res.end()
}).listen(3000)
console.log("el servidor esta listo en el puerto 3000")
