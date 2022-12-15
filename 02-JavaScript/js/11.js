// Iteradores de Arreglos
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS']

tecnologias.forEach((tech, index) => {
  console.log( `${index} => ${tech}` )
})

const nuevoArreglo = tecnologias.map((tech, index) => {
  return `${index} => ${tech}`
})
// const nuevoArreglo = tecnologias.map((tech, index) => `${index} => ${tech}`)
console.log( nuevoArreglo )