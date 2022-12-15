// Funciones - Arrow Functions
const sumar = (a, b = 0) => {
  return a + b
}
const resSuma = sumar(21,3)
console.log( resSuma )

// Return Implicito
const restar = (a = 0, b = 0) => a - b
const resResta = restar(15,5)
console.log( resResta )

// Unico parametro - No son necesarios parentesis
const mitad = a => a / 2
const resMitad = mitad(50)
console.log( resMitad )