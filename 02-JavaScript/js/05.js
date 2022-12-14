// Manipulacion de Objetos
const producto = {
  nombre: 'Tablet',
  precio: 300,
  disponible: true
}

console.log( producto )

// Reescribir un valor
producto.nombre = 'Monitor Curvo'
console.log( producto )

// Crear una nueva propiedad
producto.imagen = 'imagen.jpg'
console.log( producto )

// Eliminar una propiedad
delete producto.disponible
console.log( producto )

// Object.freeze(producto) -> no se puede reescribir, ni agregar o eliminar propiedades
Object.freeze(producto)

// Object.seal(producto) -> se puede reescribir, no agregar o eliminar propiedades
Object.seal(producto)