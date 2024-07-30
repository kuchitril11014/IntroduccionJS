//objetos = manipulacion

const producto = {
    nombre: 'Tablet',
    precio: 300,
    disponible: false
}
//congelar propiedad
Object.freeze(producto)

//editar las existentes pero sin añadir nuevas
Object.seal(producto)

//Reescribir un valor
producto.disponible = true;

//si no existe, lo va añadir
producto.imagen = 'imagen.jpg'

//eliminar propiedad
delete producto.precio


console.log(producto)