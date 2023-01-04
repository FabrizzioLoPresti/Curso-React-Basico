# Cotizador Criptomonedas - React.js, Custom Hooks, Styled Components, Consultar API Externa, Spinner de Carga, Formulario de Cotización

## Creando el Proyecto y Realizando algunos Ajustes
1. Creamos el Proyecto de React.js mediante Vite con: `npm init vite@latest`
2. Cambiar titulo dentro del index.html
3. Eliminamos el App.css
4. En el App.jsx eliminamos referencias al CSS y al Logo
5. Eliminar todo el Contenido del index.css y colocar `background-color: #0D2235;` en el body
6. Agregar las Fuentes de Google en el index.html
7. Agregar imagenes estaticas, hojas de estilos globales, etc. en la carpeta de assets

## ¿Que son los Styled Components?
Es un Enfoque diferente donde los Estilos de CSS se definen dentro de cada Componente en forma Independiente.

Para poder utilizarlos debemos instalar las dependencias correspondientes en nuestro proyecto mediante: `npm install @emotion/react @emotion/styled`.

En JSX podemos utilizar HTML con expresiones de JavaScript, pero tambien es posible crear un Elemento HTML con la sintaxis de un Componente y añadir Propiedades CSS.

En lugar de utilizar una Hoja de Estilos o una Libreria Externa (Tailwind CSS), se escribe el codigo CSS en cada Componente (CSS en JavaScript).

### Ventajas de los Styled Components
1. Al dejar de utilizar un Componente, podemos eliminar su codigo CSS tambien, a diferencia de una hoja de estilos global.
2. Sigues teniendo la ventaja de re-utilizar codigo de CSS.

## Sintaxis
Esto es igual a `<h1>Nuestros Productos</h1>` con los estilos correspondientes:
```jsx
  const Heading = styled.h1`
    font-size: 2rem;
    text-transform: uppercase;
  `;
  <Heading>Nuestros Productos</Heading>
```

Lo Primero que requerimos para utilizarlo es Importar la Libreria dentro del Componente:
```jsx
  import { useState } from 'react'
  import styled from '@emotion/styled'

  const Heading = styled.h1`
    font-family: 'Lato', sans-serif;
    color: #FFF;

  `
  function App() {
    return (
      <div className="App">
        <Heading>Desde App</Heading>
      </div>
    )
  }
  export default App
```

## Escribiendo el CSS de Nuestro Proyecto con Styled Components
No es necesario que todos los Componentes sean Styled Components, pero si es recomendable que los mas importantes lo sean o los que necesitan estilos. Pero un div para reacomodar elementos no es necesario que sea un Styled Component.
```jsx
  import { useState } from 'react'
  import styled from '@emotion/styled'
  import ImagenCrypto from './assets/img/imagen-criptos.png'
  const Contenedor = styled.div`
    max-width: 900px;
    margin: 0 auto;
    width: 90%;
    @media (min-width: 992px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 2rem;
      align-items: center;
    }
  `
  const Imagen = styled.img`
    max-width: 400px;
    width: 80%;
    margin: 100px auto 0 auto;
    display: block;
  `
  const Heading = styled.h1`
    font-family: 'Lato', sans-serif;
    color: #FFF;
    text-align: center;
    font-weight: 700;
    margin-top: 80px;
    margin-bottom: 50px;
    font-size: 34px;
    &::after {
      content: '';
      width: 100px;
      height: 6px;
      background-color: #66A2FE;
      display: block;
      margin: 10px auto 0 auto;
    }
  `
  function App() {
    return (
      <Contenedor className="App">
        <Imagen src={ImagenCrypto} alt="Imagen Crypto" />
        <div>
          <Heading>Desde App</Heading>
        </div>
      </Contenedor>
    )
  }
```

## Creando el Input de Formulario
Vamos a crear nuestro primer Componente por lo tanto dentro de la Carpeta `src` vamos a crear la Carpeta `components` y vamos a crear el Componente de Formulario.jsx. Este va a contener un input de tipo Submit para ejecutar el llamado a la API, y dos Campos de tipo Select, uno con los tipos de Monedas ya cargadas y otro con las Criptomonedas cargadas desde la API.
  ```jsx
  import styled from '@emotion/styled'
  const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition-property: background-color;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    &:hover {
      cursor: pointer;
      background-color: #7A7DFE;
    }
  `
  const Formulario = () => {
    return (
      <form>
        <InputSubmit type="submit" value="Cotizar" />
      </form>
    )
  }
```

Los Selects que nos faltan van a ser un Hook Propio que va a tener su propia apariencia, propios datos y sus propios estilos.

## Primeros pasos creando un Custom Hooks
Ambos Selects (el de seleccionar Moneda y el de seleccionar Criptomoneda) tienen su propio Select, les pasamos datos y generan ese Select y manejan el State una vez que seleccionas una opcion. Por lo tanto vamos a crear un Custom Hook para que nos ayude a crear estos Selects.

Crear Custom Hooks es como crear las Funciones Auxiliares en un Archivo Helper, pero con la ventaja de que podemos utilizar todo lo que nos Proporciona React (Hooks de UseState, UseEffect, etc.).

### Ventajas de crear tus propios Custom Hooks
- Algunas veces vas a desear crear tus propios Hooks, una de las razones de porque deseas crearlos es para poder re-utilizar una Funcion.
- Tambien puedes crear una Funcion Helper, pero existe otra gran Ventaja de Crear tus propios Hooks y es la de incorporar State (y todas las funciones de React) y mantener el valor de una Funcion de forma Persistente.
- Tu Codigo Personalizado tendra todas las ventajas de React como son: State, Effects, integrar otros Hooks y el Performance.
- Un Hook va a ser re-utilizable en cualquier Componente de React, otros proyectos y lugares de tu pagina.

### Crear tus Propios Custom Hooks
Dentro de la Carpeta de `src` vamos a crear una Nueva Carpeta llamada `hooks` donde vamos a crear nuestro Propio Custom Hook mediante un Archivo llamado `useSelectMonedas.jsx` (respetando siempre que comience el Nombre con use y en minusculas) y vamos a crear un Custom Hook para manejar el Select de Monedas.

Un Hook no retorna un Componente HTML, sino que retorna un Objeto o un Arreglo como el Hook de useState. Un Hook retorna un valor y una Funcion para actualizar ese valor.

En Formulario.jsx
```jsx
  import useSelectMonedas from '../hooks/useSelectMonedas'
  const Formulario = () => {
    const [SelectMonedas] = useSelectMonedas()
    SelectMonedas()
    return (
      <form>
        <InputSubmit type="submit" value="Cotizar" />
      </form>
    )
  }
```

En useSelectMonedas.jsx
```jsx
  const useSelectMonedas = () => {
    const SelectMonedas = () => {
      console.log('Desde SelectMonedas')
    }
    return [SelectMonedas]
  }
  export default useSelectMonedas
```

Este Custom Hook de useSelectMonedas NO retorna un Componente HTML, sino que retorna una Funcion (puede ser un State y un setState dentro de un Arreglo el cual luego dentro de un Componente como el de Formulario.jsx debe ser extraido mediante Destructuring de Arreglos para poder ser utilizado) como es el caso, que retorna la Funcion de SelectMonedas dentro de un Arreglo para ser ejecutada desde el Componente Formulario.jsx. 

Dentro de nuestro Custom Hook podemos llevar a cabo validaciones u otras Funciones con esos Datos (States), teniendo almacenado nuestro State y su Funcion de setState dentro del Custom Hook de useSelectMonedas. Luego podemos retornar el Resultado mediante el Arreglo y por medio de Array Destructuring podemos extraer el State y su Funcion de setState para poder utilizar estos resultados.

### Utilizando Nuestro Hook
Vamos a hacer que nuestro Custom Hook retorne un Componente de React para poderlo hacer visible en pantalla, el cual va a ser un Select (reutilizamos el mismo tanto para Monedas como para Criptomonedas) y vamos a pasarle los Datos que necesitamos para que se muestre en pantalla.

Ahora nuestro Custom Hook retorna un Componente de React de la siguiente manera: la Funcion de SelectMonedas es la que tiene un Return implicito el cual Retorna el Componente de React. Luego el Custom Hook useSelectMonedas retorna por medio de `return [SelectMonedas]` el Componente de React que es Retornado por la Funcion SelectMonedas, este Componente de React se encuentra en useSelectMonedas (`import useSelectMonedas from '../hooks/useSelectMonedas'`) al Importarlo en Formulario.jsx que es el Hook, por lo que ahora luego de realizar el Array Destructuring (`const [SelectMonedas] = useSelectMonedas()`) lo podemos utilizar en Formulario.jsx como un Componente de React a traves de `SelectMonedas` que contiene el Componente de React retornado por el Hook luego del Array Destructuring.

En Formulario.jsx
```jsx
  import useSelectMonedas from '../hooks/useSelectMonedas'
  const Formulario = () => {
    const [SelectMonedas] = useSelectMonedas()
    return (
      <form>
        <SelectMonedas />
        <InputSubmit type="submit" value="Cotizar" />
      </form>
    )
  }
```

En useSelectMonedas.jsx
```jsx
  const useSelectMonedas = () => {
    const SelectMonedas = () => (
      <>
        <label htmlFor="monedas">Select Monedas</label>
      </>
    )
    return [SelectMonedas]
  }
```

Al Custom Hook que acabamos de Crear le podemos Definir un Valor Inicial por medio de Parametros desde el Componente Formulario.jsx. 

Ademas esta manera permite la Reutilizacion debido a que a diferencia del Object Destructuring, el Array Destructuring nos permite extraer los Valores de un Arreglo pudiendo modificar el Nombre de la Funcion o Valor a extrar del Arreglo ya que los elementos del Arreglo se extraen segun el Orden en el que se encuentran. Por lo que el Nombre de la Funcion puede variar debido a que extrae segun el Orden y no Segun el ombre de la Funcion. De esta manera podemos utilizar el mismo Custom Hook de diferentes maneras pasandole diferentes Parametros. Esto como resultado nos va a dar diferentes Componentes de React debido a que por cada Parametro que le pasemos y por cada Funcion con Nombre Diferente que le pasemos va a retornar un Componente de React distinto. Cada uno con sus respectivas Propiedades y Variables.

En Formulario.jsx
```jsx
  const [SelectMonedas] = useSelectMonedas('Elige tu Moneda')
  const [SelectCriptoMonedas] = useSelectMonedas('Elige tu CriptoMoneda')
```

En useSelectMonedas.jsx
```jsx
  import styled from '@emotion/styled'
  const Label = styled.label`
    color: #FFF;
  `
  const useSelectMonedas = (label) => {
    const SelectMonedas = () => (
      <>
        <Label htmlFor="monedas">{label}</Label>
      </>
    )
    return [SelectMonedas]
  }
  export default useSelectMonedas
```

### Pasando Opciones al Hook
Creamos un Arreglo de Monedas dentro de data/monedas.js en `src` con las Monedas Fisicas preestablecidas que le vamos a enviar al useSelectMonedas.jsx para que este las muestre en pantalla.

En data/monedas.js
```jsx
  const monedas = [
    { codigo: 'USD', nombre: 'Dolar de Estados Unidos' },
    { codigo: 'MXN', nombre: 'Peso Mexicano' },
    { codigo: 'EUR', nombre: 'Euro' },
    { codigo: 'GBP', nombre: 'Libra Esterlina' },
  ]
  // export default monedas
  export {
    monedas
  };
```

En Formulario.jsx
```jsx
  import {monedas} from '../data/monedas'
  const Formulario = () => {
    const [SelectMonedas] = useSelectMonedas('Elige tu Moneda', monedas)
    return (
      <form>
        <SelectMonedas />
        <InputSubmit type="submit" value="Cotizar" />
      </form>
    )
  }
  export default Formulario
```

En useSelectMonedas.jsx
```jsx
  const useSelectMonedas = (label, opciones) => {
    const SelectMonedas = () => (
      <>
        <Label htmlFor="monedas">{label}</Label>
        <select>
          <option value="" selected disabled>-- Seleccione --</option>
          {opciones.map(opcion => (
            <option key={opcion.id} value={opcion.id}>
              {opcion.nombre}
            </option>
          ))}
        </select>
      </>
    ) // Retorna Implicitamente el Componente
    return [SelectMonedas] // Retorna la Funcion SelectMonedas que retorna el Componente y la extraemos desde el Custom Hook useSelectMonedas para usarla en cualquier lado mediante el Array Destructuring
  }
  export default useSelectMonedas
```

### Styled Components al Select
Le vamos a dar estilos al Componente Select de React que esta dentro del Custom Hook useSelectMonedas.jsx el cual se retorna desde la Funcion SelectMonedas.

En useSelectMonedas.jsx
```jsx
  const Label = styled.label`
    color: #FFF;
    display: block;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
  `
  const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 10px;
  `
  const useSelectMonedas = (label, opciones) => {
    const SelectMonedas = () => (
      <>
        <Label htmlFor="monedas">{label}</Label>
        <Select>
          <option value="" selected disabled>-- Seleccione --</option>
          {opciones.map(opcion => (
            <option key={opcion.id} value={opcion.id}>
              {opcion.nombre}
            </option>
          ))}
        </Select>
      </>
    )
    return [SelectMonedas]
  }
  export default useSelectMonedas
```

### Añadiendo State y Retornando el Valor
Una de las ventajas de crear tus propios Hooks es poder usar useState, useEffect o cualquier otro Hook dentro de ellos. Esto nos permite crear Hooks que manejen su propio estado y que puedan ser reutilizados en cualquier parte de nuestra aplicación.

Dentro del Custom Hook creamos un useState para guardar en el State el valor de la Moneda que el Usuario seleccione y lo retornamos para poder usarlo en Formulario.jsx. El State guarda el value del Option seleccionado en el Select y se actualiza cada vez que el Usuario cambia de Opcion debido al Evento onChange que se le agrego al Select y que cuando detecta un cambio ejecuta la Funcion de setState que actualiza el State enviando el valor del value del Option seleccionado.

En Formulario.jsx
```jsx
  const Formulario = () => {

    const [state, SelectMonedas] = useSelectMonedas('Elige tu Moneda', monedas)

    return (
      <form>
        {state}
        <SelectMonedas />
        <InputSubmit type="submit" value="Cotizar" />
      </form>
    )
  }
```

En useSelectMonedas.jsx
```jsx
  const useSelectMonedas = (label, opciones) => {

    const [state, setState] = useState('')

    const SelectMonedas = () => (
      <>
        <Label htmlFor="monedas">{label}</Label>
        <Select
          name="monedas"
          id="monedas"
          value={state}
          onChange={e => setState(e.target.value)} // el Select toma como value el valor ID del option seleccionado
        >
          <option value={state == '' && ''} disabled>-- Seleccione --</option>
          {opciones.map(opcion => (
            <option key={opcion.id} value={opcion.id}>
              {opcion.nombre}
            </option>
          ))}
        </Select>
      </>
    )
    return [state, SelectMonedas]
  }
```

#### Codigo de video de Custom Hooks de Midudev
Una de las Ventajas de los Custom Hooks es extraer la logica de programacion del Componente de la visualizacion.

Video de Midudev: [Custom Hooks](https://www.youtube.com/watch?v=K4vCTeKKCkU)
Video de FaztCode: [Custom Hooks](https://www.youtube.com/watch?v=xutmKvLsbKM)
Video de Midudev - Refactorizando Codigo: [Refactorizando Codigo](https://www.youtube.com/watch?v=1zYf4Yw1jqs)

Ejemplo, si tenemos:
```jsx
  export default function App() {
    const [counter, setCounter] = useState('')

    return(
      <div>
        <div>{counter}</div>
        <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
        <button onClick={() => setCounter(counter - 1)}>Decrementar</button>
        <button onClick={() => setCounter(0)}>Reset</button>
      </div>
    )
  }
```

En el caso de querer tener otro contador deberiamos duplicar el State por un counter2 y agregar nuevamente toda la logica de programacion para el counter2. Esto se puede solucionar con un Custom Hook, para poder extraer la LOGICA de mi contador de forma que sea reutilizable. Es importante que el nombre del Custom Hook comience con use para ser detectado por React. Las tres operaciones de Gestion del Estado asociadas al contador en los button las llevamos dentro del Custom Hook. Retornamos el State del Contador para mostrarlo en pantalla y las funciones asociadas para reutilizarlas en los botones, pero no vamos a devolver el SetCunter pq si nosotros devolvemos el setCounter ya estamos volviendo a delegar el como manejamos este Estado al Componente que consume (App.jsx), solo permitimos incrementar, decrementar o resetear el State del Contador pero no asignar cualquier otro valor, es decir la Logica de Programacion del Componente se encuentra solo dentro del Custom Hook.

```jsx
  const useCounter = (initialValue=0) => {
    const [counter, setCounter] = useState(initialValue)

    const increment = () => setCounter(counter + 1)
    const decrement = () => setCounter(counter - 1)
    const reset = () => setCounter(0)

    return {
      counter,
      increment,
      decrement,
      reset
    }
  }
 
  export default function App() {
    const { counter, increment, decrement, reset } = useCounter(0)
    const counter2 = useCounter(2)
    return(
      <div>
        <div>{counter}</div>
        <button onClick={increment}>Incrementar</button>
        <button onClick={decrement}>Decrementar</button>
        <button onClick={reset}>Reset</button>
      </div>
      <div>
        <div>{counter2.counter}</div>
        <button onClick={counter2.increment}>Incrementar</button>
        <button onClick={counter2.decrement}>Decrementar</button>
        <button onClick={counter2.reset}>Reset</button>
      </div>
    )
  }
```

### Consultando una API
Una API es una Application Programming Interface, o en español, Interfaz de Programación de Aplicaciones. 

Es un conjunto de funciones o metodos que ofrece una libreria para ser utilizada por otro software como una capa de Abstracción.

Una API pone a disposicion recursos que estan alojados en otro servidor o base de datos y que pueden ser consultados mediante una URL.

Usualmente hay que enviar una peticion estructurada.

Al ser React una libreria que corre en el cliente, no puede consultar una base de datos, por lo tanto una API es la forma de Obtener datos de un Servidor.

La API puede ser Creada en cualquier Lenguaje de Programacion o Framework: Python, Java, NetCore, Express y NodeJs con JWT, Laravel, PHP, Golang, Ruby, etc.

Para ello debe retornar una respuesta de Tipo JSON.

Para consultar una API desde React, al se JavaScript puedes utilizar Fetch API o Axios y obtener los datos para mostrarlos en pantalla.

Algunas API's requieren un Key y otras estan protegidas por CORS.

Tambien es posible integrar una libreria externa como Axios.

Vamos a llamar la API desde el Componente de Formulario.jsx dentro de un useEffect, el cual es un buen lugar para consultar una API debido a que se ejecuta cada vez que el Componente se renderiza. Es decir cuando nuestro Componente de Formulario.jsx este listo, va a mandar a llamar a la API.

En Formulario.jsx
```jsx
  const Formulario = () => {
    const [moneda, SelectMonedas] = useSelectMonedas('Elige tu Moneda', monedas)
    // Llamada a la API
    useEffect(() => {
      const consultarAPI = async () => {
        const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'

        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        console.log(resultado.Data)
      }
      consultarAPI()
    }, [])

    return (
      <form>
        <SelectMonedas />
        <InputSubmit type="submit" value="Cotizar" />
      </form>
    )
  }
```

### Formateando un Array para pasarlo como Opcioones
Para poder utilizar el Array de CryptoMonedas que nos devuelve la API, lo primero que tenemos que hacer es formatearlo para que tenga la misma estructura que el Array de Monedas que creamos nosotros.

Creamos un Nuevo State para colocar el Array de CryptoMonedas que nos devuelve la API y lo inicializamos con un Array vacio. Posteriormente creamos un nuevo Custom Hook llamado useCryptoMonedas que recibe como parametro el Label y el Array de CryptoMonedas que nos devuelve la API y que almacenamos en el State que creamos anteriormente.

En Formulario.jsx
```jsx
  import { useState, useEffect } from 'react'
  import styled from '@emotion/styled'
  import useSelectMonedas from '../hooks/useSelectMonedas'
  import {monedas} from '../data/monedas'
  const Formulario = () => {
    const [cryptos, setCryptos] = useState([])
    const [moneda, SelectMonedas] = useSelectMonedas('Elige tu Moneda', monedas)
    // Llamada a la API
    useEffect(() => {
      const consultarAPI = async () => {
        const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        // Map retorna nuevo arreglo - ForEach solo lista - Filter filtra arreglo
        // Utilizamos un Return implicito para retornar el objeto
        const arrayCryptos = resultado.Data.map(crypto => ({
          id: crypto.CoinInfo.Name,
          nombre: crypto.CoinInfo.FullName,
        }))

        // Utilizamos un Return
        const arrayCryptos = resultado.Data.map(crypto => {
          return {
            id: crypto.CoinInfo.Name,
            nombre: crypto.CoinInfo.FullName,
          }
        })

        // Retornamos como Objeto
        const arrayCryptos = resultado.Data.map(crypto => {
          const objeto = {
            id: crypto.CoinInfo.Name,
            nombre: crypto.CoinInfo.FullName,
          }
          return objeto;
        })
        setCryptos(arrayCryptos)
      }
      consultarAPI()
    }, [])

    return (
      <form>
        <SelectMonedas />
        <InputSubmit type="submit" value="Cotizar" />
      </form>
    )
  }
```

### Añadiendo ambos Select con Opciones
Vamso a crear un nuevo Custom Hook llamado useCryptoMonedas que recibe como parametro el Label y el Array de CryptoMonedas que nos devuelve la API y que almacenamos en el State que creamos anteriormente. Este Custom Hook va a retornar el State (Crypto Seleccionada) y el Select de CryptoMonedas (Componente de HTML).

De esta manera nuestros Custom Hooks son 100% dinamicos, reutilizables. Cada Hook tiene su Label, cada Hook tiene su informacion y cada Hook tiene su State.

Se podria pasar la Funcion de ConsultarAPI a una carpeta llamada Helpers y utilizarla en ambos Custom Hooks.

En Formulario.jsx
```jsx
  const Formulario = () => {
    const [cryptos, setCryptos] = useState([])
    const [moneda, SelectMonedas] = useSelectMonedas('Elige tu Moneda', monedas)
    const [cripto, SelectCripto] = useSelectMonedas('Elige tu Criptomoneda', cryptos)

    // Llamada a la API
    useEffect(() => {
      const consultarAPI = async () => {
        const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'

        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        // Map retorna nuevo arreglo - ForEach solo lista - Filter filtra arreglo
        // Utilizamos un Return implicito para retornar el objeto
        const arrayCryptos = resultado.Data.map(crypto => ({
          id: crypto.CoinInfo.Name,
          nombre: crypto.CoinInfo.FullName,
        }))
        setCryptos(arrayCryptos)
      }
      consultarAPI()
    }, [])

    return (
      <form>
        <SelectMonedas />
        <SelectCripto />
        <InputSubmit type="submit" value="Cotizar" />
      </form>
    )
  }
```

### Validando el Formulario
Vamos a crear un State error para validar el Formulario. Este State error va a ser un Booleano que va a indicar si el Formulario esta correcto o no. Si el Formulario esta correcto, se va a mostrar el Componente de Cotizacion, si no, se va a mostrar un Mensaje de Error.

Una vez seleccionada la Moneda y Cryptomoneda vamos a crear una Funcion handleSubmit que se va a ejecutar cuando el Usuario haga Submit al Formulario es decir, un Evento onSubmit() dentro del Form. Esta Funcion va a validar que el Usuario haya seleccionado una Moneda y una Cryptomoneda. Si no selecciono ninguna, va a mostrar un Mensaje de Error. Si selecciono ambas, va a mostrar el Componente de Cotizacion.

El Valor de Moneda y el Valor de CrytoMoneda seleccionados se encuentran disponibles cada uno en su respectivo State. 

Es decir el Custom Hook de Monedas tiene un State llamado Moneda (`const [moneda, SelectMonedas] = useSelectMonedas('Elige tu Moneda', monedas)`) que es retornado desde el useSelectMonedas (retorna el State del Hook(este State es el value seleccionado en el Select que es retornado por el Hook dentro del Array) y retorna el Componente HTML) y el Custom Hook de CryptoMonedas tiene un State llamado Cripto (`const [cripto, SelectCripto] = useSelectMonedas('Elige tu Criptomoneda', cryptos)`).

En useSelectMonedas.jsx
```jsx
  const useSelectMonedas = (label, opciones) => {
    const [state, setState] = useState('')
    const SelectMonedas = () => (
      <>
        <Label htmlFor="monedas">{label}</Label>
        <Select
          name="monedas"
          id="monedas"
          value={state}
          onChange={e => setState(e.target.value)} // el Select toma como value el valor ID del option seleccionado
        >
          <option value='' disabled>-- Seleccione --</option>
          {opciones.map(opcion => (
            <option key={opcion.id} value={opcion.id}>
              {opcion.nombre}
            </option>
          ))}
        </Select>
      </>
    )
    return [state, SelectMonedas]
  }
  export default useSelectMonedas
```

Creamos un Componente para el Error.jsx
```jsx
  import styled from '@emotion/styled'
  const MensajeError = styled.div`
    background-color: #B7322C;
    color: #FFF;
    padding: 15px;
    font-size: 22px;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    text-align: center;
  `
  const Error = ({children}) => {
    return (
      <MensajeError>
        {children}
      </MensajeError>
    )
  }
  export default Error
```


En Formulario.jsx
```jsx
import Error from './Error'
const Formulario = () => {
  const [error, setError] = useState(false)
  const [cryptos, setCryptos] = useState([])
  const [moneda, SelectMonedas] = useSelectMonedas('Elige tu Moneda', monedas)
  const [cripto, SelectCripto] = useSelectMonedas('Elige tu Criptomoneda', cryptos)

  const handleSubmit = e => {
    e.preventDefault()
    
    if ([moneda, cripto].includes('')) {
      return setError(true)
    }

    setError(false)
    console.log('enviando formulario')
  }

  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}
      <form
        onSubmit={handleSubmit}
      >
        <SelectMonedas />
        <SelectCripto />
        <InputSubmit type="submit" value="Cotizar" />
      </form>
    </>
  )
}
```

## Detectando los Valores de las Monedas
Debemos pasar el State de Moneda y CriptoMoneda al Componente App.js para que este los pase al Componente Cotizacion.jsx de Resultados que se va a Encontrar debajo de Formulario.jsx. Para esto vamos a crear un State en App.js llamado cotizacion. Este State va a ser un Objeto que va a contener la Moneda y la CriptoMoneda seleccionadas.

En Formulario.jsx tenemos el State de Moneda y el State de Criptomoneda en base a el CustomHook. Lo requerimos pasar a estos States al App.jsx pq luego de del Componente de Formulario.jsx donde cargamos los Datos, tenemos el Componente de Resultado.jsx donde mostramos los Resultados.

En App.jsx
```jsx
  function App() {
    const [monedas, setMonedas] = useState({})
    // Podria estar dentro del Custom Hook de useSelectMonedas
    useEffect(() => {
      if(Object.keys(monedas).length === 0) return
      console.log(monedas)
    }, [monedas])

    return (
      <Contenedor className="App">
        <Imagen src={ImagenCrypto} alt="Imagen Crypto" />
        <div>
          <Heading>Cotiza Criptomonedas al Instante</Heading>
          <Formulario 
            setMonedas={setMonedas}
          />
        </div>
      </Contenedor>
    )
  }
```

En Formulario.jsx pasamos los valores de los States luego de la validacion:
```jsx
  const Formulario = ({ setMonedas }) => {
    const [error, setError] = useState(false)
    const [cryptos, setCryptos] = useState([])
    const [moneda, SelectMonedas] = useSelectMonedas('Elige tu Moneda', monedas)
    const [cripto, SelectCripto] = useSelectMonedas('Elige tu Criptomoneda', cryptos)

    // Llamada a la API
    useEffect(() => {
      const consultarAPI = async () => {
        const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'

        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        // Map retorna nuevo arreglo - ForEach solo lista - Filter filtra arreglo
        // Utilizamos un Return implicito para retornar el objeto
        const arrayCryptos = resultado.Data.map(crypto => ({
          id: crypto.CoinInfo.Name,
          nombre: crypto.CoinInfo.FullName,
        }))
        setCryptos(arrayCryptos)
      }
      consultarAPI()
    }, [])

    const handleSubmit = e => {
      e.preventDefault()
      
      if ([moneda, cripto].includes('')) {
        return setError(true)
      }

      setError(false)
      setMonedas({
        moneda,
        cripto
      })
      console.log('enviando formulario')
    }

    return (
      <>
        {error && <Error>Todos los campos son obligatorios</Error>}
        <form
          onSubmit={handleSubmit}
        >
          <SelectMonedas />
          <SelectCripto />
          <InputSubmit type="submit" value="Cotizar" />
        </form>
      </>
    )
  }
```

## Consultando en la API las monedas a Cotizar
Obtenemos el Resultado de la API de forma dinamica tanto para la creacion de la URL, donde se pasa el valor de la Moneda y la CriptoMoneda seleccionada en el State de cada Custom Hook de moneda y Cryptomoneda, como para la obtencion de los valores de la Cotizacion en base al Resultado JSON de la API que es un Objeto al cual debemos tambien acceder de forma dinamica. Los valores de Cryptomonedas que se mandan por la URL a la API, son los mismos que se obtienen de la API y se guardan dentro del State de Cryptomonedas para ser cargados en el Select de Criptomonedas uno a uno creando un Select distinto gracias al Custom Hook que recorre este Array de Criptomonedas al cual le pasamos las mismas por parametro. Luego el valor Seleccionado en el Select de Criptomonedas se pasa al State de Monedas y se utiliza para la creacion de la URL de la API en App.jsx.

El Resultado de la consulta a la API lo almacenamos dentro de un State Resultado para luego pasarlo al Componente de Resultado.jsx para mostrarlo en pantalla.

En App.jsx
```jsx
  function App() {

    const [monedas, setMonedas] = useState({})
    const [resultado, setResultado] = useState({})
    // Podria estar dentro del Custom Hook de useSelectMonedas
    useEffect(() => {
      // Ver &&, .?, y ?? en MDN
      if(Object.keys(monedas).length === 0) return
      const cotizarCrypto = async () => {
        const {moneda, cripto} = monedas // Object Destructuring
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        setResultado(resultado.DISPLAY[cripto][moneda]) // Ingresa a la propiedad del objeto de forma dinamica - DISPLAY es un objeto y accede a la propiedad cripto que es un objeto y accede a la propiedad moneda que es un objeto
      }
      cotizarCrypto()
    }, [monedas])

    return (
      <Contenedor className="App">
        <Imagen src={ImagenCrypto} alt="Imagen Crypto" />
        <div>
          <Heading>Cotiza Criptomonedas al Instante</Heading>
          <Formulario 
            setMonedas={setMonedas}
          />
        </div>
      </Contenedor>
    )
  }
```

## Mostrando el Resultado de la Cotizacion
Creamos un Nuevo Componente Resultado.jsx el cual va a Recibir por medio de Props el Resultado de la Cotizacion Obtenido mediante la Consulta a la API dentro del App.jsx.

En App.jsx
```jsx
function App() {
  const [monedas, setMonedas] = useState({})
  const [resultado, setResultado] = useState({})
  // Podria estar dentro del Custom Hook de useSelectMonedas
  useEffect(() => {
    // Ver &&, .?, y ?? en MDN para entender el siguiente codigo
    if(Object.keys(monedas).length === 0) return
    
    const cotizarCrypto = async () => {
      const {moneda, cripto} = monedas // Object Destructuring
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()
      setResultado(resultado.DISPLAY[cripto][moneda]) // Ingresa a la propiedad del objeto de forma dinamica - DISPLAY es un objeto y accede a la propiedad cripto que es un objeto y accede a la propiedad moneda que es un objeto
    }
    cotizarCrypto()
  }, [monedas])
  return (
    <Contenedor className="App">
      <Imagen src={ImagenCrypto} alt="Imagen Crypto" />
      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>
        <Formulario 
          setMonedas={setMonedas}
        />
        {/* Ver Funcionamiento de esta Sintaxis */}
        { resultado && resultado.PRICE && <Resultado resultado={resultado} /> }
      </div>
    </Contenedor>
  )
}
```

En Resultado.jsx
```jsx
  const Resultado = ({resultado}) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado
    return (
      <div>
        <p>El Precio es de: <span>{PRICE}</span></p>
        <p>Precio mas alto del dia: <span>{HIGHDAY}</span></p>
        <p>Precio mas bajo del dia: <span>{LOWDAY}</span></p>
        <p>Variacion ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span></p>
        <p>Ultima Actualizacion: <span>{LASTUPDATE}</span></p>
      </div>
    )
  }
```

## Formateando el Resultado de la Cotizacion
Agregarmos Estilos al Componente Resultado.jsx para darle un mejor aspecto a la Aplicacion utilizando Styled Components.

En Resultado.jsx
```jsx
import styled from "@emotion/styled"
const Contenedor = styled.div`
  color: #FFF;
  font-family: 'Lato', sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`
const Imagen = styled.img`
  display: block;
  width: 120px;
`
const Texto = styled.p`
font-size: 18px;
  span {
    font-weight: 700;
  }
`
const Precio = styled.p`
  font-size: 24px;
  span {
    font-weight: 700;
  }
`
const Resultado = ({resultado}) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado
  return (
    <Contenedor>
      <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="Logo Criptomoneda" />
      <div>
        <Precio>El Precio es de: <span>{PRICE}</span></Precio>
        <Texto>Precio mas alto del dia: <span>{HIGHDAY}</span></Texto>
        <Texto>Precio mas bajo del dia: <span>{LOWDAY}</span></Texto>
        <Texto>Variacion ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
        <Texto>Ultima Actualizacion: <span>{LASTUPDATE}</span></Texto>
      </div>
    </Contenedor>
  )
}
```

## Añadiendo un Spinner
Creamos un Nuevo Componente Spinner.jsx el cual va a Mostrar un Spinner de Carga mientras se Realiza la Consulta a la API en App.jsx.

Este Spinner de Carga va a aparecer en lo que tarda en cargarse la Cotizacion de la Criptomoneda al realizar la consulta a la API.

Lo primero es Crear un State de cargando dentro del App.jsx y luego creamos un Componente Spinner.jsx el cual va a Mostrar un Spinner de Carga mientras se Realiza la Consulta a la API en App.jsx.

Creamos el Componente de Spinner.jsx tomando uno de Spinkit de [Spinkit](https://tobiasahlin.com/spinkit/) y lo pegamos en el Componente. Para el CSS del Componente creamos un Modulo de CSS creando dentro de src una carpeta nueva llamada styles y nombramos la Hoja de Estilos igual que el Componente, en este caso Spinner.css.

Tambien debemos resetear el Objeto de Resultado en el State de App.jsx para que no se muestre el Resultado de la Cotizacion anterior al realizar una nueva consulta.

En Spinner.jsx
```jsx
  import '../styles/Spinner.css'
  const Spinner = () => {
    return (
      <div className="sk-cube-grid">
        <div className="sk-cube sk-cube1"></div>
        <div className="sk-cube sk-cube2"></div>
        <div className="sk-cube sk-cube3"></div>
        <div className="sk-cube sk-cube4"></div>
        <div className="sk-cube sk-cube5"></div>
        <div className="sk-cube sk-cube6"></div>
        <div className="sk-cube sk-cube7"></div>
        <div className="sk-cube sk-cube8"></div>
        <div className="sk-cube sk-cube9"></div>
      </div>
    )
  }
```

En App.jsx
```jsx
import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Formulario from './components/Formulario'
import ImagenCrypto from './assets/img/imagen-criptos.png'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'

function App() {
  const [monedas, setMonedas] = useState({})
  const [resultado, setResultado] = useState({})
  const [cargando, setCargando] = useState(false)
  // Podria estar dentro del Custom Hook de useSelectMonedas
  useEffect(() => {
    // Ver &&, .?, y ?? en MDN para entender el siguiente codigo
    if(Object.keys(monedas).length === 0) return
    const cotizarCrypto = async () => {
      setResultado({})
      setCargando(true)
      const {moneda, cripto} = monedas // Object Destructuring
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()
      setResultado(resultado.DISPLAY[cripto][moneda]) // Ingresa a la propiedad del objeto de forma dinamica - DISPLAY es un objeto y accede a la propiedad cripto que es un objeto y accede a la propiedad moneda que es un objeto
      setCargando(false)
    }
    cotizarCrypto()
  }, [monedas])

  return (
    <Contenedor className="App">
      <Imagen src={ImagenCrypto} alt="Imagen Crypto" />
      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>
        <Formulario 
          setMonedas={setMonedas}
        />
        {/* Ver Funcionamiento de esta Sintaxis */}
        {cargando && <Spinner />}
        { resultado && resultado.PRICE && <Resultado resultado={resultado} /> }
      </div>
    </Contenedor>
  )
}
```