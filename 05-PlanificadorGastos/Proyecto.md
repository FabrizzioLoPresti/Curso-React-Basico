# Planificador de Gastos - React, Vite, LocalStorage, Normalize (sin Framework CSS)

## Creacion de Proyecto
En Consola creamos el Proyecto con el Comando: `npm init vite@latest`

Luego instalamos las dependencias con el Comando: `npm install`

Por ultimo corremos el Proyecto con el Comando: `npm run dev`

Eliminamos del Proyecto lo que no utilizamos:
- Del App.jsx eliminamos el `import './App.css'`
- Del App.jsx eliminamos el `import logo from '/logo.svg'`
- Del App.jsx eliminamos todo el contenido HTML dentro del return y el contador
- Eliminamos el App.css y logo.svg
- Agregamos en el index.html el link a Normalize.css (URL)
- Agregamos en el index.html los links a Fuentes de Google Fonts
- Nuestro archivo de CSS de index.css con todas las clases a utlizar se encuentra cargado en el main.jsx de esta forma queda importado de forma global en todos los componentes de React

## Creacion de Componente de Nuevo Presupuesto
Lo primero que debemos hacer es crear dentro de la Carpeta de src la carpeta de components donde vamos a crear y almacenar nuestros componentes.

Vamos a crear dos Componentes:
- Header.jsx
- NuevoPresupuesto.jsx que es el que va a contener el formulario para INGRESAR el nuevo presupuesto

En el App.jsx importamos el componente Header.jsx y el componente NuevoPresupuesto.jsx lo importamos dentro del Componente de Header.jsx.

En App.jsx
```jsx
  import { useState } from 'react'
  import Header from './components/Header'

  function App() {

    return (
      <div className="App">
        <Header />
      </div>
    )
  }

  export default App
```

En Header.jsx
```jsx
  import NuevoPresupuesto from "./NuevoPresupuesto"

  const Header = () => {
    return (
      <header>
        <h1>Planificador de Gastos</h1>
        <NuevoPresupuesto />
      </header>
    )
  }

  export default Header
```

En NuevoPresupuesto
```jsx
  const NuevoPresupuesto = () => {
    return (
      <div>
        <h2>Nuevo Presupuesto</h2>
      </div>
    )
  }

  export default NuevoPresupuesto
```

## Creando el Formulario de Presupuesto
Debemos definir un State de Presupuesto el cual debe estar disponible en diferentes Componentes desde el Formulario para Cargar un Nuevo Presupuesto hasta el Componente de Planificador de Gastos, por lo que es conveniente definir el State en el Archivo Principal App.jsx.

Se debe crear el State de Presupuesto en el Componente Principal de App.jsx para poder pasar el Presupuesto desde NuevoPresupuesto en el Header hasta el Componente de Planificador/Listado de Gastos, los cuales se muestran en forma Condicional segun este cargado o no el Presupuesto.

De este modo en el App.jsx creamos el State de Presupuesto, el cual se lo enviamos por medio de Props al Header.jsx y de alli al Componente de NuevoPresupuesto.jsx donde el usuario ingresa el Presupuesto, por lo que alli es donde utilizamos el State de Presupuesto para setearle el valor a la Variable de Presupuesto. Una vez cargado el State en la Variable de Presupuesto, en base a este se valida y en forma condicional, si es un Presupuesto valido deja de mostrarse el Componente de Header.jsx junto con el Formulario de NuevoPresupuesto.jsx y pasa a mostrarse el Componente de Planificador de Gastos.

## Validando el Presupuesto
Debemos validar ademas que el Presupuesto ingresado sea un presupuesto valido, es decir que sea mayor a 0 y no sean letras. En ese caso mostrar un mensaje de error.

En el Formulario de NuevoPresupuesto.jsx primero definimos el Presupuesto utilizando el State creado en el App.jsx agregando al Input de presupuesto como value el valor del State de Presupuesto y mediante el Evento onChange cada vez que cambia el valor ingresado en el Input utilizamos la funcion del State de setPresupuesto() para asignarle el Nuevo Valor a la Variable de Presupuesto definida en el State. Al cambiar el Valor del State la Aplicacion se rerenderiza mostrando el nuevo valor del State de Presupuesto ingresado en el Input en base al Value. En base al Evento onChange que pasa por Parametro el nuevo valor de Presupuesto por medio de setPresupuesto() se actualiza el State de Presupuesto, en el App.jsx se actualiza el State de Presupuesto y se rerenderiza el App.jsx mostrando el nuevo valor del State de Presupuesto, pasando dicho valor actualizado a todos sus componentes hijos por medio de los Props y rerenderizando la Aplicacion en base a dicho cambio debido a que se actualizo el State de Presupuesto.

Posteriormente para validar los datos ingresados en el Formulario debemos crear una Funcion que se ejecute al momento de que el usuario presione el Boton de Enviar (el Usuario presion el Boton de Enviar y validamos que el Presupuesto ingresado sea valido), esto lo logramos mediante el Evento onSubmit() de React que nos permite asociarle una Funcion al **Formulario** que se ejecuta al momento de enviar los datos del mismo. En dicha funcion de handlePresupuesto debemos validar que el Presupuesto ingresado sea mayor a 0 y no sean letras, tomando el Evento e y previniendo la accion por defecto del Formulario, que es que se envien los datos. 

La Validacion del Presupuesto se realiza dentro del Componente de NuevoPresupuesto.jsx debido a que este cuenta con el Formulario donde se ingresa el Presupuesto y el Boton de agregar el mismo, por lo tanto vamos a validar que el Presupuesto sea Valido al momento de presionar el Boton de Enviar del Formulario mediante el Evento OnSubmit() el cual manda a llamar la Funcion de handlePresupuesto() la cual se encarga de validar el mismo.

Se realizan las Validaciones correspondientes si el valor del Presupuesto es mayor a 0 y no sean letras. En caso de que no cumpla con las validaciones se mostrara un mensaje de error.

En NuevoPresupuesto.jsx
```jsx
import { useState } from "react"
import Mensaje from "./Mensaje"

const NuevoPresupuesto = ({presupuesto, setPresupuesto}) => {
  const [mensaje, setMensaje] = useState('')

  const handlePresupuesto = (e) => {
    e.preventDefault()
    // if(!Number(presupuesto) || Number(presupuesto) < 0) return setMensaje('Presupuesto Invalido')
    if(!Number(presupuesto) || Number(presupuesto) < 0) {
      return setMensaje('El presupuesto no es valido')
    }
    setMensaje('')
  }

  return (
    <div className="">
      <form className="formulario" onSubmit={handlePresupuesto}>
        <div className="campo">
          <label htmlFor="presupuesto">Definir Presupuesto</label>
          <input 
            type="text" 
            id="presupuesto"
            className="nuevo-presupuesto"
            placeholder="Ingrese su presupuesto"
            value={presupuesto === 0 ? '' : presupuesto}
            // onChange={e => setPresupuesto(Number(e.target.value))}
            onChange={e => setPresupuesto(e.target.value)}
          />
        </div>
        <input 
          type="submit" 
          value="Agregar"
        />
        {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
      </form>
    </div>
  )
}
export default NuevoPresupuesto
```

En Mensaje.jsx
```jsx
const Mensaje = ({children, tipo}) => {
  return (
    <div className={`alerta ${tipo}`}>
      {children}
    </div>
  )
}
export default Mensaje
```

Entonces verificamos, si el State mensaje tiene contenido distinto a '' mostramos el mensaje de error, en caso contrario no mostramos ningun mensaje. Al pasar la validacion se cambia el State de Mensaje y al cambiar el State se rerenderiza el Componente sin mostrar el mensaje de error debido a que el State de Mensaje esta vacio porque lo Seteamos a '' en el Evento onSubmit de handlePresupuesto.

Creando el Componente de Mensaje.jsx (sin ser un State booleano que muestre un Mensaje estatico igual para todos y siendo un State de string que nos permite setear el mensaje a enviar por medio de Props a {children}) de esta manera nos permite tener una mayor reutilizacion, debido a que el Componennte de Mensaje se va a mostrar UNICAMENTE cuando en su State tenga algun contenido distinto a '' (`{mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}`), y nos permite enviarle por Props la clase asociada que necesitemos segun el tipo de mensaje y mediante {children} el Contenido del mismo que es el mensaje que se encuentra dentro del State de mensaje. Esto nos permite tener multiples Componentes de Mensaje distintos para error, exito, etc. cambiando unicamente la Clase y el Mensaje de {children}.

Podemos refactorizar el Codigo del Componente NuevoPresupuesto para mantener siempre el valor del Presupuesto como un Number y no como un String, para ello debemos utilizar el metodo Number() para convertir el String a Number.
```jsx
import { useState } from "react"
import Mensaje from "./Mensaje"
const NuevoPresupuesto = ({presupuesto, setPresupuesto}) => {
  const [mensaje, setMensaje] = useState('')

  const handlePresupuesto = (e) => {
    e.preventDefault()
    if(presupuesto <= 0) {
      return setMensaje('El presupuesto no es valido')
    }
    setMensaje('')
  }

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario" onSubmit={handlePresupuesto}>
        <div className="campo">
          <label htmlFor="presupuesto">Definir Presupuesto</label>
          <input 
            type="number" 
            id="presupuesto"
            className="nuevo-presupuesto"
            placeholder="Ingrese su presupuesto"
            value={presupuesto === 0 ? '' : presupuesto}
            onChange={e => setPresupuesto(Number(e.target.value))}
          />
        </div>
        <input 
          type="submit" 
          value="Agregar"
        />

        {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
      </form>
    </div>
  )
}
export default NuevoPresupuesto
```

## Mostrando el Componente de Gastos si el Presupuesto es Valido
En el caso de que el Presupuesto ingresado sea valido debemos mostrar el Componente de Gastos. Para ello vamos a crear en el App.jsx un nuevo State de isValidPresupuesto para cambiar el valor del State en caso de que el Presupuesto ingresado sea valido, de esa manera si isValidPresupuesto es true se mostrara el Componente de Gastos, de lo contrario no se mostrara y se mostrar el Header con el Formulario para cargar un NuevoPresupuesto. **Al cambiar el State de isValidPresupuesto se rerenderiza el App.jsx mostrando el Componente de Gastos**.

Este State se lo pasamos por medio de Props al Componente de Header donde vamos a realizar la Validacion y segun el valor del State se mostrara el Componente de Gastos o no.

Desde Header.jsx le pasasmos la Funcion de setIsValidPresupuesto al Componente de NuevoPresupuesto para que al momento de que el Presupuesto sea valido se cambie el State de isValidPresupuesto a True, **este cambio en el State de isValidPresupuesto va a provocar una rerenderizacion del App.jsx y mostrara el Componente de Gastos** debido a que el State de isValidPresupuesto es True.

Si el Presupuesto no es valido se muestra el Componente de NuevoPresupuesto en el Header.jsx, si el Presupuesto es Valido, dentro del Componente de NuevoPresupuesto mediante setIsValidPresupuesto lo colocamos en True y cambia en el App.jsx el State de isValidPresupuesto a True, por lo que si isValidPresupuesto es True podemos mostrar el Planificador o Listado de Gastos dentro del Componente de Header.jsx. 

Se hace el Ternario de Componentes dentro del Componente Header.jsx debido a que se busca mantener el Header y variar solo entre el Formulario de carga de Nuevo Presupuesto y el Listado de Gastos.

En Header.jsx
```jsx
  const Header = ({presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto}) => {
    return (
      <header>
        <h1>Planificador de Gastos</h1>
        {isValidPresupuesto ? 
          <ControlPresupuesto />
        :
          <NuevoPresupuesto 
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setIsValidPresupuesto={setIsValidPresupuesto}
          />
        }
      </header>
    )
  }
```

En NuevoPresupuesto.jsx
```jsx
  const handlePresupuesto = (e) => {
    e.preventDefault()

    if(!Number(presupuesto) || Number(presupuesto) < 0) return setMensaje('Presupuesto Invalido')

    setMensaje('')
    setIsValidPresupuesto(true)
  } 
```

## Primeros Pasos con el Componente de Control de Presupuesto
Creamos el nuevo Componente de ControlPresupuesto.jsx donde se va a mostrar el Presupuesto Gastado y Restante. Dicho Componente lo vamos a importar en el Componente de Header.jsx y se va a mostrar solo en el caso de que el Presupuesto ingresado sea valido y el State de isValidPresupuesto sea True. Desde Header.jsx le pasamos el State de Presupuesto y el State de Restante al Componente de ControlPresupuesto para que se muestren en el Componente de ControlPresupuesto mediante Props.

## Formatear Numeros a Dinero
Debemos darle el Formato de Dinero al Presupuesto para que se muestre como una Cantidad de Dinero mediante la API de JavaScript Number.toLocaleString(), la cual es Inmutable lo que no cambia el valor del State de Presupuesto, solo formatea el valor del State de Presupuesto al mostrarlo.

```jsx
  const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    });
  }

  <span>Presupuesto: </span>{formatearCantidad(presupuesto)}
```

## Añadir un Boton para Registrar un Nuevo Gasto
Debemos agregar un Boton para Registrar un Nuevo Gasto el cual se va a encontrar en el App.jsx y se va a mostrar solo en el caso de que el Presupuesto ingresado sea valido y el State de isValidPresupuesto sea True. 

```jsx
  import IconoNuevoGasto from '../src/assets/img/nuevo-gasto.svg'
  <div className="App">
    <Header 
      presupuesto={presupuesto}
      setPresupuesto={setPresupuesto}
      isValidPresupuesto={isValidPresupuesto}
      setIsValidPresupuesto={setIsValidPresupuesto}
    />

    {isValidPresupuesto && (
      <div className="nuevo-gasto">
        <img 
          src={IconoNuevoGasto}
          alt="Icono Nuevo Gasto" 
        />
      </div>
    )}
  </div>
```

Ademas por un lado **en el App.jsx es donde vamos a almacenar el State con el Arreglo de los Gastos guardados** (para poder distribuirlos a lo largo de los diferentes Componentes junto con su funcion de setGastos() para agregar nuevos Gastos todo por medio de los Props).
Por el otro lado creamos el Boton en el App.jsx porque Header.jsx solo contiene los Headers de la App ya sea para cargar un Nuevo Presupuesto o para Ver el Presupuesto Gastado pero el Boton se encuentra debajo y fuera de eso, junto con los gastos.

## Primeros pasos para crear una Ventana Modal
Lo primero que vamos a hacer dentro del App.jsx es asignarle a la Imagen un Evento onClick() de React para que el hacer click sobre la imagen se ejecute la Funcion handleNuevoGasto, lo cual va a provocar la ejecución de la Ventana Modal.

```jsx
  <img 
    src={IconoNuevoGasto}
    alt="Icono Nuevo Gasto" 
    onClick={handleNuevoGasto}
  />
```

Luego vamos a Registrar dentro de App.jsx un nuevo State booleano para controlar la Visibilidad de la Ventana Modal, donde si el State de modal es True la Ventana Modal debe mostrarse y si el State de modal es False la Ventana Modal no debe ser mostrada.

Mediante la Funcion setModal del State podemos modificar el State de la Variable Modal cada vez que se haga click en el Boton de Agregar Nuevo Gasto mediante la Funcion de handleNuevoGasto que se ejecuta al hacer click sobre la Imagen debido al Evento onClick() de React para asi poner el State de la Variable Modal en True y que se muestre en pantalla la Ventana Modal, debido a que el State de la Variable Modal cambia, se producen un rerenderizacion del Componente de modo que al estar el State de la Variable Modal en True esta se muestra en pantalla, si la cerramos lo que hacemos es cambiar el State de la Variable Modal a False mediante su Funcion de setModal, este cambio en el State provoca una rerenderizacion donde al ver que el State de la Variable es False no se muestra la Ventana Modal.

```jsx
  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [modal, setModal] = useState(false)

  const handleNuevoGasto = () => {
    console.log('Nuevo Gasto')
    setModal(true)
  }

  return (
    <div className="App">
      <Header 
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto && (
        <div className="nuevo-gasto">
          <img 
            src={IconoNuevoGasto}
            alt="Icono Nuevo Gasto" 
            onClick={handleNuevoGasto}
          />
        </div>
      )}

      {modal && (
        <p>Desde Modal</p>
      )}
    </div>
  )
```

Entonces si el Valor del State de modal es true procedemos a Mostrar el Componente de la Ventana Modal y si el Valor del State de modal es false no se mostrara el Componente de la Ventana Modal. Este Componente de la Ventana Modal se muestra tambien por fuera del Header.jsx porque el Header.jsx es el Componente que contiene todos los Headers de la App ya sea para cargar Nuevo Presupuesto o para Mostrar el Presupuesto Gastado y el Componente de la Ventana Modal se encuentra Fuera del Header junto con el Boton de Agregar Nuevo Gasto y los Gastos Listados cada uno en su Respectivo Componente. Se encuentra separado porque el Componente de la Ventana Modal es un Componente independiente y no se encuentra dentro del Header.jsx, ya que no tiene ninguna relacion con el Header.jsx, sino con toda la aplicacion y el boton de Agregar Nuevo Gasto.

## Mostrando y Ocultando la Ventana Modal
Para ello generamos un nuevo Componente para la Ventana Modal como Modal.jsx, el cual se va a llamar en el momento en el que el State de la Variable modal valga True. Si el State de la Variable modal cambia a False esto provoca una rerenderizacion y al Valer False el State de la Variable de Modal entonces la condicion no se cumple y no se muestra el Componente de Modal.jsx.

**Al Componente de Modal.jsx le pasamos por medio de Props desde el App.jsx la Funcion de setModal() para poder pasarle como valor False al momento de apretar el Boton de Cerrar, al hacer esto el State de la Variable Modal cambia de True a False y este cambio en el State de la Variable provoca una rerenderizacion de Modo que al Recargarse y evaluar nuevamente la condicion, detecta que el State de la Variable Modal es False por lo tanto no muestra el Componente de Modal.jsx**.

## Creando una Animacion en la Ventana Modal
Para darle una Animacion al Formulario dentro de la Ventana Modal para que aparezca luego de cierto tiempo lo que hacemos dentro del App.jsx es definir en primera Instancia un Nuevo State de animarModal donde lo inicializamos con False. Al momento en el que se hace click en el Boton de Agregar Nuevo Gasto y se llama a la Funcion de handleNuevoGasto la cual cambia el State de la Variable Modal a True para que esta se muestre, luego de X tiempo seteamos a True mediante su Funcion de setAnimarModal() el cual cambia el State de la Variable animarModal a True para que se muestre la Animacion.

Dicha Variable de Animar Modal se pasa por medio de Props al Componente de Modal para que Validemos si se encuentra en True, en ese caso se agrega al Formulario la Clase de Animar la cual agrega la Transicion.

Primero se colococa en True el State de la Variable Modal para que aparezca la Ventana Modal por medio de la Rerenderizacion al Cambiar el State de la Variable, luego de X tiempo se pone en True el State de la Variable de AnimarModal lo que provoca que cambie el State de la Variable de AnimarModal y este se pase por medio de Props al Componente de Modal.jsx donde se valida y en caso afirmativo se muestra la Animacion del Formulario. Este cambio en el State de la Variable de AnimarModal provoca una rerenderizacion donde se recarga el Componente de Modal con el nuevo valor del State de la Variable de AnimarModal en True y se muestra la Animacion del Formulario al validar la Condicion.

```jsx
  // En App.jsx
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const handleNuevoGasto = () => {
    console.log('Nuevo Gasto')
    setModal(true)

    setTimeout(() => {
      setAnimarModal(true)
    }, 1000);
  }

  // En Modal.jsx
  const Modal = ({setModal, animarModal, setAnimarModal}) => {
    const handleCerrar = () => {
      setAnimarModal(false)
      setTimeout(() => {
        setModal(false)
      }, 500);
    }
    return (
      <div className="modal">
        <div className="cerrar-modal">
          <img 
            src={CerrarBtn} 
            alt="Cerrar Modal"
            onClick={handleCerrar}
          />
        </div>
        <form className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
          <legend>Nuevo Gasto</legend>
        </form>
      </div>
    )
  }
```

Luego al ejecutar el Evento onClick() de React se llama a la Funcion de handleCerrar() la cual cambia el State de la Variable de AnimarModal a False y luego de X tiempo se cambia el State de la Variable de Modal a False y esto provoca una rerenderizacion del Componente de Modal.jsx y se oculta la Ventana Modal. A demas al Cambiar primero setAnimarModal su State a False esto Provoca un Cambio en el State que da lugar a una Rerenderizacion del Componente de Modal.jsx donde se valida el Valor del State de animarModal y al ser False se aplica la clase de cerrar donde el Formulario tiene una animacion de desaparicion. Luego de medio segundo se cambia el State de la Variable de Modal a False y se produce un Rerenderizacion donde al validar que el State de la Variable Modal es False entonces la Ventana Modal no se muestra.

## Añadiendo el Formulario de Gastos
Dentro del Componente de la Ventana Modal agregamos el Formulario para la Carga de Datos.

## Creando el State para los Gastos
Podemos crear un Unico State en la Ventana Modal para almacenar el Gasto que se va a cargar, para ello creamos un Nuevo State en la Ventana Modal llamado gasto y lo inicializamos con un Objeto con los valores por defecto. Pero para poder asignar los Valores de los Inputs al State de Gasto que es un Objeto debemos crear una Funcion de handleChange() que se ejecuta al momento de escribir en los Inputs y se le pasa por medio de Props el Valor del Input y el Nombre del Input para poder asignarlo al State de Gasto. La desventaja de esto es que el Valor de la cantidad se almacena como String y no como Number, por lo tanto si queremos validar que el Valor sea un Number debemos convertirlo a Number.
```jsx
  const [gasto, setGasto] = useState({
    nombre: '',
    cantidad: 0,
    categoria: '',
  })

  const handleChange = e => {
    const { name, value } = e.target;
    setGasto(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  <div className="campo">
    <label htmlFor="nombre">Nombre Gasto:</label>
    <input 
      type="text" 
      id="nombre"
      name='nombre'
      placeholder="Ej. Netflix"
      value={gasto.nombre}
      onChange={handleChange}
    />
  </div> {/* .campo */}

  <div className="campo">
    <label htmlFor="cantidad">Cantidad Gasto</label>
    <input 
      type="number" 
      id="cantidad"
      name='cantidad'
      placeholder="Ej. 3000"
      value={gasto.cantidad === 0 ? '' : gasto.cantidad}
      onChange={handleChange}
    />
  </div> {/* .campo */}
```

Para evitar la Conversion de String a Number debemos validar que el Valor del Input no sea 0, si es 0 entonces no se convierte a Number y se asigna el Valor 0. Tambien podemos crear los States por separado.
  
```jsx
  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'nombre':
        setNombre(value)
        break;
      case 'cantidad':
        setCantidad(value === 0 ? 0 : Number(value))
        break;
      case 'categoria':
        setCategoria(value)
        break;
      default:
        break;
    }
  }
```

Creando los States por separdo:
```jsx
  const [nombre, setNombre] = useState('')
  // const [cantidad, setCantidad] = useState(0)
  const [cantidad, setCantidad] = useState('')
  const [categoria, setCategoria] = useState('')

  <div className="campo">
    <label htmlFor="nombre">Nombre Gasto:</label>
    <input 
      type="text" 
      id="nombre"
      name='nombre'
      placeholder="Ej. Netflix"
      value={nombre}
      onChange={(e) => setNombre(e.target.value)}
    />
  </div> {/* .campo */}

  <div className="campo">
    <label htmlFor="cantidad">Cantidad Gasto</label>
    <input 
      type="number" 
      id="cantidad"
      name='cantidad'
      placeholder="Ej. 3000"
      // value={cantidad === 0 ? '' : cantidad}
      value={cantidad}
      onChange={e => setCantidad(Number(e.target.value))}
    />
  </div> {/* .campo */}
```

## Validando los Gastos
Vamos a registrar al Formulario de Modal.jsx un Evento onSubmit() de React para llamar a la Funcion handleSubmit() que se ejecuta al momento de enviar el Formulario y va a ser la encargada de Validar los Campos. Tambien creamos un Nuevo State para guardar el Mensaje de Error y luego en caso de que este exista o tenga contenido mostramos el Componente de Mensaje.jsx pasandole por Props el valor del State de Mensaje. Al detectar un campo vacio Seteamos el Valor de Mensaje en el State mediante su Funcion de setMensaje(), esto provoca un cambio en el State que causa una rerenderizacion donde ahora el State de Mensaje tiene un valor y al realizar la validacion por si tiene algo, al tener contenido se muestra el Componente de Mensaje.jsx con el Mensaje que se encuentra en el State pasado por medio de Props. Si el Formulario esta completo y de forma valida seteamos el Valor del State a '' de Modo que no tiene Contenido, este cambio en el State provoca una rerenderizacion donde el State de Mensaje no tiene contenido y al realizar la validacion por si tiene algo, al no tener contenido no se muestra el Componente de Mensaje.jsx.

```jsx
  const [nombre, setNombre] = useState('')
  const [cantidad, setCantidad] = useState('')
  const [categoria, setCategoria] = useState('')
  const [mensaje, setMensaje] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if([nombre, cantidad, categoria].includes('') || cantidad === 0) {
      setMensaje('Todos los campos son obligatorios')
      return setTimeout(() => {
        setMensaje('')
      }, 3000);
    }
    console.log('Enviando formulario')
    setMensaje('')
  }

  <form 
    className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}
    onSubmit={handleSubmit}  
  >
    <legend>Nuevo Gasto</legend>
    {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
  </form>
```

Dentro del App.jsx (a diferencia del Proyecto anterior donde teniamos el State de citas y la Funcion que modificaba el Arreglo de Citas era setCitas() donde pasamos Citas y setCitas() al Formulario para alli guardar los datos dentro del Arreglo), ahora vamos a crear una Funcion de guardarGasto() en el App.jsx que se va a encargar de Guardar en el Arreglo del State de Gastos el Nuevo Gasto recibido como Objeto por parametros desde el Formulario de Modal.jsx. Esta Funcion de guardarGasto() se pasa por medio de Props al Formulario de Modal.jsx para que este le envie por parametros el Objeto con los datos cargados en el Formulario, dichos datos vuelven a la Funcion que se encuentra en el App,jsx donde se almacenan en el Arreglo del State creado para guardar los gastos que es un Arreglo de Objetos. Esto nos ahorra tener que pasar tanto el Arreglo como la Funcion del State para realizar esta Funcionalidad dentro del Componente de Modal.jsx.

```jsx
  // En el App.jsx
  const [gastos, setGastos] = useState([])
  const guardarGasto = (gasto) => {
    console.log(gasto) // {nombre: "Netflix", cantidad: "3000", categoria: "suscripciones"}
    setGastos([
      ...gastos,
      gasto
    ])
  }

  {modal && (
    <Modal 
      setModal={setModal}
      animarModal={animarModal}
      setAnimarModal={setAnimarModal}
      guardarGasto={guardarGasto}
    />
  )}

  // En Modal.jsx
  const Modal = ({setModal, animarModal, setAnimarModal, guardarGasto}) => {
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')
    const [mensaje, setMensaje] = useState('')

    const handleSubmit = (e) => {
      e.preventDefault()
      
      if([nombre, cantidad, categoria].includes('') || cantidad === 0) {
        setMensaje('Todos los campos son obligatorios')
        return setTimeout(() => {
          setMensaje('')
        }, 3000);
      }
      
      guardarGasto({nombre, cantidad, categoria})
    }
  }
```

## Creando una Funcion para generar un ID Unico y Añadiendo Gastos al State
Primero vamos a crear una nueva carpeta helpers dentro de src y dentro de ella un archivo de index.js, donde se van a almacenar las funciones mas comunes o de ayuda como la Funcion de generar un ID Unico o de Formatear una Fecha.

Dentro del Archivo de index.js en la carpeta helpers vamos a crear una Funcion que se encargara de generar un ID Unico para los Gastos.
```js
  export const generarId = () => {
    return (
      '_' + 
      Math.random().toString(36).substring(2, 5) + 
      Date.now().toString(36)
    );
  }
```

Dentro del App.jsx importamos la Funcion de generarId() y la guardamos en el Objeto de Gasto pasado como parametro agregandosela como una nueva Propiedad del Objeto. Posteriormente procedemos a utilizar los States de la Ventana Modal en App.jsx para cerrarla luego de cargar el Nuevo Gasto. No hace falta vaciar el Objeto de Gasto debido a que el Componente de Modal.jsx se resetea al desmontarse.

```jsx
  import { generarId } from './helpers'

  const guardarGasto = (gasto) => {
    console.log(gasto)
    gasto.id = generarId()
    setGastos([...gastos, gasto])
    
    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)
    }, 500);
  }
```

## Creando el Componente para Mostrar un Gasto
Si el Presupuesto es Valido (`isValidPresupuesto` es true) no solamente mostramos el Boton de Agregar Nuevo Gasto, sino tambien el Listado de los Componentes de Gasto.

Ademas dependendiendo del State de la Variable de isValidPresupuesto, si es false en Header.jsx se muestra el Header para cargar un Nuevo Presupuesto. Si el State de la Variable de isValidPresupuesto es true en Header.jsx se muestra el Header con Grafico de los Gastos por un lado y por el Otro el Presupuesto total, disponible y gastado, ademas en el App.jsx si el State de la Variable de isValidPresupuesto es true se muestra el Boton de Agregar Nuevo Gasto y el Listado de los Componentes de Gasto debajo del Header.jsx que muestra el Header con Grafico de los Gastos por un lado y por el Otro el Presupuesto total, disponible y gastado debido a que isValidPresupuesto es true.

```jsx
  return (
    <div className="App">
      // Dependiendo del State de isValidPresupuesto que se valida dentro de Header.jsx muestra el header de Cargar Nuevo Presupuesto o el Header que tiene el Grafico de los Gastos por un lado y por el Otro el Presupuesto total, disponible y gastado.
      <Header 
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      // Si isValidPresupuesto es true muestra el Boton de Agregar Nuevo Gasto y el Listado de los Componentes de Gasto debajo del Header.jsx 
      {isValidPresupuesto && (
        <>
          <main>
            <ListadoGastos 
              gastos={gastos}
            />
          </main>

          <div className="nuevo-gasto">
            <img 
              src={IconoNuevoGasto}
              alt="Icono Nuevo Gasto" 
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}

      // Si modal es True se muestra la ventana Modal para agregar un Nuevo Gasto. Solo la vamos a ver cuando el State de modal sea true que se produce al hacer click en el Boton de Agregar Nuevo Gasto, el cual solo aparece si el State de isValidPresupuesto es true.
      {modal && (
        <Modal 
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
        />
      )}
    </div>
  )
```

Posteriormente dentro del Componente de ListadoGastos.jsx el cual recibe por medio de props el Array de Gastos, **verificamos el State de Gastos y si su longitud es 0 o False (0-False, 1 o mas-True)** entonces mostramos un Mensaje Condicional de que no hay Gastos Registrados. En caso contrario mostramos un Titulo de que hay gastos y recorremos mediante un .map() el Arreglo de Gastos el cual nos retorna de forma implicita cada uno de los Gastos contenidos en el Arreglo y mostramos cada uno de ellos con un Componente de Gasto, el cual recibe por medio de Props el key necesario para identificar cada uno de los Gastos y el Objeto de Gasto resultante de la iteracion.
```jsx
  import Gasto from "./Gasto"
  const ListadoGastos = ({gastos}) => {
    return (
      <div className="listado-gastos contenedor">
        <h2>{gastos.length ? 'Gastos' : 'No hay Gastos'}</h2>
        {gastos.map(gasto => <Gasto key={gasto.id} gasto={gasto} />)}
      </div>
    )
  }
```

Dentro del Componente de Gasto.jsx recibimos por medio de props el Objeto resultado de la Iteracion del Arreglo de Gastos y procedemos a mostrar sus datos.
```jsx
  const Gasto = ({gasto}) => {
    const {nombre, cantidad, categoria} = gasto

    return (
      <div>
        <h3></h3>
      </div>
    )
  }
```

## Mostrando los Gastos
Realizamos un Destructuring de Obejetos para obtener los datos necesarios para mostrar los Gastos.
```jsx
  const Gasto = ({gasto}) => {
    const {nombre, cantidad, categoria, fecha, id} = gasto

    return (
      <div className="gasto sombra">
        <div className="contenido-gasto">
          <div className="descripcion-gasto">
            <p className="categoria">{categoria}</p>
            <p className="nombre-gasto">{nombre}</p>
          </div>
        </div>
      </div>
    )
  }
```

Le agregamos al Objeto de Gasto en el App.jsx una Fecha que se crea junto con el ID al momento en el que se ejecuta la Funcion de guardarGasto.
```jsx
  const guardarGasto = (gasto) => {
    gasto.id = generarId()
    gasto.fecha = Date.now()
    setGastos([...gastos, gasto])
    
    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)
    }, 500);
  }
```

## Formateando Fechas
Para Formatear la Fecha en la cual se genero el Gasto vamos a crear una nueva Funcion dentro de nuestro archivo de `helpers`, **encargada de Formatear la Fecha sin mutar la Fecha Original**.
```js
  export const formatearFecha = (fecha) => {
    const fechaNueva = new Date(fecha);
    const opciones = {
      year: 'numeric',
      month: 'long',
      day: '2-digit'
    };
    return fechaNueva.toLocaleDateString('es-ES', opciones);
  }
```

Luego Importaremos esta Funcion dentro del Componente de Gasto.jsx que es el que se muestra en Pantalla individualmenete por cada uno de los Gastos con su Informacion.
```jsx
  import { formatearFecha } from '../helpers'
  const Gasto = ({gasto}) => {
    const {nombre, cantidad, categoria, fecha, id} = gasto
    return (
      <div>
        <div>
          <div>
            <p>{categoria}</p>
            <p>{nombre}</p>
            <p>
              Agregado el: {''}
              <span>{formatearFecha(fecha)}</span>
            </p>
          </div>
        </div>
        <p>${cantidad}</p>
      </div>
    )
  }
```

## Mostrando el Icono de Gastos
Por cada diferente categoria segun el Gasto dentro del Componente de Gasto.jsx vamos a mostrar una Imagen o Logo correspondiente a su Categoria. Por lo tanto importamos cada una de las Imagenes de cada Categoria como si fueran Compomnentes para posteriormente poder crear un Diccionario de Iconos. Donde como propiedad tiene justamente el mismo valor que el que se envia y se guarda por medio de los Select en el formulario y como propiedad cada una de las Imagenes importadas como Componente, de modo que al coincidir lo que tenemos en el Objeto de Gasto como categoria (que es la enviada desde el value del formulario) va a cargar el Logo asociado importado como Componente.

En Gasto.jsx
```jsx
  import { formatearFecha } from '../helpers'
  import IconoAhorro from '../img/icono_ahorro.svg'
  import IconoCasa from '../img/icono_casa.svg'
  import IconoComida from '../img/icono_comida.svg'
  import IconoGastos from '../img/icono_gastos.svg'
  import IconoOcio from '../img/icono_ocio.svg'
  import IconoSalud from '../img/icono_salud.svg'
  import IconoSuscripciones from '../img/icono_suscripciones.svg'
  const diccionarioIconos = {
    ahorro: IconoAhorro,
    casa: IconoCasa,
    comida: IconoComida,
    gastos: IconoGastos,
    ocio: IconoOcio,
    salud: IconoSalud,
    suscripciones: IconoSuscripciones
  }
  const Gasto = ({gasto}) => {
    const {nombre, cantidad, categoria, fecha, id} = gasto

    return (
      <div>
        <div>
          <img 
            src={diccionarioIconos[categoria]} 
            alt="Icono Categoria" 
          />
          <div>
            <p>{categoria}</p>
            <p>{nombre}</p>
            <p>
              Agregado el: {''}
              <span>{formatearFecha(fecha)}</span>
            </p>
          </div>
        </div>
        <p>${cantidad}</p>
      </div>
    )
  }
```

Un problema que se logra detectar es que al agregar Varios Gastos al Listado de Gastos se produce un Scroll y al momento de que se aprieta el Boton de Agregar Nuevo Gasto y se coloca el Fondo en Negro no cubre la pantalla completa, esto debido al Scroll por lo que al abrir la Ventana Modal para agregar un Nuevo Gasto provoca que el State de modal se coloque en true lo que nos permite en el App.jsx realizar una valdiacion y en caso de que sea verdadero, es decir que la Ventana Modal este abierta podemos colocar una clase para fijar todo el demas contenido de modo que no se pueda hacer Scroll.
```jsx
  <div className={`App ${modal && 'fijar'}`}>
```

## Calculando el Presupuesto Gastado - Calculando el Presupuesto Disponible
Para poder calcualr el Presupuesto Disponible y Gastado debemos de pasarle por medio de Props el State del Arreglo de Gastos al Componente de ControlPresupuesto.jsx el cual es el encargado de mostrar tanto el Grafico como los Presupuestos.

Para calcular lo Disponible y lo Gastado dentro del Componente de ControlPresupuesto.jsx vamos a crear un useEffect encargado de detectar cambios en el Arreglo de Gastos, el cual se va a disparar una vez este listo el Componente de ControlPresupuesto.jsx o cuando se produzca en Cambio en el Arreglo de Gastos lo cual nos va a permitir recalcular lo Disponible y lo Gastado y actualizar el State de disponible y gastado, que son los que se van a mostrar en pantalla, provenientes del Componente de ControlPresupuesto.jsx.

Dentro del useEffect vamos a utilizar .reduce() para acumular demtro de una Variable el Total de Gastos contenidos dentro del Arreglo de Gastos.
```jsx
  import { useState, useEffect } from "react";

  const ControlPresupuesto = ({gastos, presupuesto}) => {
    const [dispoible, setDispoible] = useState(0)
    const [gastado, setGastado] = useState(0)
    useEffect(() => {
      // Return implicito de acumulador + valor actual del array, el cual inicio en 0
      const totalGastado = gastos.reduce((acum, gasto) => acum + gasto.cantidad, 0)
      setGastado(totalGastado)
      setDispoible(presupuesto - totalGastado)
    }, [gastos])

    const formatearCantidad = (cantidad) => {
      return cantidad.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      });
    }
    return (
      <div>
        <div>
          <h2>Grafico</h2>
        </div>
        <div className="contenido-presupuesto">
          <p>
            <span>Presupuesto: </span>{formatearCantidad(presupuesto)} 
          </p>
          <p>
            <span>Disponible: </span>{formatearCantidad(dispoible)} 
          </p>
          <p>
            <span>Gastado: </span>{formatearCantidad(gastado)} 
          </p>
        </div>
      </div>
    )
  }
```

## Añadiendo un Efecto de Swipe a cada Gasto para Editar o Eliminar
Para lograr este efecto vamos a instalar una dependencia llamada react-swipeable-list que nos permite hacer un swipe en cualquier lado de la pantalla para poder editar o eliminar un Gasto. Podemos realizar una busqueda de todas estas librerias dentro de la pagina de NPM: [npm](https://www.npmjs.com/)

Lo vamos a instalar mendiante npm: `npm i react-swipeable-list` y `npm i prop-types` si no llega a andar.

Luego en el Componente de Gasto.jsx es donde vamos a colocar la Animacion:
```jsx
  import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
  } from 'react-swipeable-list'
  import 'react-swipeable-list/dist/styles.css'

  const Gasto = ({gasto}) => {
    const {nombre, cantidad, categoria, fecha, id} = gasto

    const leadingActions = () => {
      console.log('Editar')
    }
    const trailingActions = () => {
      console.log('Eliminar')
    }

    return (
      <SwipeableList>
        <SwipeableListItem
          leadingActions={leadingActions()}
          trailingActions={trailingActions()}
        >
        </SwipeableListItem>
      </SwipeableList>
    )
  }
```

## Finalizando el Efecto de Swipe
Estos Componentes son los que permiten hacer el efecto de Swipe, los cuales son los que se encargan de mostrar las acciones que se pueden realizar sobre un Gasto, es decir, Editar o Eliminar. 

Las funciones se van a encargar de Retornar mediande () los Nuevos Componentes necesarios para llevar a cabo las acciones de Editar o Eliminar. Funciones que retornan Componentes mediante ().
```jsx
  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => console.log('Editar')}>
        Editar
      </SwipeAction>
    </LeadingActions>
  )

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => console.log('Eliminar')}>
        Eliminar
      </SwipeAction>
    </TrailingActions>
  )
```

## Detectando el Gasto a Editar al dar Swipe
Debemos detectar el Gasto a Editar y de alli pasarlo a la Ventana Modal para rellenar el Formulario con los Datos del Gasto a Editar.

Dentro del App.jsx vamos a crear un nuevo State gastoEditar donde vamos a guardar el Gasto a Editar. De esta forma vamos a poder Revisar el State de esta Variable y si cambia mostrarlo en la Ventana Modal.
```jsx
  const [gastoEditar, setGastoEditar] = useState({})
```

Pasamos la Funcion de setGastoEditar al Componente de Gasto.jsx para que almacene el Gasto Swipeado a Editar al Arrastrar el Swipe pasandole el Id del Gasto o el Objeto de Gasto correspondiente al Componente (cada Gasto) que tiene asignada la Funcion, en el Momento que realizamos la Accion de Swipe para el lado de Editar se llama la Funcion de leadingActions la cual guarda el Objeto del Gasto correspondiente al Componente Swipeado en el State gastoEditar.
```jsx
  const Gasto = ({gasto, setGastoEditar}) => {
    const {nombre, cantidad, categoria, fecha, id} = gasto

    const leadingActions = () => (
      <LeadingActions>
        <SwipeAction onClick={() => setGastoEditar(gasto)}>
          Editar
        </SwipeAction>
      </LeadingActions>
    )
```

De esta Forma el Gasto {} se pasa al State de gastoEditar el cual se encuentra en el App.jsx y ahora nos encontramos en condiciones de cargarlo en el Formulario de la Ventana Modal, mediante un useEffect al momento de detectar un cambio en el State de gastoEditar y verificar que tenga algo y no pq sea la primera renderizacion cuando se crea el Componente y esta listo.
```jsx
  useEffect(() => {
    if(Object.keys(gastoEditar).length > 0) {
      handleNuevoGasto()
    }
  }, [gastoEditar])
```

## Colocando el Gasto a Editar en el State y en el Formulario
Procedemos a enviar por Medio de Props el Objeto de gastoEditar desde el App.jsx a la Ventana Modal donde verificamos si el Objeto tiene algo o no, para ver si cargamos los datos en el Formulario por ser una Edicion o no cargamos nada por ser una Nueva Carga. Utilizamos para ello un useEffect que detecte cuando el Componente de Modal este listo debido a que se monta y se desmonta cada vez que lo abrimos o cerramos, no esta presente todo el tiempo. Cuando el useEffect detecte que el Componente de Modal este listo se ejecuta la Funcion que carga los datos del Gasto a Editar en el Formulario, verificando previamente si el Objeto de gastoEditar tiene contenido.

En Modal.jsx:
```jsx
  useEffect(() => {
    if(Object.keys(gastoEditar).length > 0) {
      setNombre(gastoEditar.nombre)
      setCantidad(gastoEditar.cantidad)
      setCategoria(gastoEditar.categoria)
    }
  }, [])
```

Dentro del App.jsx definimos las funciones por separado debido a que:
- La **Funcion handleNuevoGasto()** es la que se encarga de abrir la Ventana Modal al momento de presionar el Boton para Agregar un Nuevo Gasto, lo que implica que el Formulario debe encontrarse vacio, es decir no debe cargarse con el Contenido del Objeto de gastoEditar, por lo que **al momento de ejecutar la Funcion handleNuevoGasto() vaciamos el State de gastoEditar** para que al Comprobar dentro de la Ventana Modal encuentre el Objeto de gastoEditar vacio y el Formulario se cargue vacio y con los datos por default.
- El useEffect se encarga practicamente de lo mismo que la Funcion de handleNuevoGasto() pero con la diferencia de que no vacia el State del Objeto de gastoEditar, sino que al detectar un cambio en el Objeto de gastoEditar (validando que sea porque se agrego contenido y no porque es la primera vez que se crea el Componente) llama y levanta a la Ventana Modal, la cual en su Componente se encarga de Validar mediante un useEffect al estar listo el Componente Modal.jsx si el State de gastoEditar tiene contenido y al si tenerlo carga los datos dentro del Formulario.

Esta metodologia nos permite limpiar el Formulario al agregar un Nuevo Gasto o cargar el Gasto en el Formulario al Presionar o Deslizar el Swipe para Editar.
```jsx
  const handleNuevoGasto = () => {
    setGastoEditar({})
  }
```
```jsx
  useEffect(() => {
    if(Object.keys(gastoEditar).length > 0) {
      setModal(true)

      setTimeout(() => {
        setAnimarModal(true)
      }, 500);
    }
  }, [gastoEditar])

  const handleNuevoGasto = () => {
    console.log('Nuevo Gasto')
    setModal(true)
    setGastoEditar({})

    setTimeout(() => {
      setAnimarModal(true)
    }, 500);
  }
```

El useEffect se encargar de Modal.jsx se encarga de revisar cuando el Componenete este listo y no cuando cambie el Objeto de gastoEditar debido a que el Componente de Modal se monsta y se desmonta, y en cualquier caso, durante su existencia el Objeto de gastoEditar no varia como para que detecte un cambio del mismo, por eso se ejecuta el useEffect cuando el Componente de Modal este montado, se valida si gastoEditar tiene datos y en ese caso se cargan en el Formulario.

## Editando los Gastos
Primero dentro de Modal vamos a crear un Condicional que Cambie el Texto segun estemos Editando o Agregando un Nuevo Gasto.
```jsx
  <input 
    type="submit" 
    value={gastoEditar.nombre ? 'Guardar Cambios' : 'Agregar Gasto'} 
  />
```

Luego dentro de Modal.jsx vamos a crear un nuevo State con el Id para de esta manera poder identificar si estamos Creando un Nuevo Registro o Editando uno ya existente. Debido a que en el Modal.jsx tenemos por un lado el UseEffect que se ejecuta cuando detecta que el Objeto de gastoEditar tiene contenido (por lo cual alli debemos setear tambien el atributo ahi para luego al enviar el Formulario el Objeto de Gasto tenga su correspondiente ID) y por el otro la Funcion de handleSubmit la cual es la encargada de enviar el Objeto de gasto (al cual le vamos a agregar el Id) al App.jsx para que este sea agregado al Arreglo de Gastos.
```jsx
  const [id, setId] = useState(gastoEditar.id || '')
```

Desde Modal.jsx se envia el Objeto `{nombre, cantidad, categoria, id}` a la Funcion guardarGasto() del App.jsx. Si el Objeto es nuevo el ID se envia desde el Formulario de Modal como "" sin ningun valor a la Funcion de guardarGasto(). Si estuvieramos Editando el useEffect de Modal.jsx que controla si el Objeto de gastoEditar tiene contenido, asigna el valor del ID del Objeto a Editar en el State de ID de forma que luego al apretar el Boton para enviar el Formulario y ejecutarse la Funcion de handleSubmit de Modal.jsx se envia el Objeto con el ID ya asignado cuando este fue creado. Si en la Funcion de guardarGasto de App.jsx detectamos que ya tiene un ID es porque estamos editando, en caso contrario es un nuevo registro por lo que debemos generarle un nuevo ID.

En Modal.jsx
```jsx
  const [fecha, setFecha] = useState('')
  const [id, setId] = useState('')
  // ID y Fecha que se generan en el App.jsx al crear un NUEVO GASTO en guardarGasto()
  // Si es un Nuevo Registro estos campos no existen y no se lanza el useEffect, por lo tanto se envian a la Funcion de guardarGasto() del App.jxs como '' y alli se crean

  useEffect(() => {
    if(Object.keys(gastoEditar).length > 0) {
      setNombre(gastoEditar.nombre)
      setCantidad(gastoEditar.cantidad)
      setCategoria(gastoEditar.categoria)
      setFecha(gastoEditar.fecha)
      setId(gastoEditar.id)
    }
  }, [])
  const handleCerrar = () => {
    setAnimarModal(false)

    setTimeout(() => {
      setModal(false)
    }, 500);
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if([nombre, cantidad, categoria].includes('') || cantidad === 0) {
      setMensaje('Todos los campos son obligatorios')
      return setTimeout(() => {
        setMensaje('')
      }, 3000);
    }
    guardarGasto({nombre, cantidad, categoria, fecha, id})
  }
```

En App.jsx
```jsx
  const guardarGasto = (gasto) => {
    console.log(gasto)
    if(gasto.id) {
      // Editar Gasto
      const gastosActualizados = gastos.map(g => g.id === gasto.id ? gasto : g);
      setGastos(gastosActualizados)
    } else {
      // Nuevo Gasto
      gasto.id = generarId()
      gasto.fecha = Date.now()
      setGastos([...gastos, gasto])
    }
    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)
    }, 500);
  }
```

## Eliminar Gastos con Swipe
Dentro del App.jsx creamos la Funcion de eleminarGasto debido a que el Arreglo de gastos se encuentra en el State de gastos del App.jsx por lo que le enviamos a esta Funcion el Id del Objeto a Eliminar asociando un Evento en el Componente de Gasto y la Funcion de eliminarGasto se encargara de Recorrer el Arreglo devolviendo los Objetos cuyos Id no coincida con el que queremos Eliminar teniendo asi un Nuevo Arreglo el cual seteamos con setGastos() de forma que quede eliminado el Objeto que seleccionamos.

Previamente debemos pasar la Funcion de eliminarGasto por medio de Props al Listado de Gastos y de ahi a cada Gasto en particular para asociar esta Funcion al correspondiente Evento.

En App.jsx
```jsx
  const eliminarGasto = (id) => {
    const gastosActualizados = gastos.filter(g => g.id !== id)
    setGastos(gastosActualizados)
  }
```

En Gasto.jsx
```jsx
  const Gasto = ({gasto, setGastoEditar, eliminarGasto}) => {
    const {nombre, cantidad, categoria, fecha, id} = gasto
    const leadingActions = () => (
      <LeadingActions>
        <SwipeAction onClick={() => setGastoEditar(gasto)}>
          Editar
        </SwipeAction>
      </LeadingActions>
    )
    const trailingActions = () => (
      <TrailingActions>
        <SwipeAction 
          onClick={() => eliminarGasto(id)}
          destructive={true}
        >
          Editar
        </SwipeAction>
      </TrailingActions>
    )
    return (
    )
  }
```

Cada vez que Eliminamos un Objeto producimos un Cambio en el State de gastos del App.jsx por lo que se genera un rerender donde se vuelve a cargar el Listado de Gastos con los nuevos Datos y en caso de no haber ningun Objeto en el State de gastos se muestra un Mensaje de que no hay Gastos. Tambien al producirse un rerender se hace un recalculo de Presupuesto Disponible y Gastado debido a que se hizo un cambio en el State de gastos y esto provoca un rerenderizacion en cadena donde se recalcula el Presupuesto Disponible y Gastado.

## Resetear el State al Finalizar un Gasto Editado
Pasamos desde el App.jsx la Funcione setGastoEditar del State gastoEditar a Modal.jsx para que este se encargue de resetear el State gastoEditar al finalizar el Gasto Editado o Cerrar la Ventana Modal. Tambien debemos resetear el State de gastoEditar en la Funcion de guardarGasto del App.jsx luego de guardar el Gasto Editado en el Arreglo de Gastos.

En Modal.jsx
```jsx
  const handleCerrar = () => {
    setAnimarModal(false)
    setGastoEditar({})
    setTimeout(() => {
      setModal(false)
    }, 500);
  }
```

En el App.jsx
```jsx
  const guardarGasto = (gasto) => {
    console.log(gasto)
    if(gasto.id) {
      // Editar Gasto
      const gastosActualizados = gastos.map(g => g.id === gasto.id ? gasto : g);
      setGastos(gastosActualizados)
      setGastoEditar({})
    } else {
      // Nuevo Gasto
      gasto.id = generarId()
      gasto.fecha = Date.now()
      setGastos([...gastos, gasto])
    }
    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)
    }, 500);
  }
```

## Agregando una Grafica Circular para el COntrol del Presupuesto
Tendremos una Grafica Circular que se va a actualizar cada vez que se produce un cambio en el State de gastos del App.jsx y en base a ello se va a actualizar la Grafica segun el Porcentaje de Presupuesto gastado, para ello instalaremos una dependencia llamada `react-circular-progressbar` la cual instalamos mediante: `npm install react-circular-progressbare` y la importamos en el ControlPresupuesto.jsx que es donde se encuentra el espacio para el Grafico. Este Componente es el que se importa como Header.

En ControlPresupuesto.jsx
```jsx
  import { CircularProgressbar } from 'react-circular-progressbar'
  import 'react-circular-progressbar/dist/styles.css'
  const [porcentaje, setPorcentaje] = useState(0)
  return (
    <div>
      <div>
        <h2>
          <CircularProgressbar 
            value={porcentaje}
          />
        </h2>
      </div>
      <div>
        <p>
          <span>Presupuesto: </span>{formatearCantidad(presupuesto)} 
        </p>
        <p>
          <span>Disponible: </span>{formatearCantidad(dispoible)} 
        </p>
        <p>
          <span>Gastado: </span>{formatearCantidad(gastado)} 
        </p>
      </div>
    </div>
  )
```

## Calcular el Porcentaje de Presupuesto Gastado para la Grafica Circular
En el Componente de ControlPresupuesto.jsx donde se encuentra la Grafica vamos a realizar el Calculo del Porcentaje de Presupuesto Gastado para la Grafica Circular dentro del useEffect el cual se ejecuta en el caso de que se produzca un cambio en el State del Arreglo de Gastos del App.jsx o la primera vez que se carga el Componente.

En ControlPresupuesto.jsx
```jsx
  useEffect(() => {
    // Return implicito de acumulador + valor actual del array, el cual inicio en 0
    const totalGastado = gastos.reduce((acum, gasto) => acum + gasto.cantidad, 0)
    setGastado(totalGastado)
    setDispoible(presupuesto - totalGastado)

    // Calcular porcentaje gastado
    const porcentajeGastado = (totalGastado * 100) / presupuesto
    setTimeout(() => {
      setPorcentaje(porcentajeGastado)
    }, 500);
  }, [gastos])
```

## Personalizar la Grafica Circular con Estilos
En ControlPresupuesto.jsx
```jsx
  import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
  import 'react-circular-progressbar/dist/styles.css'
  <CircularProgressbar
    styles={buildStyles({
      pathColor: '#3B82F6',
      trailColor: '#f5f5f5'
    })}
    value={porcentaje}
  />
```

## Mostrando Textos en la Grafica Circular
Al tener en el Texto que imprime la Grafica Circular el Porcentaje Gastado como Valor del State de la Variable porcentaje que tiene el calculo del porcentaje gastado este texto se rerenderiza automaticamente cuando se detecta un cambio en su State y se actualiza el valor del Texto. Esta se actualiza al momento en el que se actualiza el State del Arreglo de Gastos.

En ControlPresupuesto.jsx
```jsx
  <CircularProgressbar
    styles={buildStyles({
      pathColor: '#3B82F6',
      trailColor: '#f5f5f5',
      textColor: '#3B82F6',
    })}
    value={porcentaje}
    text={`${porcentaje.toFixed(2)}% Gastado`}
  />
```

## Colocar el Presupuesto en LocalStorage
Para no perder todos los gastos almacenamos en LocalStorage el State del Arreglo de Gastos que contiene todos los Gastos que se han registrado y el Presupuesto que se ha establecido.

Dentro del Componente Principal de App.jsx vamos a tener un useEffect donde va a tener como **dependencia** el State de Presupuesto, por lo que cada vez que Presupuesto cambie se va a guardar en LocalStorage. Este cambio ocurre una unica vez al momento de que se carga el Componente o se carga un Presupuesto valido (se ejecuta cada vez que va cambiando el Presupuesto al ingresarlo al Input por el Evento onChange de React).

En App.jsx
```jsx
  useEffect(() => {
    localStorage.setItem('presupuesto', JSON.stringify(presupuesto) ?? 0)
  }, [presupuesto])
```
Este Codigo lo que provoca es que al detectar un cambio en el State de Presupuesto se va a guardar en LocalStorage el Presupuesto que se ha ingresado. El problema es que al recargar la Aplicacion el State de Presupuesto se carga en 0, por lo que el useEffect se ejecuta al menos una vez al crearse el Componente (o al detectar un cambio en el Presupuesto) y debido a ello al Cambiar el State con ese valor de 0 se va a guardar en LocalStorage el valor 0. Lo solucionaremos colocando el State de Presupuesto como valor inicial lo que haya en LocalStorage (convirtiendolo a Numero) o en 0 si no hay nada en LocalStorage.
```jsx
    const [presupuesto, setPresupuesto] = useState(Number(localStorage.getItem('presupuesto')) ?? 0)
  useEffect(() => {
    localStorage.setItem('presupuesto', JSON.stringify(presupuesto) ?? 0)
  }, [presupuesto])
```

Ahora lo que podemos hacer, si el Presupuesto ya esta definido y es valido saltar la pantalla de Cargar de Presupuesto y mostrar el Listado de Presupuesto. Esto lo haremos con otro useEffect dentro de App.jsx que se ejecutara una unica vez al momento de que se carga el Componente Principal. Al momento de Cargarse el Componente Principal y verificar que este listo mediante el useEffect vamos a tomar el Presupuesto que esta en LocalStorage (convirtiendolo a Numero) y vamos a Validar si es mayor que 0 o es un Presupuesto Valido. En caso afirmativo seteamos el State de isValidPresupuesto a true (lo que provoca es que se produce un cambio en el State de isValidPresupuesto desencadenando una rerenderizacion donde al ser valido el Presupuesto y isValidPresupuesto estar en true pasa la validacion del ternario y se cargan los Componentes de ListadoGastos.jsx y el Boton para Agregar Nuevo Gasto)y mostramos el Listado de Gastos.
```jsx
  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem('presupuesto'))
    if(presupuestoLS > 0) {
      setIsValidPresupuesto(true)
    }
  } , [])
```

## Colocar los Gastos en el LocalStorage
Vamos a almacenar los Gastos del State del Arreglo de Gastos en el LocalStorage y tambien cargar los gastos en el State del Arreglo de Gastos al iniciar la Aplicacion desde el LocalStorage y si no hay nada cargar un Arreglo Vacio como Valor por Default.

Al descargarse los Gastos en el State de Gasts React detecta un cambio por lo que realiza una rerenderizacion donde si hay Gastos se va a generear el Correspondiente Listado de Gastos y se van a Calcular los Presupuestos Disponibles y Gastados automaticamente a causa de la rerenderizacion de los Componentes debido a ese cambio en el State. Y si agrego un Nuevo Gasto esto produce un Cambio en el State de Gastos y se ejecuta el useEffect que escucha por los cambios en Gastos o cuando el Componente se monta, almacenando en LcoalStorage el State Arreglo de Gastos.

En App.jsx
```jsx
  const [gastos, setGastos] = useState(JSON.parse(localStorage.getItem('gastos')) ?? [])
  const [presupuesto, setPresupuesto] = useState(Number(localStorage.getItem('presupuesto')) ?? 0)
  useEffect(() => {
    localStorage.setItem('presupuesto', JSON.stringify(presupuesto) ?? 0)
  }, [presupuesto])

  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? [])
  }, [gastos])

  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem('presupuesto'))
    if(presupuestoLS > 0) {
      setIsValidPresupuesto(true)
    }
  } , [])
```

## Creando un Filtro de Categorias de Gastos
Creamos un Nuevo Componente de Filtros.jsx el cual se va a ubicar dentro del App.jsx previo al ListadoGastos.jsx dentro de la Validacion de isValidPresupuesto y va a contener un Formulario para que el usuario pueda filtrar los Gastos por Categoria a partir de un Evento onChange de React.

En App.jsx
```jsx
  {isValidPresupuesto && (
    <>
      <main>
        <Filtros 
        
        />
        <ListadoGastos 
          gastos={gastos}
          setGastoEditar={setGastoEditar}
          eliminarGasto={eliminarGasto}
        />
      </main>

      <div className="nuevo-gasto">
        <img 
          src={IconoNuevoGasto}
          alt="Icono Nuevo Gasto" 
          onClick={handleNuevoGasto}
        />
      </div>
    </>
  )}
```

Para evitar tener que pasar el Arreglo de Gastos al Componente de Filtros y luego devolver los Gastos Filtrados al App.jsx, podemos crear dentro del App.jsx un Nuevo State donde almacenaremos la Categoria del Gasto Filtrado y al Componente de Filtros.jsx solo el pasaremos la Funcion de setFiltro para que se almacene el Value del Filtro Selecciondo mediante el Evento onChange de React en el State de Filtro y el State de Filtro para poder asignarlo como Value y que se muestre en Pantalla.
```jsx
  const [filtro, setFiltro] = useState('')
  {isValidPresupuesto && (
    <>
      <main>
        <Filtros 
          filtro={filtro}
          setFiltro={setFiltro}
        />

        <ListadoGastos 
          gastos={gastos}
          setGastoEditar={setGastoEditar}
          eliminarGasto={eliminarGasto}
        />
      </main>

      <div className="nuevo-gasto">
        <img 
          src={IconoNuevoGasto}
          alt="Icono Nuevo Gasto" 
          onClick={handleNuevoGasto}
        />
      </div>
    </>
  )}
```

En Filtros.jsx
```jsx
  import { useState, useEffect } from 'react'
  const Filtros = ({filtro, setFiltro}) => {
    return (
      <div className='filtros sombra contenedor'>
        <form>
          <div className="campo">
            <label htmlFor="filtro">Filtrar Gastos</label>
            <select 
              name="filtro" 
              id="filtro"
              value={filtro}
              onChange={e => setFiltro(e.target.value)}
            >
              <option value="" disabled>-- Seleccione --</option>
              <option value="ahorro">Ahorro</option>
              <option value="comida">Comida</option>
              <option value="casa">Casa</option>
              <option value="gastos">Gastos Varios</option>
              <option value="ocio">Ocio</option>
              <option value="salud">Salud</option>
              <option value="suscripciones">Suscripciones</option>
            </select>
          </div>
        </form>
      </div>
    )
  }
```

Posteriormente dentro del App.jsx vamos a crear un Nuevo useEffect que este escuchando por los cambios que sucedan en el State de Filtro y si hay un Cambio en el State de Filtro se va a filtrar los Gastos por Categoria del Arreglo de Gastos mediante el Array Method de Filter y se va a actualizar el State de Gastos Filtrados con los Gastos Filtrados. Tanto Map como Filter devuelven un Nuevo Arreglo sin modificar el Arreglo Original por lo que si no seleccionamos ninguna Categoria para Filtrar se utiliza el Arreglo Principal.

En App.jsx
```jsx
  useEffect(() => {
    if(filtro) {

    }
  } , [filtro])
```

## Colocando Gastos Filtrados en el State
Debemos crear un Nuevo State para Almacenar el Arreglo con los Gastos Filtrados ya que si Sobreescribimos Sobre los Gastos Originales se va a perder la referencia al Guardarse en el LocalStorage.

En App.jsx
```jsx
  const [filtro, setFiltro] = useState('')
  const [gastosFiltrados, setGastosFiltrados] = useState([])
  useEffect(() => {
    if(filtro) {
      setGastosFiltrados(gastos.filter(gasto => gasto.categoria === filtro))
    }
  }, [filtro])
```

## Mostrando los Gastos Filtrados
Teniendo ya el Arreglo de Gastos Filtrados debemos pasarselo al Componente de ListadoGastos.jsx junto con el Filtro para mostrar en Pantalla los Gastos Filtrados en caso de que los haya y si no se han filtrado ningun Gasto se mostraran todos los Gastos Originales.

En App.jsx
```jsx
  <ListadoGastos 
    gastos={gastos}
    setGastoEditar={setGastoEditar}
    eliminarGasto={eliminarGasto}
    filtro={filtro}
    gastosFiltrados={gastosFiltrados}
  />
```

Dentro de ListadoGastos.jsx vamos a Validar que si Filtro existe (o si hay algo dentro de la Variable) entonces queremos Iterar sobre el Arreglo de Gastos Filtrados y si no existe Filtro entonces queremos Iterar sobre el Arreglo de Gastos Originales.

En ListadoGastos.jsx
```jsx
  import Gasto from "./Gasto"
  const ListadoGastos = ({gastos, setGastoEditar, eliminarGasto, filtro, gastosFiltrados}) => {
    return (
      <div className="listado-gastos contenedor">
        { filtro ? (
          <>
            <h2>{gastosFiltrados.length ? 'Gastos' : 'No hay Gastos en esta Categoria'}</h2>
            {gastosFiltrados.map(gasto => 
              <Gasto 
                key={gasto.id} 
                gasto={gasto}
                setGastoEditar={setGastoEditar}
                eliminarGasto={eliminarGasto}
              />)
            }
          </>
          ) : (
            <>
              <h2>{gastos.length ? 'Gastos' : 'No hay Gastos'}</h2>
              {gastos.map(gasto => 
                <Gasto 
                  key={gasto.id} 
                  gasto={gasto}
                  setGastoEditar={setGastoEditar}
                  eliminarGasto={eliminarGasto}
                />)
              }
            </>
          )
        }
      </div>
    )
  }
```

## Cambiando la Apariencia de Presupuesto Disponible si ya fue Agotado
Dentro del Componente de ControlPresupuesto.jsx el cual contiene el Grafico y los Presupuestos Disponible y Gastado vamos a Validar si el Presupuesto Disponible es Menor o Igual a 0 y si es asi entonces queremos mostrar el Presupuesto en Color Rojo.

En ControlPresupuesto.jsx
```jsx
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <h2>
          <CircularProgressbar
            styles={buildStyles({
              pathColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
              trailColor: '#f5f5f5',
              textColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
            })}
            value={porcentaje}
            text={`${porcentaje.toFixed(2)}% Gastado`}
          />
        </h2>
      </div>

      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto: </span>{formatearCantidad(presupuesto)} 
        </p>

        <p className={`${disponible < 0 && 'negativo'}`}>
          <span>Disponible: </span>{formatearCantidad(disponible)} 
        </p>

        <p>
          <span>Gastado: </span>{formatearCantidad(gastado)} 
        </p>
      </div>
    </div>
  )
```

## Añadiendo un Boton para Reiniciar la Aplicacion
Dentro del Componente de ControlPresupuesto.jsx donde se encuentra el Grafico Circular y los Presupuestos Disponible y Gastados vamos a Agregar un Boton para Reiniciar la Aplicacion el Cual va a Formatear el Presupuesto a 0 y a Eliminar todos los Gastos o Setear el Arreglo de Gastos a [] por lo que debemos pasasr por medio de Props el Presupuesto junto con su Funcion Set y el Arreglo de Gastos junto con su Funcion Set al Componente de Header.jsx y de alli al Componente de ControlPresupuesto.jsx para que se Resetee el Presupuesto y el Arreglo de Gastos. Tambien debemos Resetear el State de isValidPresupuesto del App.jsx para que al Cambiar de Estado se rerenderice la App y nos Envie de Nuevo al Pagina Principal al detectar que el State de isValidPresupuesto es false.

En ControlPresupuesto.jsx
```jsx
  const handleResetApp = () => {
    const resultado = confirm('¿Estas seguro de resetear la aplicación?')
    if(resultado) {
      setGastos([])
      setPresupuesto(0)
      setIsValidPresupuesto(false)
    }
  }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <h2>
          <CircularProgressbar
            styles={buildStyles({
              pathColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
              trailColor: '#f5f5f5',
              textColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
            })}
            value={porcentaje}
            text={`${porcentaje.toFixed(2)}% Gastado`}
          />
        </h2>
      </div>

      <div className="contenido-presupuesto">
        <button
          className="reset-app"
          type="button"
          onClick={handleResetApp}
        >
          Resetear App
        </button>
        <p>
          <span>Presupuesto: </span>{formatearCantidad(presupuesto)} 
        </p>

        <p className={`${disponible < 0 && 'negativo'}`}>
          <span>Disponible: </span>{formatearCantidad(disponible)} 
        </p>

        <p>
          <span>Gastado: </span>{formatearCantidad(gastado)} 
        </p>
      </div>
    </div>
  )
```

## Deployment del Proyecto
Creamos la Version de Produccion (no de Desarrollo) mediante el Comando `npm run build` haciendo uso de Vite, subimos el Repositorio a Github y desde Netlify podemos ver el Proyecto en Produccion subiendolo directamente desde el Repositorio de Github.