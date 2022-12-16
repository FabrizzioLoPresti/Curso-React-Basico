// Manipular HTML con JavaScript
const heading = document.querySelector('.heading')
console.log( heading.textContent )
heading.textContent = 'Un nuevo Heading'

const inputNombre = document.querySelector('#nombre')
console.log( inputNombre )
inputNombre.value = 'Un valor por default'

const enlaces = document.querySelectorAll('.navegacion a')
enlaces[2].textContent = 'Nuevo Enlace'
enlaces.forEach(enlace => enlace.textContent = 'Nuevo Enlace')