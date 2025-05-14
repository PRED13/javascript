
const {promisify} = require("until")
function pedirPizzaCallBack(callback){
    console.log("pedido realizado. esperando la pizza..")
    setTimeout(()=>{
        let exito = true;
        if(exito){
            callback("!Pizza entregada! Disfruta tu comida.");
        } else{
            callback("Hubo un problema con tu pedido")
        }
    }, 3000);
}
const pedirPizza = until.promisify(pedirPizzaCallBack)
async function pedirPizzaAwait(){
    try {
        const mensajeExito = await pedirPizza
    } catch (mensajeError) {
        console.log("mensajeError")
    }
}

pedirPizzaAwait()