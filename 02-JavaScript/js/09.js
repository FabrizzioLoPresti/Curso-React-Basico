// Manipulacion de Arrays - Operaciones en los Arreglos
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

console.table( tecnologias )

// Agregar elementos al Array
// No usar push() ni unshift() ya que modifican el Arreglo Original
tecnologias.push('GraphQL') // Agrega al Final del Array
tecnologias.unshift('Next.js') // Agrega al inicio del Array
console.table( tecnologias )

const nuevoArreglo1 = [...tecnologias, 'GraphQL']
console.table( nuevoArreglo1 )
const nuevoArreglo2 = ['GraphQL', ...tecnologias]
console.table( nuevoArreglo2 )

// Eliminar elementos del Array
// No usar pop(), shift(), splice() ya que modifica el Arreglo Original
tecnologias.pop() // Elimina del Final del Array
tecnologias.shift() // Elimina del Inicio del Array
tecnologias.splice(2, 1) // Elimina de una posicion especifica
console.table( tecnologias )

// Utilizando Array Methods
// Filter ejecuta una Funcion() por cada elemento del Arreglo
const nuevoArreglo3 = tecnologias.filter( function(tech) {
  return tech !== 'CSS'
})
// const nuevoArreglo3 = tecnologias.filter(tecnologia => tecnologia !== 'CSS')
console.table( nuevoArreglo3 )

// Reemplazar elementos del Array
// No se debe utilizar ya que modifica el Arreglo Original
tecnologias[0] = 'GraphQL'
console.table( tecnologias )

const nuevoArreglo4 = tecnologias.map( function(tech) {
  if(tech === 'React') {
    return 'Vue'
  }
  return tech
})
// const nuevoArreglo4 = tecnologias.map(tecnologia => tecnologia === 'React' ? 'Vue' : tecnologia )
console.table( nuevoArreglo4 )