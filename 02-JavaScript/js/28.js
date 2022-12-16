// Eventos del DOM - Inputs (Mas eventos del DOM para Inputs en Proyecto.md)
const inputNombre = document.querySelector('.nombre')
inputNombre.addEventListener('input', (e) => {
  console.log( e.target.value )
})

const inputPassword = document.querySelector('.password')
const funcionPassword = (e) => {
  console.log( e.target.value )
  inputPassword.type = 'text'
  setTimeout(() => {
    inputPassword.type = 'password'
  }, 1000);
}
inputPassword.addEventListener('input', funcionPassword)