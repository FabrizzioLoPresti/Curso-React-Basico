// Selectores del DOM - querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a')
console.log( enlaces )
enlaces.forEach(enlace => console.log( enlace.textContent ))