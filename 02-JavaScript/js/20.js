// Condicionales - Comparacion con == y ===
const numero1 = 20
const numero2 = '20'

if(numero1 == numero2) {
  console.log( 'Si son iguales' )
} else {
  console.log( 'No son iguales' )
}

if(numero1 === numero2) {
  console.log( 'Si son iguales' )
} else {
  console.log( 'No son iguales' )
}

if(numero1 === Number(numero2)) {
  console.log( 'Si son iguales' )
} else {
  console.log( 'No son iguales' )
}

if(String(numero1) === numero2) {
  console.log( 'Si son iguales' )
} else {
  console.log( 'No son iguales' )
}

let resultado
resultado = numero1 == numero2
console.log( resultado )

resultado = numero1 === numero2
console.log( resultado )

resultado = numero1 === Number(numero2)
console.log( resultado )

resultado = String(numero1) === numero2
console.log( resultado )

const autenticado = true
if(autenticado) {
  console.log( 'Usuario Autenticado' )
}