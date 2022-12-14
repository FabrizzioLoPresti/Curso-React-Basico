// Objetos
const producto = {
  nombre: 'Tablet',
  precio: 300,
  disponible: true
}

console.log( producto )
console.table( producto )
console.log( producto.nombre )

// Destructuring de Objetos
const { nombre, precio, disponible } = producto
console.log( `${nombre} - $${precio} | Disponible: ${disponible ? 'Si': 'No'}` )

// Object Literal Enhancements
const autenticado = true
const usuario = 'Juan'
const nuevoObjeto = {
  autenticado,
  usuario
}
console.table( nuevoObjeto )