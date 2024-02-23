const empleadoddd = [
    {
    id: 1,
    name: 'Juan'
},
{
    id: 2,
    name: 'Diego'
},
{
    id: 3,
    name: 'Jesus'
}
]
const getEmpleado  =(id, callback)=>{
    const empleado =empleadoddd.find(e=> e.id ===id)

     if(empleado)
     {
        callback(null, empleado)
         console.log(`Empleado ${empleado.name} con el id ${id} existe`)
     }
     else{
         callback(null, console.log(`Empleado ${empleado} con el id ${id} no existe `))

     }
    //  console.log(empleado)
 }

getEmpleado(33, (err, empleado)=>{
    
// console.log(empleado)
if(err ){
    console.log('error existente ')
    return console.log(err)       
}
console.log(empleado)

})