// Un callback es una función que se ejecuta dentro de otra 


 const Callbacks = (id, name, funcion ) => {
  const usuario ={
    id,
    name,
  }
  setTimeout(() => {
// funcion(usuario)
funcion(usuario)
  }, 1000);

}
Callbacks(100, 'Juan', (usuario)=>{
  console.log('Hola, Recibi la función deseada y el usuario ', usuario)
})

