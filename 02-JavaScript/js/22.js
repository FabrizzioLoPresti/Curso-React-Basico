// Condicionales - Ternarios
const autenticado = true
autenticado ? console.log( 'Usuario Autenticado' ) : console.log( 'Usuario No Autenticado' )
!autenticado ? console.log( 'Usuario Autenticado' ) : console.log( 'Usuario No Autenticado' )

const resultado = 10 > 5 ? 'Si' : 'No'
console.log( resultado )

// Doble Ternario
const saldo = 600;
const pagar = 500;
const tarjeta = true;

saldo > pagar ?
  console.log( 'Puedes pagar con saldo' ) :
  tarjeta ?
    console.log( 'Puedes pagar con tarjeta' ) :
    console.log( 'No puedes pagar' )