// Funciones que retornan valores
function sumar(a, b = 0) {
  return a + b
}
const resultado = sumar(3,5)
console.log( resultado )

// Retorna arrego - Destructuring de Arreglos
function arreglo(a, b = 0) {
  return [a, b, 'Hola Mundo', a + b ]
}
const [val1, val2, string, res] = arreglo(9,5)
console.log( `${val1}, ${val2} | ${string} | Resultado: ${res}` )

// Retorna objeto - Destructuring de Objetos
function objeto(a, b = 0) {
  return {
    resObjeto: a + b,
    mensaje: 'Hola Mundo'
  }
}
const { resObjeto, mensaje } = objeto(7,2)
console.log( `${resObjeto} | Mensaje: ${mensaje}` )

// const [resultado, setResultado] = useState(0)