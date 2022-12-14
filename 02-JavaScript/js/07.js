// Unir dos o mas Objetos en uno solo
const producto = {
  nombre: 'Tablet',
  precio: 300,
  disponible: true
}

const cliente = {
  nombre: 'Juan',
  premium: true
}

const nuevoObjeto = Object.assign(producto, cliente)
console.log( nuevoObjeto )

// Spread Operator
// Sobreescribe el valor de las propieadades nombre, las cuales son iguales
const nuevoObjeto2 = { ...producto, ...cliente }
console.log( nuevoObjeto2 )

const nuevoObjeto3 = {
  producto: { ...producto },
  cliente: { ...cliente }
}
console.log( nuevoObjeto3 )