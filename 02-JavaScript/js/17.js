// Arrow Functions - Array Methods
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']
const numeros = [10, 5, 3, 1, 52]

// Recorrer arreglo
tecnologias.forEach((tech, index) => {
  console.log(`${index} - ${tech}`)
})

// Reemplazar elemento de un array
const nuevoArray = tecnologias.map(tech => {
  return tech === 'HTML' ? 'GraphQL' : tech
})
console.table( nuevoArray )

const nuevoArray2 = tecnologias.map(tech => tech === 'HTML' ? 'GraphQL' : tech)
console.table( nuevoArray2 )

// Eliminar elemento de un array
const nuevoArray3 = tecnologias.filter(tech => {
  return tech !== 'React'
})
console.table( nuevoArray3 )

const nuevoArray4 = tecnologias.filter(tech => tech !== 'React')
console.table( nuevoArray4 )

// Acumular Resultado
const resultado = numeros.reduce((acum, nro) => {
  return acum + nro
}, 0)
console.log( resultado )

const resultado2 = numeros.reduce((acum, nro) => acum + nro, 0)
console.log( resultado2 )