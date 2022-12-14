// Destructuring de 2 o mas Objetos
const producto = {
  nombre: 'Tablet',
  precio: 300,
  disponible: true
}

const cliente = {
  nombre: 'Juan',
  premium: true
}

const { nombre, precio, disponible } = producto
console.log( nombre, precio, disponible )
const { nombre: nombreCliente, premium } = cliente
console.log( nombreCliente, premium )