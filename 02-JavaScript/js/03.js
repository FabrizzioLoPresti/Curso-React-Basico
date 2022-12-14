// Tipos de Datos

// Undefined
let cliente
console.log( cliente )
console.log( typeof cliente )

// Boolean
const descuento = true
console.log( typeof descuento )

// Number
const numero1 = 20.20
const numero2 = 30
const numero3 = -100
console.log( typeof numero1 )
console.log( typeof numero2 )
console.log( typeof numero3 )

// String o Cadenas de Texto
const alumno = 'Juan'
let producto = 'Monitor 20 Pulgadas'
console.log( typeof alumno )

// BigInt
const numeroGrande = BigInt(21321312341)
console.log( typeof numeroGrande )
console.log( numero2 + Number(numeroGrande) )

// Cohercion de Tipos de Datos
const numero4 = '30'
const numero5 = 30
console.log( Number(numero4) + numero5 )

// Symbol - siempre son diferentes, cada symbol es unico
const primerSymbol = Symbol(30)
const segundoSymbol = Symbol(30)
console.log( primerSymbol === segundoSymbol )
console.log( primerSymbol.valueOf() )
console.log( segundoSymbol.valueOf() )

// Null
const sinDescuento = null
console.log( typeof sinDescuento )