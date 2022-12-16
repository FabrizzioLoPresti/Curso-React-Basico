// Multiples Async/Await y Performance
const url = 'https://jsonplaceholder.typicode.com/comments';
const url2 = 'https://jsonplaceholder.typicode.com/photos';

const consultarAPI = async () => {
  const [respuesta1, respuesta2] = await Promise.all([ fetch(url), fetch(url2) ])
  const [resultado1, resultado2] = await Promise.all([ respuesta1.json(), respuesta2.json() ])
  console.log( resultado1 )
  console.log( resultado2 )
}

consultarAPI()