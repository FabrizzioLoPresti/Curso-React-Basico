// Destructuring de Arrays
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];
console.table( tecnologias )

const [html] = tecnologias
const [ , , , , nodejs] = tecnologias
const [ , css, ...resto] = tecnologias
console.log( html )
console.log( nodejs )
console.log( css )
console.log( resto )