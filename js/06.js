//objetos =  Destructuracion de 2 o mas objetos
const producto = {
    nombre: 'Tablet',
    precio: 300,
    disponible: false
}

const cliente = {
    nombre: "Rafael",
    premium: true
}

const carrito = {
    cantidad: 1,
    ...producto//spread operator
}

console.log(carrito.nombre)
console.log(carrito)



// // const {nombre} = producto
// // console.log(nombre)

// const {nombre} = cliente
// const {nombre: nombreCliente, direccion:{calle}} = cliente

// console.log(nombre)
// console.log(nombreCliente) 
// console.log(calle) 