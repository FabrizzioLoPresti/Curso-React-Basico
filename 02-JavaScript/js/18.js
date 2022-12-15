// Otros Array Methods Utiles -> En Proyecto.md TODOS los Arrays Methods + Explicacion + Ejemplo
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']
const numeros = [10, 5, 3, 2, 52]

let nuevoArreglo
let resultado

// Filter -> Devuelve arreglo con elementos que cumplen la condicion, podemos usar para Eliminar
nuevoArreglo = tecnologias.filter(tech => tech !== 'React')
console.table( nuevoArreglo )
nuevoArreglo = numeros.filter(nro => nro >= 5)
console.table( nuevoArreglo )

// Includes -> Devuelve booleano indicando si existe o no el elemento en el Arreglo
resultado = tecnologias.includes('React')
console.log( resultado )

// Some -> Devuelve booleano indicando si un elemento del Arreglo cumple con la Condicion, primero que encuentra corta
resultado = numeros.some(numero => numero >= 90)
console.log( resultado )

// Find -> Devuelve el primer elemento que cumpla con la condición que especifiquemos, si no encuentra devuelve undefined
resultado = numeros.find(numero => numero > 30)
console.log( resultado )

// Every -> Retorna booleano si todos los elementos cumplen con la condicion
resultado = numeros.every(numero => numero > 1)
console.log( resultado )

// Reduce -> Devuelve un valor que es el resultado de la operación que especifiquemos entre todos los elementos del arreglo, podemos usar para Acumular resultado o Total
resultado = numeros.reduce((acum, nro) => acum + nro, 0)
console.log( resultado )

// ForEach -> Ejecuta una función por cada elemento del arreglo (utilizar unicamente para iterar)
tecnologias.forEach((tech, index) => console.log(`${index} - ${tech}`))

// Map -> Devuelve un nuevo arreglo con los elementos segun condicion si es que le especificamos alguna, podemos usar para Editar o Reemplazar
nuevoArreglo = tecnologias.map(tecnologia => tecnologia)
console.table( nuevoArreglo )
nuevoArreglo = tecnologias.map(tecnologia => tecnologia === 'JavaScript')
console.table( nuevoArreglo )
nuevoArreglo = tecnologias.map(tecnologia => tecnologia === 'HTML' ? 'GraphQL' : tecnologia)
console.table( nuevoArreglo )