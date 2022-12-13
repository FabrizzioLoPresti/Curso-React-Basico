# JavaScript
1. Condicionales
2. Ciclos
3. Arrays - Array Methods
4. Objetos
5. Funciones - Arrow Functions
6. Clases
7. Modulos
8. Promises
9. Async/Await
10. Callbacks
11. Eventos
12. Ternarios
13. Tipos de Datos
14. Variables y Scope
15. Destructuracion de Objetos y Arrays

## Variables con let (01.js)
En JavaScript, las variables se declaran con la palabra reservada `var`, `let` o `const`. Actualmente se utilizan `let` y `const`.

JavaScript es un Lenguaje de Tipado Dinamico, por lo que una variable puede contener diferentes tipos de datos, ya que el tipo de dato se almacena en el valor de la variable y no en la variable como tal. Ademas se utiliza CamelCase para nombrar las variables.

Tienen dos caracteristicas principales:
1. Se pueden re-asignar los valores
2. Pueden iniciar sin un valor

Se declarar como:
```js
  let nombre = "Juan";
```

## Variables con const (02.js)
Tienen dos caracteristicas principales:
1. No se pueden re-asignar los valores
2. No pueden iniciar sin un valor

Const se utiliza mas, ya que se usa para almacenar elementos del DOM que son constantes y no varian.

## Reglas de las Variables
1. Las Variables no pueden iniciar con numeros o caracteres especiales (Guion bajo si esta permitido)
2. Las Variables no pueden contener espacios
3. JavaScript recomienda el uso de CamelCase para las variables

## Estructuras y Tipos de Datos (03.js)
1. Undefined -> 
    * No se ha declarado la variable
    * No se ha asignado un valor a la variable
    * No se ha inicializado la variable
2. Null ->
    * Se ha declarado la variable pero no se ha asignado un valor a la variable
    * Se ha asignado un valor a la variable pero no se ha inicializado la variable
3. Boolean -> True o False
4. Number -> Entero o Decimal
5. String -> Cadena de caracteres
6. Function -> Funciones
7. Symbol -> Simbolos (No se usa)
8. BigInt -> Entero grande (No se usa)
9. Object -> Objetos (Array, Objeto, etc)

### Cohercion de Tipos de Datos
1. Coercion de tipos de datos
    * Cuando se realiza una operacion con dos tipos de datos distintos, se realiza la operacion con el tipo de dato mas general
    * Cuando se realiza una operacion con dos tipos de datos iguales, se realiza la operacion con el tipo de dato mas especifico
Transformar a Number con la Funcion Number()
Transformar a String con la Funcion String()

## Objetos (04.js)
Los objetos son una coleccion de propiedades y metodos.

Se definen con llaves y se pueden acceder con punto (.). Tienen una propiedad y un valor: `{ propiedad: valor }`.

```js
  const persona = {
      nombre: "Juan",
      apellido: "Perez",
      edad: 30,
      direccion: {
        calle: "Calle falsa",
        numero: 123,
        ciudad: "Ciudad falsa",
        pais: "Pais falso"
      }
  }
```

### Destructuring de Objetos
```js
  const { nombre, apellido, edad, direccion: { ciudad } } = persona;
```

### Object Literal Enhancements
Sirve para colocar variables que se encuentran fuera del objeto dentro del objeto.
```js
  const autenticado = true;
  const usuario = 'Juan';
  const nuevoObjeto = {
    autenticado,
    usuario
  }
```

### Manipulacion de Objetos (05.js)
Que un Objeto este definido con `const` no evita poder manipular los valores de las propiedades.

```js
  const producto = {
    nombre: 'Tablet',
    precio: 300,
    disponible: true,
    descripcion: 'Tablet de cómputo'
  };

  // Reescribir un valor
  producto.nombre = 'Monitor Curvo';

  // Crear una nueva propiedad
  producto.imagem = 'imagen.jpg';
  
  // Eliminar una propiedad
  delete producto.disponible;
```

Podemos utilizar Object.freeze() (**Object Method**) para que un objeto no pueda ser modificado, no permite ni modificar una propiedad ni agregar/eliminar nuevas propiedades.
```js
  Object.freeze(producto);
```

Podemos utilizar Object.seal() (**Object Method**), el cual permite modificar una propiedad pero no agregar/eliminar nuevas propiedades.
```js
  Object.seal(producto);
```

### Destructuring de 2 o Mas Objetos (06.js)
```js
  const producto = {
    nombre: 'Tablet',
    precio: 300,
    disponible: true
  };

  const cliente = {
    nombre: 'Juan',
    premium: true
  };

  const { nombre, precio, disponible } = producto;
  const { nombre: nombreCliente, premium } = cliente;
```

### Unir dos Objetos en uno solo (07.js)
```js
  const producto = {
    nombre: 'Tablet',
    precio: 300,
    disponible: true
  };

  const cliente = {
    nombre: 'Juan',
    premium: true
  };

  // const nuevoObjeto = Object.assign(producto, cliente); NO pq modifica los objetos originales

  // Mediante Spread Operator (no modifica los objetos originales)
  const nuevoObjeto2 = { ...producto, ...cliente }; // Sobreescribe las variables nombre
  const nuevoObjeto3 = {
    producto: { ...producto },
    cliente: { ...cliente }
  }
```

## Arrays (08.js)
Al igual que un objeto un arreglo puede contener mucha informacion relacionada.

A los elementos de los Arreglos se accede mediante Indices (los cuales comienzan desde 0).
```js
  const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS', 20, 30, true];
  console.log( tecnologias[3] ); // React
  console.log( tecnologias.length ); // 8
  console.log( tecnologias.toString() ); // HTML,CSS,JavaScript,React,NodeJS,20,30,true
```

### Manipulacion de Arrays (09.js)
**NO Utilizar ni Push ni Unshift (especialmente en React.js) porque modifican el arreglo original**
1. Agregar Elementos al Inicio del Array -> `array.unshift(elemento)`
2. Agregar Elementos al Final del Array -> `array.push(elemento)`
3. Agregar elementos al Inicio del Array con Spread Operator (no se modifica el Arreglo Original) -> `const nuevoArray = ['GraphQL', ...array];`
4. Agregar elementos al Final del Array con Spread Operator (no se modifica el Arreglo Original) -> `const nuevoArray = [...array, 'GraphQL'];`
5. Eliminar Elemento al Final del Array (Modifica el Arreglo Original) -> `array.pop()`
6. Eliminar Elemento al Inicio del Array (Modifica el Arreglo Original) -> `array.shift()`
7. Eliminar Elemento en una Posicion del Array (Modifica el Arreglo Original) -> `array.splice(posicion, 1)`
8. Eliminar Elemento del Array utilizando el Array Method `.filter()` (No modifica el Array Original, devuelve un arreglo NUEVO) -> `const nuevoArray = array.filter( elemento => elemento !== 'JavaScript' )`
9. Reeplazar un Elemento del Array (Modifica el Arreglo Original) -> `array[posicion] = 'JavaScript ES6'`
10. Reeplazar un Elemento del Array utilizando el Array Method `.map()` (No modifica el Array Original, devuelve un arreglo NUEVO) -> `const nuevoArray = array.map( elemento => elemento === 'CSS' ? 'CSS3' : elemento );`

### Destructuring de Arrays (10.js)
En el caso de los Arreglos, a diferencia de los Objectos donde se extraian y creaban variables en base a las propiedeades del Objeto, aqui se crean en base a la posicion de los elementos en el Arreglo.
```js
  const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];
  console.table( tecnologias ); // HTML,CSS,JavaScript,React,NodeJS

  const [html, css, javascript, react, nodejs] = tecnologias;
  console.log( html ); // HTML
  console.log( nodejs ); // NodeJS

  const [ , , , react2, nodejs2] = tecnologias;
  console.log( react2 ); // React
  console.log( nodejs2 ); // NodeJS

  const [ , , , , nodejs3] = tecnologias;
  console.log( nodejs3 ); // NodeJS

  const [html2, , ...resto] = tecnologias;
  console.log( html2 ); // HTML
  console.log( resto ); // ['CSS', 'JavaScript', 'React', 'NodeJS']
```

### Iteradores de Arreglos (11.js)
1. ForEach (se ejecuta una vez por cada elemento del Arreglo), permite acceder a cada elemento del Array junto con su indice - Solo Listar elementos, No crear nuevo Array ->
```js
  tecnologias.forEach( (tecnologia, index) => {
    console.log( `${index} => ${tecnologia}` );
  } );
```
2. Map (devuelve un nuevo Arreglo con los resultados de la funcion que se le pasa), permite acceder a cada elemento del Array junto con su indice - Listar elementos y ademas crear un nuevo Array ->
```js
  const tecnologiasArray = tecnologias.map( (tecnologia, index) => {
    return(`${index} - ${tecnologia}`);
  });
  console.log( tecnologiasArray );
```

## Funciones - Function Declaration (12.js)
Se utilizan para agrupar bloques de codigo. Utilizar siempre para nombrarlas CamelCase.

Una caracteristica de Function Declaration es que puedes llamar a la funcion antes de definirla, debido a que primero se registran las funciones y en un segundo paso se ejecutan, debido a las dos fase de JavaScript (de creacion y de ejecucion).

```js
  console.log( saludar('Pedro') ); // Hola Pedro
  function saludar(nombre) {
    return `Hola ${nombre}`;
  }
  console.log( saludar('Juan') ); // Hola Juan
```

### Parametros y Parametros por Defecto (13.js)
Los valores que se encuentran dentro de los Parentesis en la declaracion de la Funcion se los conoce como **Parametros**, mientras que los valores que se pasan a la Funcion al momento de llamarla se los conoce como **Argumentos**.
```js
  function sumar(a, b=0) {
    console.log( a + b );
  }
  sumar(1, 2);
```

### Funciones que Retornan Valores (14.js)
Permite crear funciones que retornen valores para posteriormente almacenarlos en variables y poder utilizarlos, o utilizarlos de forma directa.
```js
  function sumar(a, b) {
    return a + b;
  }
  const resultado = sumar(1, 2);
  console.log(resultado); // 3

  function arreglo(a, b) {
    return [a, b, 'Hola Mundo', a+b];
  }
  // Utilizando Destructuring de Arrays
  const [res1, res2, holaMundo, suma] = arreglo(7, 2);
  console.log(res1, res2, holaMundo, suma); // 7 2 Hola Mundo 9

  function objeto(a, b) {
    return {
      sumaObjeto: a + b,
      holaMundoObjeto: 'Hola Mundo',
    };
  }
  // Utilizando Destructuring de Objetos
  const {sumaObjeto, holaMundoObjeto} = objeto(7, 2);
  console.log(sumaObjeto, holaMundoObjeto);
```

## Funciones - Function Expression (15.js)
No solamente se diferencia de las Function Declaration por su sintaxis, sino tambien porque este tipo de funciones no puede ser Primero llamado y luego Creado, esto se debe a que se crean como variables y JavaScript no permite que se llame a una variable antes de que se haya creado. En el Primer Paso JavaScript registra todas las funciones en una Fase de Creacion y en la Segunda Fase de Ejecucion las manda a llamar , pero con esta Sintaxis las variables no se registran en la Fase de Creacion, sino en la Fase de Ejecucion, por lo tanto si llamamos primero a la funcion no la encuentra porque cree que no esta creada.
```js
  const sumar = function(a, b) {
    return a + b;
  }
  const resultado = sumar(1, 2);
  console.log(resultado);
```

## Funciones - Arrow Functions (16.js)
Solamente se pueden utilizar en la Sintaxis de Funtion Expression.

Una caracteristica de los Arrow Functions es que cuando solo tienes una linea de codigo que implica un Return, se pueden eliminar las llaves y toma como Implicito el Return.

Tambien si pasamos un unico parametro, podemos eliminar los parentesis.
```js
  const sumar = (a=0, b=0) => {
    return a + b;
  }
  const resultado = sumar(2, 4);
  console.log(resultado);

  const restar = (a, b) => a - b;
  const resultado2 = restar(10, 2);
  console.log(resultado2);

  const mitad = a => a / 2;
  const resultado3 = mitad(10);
  console.log(resultado3);

  const sumaArrow = () => 3 + 6;
  const resultado4 = sumaArrow();
  console.log(resultado4);
```

## Arrow Functions y Array Methods (17.js)
```js
  const nuevoArray = tecnologias.map((tecnologia, index) => `${tecnologia} - ${index}`);
  console.log(nuevoArray);

  // Reemplazar elemento de un array
  const nuevoArray2 = tecnologias.map(tecnologia => tecnologia === 'JavaScript' ? 'JavaScript - ES6' : tecnologia);
  console.log(nuevoArray2);

  // Eliminar elemento de un array
  const nuevoArray3 = tecnologias.filter((tecnologia) => tecnologia !== 'JavaScript');
  console.log(nuevoArray3);
```

### Otros Array Methods Utiles (18.js) - NO MUTAN EL ARREGLO ORIGINAL (doesitmutate.xyz)
1. **Filter** -> Devuelve un nuevo arreglo con los elementos que cumplan con la condición que especifiquemos (podemos utilizarlo para ELIMINAR elementos)
```js
  const nuevoArray = tecnologias.filter(tecnologia => tecnologia !== 'JavaScript'); // ['HTML', 'CSS', 'React', 'NodeJS']
  const resultado  = numeros.filter(numero => numero >= 10); // [10, 20 , 30]
```
2. **Include** -> Devuelve un valor booleano indicando si el elemento que buscamos existe en el arreglo o no
```js
  const resultado = tecnologias.includes('JavaScript');
```
3. **Some** -> Devuelve un valor booleano indicando si alguno de los elementos del arreglo cumple con la condición que especifiquemos, al primero retorna true y corta el ciclo
```js
  const resultado = numeros.some(numero => numero > 15); // true
```
4. **Find** -> Devuelve el primer elemento que cumpla con la condición que especifiquemos (si no encuentra ninguno, devuelve undefined)
```js
  const resultado = numeros.find(numero => numero > 15); // 20
```
5. **Every** -> Devuelve un valor booleano indicando si todos los elementos del arreglo cumplen con la condición que especifiquemos
```js
  const resultado = numeros.every(numero => numero >= 10); // true
```
6. **Reduce** -> Devuelve un valor que es el resultado de la operación que especifiquemos entre todos los elementos del arreglo
```js
  const resultado = numeros.reduce((acumulador, numero) => acumulador + numero, 0); // 55
```
7. **ForEach** -> Ejecuta una función por cada elemento del arreglo (utilizar unicamente para iterar)
```js
  numeros.forEach((numero, index) => console.log(`${index} - ${numero}`));
```
8. **Map** -> Devuelve un nuevo arreglo con los elementos (podemos utilizarlo para EDITAR los elementos, verificamos condicion y si se cumple, evolvemos un nuevo elemento, si no se cumple devolvemos el elemento original). Si validamos por una condicion nos devuelve true o false por cada elemento. No funciona como el Filter, donde te devuelve el elemento si cumple con la condicion, aca devuelve el resultado de la condicion evaluada.
```js
  const resultado = tecnologias.map(tecnologia => tecnologia); // ['HTML', 'CSS', 'React', 'NodeJS']
  const resultado = tecnologias.map(tecnologia => tecnologia === 'JavaScript'); // [true, false, false, false, false]
  const resultado = numeros.map(numero => numero > 10 ? numero : 0); // [0, 20, 30]
```

## Condicionales - If (19.js)
Si se cumple la condicion evaluada se ejecuta el bloque de codigo, si no se cumple, se salta el bloque de codigo.

```js
  if (resultado > 10) {
    console.log('El resultado es mayor a 10');
  } else {
    console.log('El resultado es menor a 10');
  }
```

## Condicionales - Comparacion con == y === (20.js)
Se conoce a `===` como **Operador Estricto de Comparacion**, ya que no solo compara los valores de las variables sino tambien el tipo de dato. En cambio `==` es Operador de Comparacion pero que NO es Estricto, solo compara el valor de la variable y no el tipo de dato.
```js
  const resultado = 10 == '10'; // true
  const resultado = 10 === '10'; // false
  const resultado = numero1 === Number(numero2); // true

  const numero1 = 10;
  const numero2 = "10";

  if(numero1 == numero2){
    console.log("Son iguales");
  } else {
    console.log("No son iguales");
  }

  if(numero1 === numero2){
    console.log("Son identicos");
  } else {
    console.log("No son identicos");
  }

  const autenticado = true;
  if(autenticado){
    console.log("Usuario autenticado");
  }
```

## Condicionales - Operadores || y && (21.js)
1. && -> Se deben cumplir todas las condiciones para que se ejecute el bloque de codigo
2. || -> Se debe cumplir al menos una condicion para que se ejecute el bloque de codigo
```js
  const resultado = 10 > 5 && 10 < 20; // true
  const resultado = 10 > 5 || 10 < 20; // true
  const resultado = 10 < 5 && 10 < 20; // false
  const resultado = 10 < 5 || 10 < 20; // true
```

## Condicionales - Ternarios (22.js)
```js
  const resultado = 10 > 5 ? 'Si' : 'No'; // Si
  const resultado = 10 < 5 ? 'Si' : 'No'; // No

  // Doble Ternario
  const saldo = 600;
  const pagar = 500;
  const tarjeta = true;

  saldo > pagar ? 
    console.log('Puedes pagar con saldo') : 
    tarjeta ? 
      console.log('Puedes pagar con tarjeta') : 
      console.log('No puedes pagar');
```

## Scope de Variables (23.js)
Una Variable Global si puede entrar dentro de una Funcion o de un IF o cualquier estructura o bloque de codigo con {}, pero una variable definida dentro no puede salir. Existe solamente en ese ambito.
```js
  const precio = 300;

  function unaFuncion() {
    const precio = 600;
    console.log(precio); // 600
  }

  unaFuncion();
  console.log(precio); // 300
```

# Selectores del DOM

## querySelector (24.js)
El Objeto `document` hace referencia a todo el HTML de la pagina.

El selector `querySelector` se utiliza para seleccionar un unico elemento del DOM, te trae de 0 maximo 1 elemento, selecciona el primer elemento que coincida con el selector. Mientras que `querySelectorAll` te va a traer todos los elementos que concuerden con el selector que le estemos pasando (ej. todos los elementos de una lista).

El selector se coloca al estilo de CSS:
1. **ID** -> #id
2. **Class** -> .class
3. **Etiqueta** -> elemento - h1, div, p, etc.
4. **Selector de atributo** -> [atributo]

```js
  const elemento = document.querySelector('elemento'); // Etiqueta
  const elemento = document.querySelector('#elemento'); // ID
  const elemento = document.querySelector('.elemento'); // Class
  const elemento = document.querySelector('[atributo]'); // Selector de atributo
```

## querySelectorAll (25.js)
Me devuelve todos los elementos que coincidan con el selector devolviendo un Array de Elementos.
```js
  const elementos = document.querySelectorAll('elemento'); // Etiqueta
  const elementos = document.querySelectorAll('#elemento'); // ID
  const elementos = document.querySelectorAll('.elemento'); // Class
  const enlaces = document.querySelectorAll('.navegacion a');
```

## Manipular HTML con JavaScript (26.js)
Podemos seleccionar elementos con `querySelector` y manipularlos con `innerHTML` y `textContent` que son propiedades de los objetos que nos devuelve `querySelector` y `querySelectorAll`.
```js
  const heading = document.querySelector('.heading');
  heading.textContent = 'Hello World'; // Modifica unicamente el contenido del elemento
  heading.innerHTML = '<h1>Hello World</h1>'; // Modifica el contenido del elemento y su etiqueta HTML

  const inputNombre = document.querySelector('#nombre');
  inputNombre.value = 'Un valor por default'; // Modifica el valor del elemento

  // Modificando mas de un elemento con querySelectorAll
  const enlaces = document.querySelectorAll('.navegacion a');
  enlaces.forEach(enlace => {
    enlace.textContent = 'Nuevo enlace';
  });
```

## Eventos del DOM - Clicks (27.js)
Una de las caracteristicas de JavaScript es hacer los sitios web o aplicaciones dinamicos, esto se logra mediante los eventos.

Si creamos por separado la funcion que se va a ejecutar en caso de darse el evento, al momento de llamarla debemos hacerlo sin los () debido a que esto va a provocar que se ejecute automatica e inmediatamente.

```js
  const heading = document.querySelector('.heading');
  heading.addEventListener('click', () => {
    console.log('Click en el titulo');
  });

  const navegacion = document.querySelector('.navegacion');
  const clickNavegacion = () => {
    console.log('Click en la navegación');
  }
  navegacion.addEventListener('click', clickNavegacion);
```

## Eventos del DOM - Inputs (28.js)
Nos permite leer lo que los Usuarios escriben dentro de los Inputs.
1. Input -> Nos permite capturar en tiempo real lo que el usuario escribe.
2. Keydown -> Nos permite capturar el evento cuando el usuario presiona una tecla.
3. Keyup -> Nos permite capturar el evento cuando el usuario suelta una tecla.
4. Keypress -> Nos permite capturar el evento cuando el usuario presiona una tecla.
5. Focus -> Nos permite capturar el evento cuando el usuario pone el foco en un input.
6. Blur -> Nos permite capturar el evento cuando el usuario quita el foco de un input.
```js
  inputNombre.addEventListener('input', (e) => {
    console.log(e.target.value);
  });
```

## Eventos del DOM - Submit (29.js)
En el evento Submit debemos prevenir la accion por default del formulario que es redireccionarse hacia donde indica su `action`, esto lo logramos mediante la captura del evento con `e.preventDefault()`, para luego poder hacer las respectivas validacion y ya en ese caso enviar la informacion del mismo.

Es ideal para realizar validaciones antes de realizar inserciones a la Basde de Datos via Fetch o Ajax.

```js
  const formulario = document.querySelector('#formulario');
  formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Formulario enviado');
  });
```

## Generando codigo HTML com JavaScript (30.js)
Podemos crear nuestros propios elementos HTML mediante JavaScript agregandoles clases y contenido.
```js
  // Validacion de Alerta Preiva
  const alertaPrevia = document.querySelector('.alerta');
  if(alertaPrevia) {
    alertaPrevia.remove();
  }
  
  // Creacion de Alerta
  const alerta = document.createElement('DIV');
  alerta.classList.add('alerta');

  if([nombre, password].includes('')) {
    alerta.classList.add('error');
    alerta.innerHTML = 'Todos los campos son obligatorios';
  } else {
    alerta.classList.add('exito');
    // alerta.innerHTML = 'Todo correcto';
    alerta.innerHTML = `
      <p>Todo correcto</p>
      <p>Nombre: ${nombre}</p>
    `;
  }

  // Insertar Alerta
  formulario.appendChild(alerta);
```

## Imports y Exports (31.js y funciones.js)
Nos permite tener las funciones separadas en diferentes archivos como archivos de funciones, helpers, configuarcion, clases e irlo importando segun requieras en otros archivos.

Podemos tener un unico `export default nombreFuncion` por archivo, en caso de tener mas de una funcion debemos exportarlo como un objeto `export { nombreFuncion1, nombreFuncion2 }`. Al momento de importarlas desde otro archivo si utilizamos anteriormente `export default` podemos importarla con el nombre que querramos `import nombreCualquiera from './funciones.js'` y sin { }, pero en caso de ser mas de una funcion debemos importarla con `import { nombreFuncion1, nombreFuncion2 } from './funciones.js'` colocando el nombre de la funcion con la cual la declaramos sin poder cambiarselo, aplicando Destructuring de Objetos.

```js
  // En 31.js
  import sumar from './funciones.js';
  import { sumar, restar } from './funciones.js';
  import { sumar as suma, restar } from './funciones.js'; // Crear un alias

  // En funciones.js
  const sumar = (a, b) => a + b;
  const restar = (a, b) => a - b;

  export default sumar;
  export { 
    sumar, 
    restar 
  };
```

## Fetch API y Promises (32.js) - Ver mas a fondo en Curso de JavaScript CodigoConJuan o Mozilla Developer Network o W3Schools
Fetch API (nativo en el navegador) es el nuevo Ajax y permite hacer peticiones a una API REST, es decir, a una API que nos devuelve un objeto JSON. Axios tambien es otra opcion, es una libreria que nos permite hacer peticiones a una API REST, es decir, a una API que nos devuelve un objeto JSON.

Un Promise es un valor que va a estar disponible ahora, en un futuro o nunca.
```js
  const url = 'https://jsonplaceholder.typicode.com/comments';

  const consultarAPI = () => {
    fetch(url)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      json.forEach(element => {
        console.log(element);
      });
    });
  }

  consultarAPI();
```

## Fetch API con Async/Await (33.js)
El await se encarga de bloquear el codigo, en lo que hacemos la llamada a la API el await previene que la linea de codigo siguiente no se ejecute, la deteiene hasta que tenga un resultado. Una vez que la respuesta esta completa pasa a la siguiente linea de codigo. Siempre que tengamos un await debemos tener la funcion padre definida como async.

```js
  const url = 'https://jsonplaceholder.typicode.com/comments';
  const consultarAPI = async () => {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    json.forEach(element => {
      console.log(element);
    });
  }
  consultarAPI();
```

### Multiples Async/Await y Performance (34.js)
Al hacer multiples consultas por separados tenemos un gran problema de performance ya que estamos bloqueando el codigo hasta tener la respuesta de la primera consulta, luego la segunda y asi sucesivamente. Para solucionarlo podemos utilizar una sola funcion con una promesa, esta promesa se resuelve cuando todas las consultas estan completas.

```js
  const url = 'https://jsonplaceholder.typicode.com/comments';
  const url2 = 'https://jsonplaceholder.typicode.com/photos';

  const consultarAPI = async () => {
    const [respuesta1, respuesta2] = await Promise.all([ fetch(url), fetch(url2) ]);
    const [json1, json2] = await Promise.all([ respuesta1.json(), respuesta2.json() ]);
    console.log(json1);
    console.log(json2);
  }

  consultarAPI();
```

## Template Strings (35.js)
```js
  const producto = {
    nombre: 'Tablet de 12 Pulgadas',
    precio: 300,
    disponible: true,
    marca: 'Orange'
  }

  function textoFuncion() {
    return 'Este texto viene de la funcion';
  }

  const { nombre, precio, marca } = producto
  console.log(`Nombre: ${nombre} - Precio: ${precio} - Marca: ${marca} - ${textoFuncion()}`);
```