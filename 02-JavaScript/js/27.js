// Eventos de DOM - Clicks
const heading = document.querySelector('.heading')
heading.addEventListener('click', () => {
  console.log( 'Diste click en Heading' )
  heading.textContent = 'Nuevo Heading al Dar Click'
})

const clickHeading = () => {
  console.log( 'Diste click en Heading' )
}
heading.addEventListener('click', clickHeading)

const enlaces = document.querySelectorAll('.navegacion a')
enlaces.forEach(enlace => {
  enlace.addEventListener('click', () => {
    console.log( 'Diste click en un enlace' )
  })
})