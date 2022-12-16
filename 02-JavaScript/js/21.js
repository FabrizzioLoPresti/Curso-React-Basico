// Condicionales - Operadores || y &&
const saldo = 600
const pagar = 700
const tarjeta = true

if(saldo > pagar || tarjeta ) {
  console.log( 'Puedes pagar' )
} else {
  console.log( 'No puedes pagar' )
}

if(saldo > pagar && tarjeta ) {
  console.log( 'Puedes pagar' )
} else {
  console.log( 'No puedes pagar' )
}

let resultado
resultado = 10 > 5 && 10 < 20; // true
resultado = 10 > 5 || 10 < 20; // true
resultado = 10 < 5 && 10 < 20; // false
resultado = 10 < 5 || 10 < 20; // true