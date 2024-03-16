
const fs = require('fs');
 
 const multiplicar = (base = 5) => {
    console.log('===============================')
    console.log('tabla del ', base);
    console.log('===============================')

    let salida = ''
    for (let index = 1; index <= 10; index++) {

        salida += `El resultado de ${base} X ${index} = ${base*index}\n`;
    }
    // console.log(salida)
    fs.writeFileSync(`tabla-${base}.txt`, salida)
    console.log('tabla creada')
    
}
module.exports={
    multiplicar
}