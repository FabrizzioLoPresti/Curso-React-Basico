# Administrador de Pacientes con React.js, Vite, Tailwind CSS y LocalStorage
- Operadores Logicos (&&,??, Ternarios, pacientes && pacientes.length)
- Sintaxis de Eventos
- Llamado de Funciones
- Renderizado de React

## Creacion del Proyecto
1. Creacion del Proyecto React utilizando VIte por consola (dentro de la carpeta del proyecto): `npm init vite@latest`
2. Luego de creada la carpeta del Proyecto React con Vite instalar las dependencias (dentro de la carpeta del proyecto): `npm install`
3. Correr el modo de desarrollo del proyecto: `npm run dev`

## Estructura Basica de un Proyecto de Vite
En la carpeta de `src` se colocan todos los Componentes de React, Modulos de CSS, Funciones Helpers y los archivos de imagenes, etc.

El Componente `App.jsx` es el Componente Principal del Proyecto, es el que se renderiza en el navegador. De el podemos eliminar el `import './App.css'` junto al archivo CSS, tambien el `import reactLogo from './assets/react.svg'` junto con el archivo de imagen.

El archivo `main.jsx` es el archivo que se renderiza en el navegador, el cual contiene el Componente `App.jsx` el cual lo va a inyectar en el archivo HTML buscando el elemento con ID="root" que se encuentra en el archivo `index.html` y el archivo CSS (`index.css`).

En el archivo `index.html` se coloca el archivo `main.jsx` y el archivo CSS (`index.css`) el cual se inserta en el archivo `index.html` por medio de un `<script>` y `<link>` respectivamente.

En el archivo .gitignore se colocan todos los archivos que no se quieran subir al repositorio de GitHub.

En el archivo `package-lock.json` se colocan todas las dependencias que se instalaron en el proyecto, por ejemplo las dependencias que necesitan react y react-dom para funcionar.

En el archivo `package.json` se colocan todas las dependencias que se instalaron en el proyecto por parte nuestra con `npm i ...`, junto con sus versiones, comandos para ejecutar, configuracion del proyecto, etc.

En el archivo `vite.config.js` se colocan todas las configuraciones del proyecto, como el nombre del proyecto, el nombre del archivo de salida, plugins de Vite, etc.

En la carpeta `node_modules` se colocan todas las dependencias que se instalaron en el proyecto.

## ¿Qué es JSX?
JSX son las iniciales de JavaScript Syntax Extension, es una extensión de JavaScript que permite crear Componentes de React.

Es una Extension del Lenguaje de Programación JavaScript, desarrollada por Facebook para React, que permite crear Componentes de React.

Parece codigo de JavaScript pero muestra codigo de HTML, y basicamente es un lenguaje de Template que muestra el HTML pero tiene todas las funciones de JavaScript.

Una vez compilado (creacion del **bundle** del proyecto) son archivos de JavaScript con funciones y objetos.

### Reglas en JSX
1. A diferencia de HTML, que no es estricto, en JSX si un elemento HTML tiene una etiqueta de apertura, deberas tener tambien una etiqueta de cierre.
2. Las etiquetas de solo apertura como `<link> <img> <input>` deberan finalizar con `/>` y no con `>`.
3. Cada Componente debe tener un `return`.
4. Dentro de cada `return` debe haber maximo un solo elemento en el nivel maximo.

Respecto al punto final para no estar retornando tantos `div` React permite el uso de `Fragments` para retornar un solo elemento sin la necesidad de utilizar divs y generar codigo HTML de mas, se utilizan de la siguiente manera:
```jsx
  <>
    <h1>Hola Mundo</h1>
  </>
```

## JavaScript en HTML con JSX
Los Componentes en React se dividen en dos partes:
1. Lo que se encuentra antes del Return en el Componente, donde podemos escribir el codigo de JavaScript como Funciones para Convertir datos, validarlos, etc.
2. Lo que se encuentra dentro del Return en el Componente, donde podemos escribir el codigo de HTML o **Expressions o Expresiones de JavaScript** que son las que usualmente tienen un operador, ternario, metodos para Strings, etc. mediante el uso de `{  }`. Unicamente admite el uso de Expresiones, no de sentencias como If, For, Funciones, etc.

Por ejemplo:
```jsx
  function App() {

    const sumar = () => {
      console.log('Sumar');
    }
    sumar();
    const edad = 18;

    return (
      <div className="App">
        {1 + 1}
        {edad >= 18 ? 'Mayor de Edad' : 'Menor de Edad'}
        {'Hola Mundo'.toUpperCase()}
        <h1>{edad}</h1>
        <h1>Hola Mundo</h1>
      </div>
    )
  }

  export default App
```

## Creando un Componente y Llamandolo
Dentro de la carpeta `src` crear una Carpeta Nueva con el nombre de `components` donde vamos a crear el Componente `Header.jsx` y `Formulario.jsx`, los Componentes deben ser nombrados siempre con la Primer Letra en Mayuscula, tanto el archivo como el nombre del componente.

Para crear el Componente `Header.jsx` podemos hacer uso de los Snippets provenientes de las extensiones de VSCode que mediante `rafce` (nos crea el componente con la estructura de Function Expression) o `rfce` (nos crea el componente con la estructura de Function Declaration) nos permite crear la estructura basica del Componente de forma automatica. Tambien haciendo uso de la Opcion `auto-import` podemos importar los Componentes que necesitemos, se encuentra en Ctrl+Shift+P.

Funciona de la Siguiente Manera:
```jsx
  // En el App.jsx
  import Header from "./components/Header"

  function App() {

    return (
      <div className="App">
        <Header />
      </div>
    )
  }

  export default App

  // En el Header.jsx
  import React from 'react'

  const Header = () => {
    return (
      <div>Desde Header</div>
    )
  }

  export default Header;
```

## React Developer Tools
React Developer Tools es una extension que nos permite ver el codigo de JavaScript que se esta ejecutando en el navegador, es una herramienta que se encuentra en Navegadores como Firefox Developer Edition, Chrome, etc.

En las pestaña Inspeccionar del Navegador donde se encuentra la Consola, Network, etc. aparece la extension de React Developer Tools donde tenemos dos pestañas:
1. Profiler -> Nos permite medir el desempeño de un Componente.
2. Components -> Nos permite ver los diferentes Components, con sus diferentes Props y Hooks.

## Formas de Escribir Codigo CSS en React
1. CSS Planmo -> Agregar el CSS de toda la Aplicacion en los Archivos de App.css y de index.css.
2. Framework CSS -> Utilizar un Framework CSS como Tailwind CSS, Bootstrap, Materialize, etc. mediante el `<link>` en el index.html o mediante instalacion de una dependencia en el proyecto haciendo uso de `npm install --save-dev tailwindcss`.
3. Modulos CSS -> Es una forma mas propia de React
4. Por medio de Componentes
5. SASS
6. Styled Components -> Se escribe el Codigo CSS de Cada Componente en el mismo archivo del Componente

## Instalacion de Tailwind CSS
Para utilizar Tailwind CSS lo vamos a instalar como Dependencia en el Proyecto mediante: `npm install --save-dev tailwindcss` para instalarlo como dependencia de desarrollo unicamente. Tambien instalar PostCSS y AutoPrefixer para que se pueda utilizar el CSS en los navegadores que no soportan las nuevas versiones de CSS y tener un correcto funcionamiento de los CSS.

En Consola ejecutamos: `npm i -D tailwindcss postcss autoprefixer`

Tambien necesitamos el archivo de Configuracion de Tailwind CSS y un archivo de Configuarcion de PostCSS y AutoPrefixer:

Para el archivo de Configuracion de Tailwind CSS y PostCSS colocamos en consola: `npx tailwindcss init -p`

Luego en el `index.css` (archivo que se importa en el `main.jsx`) vamos a agregar algunas directivas de TailwindCSS:
```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
```

En el archivo de `tailwind.config.js` en la seccion de `content` vamos a colocar que archivos son a los que les vamos a estar agregando el codigo de CSS.
```js
  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
      "./index.html",
      "./src/**/*.jsx",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
```

## ¿Que son los React Hooks?
Los **Hooks** son basicamente la base de React, es el tema mas importante que se debe dominar para convertirse en un desarrollador de React.

React cuenta con una API muy sencilla que te permite crear todo tipo de aplicaciones por medio de algo llamado Hooks.

Los Hooks estan disponibles desde la version 16.8, previo a ello se tenian que crear **classes** para crear y modificar el State, con los Hooks no es necesario.

Los Hooks son funciones que te permiten “enganchar” el estado de React y el ciclo de vida desde componentes de función.

El ciclo de vida se puede dividir en 3 fases, el montado, actualización y desmontado del componente. Estas fases a su vez se dividen en varios métodos que puede tener el componente. Tip: Cada método tiene un prefijo will o did dependiendo de si ocurren antes o después de cierta acción.

Los Hooks se dividen en Basicos y en Adicionales.

### Categorias de Hooks
1. Basicos
    1. useState -> Hook que nos permite crear un State.
    2. useEffect -> Hook que nos permite ejecutar una funcion cuando el State cambia.
    3. useContext -> Hook que nos permite acceder al Context.
2. Adicionales
    1. useReducer -> Hook que nos permite crear un Reducer.
    2. useCallback -> Hook que se encarga de memorizar las funciones y de que no se rerenderizen al montarse los components. Es muy útil cuando se transfieren funciones a componentes hijos. La función useCallback acepta dos argumentos y retorna una función.
    3. useMemo -> Hook que sirve para memorizar el valor que devuelve una función. La función useMemo acepta dos argumentos y retorna un valor.
    4. useRef -> Hook que nos permite crear una referencia.
    5. useLayoutEffect -> Hook que nos permite ejecutar una funcion cuando el Componente se renderiza.
    6. useDebugValue -> Hook que nos permite crear un valor para la consola.
    7. useImperativeHandle -> Hook que personaliza el valor de instancia que se expone a los componentes padres cuando se usa ref . Como siempre, el código imperativo que usa refs debe evitarse en la mayoría de los casos.
    
**Tambien es posible crear nuestros propios Hooks**, de esta forma podras separar tu codigo en funciones re-utilizables y sacar todo el beneficio de lo que React ofrece.

## ¿Que es el State en React?
El State o Estado es basicamente eso, cual es el estado de nuestra aplicacion o componente. Ej: si tenemos un carrito de compras cual es el estado del mismo, tiene elementos, esta vacio, que elementos tiene ese carrito de compras. Si estamos descargando un listado de clientes, ya lo descargue o esta vacio o que es lo que paso.

El State es una variable con informacion relevante en nuestra aplicacion de React, algunas veces el State pertenece a un Componente en especifico o algunas veces deseas compartirlo a lo largo de diferentes componentes creandolo de Forma Global en el App.jsx y pasandolo a los diferentes componentes.

La variable State se crea con la funcion de useState, la cual nos permite crear un State.

Un State se crea de la siguiente forma:

```js
  import React, { useState } from 'react';
  const [state, setState] = useState(initialState);
  const [cliente, setCliente] = useState({});
  const [total, setTotal] = useState(0);
  const [clientes, setClientes] = useState([]);
  const [modal, setModal] = useState(false);
```

Con esta sintaxis estamos extrayendo el State (variable) y el SetState (funcion) de la funcion useState mediante Array Destructuring.

- useState() -> Funcion que nos permite crear un State.
- cliente -> Variable que contiene el valor del State.
- setCliente -> Modificador que es la funcion que nos permite modificar el State. Unicamente puede modificar esa variable y no puede modificar otros estados.
- {} -> Valor inicial del State, en este caso el estado inicial es un objeto vacio.

Se pueden tener multiples useState dentro del mismo Componente.

## React reacciona en Base al State
Cada vez que el State cambia, tu aplicacion de React se va a renderizar de nuevo y actualizarse en base a esos cambios.

Para modificar el State se utiliza la funcion de setState() que extraemos cuando declaramos el State en nuestro componente.

## Reglas de los Hooks
- Los Hooks se deben colocar en la parte superior de los Componentes de React antes del return y tambien antes de otras funciones.
- No se pueden colocar dentro de condicionales, tampoco despues de un return.

## Leyendo la Informacion escrita en un Input y colocandola en el State
Lo que demos hacer para leer la informacion escrita en el Input es primero crear un State donde la vamos a almacenar, segundo pasar el valor inicial del State al Input donde queremos leer por medio del value y almacenar el valor y tercero debemos utilizar el evento onChange proporcionado por React que nos permite ver que escribe en tiempo real el usuario dentro del Input, de esta forma a medida que el Usuario escribe en el Input estos valores se pasan por parametro mediante la funcion setNombre que le asigna el valor de lo que escribio el Usuario a la variable del State nombre y de esta forma al mismo tiempo dicho valor se muestra dentro del Input ya que el value que tiene asignado es igual al valor de la variable Nombre, por ende a medida que se modifica con lo que escribe el usuario, dicho valor se actualiza y por medio del value se muestra dentro del Input, esto se debe a que React renderiza de nuevo el componente cada vez que se modifica el State del mismo.

Es decir nombre='' comienza como vacio, es por esto que en el Input no hay nada y por mas que escribamos no vamos a ver nada pq tiene definido un value=''. Por lo que debemos utilizar el evento onChange proporcionado por React para poder tomar en tiempo real lo que el Usuario escribe dentro del Input. Se toma el valor de lo que el Usuario escribe y se lo asigna a la variable nombre='' de nuestro State por medio de su funcion de setNombre() logrando asi que la variable nombre pase a tener como valor lo que escribio el Usuario quedando asi: nombre='Juan'. Debido al funcionamiento de React que se rerenderiza al modificarse un State dentro de un Componente, al modificarse el State de la Variable Nombre este se rerenderiza y asigna como value en el Input el nuevo valor de la variable nombre y de esta forma el Usuario puede visualizarlo en pantalla.

1. La Variable Nombre inicializa como nombre=''
2. Este valor vacio se asigna al value={nombre} de nuestro Input que quedaria como value=''
3. El Evento `onChange={e => setNombre(e.target.value)}` de React detecta los cambios en el Input en tiempo Real cuando el Usuario escribe y el valor de lo que el usuario escribe se lo asigna por medio de la funcion `setNombre()` a la Variable nombre del State cambiando su valor por lo que el usuario escribio
4. React detecta cambios en el State de la Variable nombre y rerenderiza el Componente para que se vea el cambio en el Input, debido a que la variable nombre tiene como valor lo que escribio el usuario tal como nombre='Juan'
5. Al modificarse el State de la Variable nombre, el valor de nombre='Juan' se asigna al value={nombre} de nuestro Input y se muestra en pantalla como value='Juan'
```jsx
  const [nombre, setNombre] = useState('');
  <input 
    type="text" 
    name="mascota" 
    id="mascota" 
    placeholder='Nombre de la mascota'
    value={nombre}
    onChange={e => setNombre(e.target.value)}
  />
```

## Eventos y Sintaxis de React
- La forma en que React maneja los eventos es muy similar a como lo hace JavaScript de forma nativa con algunos cambios.
- Los eventos son CamelCase, es decir en lugar de onchange se utiliza onChange, en lugar de onclick se utiliza onClick, etc.
- Tambien a diferencia de JS y HTML, donde se coloca el nombre de la funcion en un String, en React (JSX) se utiliza la sintaxis de funciones, es decir:
```jsx
  <button onClick={() => alert('Hola')}>Hola</button>
```

Eventos:
1. onClick -> Evento que se dispara cuando el usuario hace click en el elemento.
2. onChange -> Evento que se dispara cuando el usuario escribe dentro del Input.
3. onSubmit -> Evento que se dispara cuando el usuario hace click en el boton de Enviar.
4. onMouseEnter -> Evento que se dispara cuando el usuario pasa el mouse sobre el elemento.
5. onMouseLeave -> Evento que se dispara cuando el usuario deja el mouse sobre el elemento.
6. onMouseOver -> Evento que se dispara cuando el usuario pasa el mouse sobre el elemento.
7. onMouseOut -> Evento que se dispara cuando el usuario deja el mouse sobre el elemento.
8. onFocus -> Evento que se dispara cuando el usuario pone el foco en el elemento.
9. onBlur -> Evento que se dispara cuando el usuario quita el foco del elemento.
10. onChange -> Evento que se dispara cuando el usuario cambia el valor del elemento.
11. onKeyDown -> Evento que se dispara cuando el usuario presiona una tecla.
12. onKeyUp -> Evento que se dispara cuando el usuario suelta una tecla.
13. onKeyPress -> Evento que se dispara cuando el usuario presiona una tecla.
14. onDrag -> Evento que se dispara cuando el usuario arrastra el elemento.
15. onDragStart -> Evento que se dispara cuando el usuario arrastra el elemento.
16. onDragEnd -> Evento que se dispara cuando el usuario suelta el elemento.
17. onDragEnter -> Evento que se dispara cuando el usuario pasa el mouse sobre el elemento.
18. onDragLeave -> Evento que se dispara cuando el usuario deja el mouse sobre el elemento.
19. onDragOver -> Evento que se dispara cuando el usuario pasa el mouse sobre el elemento.
20. onDrop -> Evento que se dispara cuando el usuario suelta el elemento.
21. onScroll -> Evento que se dispara cuando el usuario hace scroll en el elemento.
22. onWheel -> Evento que se dispara cuando el usuario hace scroll en el elemento.
23. onCopy -> Evento que se dispara cuando el usuario copia el elemento.
24. onCut -> Evento que se dispara cuando el usuario corta el elemento.
25. onPaste -> Evento que se dispara cuando el usuario pega el elemento.
26. onTouchCancel -> Evento que se dispara cuando el usuario cancela el toque.
27. onTouchEnd -> Evento que se dispara cuando el usuario suelta el toque.
28. onTouchMove -> Evento que se dispara cuando el usuario mueve el toque.
29. onTouchStart -> Evento que se dispara cuando el usuario toca el elemento.
30. onPointerCancel -> Evento que se dispara cuando el usuario cancela el puntero.
31. onPointerDown -> Evento que se dispara cuando el usuario presiona el puntero.
32. onPointerEnter -> Evento que se dispara cuando el usuario pasa el puntero sobre el elemento.
33. onPointerLeave -> Evento que se dispara cuando el usuario deja el puntero sobre el elemento.
34. onPointerMove -> Evento que se dispara cuando el usuario mueve el puntero.
35. onPointerOut -> Evento que se dispara cuando el usuario sale del elemento.
36. onPointerOver -> Evento que se dispara cuando el usuario pasa el puntero sobre el elemento.
37. onPointerUp -> Evento que se dispara cuando el usuario suelta el puntero.
38. onGotPointerCapture -> Evento que se dispara cuando el usuario captura el puntero.
39. onLostPointerCapture -> Evento que se dispara cuando el usuario pierde el puntero.
40. onTransitionEnd -> Evento que se dispara cuando el elemento termina de transicionar.
41. onAnimationStart -> Evento que se dispara cuando la animacion comienza.
42. onAnimationEnd -> Evento que se dispara cuando la animacion termina.
43. onAnimationIteration -> Evento que se dispara cuando la animacion se repite.
44. onAnimationCancel -> Evento que se dispara cuando la animacion se cancela.
45. onTransitionStart -> Evento que se dispara cuando la transicion comienza.
46. onTransitionCancel -> Evento que se dispara cuando la transicion se cancela.

### Sintaxis
```jsx
  <button onClick={descargarPedidos()}>Descargar Pedidos</button>

  <form onSubmit={handleSubmit}>
    <button type="submit"> Agregar Cliente</button>
  </form>

  <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} />
```

## Mostrar un Mensaje de Error
Para mostrar un Mensaje de error primero debemos crear un nuevo State con la Variable de Error en false.
```jsx
  const [error, setError] = useState(false);
```

Posteriormente en la validacion del Formulario cambiarlo a True, para que al momento de cambiar de valor la Variable error del State esto provoque una rerenderizacion, donde dependeiendo del valor vamos a mostrar una ALerta o no en el HTML.
```jsx
  const handleSubmit = e => {
    e.preventDefault();
    if ([nombre.trim(), apellido.trim()].includes('')) {
      setError(true);
      return;
    }
    setError(false);
  }
```

Por ultimo mostrar Alerta en el HTML en base a la Variable error mediante un Ternario:
```jsx
  {error ? 'Todos los campos son obligatorios' : null}
```
Otra opcion es, donde si error vale True entonces muestra el Mensaje, de caso contrario no muestra nada:
```jsx
  {error && 'Todos los campos son obligatorios'}
```

Tambien podemos crear un Nuevo Componente Alerta:
```jsx
  {error && <Alerta />}
```

Operadores Logicos: [link](https://es.javascript.info/logical-operators)

Funcionamiento del Operador ?: [link](https://www.freecodecamp.org/espanol/news/como-funciona-el-operado-de-signo-de-interrogacion-javascript/)

Debido a que si este valor de la Variable del State cambia React rerenderiza la App y podemos lograr que, si el valor vuelve esta en True muestre una alerta dentro del HTML y si el valor de la Variable error cambia a False la Aplicacion se rerenderiza pero esta vez sin mostrar nada en el HTML.

## Pasando Informacion entre Componentes con Props
Los Props son una forma de pasar Variables o Funciones de un Componente a otro.
- El State o Funciones que crees en tus Componentes, solo estaran disponibles en ese Componente.
- Una forma de evitar duplicar codigo y reutilizar esas Variables, State o Estado y Funciones en otros Componentes es por medio de Props o Propieades.
- Los Props se pasan del padre al hijo, nunca se pueden pasar del hijo al padre.

Debido a que los Props se pasan del Padre al Hijo, lo mejor es que si tienes un State que se va a pasar por diferentes Componentes, lo mejor es colocarlo en el Archivo Principal (App.jsx).

Cada Nivel de Componentes debera tomar y pasar el Prop hacia otros Componentes, tecnologias como **Redux**, **Redux Toolkit**, o **Context API** evitan tener que hacerlo de esta forma.

En el Componente Principal de App.jsx creamos un Arreglo de Pacientes que se encargue de almacenar los pacientes. Se crea en el Componente Principal de App.jsx para facilitar el traspaso del arreglo a lo largo de los diferentes componentes, al igual que la funcion de setPacientes y otras funciones para poder agregar nuevos pacientes, eliminar pacientes, etc.

En App.jsx
```jsx
  const [pacientes, setPacientes] = useState([]);

  // Para pasar un Valor del Hijo al Padre
  const toma1Valor = (valor) => {
    console.log(valor);
  }
```

### Sintaxis de los Props
Pasar Datos al Componente:
```jsx
  <Componente 
    nombreProp={Datos o Funciones}
    pacientes={pacientes}
    admin={true}
    setPacientes={setPacientes}
    titulo="Titulo del Componente"
    toma1Valor={toma1Valor}
  />
```
Recibir Datos en el Componente:
```jsx
  const Componente = ({nombreProp, pacientes, admin, setPacientes, titulo, toma1Valor}) => {
    const variable = true;
    tomar1Valor(variable);

    return (
      
    );
  }
```
O:
```jsx
  const Componente = (props) => {
    const {nombreProp, pacientes, admin, setPacientes, titulo} = props;
    return (
      
    );
  }
```

## Añadiendo Pacientes al State Principal y Reiniciando Formularios
En Archios de App.jsx y Formulario.jsx se pasan desde App.jsx por medio de Props a Formulario.jsx el Arreglo de Pacientes y la Funcion de setPacientes() para poder agregar nuevos pacientes creando primero un Objeto con todos los datos del paciente, y posteriormente guardarlo en el Arreglo de Pacientes del App.jsx tomando primero una copia del contenido anterior del Arreglo y agregando al Final del Mismo el nuevo Objeto Paciente. Ademas se reinicia el Formulario para que el usuario pueda ingresar otro Paciente.

Ademas **CADA VEZ QUE SE MODIFICA EL STATE DE LA VARIABLE PACIENTES** al agregar un nuevo paciente se rerenderiza la Aplicacion debido a que se produjo un cambio en un State y esto hace que ademas de provocar una rerenderizacion de la aplicacion se pase por medio de Props nuevamente el Arreglo actualizado con el Nuevo Objeto al Componente de Formulario, por lo que es importante que el Arreglo de Pacientes no se modifique directamente, sino que se modifique mediante la Funcion setPacientes() que se encuentra en el App.jsx y no mediante metodos de asignacion como .push().

## El Prop {children}
El Componente en vez de recibir Props va a tomar {children}, la cual es una palabra Reservada de React, al igual que props.

Children toma todo lo que enviemos al Componente y lo inserta dentro del mismo, tanto funciones como codigo HTML.

En el Componente que contiene el {children} se puede usar para insertar codigo HTML o funciones.
```jsx
  const Componente = ({children}) => {
    return (
      <div>
        {children}
      </div>
    );
  }
```

El Componente que envia datos al Componente que contiene el {children}:
```jsx
  {error && <Componente><p>Todos los campos son obligatorios</p></Componente>}
```

## Iterando sobre un Array en React
El mas utilizado de todos los iteradores es .map() ya que sirve para iterar en un arreglo pero tambien te retorna uno nuevo. Como estamos dentro de un `return` del Componente queremos que lo retorne en pantalla. Si utilizamos un ForEach no va a funcionar, no va a mostrar nada en pantalla porque no se va a retornar nada.

```jsx
  const Componente = ({pacientes}) => {
    **return** (
      <div>
        {pacientes.map((paciente, index) => {
          return <p key={index}>{paciente.nombre}</p>
        })}
      </div>
    );
  }
```

Tambien debemos recordar que este Listado de Pacientes se va a actualizar de manera automatica al ejecutar una accion sobre el State de la Variable del Arreglo de Pacientes, ya que al producirse un cambio en un State React rerenderiza la aplicacion de modo que se vuelve a pasar el Arreglo actualizado por todos los Componentes y al modificarse se rerenderiza el Componente con los nuevos cambios.

Explicacion: [link](https://geekflare.com/es/react-rendering/)

Si un componente padre en React cambia (digamos, porque su estado o accesorios cambiaron), React recorre todo el árbol por este elemento padre y vuelve a renderizar todos los componentes. Si su aplicación tiene muchos componentes anidados y muchas interacciones, sin saberlo, está sufriendo un gran impacto en el rendimiento cada vez que cambia el componente principal (asumiendo que es solo el componente principal que desea cambiar).

La función Context de React parece ser la herramienta de administración de estado favorita de todos (algo para lo que no fue construida en absoluto). Todo es muy conveniente: simplemente envuelva el componente superior en el proveedor de contexto, ¡y el resto es muy sencillo! La mayoría de las aplicaciones de React se están construyendo así, pero si ha leído este artículo hasta ahora, probablemente haya detectado lo que está mal. Sí, cada vez que se actualiza el objeto de contexto, desencadena una nueva representación masiva de todos los componentes del árbol.
La mayoría de las aplicaciones no tienen conciencia de rendimiento, por lo que nadie se da cuenta, pero como se dijo antes, tales descuidos pueden ser muy costosos en aplicaciones de alto volumen y alta interacción.

Aquellos que aman el mundo rápido y sucio de Context tienden a odiar **Redux**, pero esta cosa es muy popular por buenas razones. Y una de estas razones es el rendimiento: el connect() La función en Redux es mágica ya que (casi siempre) representa correctamente solo aquellos componentes según sea necesario. Sí, simplemente siga la arquitectura estándar de Redux y el rendimiento es gratis. No es una exageración en absoluto que si adopta la arquitectura Redux, evita la mayoría de los problemas de rendimiento (y otros) de inmediato.

Utilizar memo() para evitar la renderizacion excesiva de un Componente cada vez que se actualizan sus State. Debido al funcionamiento de React cada vez que se modifica el State de un Componente este se rerenderiza, por lo tanto si tenemos un boton que cuenta clicks mediante una Variable definida con useState() el Componente se va a renderizar nuevamente por cada click ya que se modifica el State de la Variable provocando que se rerenderice el Componente. Con memo() el Componente se renderiza solo una vez y no se rerenderiza mas de una vez, unicamente cuando se crea.
```jsx
  const Componente = memo(({pacientes}) => {
    return (
      <div>
        {pacientes.map((paciente, index) => {
          return (
            <p key={index}>{paciente.nombre}</p>
            <Paciente key={index} paciente={paciente}>
          );
        })}
      </div>
    );
  }
```

Por ej:
- Agrego nuevo paciente al State de Pacientes
- React detecta un cambio en el State de la Variable de Pacientes y Rerenderiza el Componente de App
- Esto provoca que el Arreglo actualizado se pase por medio de Props al Componente de Formulario y se actualiza el Listado de Pacientes debido a que se produce un cambio en el Estado de los Componentes.
- Este cambio provoca una rerenderizacion del Componente de Formulario y se actualiza el Listado de Pacientes rerenderizandose y mostrando los nuevos pacientes

## Generar un ID unico para cada Paciente
Si bien generar un ID con el index del metodo .map() genera un ID unico es una de las malas practicas de React, debido a que si ese Arreglo se modifica eliminando o agregando un elemento el recalculo que se hace a la hora de generar un nuevo arreglo cuesta mucho en performance en React.

```jsx
  {pacientes.map((paciente, index) => 
    // Return Implicito -> una unica linea de codigo
    <Paciente 
      key={index} 
      paciente={paciente} 
    />
  )}
```

Podemos utilizar el Hook de useId(), pero se han encontrado multiples problemas con respecto al mismo.
```jsx
  const Componente = ({pacientes}) => {
    const id = useId();
    return (
      <div>
        {pacientes.map(paciente => {
          return (
            <p key={id}>{paciente.nombre}</p>
            <Paciente key={id} paciente={paciente}>
          );
        })}
      </div>
    );
  }
```

Tambien podemos generar nuestro propio Metodo en Formulario.jsx para la creacion de IDs de cada Paciente que se crea:
```jsx
  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validacion de Formulario
    if([nombre.trim(), propietario.trim(), email.trim(), fechaAlta, sintomas.trim()].includes('')) {
      setError(true);
      return;
    }

    setError(false);
    
    // Objeto de Paciente
    const paciente = {
      nombre,
      propietario,
      email,
      fechaAlta,
      sintomas,
      id: generarId()
    }
    setPacientes([...pacientes, paciente]);
    limpiarForm();
  }
```

Dentro del Listado de Pacientes quedaria de la Siguiente Manera Utilizando el Id Creado:
```jsx
  {pacientes.map(paciente => 
    // Return Implicito -> una unica linea de codigo
    <Paciente 
      key={paciente.id} 
      paciente={paciente} 
    />
  )}
```

## Mostrar Textos de Forma Condicional en React
En el caso de que no haya pacientes mostramos un texto de "No hay pacientes" en el Listado de Pacientes. En caso contrario listamos los pacientes cargados.

**Utilizacion de Operadores logicos para estos casos o para asignacion de valor a constantes.** - > Operadores Logicos: [link](https://es.javascript.info/logical-operators)

Como por ejemplo: 
```jsx 
  const resultado = 10 > 5 && 10 > 20; // false
  const resultado = 10 > 5 ? 'Si' : 'No'; // Si
  pacientes && pacientes.length // pacientes tiene un valor y es mayor a 0 (0=false) -> true
```

```jsx
  const ListadoPacientes = ({pacientes}) => {

    return (
      <div>
        {pacientes && pacientes.length ? (
          <>
            <h2>Listado de Pacientes</h2>
            <p>
              Administra tus {''}
              <span></span>'>Pacientes y Citas</span>
            </p>

            {pacientes.map(paciente => 
              // Return Implicito -> una unica linea de codigo
              <Paciente 
                key={paciente.id} 
                paciente={paciente} 
              />
            )}
          </>
        ) : (
          <>
            <h2>No hay pacientes</h2>
            <p>
              Comienza agregando pacientes {''}
              <span>'>y apareceran aqui</span>
            </p>
          </>
        )}
        
      </div>
    )
  }
```

## Creando Botones de Editar y Eliminar
Agregar los Botones en el Componente de Paciente para que esten disponibles para cada uno de los Pacientes.

### Registrando un Evento en el Boton de Editar
Para poder Editar un Paciente necesitamos cargar el Objeto del Paciente al que le hicimos click en un Objeto Nuevo. 

Este Objeto lo vamos a crear en el App.jsx como un Nuevo State de modo que podamos enviar la funcion de setPaciente() al Listado de Pacientes y posteriormente enviarla al Componente de Paciente para cargarle los datos del Paciente sobre el que hicimos click mediante un Evento onClick() de React, de modo que al clickear en Editar se envie como parametro de setPaciente() el Objeto de Paciente que contiene el Componente de Paciente.jsx proviniente de la Iteracion de Pacientes en Listado de Pacientes. Cada Componente de Paciente.jsx tiene su propio paciente y su propio evento onClick() de forna que al apretar Editar solo se va a enviar el Objeto Paciente del paciente correspondiente a ese Componente. Esto de pasar de un Componente a otro hasta llegar a donde queremos (lo cual provoca problemas de Rendimiento debido a la renderizacion vistos mas arriba) se soluciona con Redux, Redux Toolkit o Context API.

Luego pasar el Objeto Paciente del State de App.jsx al Formulario.jsx para cargar los datos.

#### Llamado de Funciones
Se pueden llamar de la siguiente manera:
```jsx
  onClick={() => setPaciente(paciente)} // espera Evento de Click
  onClick={setPaciente(paciente)} // se ejecuta de forma automatica
  onClick={setPaciente} // espera Evento de Click
```

## El Hook useEffect()
Desde el App.jsx le vamos a pasar el Objeto de Paciente a Formulario.jsx para cargar los datos en el Formulario cuando el Objeto contenga algo.

Utilizamos el Hook useEffect() porque: cada vez que se ingresa un dato por teclado en el formulario se realiza una rerenderizacion debido a que estamos detectando en tiempo real (mediante el Evento onChange() de React) lo que el usuario ingresa por teclado y se almacena en los States correspondientes a medida que escribe, esto provoca que cambie el valor de la Variable del State cada vez que el usuario escribe en el Input produciendo multiples rerenderizaciones innecesarias, ya que carga el Componente Multiples Veces cada vez que se ingresa un dato por teclado.

Solucion a tantas rerenderizaciones innecesarias: [link](https://geekflare.com/es/react-rendering/)

React al notar un cambio en el State de la Variable Paciente de App.jsx se va a renderizar el Formulario.jsx y se va a cargar con los datos del Paciente que seleccionamos.

- El Hook useEffect es el Hook mas comun luego de useState.
- useEffect siempre es un callback (siempre voy a tener un Arrow Function dentro de el), que se ejecuta cuando un State cambia o cuando el Componente esta listo.

#### Usos de useEffect()
- Debido a que useEffect se ejecuta automaticamente cuando el Componente esta listo, es un excelente lugar para colocar codigo para consultar una API o LocalStorage.
- Debido a que le podemos pasar una dependencia y estar escuchando por los cambios que sucedan en el State de una Variable, puede actulizar el Componente cuando ese cambio suceda.

Sintaxis:
```jsx
  import React, { useEffect } from 'react';
  useEffect(() => {
    // codigo
  }, [variable]); // dependencia
```

Para verificar si el Componente esta listo (se ejecuta una unica vez cuando el Componente esta listo):
```jsx
  import React, { useEffect } from 'react';
  useEffect(() => {
    // codigo
  }, []); // dependencia
```

Para verificar cambio en el State de una Variable (se ejecuta cada vez que el State de la Variable cambie):
```jsx
  import React, { useEffect } from 'react';
  useEffect(() => {
    // codigo
  }, [variable]); // dependencia
```

## Colocando en el State el Paciente a Editar
Luego de detectar en Formulario.jsx si el Objeto de Paciente cambia o no al hacer click en editar, debemos validar dentro del mismo useEffect() que el Objeto tenga algo, debido a que se ejecuta una vez al detectar la creacion del objeto por lo tanto debemos validar que el Objeto tenga algo.

Procedemos luego de la validaciona llenar los campos del formulario mediante las funciones set de cada una de las variables, el Componente de Formulario.jsx al detectar los cambios en el State de las variables, se va a renderizar el Formulario.jsx y se va a cargar con los datos del Paciente que seleccionamos pasando los datos de las Variables como value a los Inputs.

1. Crear un nuevo State de Paciente en App.jsx para que se pueda editar donde vamos a almacenar el Objeto del Paciente a Editar para poder pasar la funcion de setPaciente() al Listado.jsx y luego a Paciente para agregarla al Boton y la Variable de Paciente a Formulario.jsx para cargar los datos del Objeto en los States de Formulario para que se muestren en pantalla.
2. Agregar evento onClick() en cada uno de los Pacientes (Componente Paciente.jsx) de modo que al hacer click en el Boton editar se ejecute la funcion setPaciente() de App.jsx y se cargue el Objeto del Paciente a Editar en el State de Paciente del App.jsx.
3. Desde el App.jsx pasar el Objeto Paciente del State de App.jsx al Formulario.jsx para cargar los datos.
4. Mediante el uso del Hook useEffect() verificar si el Objeto Paciente del State de App.jsx cambio o no al hacer click en editar, si cambio se va a renderizar el Formulario.jsx y se va a cargar con los datos del Paciente que seleccionamos, validando que el Objeto tenga algo.
5. Todo se renderiza automaticamente debido a los cambios que se producen en los States de las Variables, excepto el State de Paciente que renderiza el Formulario.jsx solo cuando cambio el valor del Objeto Paciente al hacer click en editar, el cual lo controlamos por medio de un useEffect() para renderizar el Componente de Fromulario solo cuando el Objeto Paciente del State de App.jsx cambie y tenga algo.

## Mostrando de Forma Condicional Textos en el Formulario
Para cambiar el Mensaje que se muestra en el Boton segun estemos Agregando un Paciente o Editando un Paciente mediante una Comprobacion muy sencilla utilizando el ID del Paciente en el Objeto Paciente que pasamos desde el App.jsx. Por lo tanto  si la Propiedad ID del Objeto Paciente existe es porque hay un Paciente cargado listo para editar en cambio si no hay paciente cargado es porque estamos creando un Nuevo Paciente.
```jsx
  value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
```

## Detectar un Registro Nuevo o una Edicion
Debemos solucionar la Problematica de que al Cargar el Paciente para Editar y hacer click en el Boton de Editar este nos crea un nuevo Paciente, por otro lado al querer editar el Primer Registro este no se carga en el Formulario.

Realizamos una Comprobacion nuevamente por `paciente.id` de modo que si existe esa propiedad en el Objeto Paciente pasado por Props es que estamos por Editar un Paciente, en caso contrario estamos agregando un Nuevo Paciente.

El ObjetoPaciente se crea sin ningun ID, para que en el caso de que el Objeto Paciente pasado por Props no tenga ningun ID, se creara uno nuevo. Y si el Objeto Paciente pasado por Props tiene un ID luego ese ID se lo agregamos al ObjetoPaciente para que se pueda editar.
```jsx
  // Objeto de Paciente construido con los States del Formulario
  const objetoPaciente = {
    nombre,
    propietario,
    email,
    fechaAlta,
    sintomas
  }

  if(paciente.id) {
    // Editando Registro
    objetoPaciente.id = paciente.id;
    const pacientesEditados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState);
    setPacientes(pacientesEditados);
    setPaciente({});
  } else {
    // Nuevo Registro
    objetoPaciente.id = generarId();
    setPacientes([...pacientes, objetoPaciente]);
  }
```

ObjetoPaciente se llena tomando los Valores que tienen las Variables del State definidas para el Componente de Formulario al momento de hacer click en el Boton y Ejecutar la funcion de handleSubmit() del Formulario.jsx. 

Posteriormente se verifica si `paciente.id` existe, donde `paciente` es el Objeto que se pasa por Props a Formulario el cual se encuetra como State en el App.jsx y se llena al hacer click en el Boton Editar del Componente Paciente.jsx de cada Paciente. Por lo tanto este Paciente ya existe y tiene su propia ID generado por eso validamos si tiene ID, y en caso de tener un ID es porque estamos editando debido a que en el ObjetoPaciente de la Funcion handleSubmit() no tenemos ID ya que se lo creamos luego si estamos creando un Nuevo Paciente. Luego de Verificar la existencia de un ID en el objeto `paciente` de Props debemos agregarle ese ID al `ObjetoPaciente` el cual en primera instancia ya se carga con todos los datos del State del Formulario, y luego le agregamos el ID.

El `ObjetoPaciente` tiene los nuevos valores ingresados en el Formulario que se almacenan en los distintos States. Mientras que el objeto `paciente` pasado por Props tiene los datos del Paciente que seleccionamos para editar, el cual fue creado anteriormente. Por lo que debemos recorrer el Arreglo de Pacientes mediante un .map() para generar un nuevo Arreglo de Pacientes donde nos retorne los Pacientes cuyo ID no coincida (cada uno de los `pacienteState` iterados del Arreglo de Pacientes) entre el `pacienteState` (cada uno de los Pacientes recorridos en el Arreglo de Pacientes) y `paciente` (paciente el cual vamos a editar y ya tiene un ID definida porque fue creada anteriormente al momento de crear el Paciente), y en el caso de encontrar coincidencia de ID nos retorne el `ObjetoPaciente` con los nuevos valores ingresados en el Formulario (incluido el ID que se lo agregamos en base al objeto `paciente` pasado por Props debido a que borramos la Propiedad al crear el `ObjetoPaciente` nuevamente). Luego dicho Arreglo de Pacientes se asigna al State de Pacientes, mediante la Funcion setPacientes().

Luego de Realizada la Edicion debemos limpiar de memoria el objeto `paciente` mediante la funcion `setPaciente({})` pasada por Props para resetear el Objeto de `paciente` que es el que queremos editar, para que no se quede en memoria y no se pueda editar el mismo Paciente dos veces. Debido a que este Objeto es el que usamos para agregar el paciente que vamos a Editar y por el cual validamos si hay un ID, el cual en caso afirmativo es porque vamos a Editar un Paciente y no agregar un Nuvo Paciente. Si no limpiamos de la memoria el objeto de `paciente` siempre vamos a tener cargado el ID del paciente que queriamos Editar y no vamos a poder agregar nuevos pacientes.

React al detectar el cambio en el State de Pacientes se renderiza automaticamente el Componente de Lista de Pacientes.jsx y se renderiza el Componente de Lista de Pacientes con los nuevos Pacientes cargados. Tambien el Texto Condicional del Boton se rerenderiza automaticamente al no detectar un `paciente.id` en el Objeto ya que lo limpiamos anterioremente y al rerenderizar el Componente de Lista de Pacientes se renderiza el Texto Condicional del Boton.

## Eliminar un Paciente
Para Eliminar un Paciente tenemos los Pacientes en el Arreglo en el App.jsx y el Boton de Eliminar se encuentra en el Paciente.jsx por lo que tenemos dos opciones:
- Pasar el State de Pacientes y la Funcion desde el App.jsx hasta el Componente de ListadoPacientes.jsx y luego pasarlo al Componente de Paciente.
- Pasar una Funcion desde el App.jsx que tome el ID al cual le estamos dando click en Paciente y eliminarlo desde el App.jsx.

Debemos pasar la Funcion desde el App.jsx, al ListadoPacientes.jsx y desde ahi al Componente de Paciente.jsx por medio de los Props, para agregarle dicha funcion al Evento onClick() del Boton de Eliminar para que al hacer click en el Boton se envie por medio de parametros el ID del Paciente que seleccionamos para eliminarlo. Este ID llega a la funcion del App.jsx y mediante el Array Method .filter() se filtra el Arreglo de Pacientes y nos retorna un Arreglo de Pacientes con los Pacientes que no tengan el ID que seleccionamos para eliminarlo, es decir Retorna todo aquel Objeto el cual su Id no coincida con la ID pasada por parametro a la funcion. Si el Id coincide no la retorna, solo retorna todos los elementos con Id distinto al pasado por parametro.

En el App.jsx:
```jsx
  const eliminarPaciente = id => {
    setPacientes(pacientes.filter(paciente => paciente.id !== id))
  }
  <ListadoPacientes 
    pacientes={pacientes}
    setPaciente={setPaciente}
    eliminarPaciente={eliminarPaciente}
  />
```

En el Paciente.jsx:
```jsx
  const handleEliminar = () => {
    const respuesta = confirm(`¿Estás seguro de eliminar a ${nombre}?`);
    if (respuesta) {
      eliminarPaciente(id);
    }
  }
  <button
    type="button"
    onClick={handleEliminar}
  >
    Eliminar
  </button>
```

Sin utilizar una Funcion Auxiliar:
```jsx
  <button
    type="button"
    onClick={() => eliminarPaciente(id)}
  >
    Eliminar
  </button>
```

Si eliminamos todos los Pacientes al modificar el State del Arreglos de Pacientes, React realiza rerenderizaciones de Modo que al detectar cambios se rerenderiza y si no hay elementos en el Arreglo se muestra de nuevo el Texto Condicional de 'No hay Pacientes' debido a que detecta un cambio en el State, se rerenderiza el Componente de ListadoPacientes.jsx, detecta que no hay elementos y muestra el Texto Condicional de 'No hay Pacientes'.

## Agregando LocalStorage para los Pacientes
Nos permite recargar la pagina sin perder los datos de nuestros States ya que estos se descargan del LocalStorage y se cargan automaticamente en los States. Esto provoco una Modificacion en los States lo cual causa una rerenderizacion de la App de forma automatica con todo el contenido.

En LocalStorage no se pueden guardar Arreglos, solo Strings.

Cada vez que haya cambios en el State del Arreglo de Pacientes o cuando el Componente de App.jsx este listo, vamos a estar escuchando por esos cambios mediante un useEffect() para que cada vez que ocurra un cambio almacenemos el Arreglo en el LocalStorage.

```jsx
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes]);
```
Este codigo se ejecuta cada vez que ocurra un cambio en el State de Pacientes o cuando el Componente de App.jsx este listo, por lo tanto al iniciar la Aplicacion tenemos el State del Arreglo de Pacientes vacio, por ende el useEffect al escuchar por cambios en el Arreglo de Pacientes o cuando el Componente esta listo, al iniciar la Aplicacio y detectar que el Compoenente esta lista se ejecuta, teniendo el State del Arreglo de Pacientes vacio, de modo que almacena en el LocalStorage el Arreglo de Pacientes vacio cada vez que recargamos la Aplicacion, sobreescribiendo el Arreglo de Pacientes que tengamos almacenado en el LocalStorage antes de recargar la Aplicacion.

## Finalizando la Funcionalidad de LocalStorage
Para solucionar el problema anterior creamos un segundo useEffect el cual se va a ejecutar una unica vez cuando el Componente este listo y este va a ser el encargado ed descargar los datos almacenados en el LocalStorage y cargarlos en el State del Arreglo de Pacientes. Lo cual de nuevo, al Producirse un cambio en el State del Arreglo de Pacientes se va a producir la rerenderizacion de todos los Componentes utilizando los datos cargados en el Arreglo de Pacientes, y a su vez el useEffect anterior al detectar un cambio en el State del Arreglo de Pacientes va a volver a sincronizar los datos en el LocalStorage.

El orden de los useEffect es importante, ya que el orden en el que los creas es el orden en el que se ejecutan.

La siguiente expresion evalua si la primera condicion es `null`, en caso afirmativo toma el segundo valor:
```jsx
  const listado = localStorage.getItem("pacientes") ?? []
```
Operadores Logicos: [link](https://es.javascript.info/logical-operators) - [link](https://es.javascript.info/nullish-coalescing-operator)

```
  Como este trata a null y a undefined de forma similar, usaremos un término especial para este artículo. Diremos que una expresión es “definida” cuando no es null ni undefined.

  El resultado de a ?? b:
  si a está “definida”, será a,
  si a no está “definida”, será b.

  Es decir, ?? devuelve el primer argumento cuando este no es null ni undefined. En caso contrario, devuelve el segundo.
```

Estructura con los useEffect:
```jsx
  useEffect(() => {
    const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? [];
    setPacientes(pacientesLS);
  }, []);

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);
```

En las ultimas versiones de React ya no es necesario crear un useEffect para obtener el valor del localStorage, sino que es suficiente con ponerlo en el useState:
```jsx
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem("pacientes")) ?? [])
  const [paciente, setPaciente] = useState({})

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);
```

## Deployment de un Proyecto en React
Existen diferentes plataformas:
- Netlify
- Vercel
- Heroku
- DigitalOcean
- Firebase
- Azure
- AWS

**Para poder llevar a cabo el build de nuestro proyecto debemos ejecutar en consola**: `npm run build`

### Deploy en Netlify por medio de Github
La ventaja de subirlo por medio de Github es que cualquier cambio en el Codigo que luego hagamos commit en el repositorio donde esta alojado el proyecto, se subira automaticamente a la pagina web de Netlify y se reflejaran los cambios en la pagina web de nuestro proyecto pudiendo mantener la sincronizacion de todo.

### Añadiendo Integracion Continua
Primero para hacer el Primer Commit y subida de archivos al Repositorio de Github debemos actulizar el Token de Autenticacion de Github para que pueda subir archivos al Repositorio. Podemos crear el archivo README.md con Informacion del Proyecto, el archivo .gitignore lo crea solo Vite.

Podemos crear el Repositorio en Github y clonarlo en nuestra computadora mediante el explorador de Github o la Consola de VSCode.

Utilizar los Comandos de Git para hacer los respectivos Commits y Subir los Archivos al Repositorio desde la consola:

```bash
  echo '# Proyecto de React' >> README.md
  git add .
  git commit -m "Primer Commit"
  git branch -M main
  git remote add origin https...
  git push -u origin master
```

Github nos permite clonar este repositorio en otras computadores, crear branches y y enviar tus pull reques para poder subir los cambios a la pagina web de Netlify mediante la sincronizacion de los cambios de los archivos con Github.

Lo primero que debemos hacer es NO enviar los Commits al branch principal (a no ser que sean proyectos pequeños y seamos los unicos propietarios) ya que en una Empresa no es aceptado hacerlo asi. Podemos hacerlo en un branch aparte y luego enviarlo al branch principal. Creamos un nuevo branch mediante (-b permite crear una nueva rama y cambiarla en automatico, nombre de la nueva rama y que el branch existente es main) creando una nueva rama y cambiando del branch principal a la nueva rama:
```bash
  git checkout -b nuevo-branch main
```

Luego de trabajar los cambios en ese branch:
```bash
  git add .
  git commit -m "Segundo Commit" -> Realizo el cambio en una rama diferente a la principal para que luego se pueda chekear los cambios y unirlos al branch principal o regrasar los cambios hacia atras.
  git merge nuevo-branch -> va a unir los cambios de la rama nuevo-branch al branch principal.
  git branch -d nuevo-branch -> Elimina la rama nuevo-branch.
  git push -u origin main -> va a subir los cambios al branch principal. 
```

Aprender Git con Bitbucket: [link](https://www.atlassian.com/es/git/tutorials/learn-git-with-bitbucket-cloud)