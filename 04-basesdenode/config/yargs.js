const yargs = require('yargs')

.option('b', {
    alias:'base',
    type:'number', 
    description:'Es la base para la tabla de multiplicar'

})
.options('lim', {
    alias:'limite', 
    type:'number',
    default:10, 
    description:'Es la opcion para listar la tabla de multiplicar'
 })
 .check((argv, options)=>{
     if(isNaN(argv.b) ){
         throw 'Solo numeros '
     }
     return true
 })
 .options('l', {
    alias:'lista', 
    type:'boolean',
    default:false, 
    description:'Es la opcion para listar la tabla de multiplicar'
 })
 
 
.argv
// console.log(colores.gree('Holaaaa'))
module.exports=yargs
