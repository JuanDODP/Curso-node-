console.clear();
const colores = require('colors')

const {
    multiplicar
} = require('./helpers/multiplicar')
const yargs = require('./config/yargs')
//  console.log(process.argv)
const [, , arg3] = process.argv
const [, b = 5] = arg3.split('=')
console.log('Este argumento', arg3)
//  console.log('Esta es la base',b)
//   const base = 22;
multiplicar(yargs.b, yargs.l, yargs.lim)
console.log(colores.blue('Hplaaaaa'))
console.log('Los yargs', yargs)