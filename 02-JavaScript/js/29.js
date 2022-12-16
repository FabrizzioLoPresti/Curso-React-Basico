// Eventos del DOM - Submit
const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', (e) => {
  e.preventDefault()

  const nombre = document.querySelector('.nombre').value
  const password = document.querySelector('.password').value
  console.log( nombre )
  console.log( password )

  if(nombre === '' || password === '') return console.log( 'Todos los campos son obligatorios' )

  console.log( 'Formulario Enviado' )
})