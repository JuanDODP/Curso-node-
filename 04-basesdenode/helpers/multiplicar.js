
const fs = require('fs');
const colores =require('colors')
 const multiplicar = (base = 5, lista, limite) => {
    console.log('Este es el lisytado'.green,lista)
    console.log('==============================='.bgBlack)
    console.log('tabla del ', base);
    console.log('==============================='.rainbow)

    let salida = ''
    for (let index = 1; index <= limite; index++) {

        salida += `El resultado de ${base} X ${index} = ${base*index}\n`;
    }
    if(lista){

        console.log(salida)
    }
    else{
        console.log('elegiuste sin listar')
    }
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
    console.log(`tabla del ${base} creada con limite ${limite}`)
    
}
module.exports={
    multiplicar
}