# Proyecto de Administrador de Clientes
Utiliza Tailwind CSS, React Router DOM 6, Formik para los Formularios, API Rest creada con JSON Server, Validaciones de Formularios con Yup, Vite para Gestion de Proyecto React.

## Primeros Pasos con el Proyecto
Primero creamos el Proyecto de React con `npm create vite@latest` para utilizar la ultima Version de Vite. Nos movemos a la carpeta del Proyecto e instalamos las Dependencias con `npm install`. 

Instalamos Tailwind CSS como Dependencias de Desarrollo en el Proyecto mediante Consola con `npm install -D tailwindcss postcss autoprefixer`. Creamos archivos de Configuracion mediante `npx tailwindcss init -p`. En el mismo vamos a colocar cuales archivos van a tener Codigo de TailwindCSS que van a ser el index.html y todos los Componentes de React que se encuentren dentro de src.

```cjs
  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
```

Dentro del App.jsx eliminamos el Contenido del Componente, eliminamos el Contenido del index.css y colocamos las Directivas de TailwindCSS para que se apliquen desde el index.html al resto. Ademas eliminamos el Archivo de App.css y su instancia en el App.jsx.

```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
```

## ¿Que es el Routing?
Vamos a estar creando un CRM que es un Sistema de Gestion de Clientes por lo cual vamos a tener multiples paginas para no tener un unico Componente y mostrar u ocultar partes de forma condicional.

- De momento todas nuestras Aplicaciones han sido de una sola pantalla y cuando hemos requerido mostrar alguna parte o Componente de forma condicional utilizamos un Ternario evaluando Condiciones.
- Con una Libreria de Routing puedes tener diferentes URL's y mostrar diferentes Componentes en base a la URL, asi como restringir mediante autenticacion (Token JWT) el acceso a ciertas paginas.
- Un Proyecto grande es mejor manejarlo en multiples pantallas, en lugar de un solo Componente que revise multiples condiciones.

### Librerias de Routing en React
- React Router DOM V6.4 - Creadores de Remix Run
- React Location - Creadores de React Query
- Frameworks como Next.js, Remix Run, Astro, Gatsby, Hydrogen cuentan con su propio Sistema de Routing

### ¿Que es React Router DOM?
- Es una Libreria para crear Aplicaciones con Routing (diferentes URL's)
- Al tener diferentes paginas tendremos un mejor orden, podemos seguir re-utilizando Componentes y mas.
- A partir de la Version 6.4 de React Router DOM practicamente se convierte en un Framework con Manejo de Rutas, Peticiones HTTP, Formularios y Datos

## Creando el Router y definiendo las primeras Rutas
Primero vamos a instalar la Dependencia en el Proyecto mediante `npm install react-router-dom`.

Eliminamos el Archivo App.jsx y dentro del main,jsx eliminamos el import al Componente de App.jsx.

Lo primero es importar la **Funcion de createBrowserRouter** que permite definir un Router con todas las Rutas por medio de un Objeto Principal y **RouterProvider** el cual va a estar en lugar del Componente de App que se renderizaba anteriormente y va a ser el centro de nuestra Aplicacion, va a ser el Componente a partir del cual comienzan a fluir los Datos hacia los demas Componentes de nuestra Aplicacion.

```jsx
  import React from 'react'
  import ReactDOM from 'react-dom/client'
  import './index.css'
  import { createBrowserRouter, RouterProvider } from 'react-router-dom'

  const router = createBrowserRouter([
    {
      path: '/',
      element: <h1>Inicio</h1> // Elemento HTML o Componente
    },
  ])

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider 
        router={router}
      />
    </React.StrictMode>,
  )
```

## Creando Paginas y Componentes y que es Outlet
En un Proyecto Real lo que menos se busca es repetir codigo, por lo tanto **vamos a querer definir un Diseño Principal donde por cada pagina se mantenga el mismo Header, Footer, etc. y lo unico que cambia es el Contenido Central**. Esto se puede hacer tambien con React Router DOM definiendo un **Layout que tenga Header, Footer y {children}** y utilizando el Componente especial de **Outlet**.

Este **Outlet** va a actuar como un Placeholder, va a actuar como un Contenedor Dinamico y va a mantener la apariencia en cada uno de los Componentes, sin embargo permite con este Outlet que el contenido que le pases donde decidas utilizar este Layout.jsx se va a inyectar a partir del Outlet. El Outlet viene a ser el Prop de {children}.

Tanto el Componente de Index.jsx como el de NuevoCliente.jsx se insertan en el Componente de Layout.jsx mediante el Componente de Outlet proporcionado por React-Router-DOM. En el main.jsx definimos las Rutas y los Componentes a insertar dentro del Layout.jsx como children, para que de esta manera podamos mantener tanto Header como Footer e insertar Contenido en el medio. En Layout.jsx definimos el Header, el Componente de Outlet donde se va a insertar los pasado por children del router del main.jsx y el Footer. Por ultimo en cada Componente de Index.jsx y NuevoCliente.jsx definimos su propio contenido ya que los mismo se insertan en el Outlet entre el Header y el Footer.

En src creamos la Carpeta de components y dentro el Componente Layout.jsx.
```jsx
  import { Outlet } from 'react-router-dom'
  const Layout = () => {
    return (
      <div>
        <h1 className='text-6xl font-bold'>CRM - React</h1>
        <Outlet />
        <h1 className='text-6xl font-bold'>Footer</h1>
      </div>
    )
  }
  export default Layout
```

En main.jsx
```jsx
  import './index.css'
  import { createBrowserRouter, RouterProvider } from 'react-router-dom'
  import Layout from './components/Layout'
  import Index from './pages/Index'
  import NuevoCliente from './pages/NuevoCliente'
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Index />
        },
        {
          path: '/clientes/nuevo',
          element: <NuevoCliente />
        }
      ]
    },
  ])
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider 
        router={router}
      />
    </React.StrictMode>,
  )
```

En src creamos la Carpeta de pages y dentro el Componente NuevoCliente.jsx e Index.jsx
```jsx
  import React from 'react'
  const Index = () => {
    return (
      <div>Clientes</div>
    )
  }
  export default Index

  import React from 'react'
  const NuevoCliente = () => {
    return (
      <div>NuevoCliente</div>
    )
  }
  export default NuevoCliente
```

## Creando el Layout Principal
En Layout.jsx
```jsx
  import { Outlet } from 'react-router-dom'
  const Layout = () => {
    return (
      <div className='md:flex md:min-h-screen'>
        <aside className='md:w-1/4 bg-blue-900 px-5 py-10'>
          <h2 className='text-4xl font-black text-center text-white'>CRM - Clientes</h2>
        </aside>
        
        <main className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
          <Outlet /> // Aqui se inserta el Contenido de cada Componente desde el main.jsx
        </main>
      </div>
    )
  }
  export default Layout
```

## Navegar entre Componentes con Link
Actualmente tenemos solamente dos Pages pero luego vamos a tener mas, por lo que debemos utilizar una forma para navegar entre las mismas que no sea cambiando la URL de forma manual. Para ello React Router DOM nos proporciona una forma optimizada de redireccion mediante el **Componente Link**.

En Layout.jsx
```jsx
  import { Outlet, Link } from 'react-router-dom'
  const Layout = () => {
    return (
      <div className='md:flex md:min-h-screen'>
        <aside className='md:w-1/4 bg-blue-900 px-5 py-10'>
          <h2 className='text-4xl font-black text-center text-white'>CRM - Clientes</h2>

          <nav className='mt-10'>
            <Link className='text-2xl block mt-2 hover:text-blue-300 text-white' to="/">Clientes</Link>
            <Link className='text-2xl block mt-2 hover:text-blue-300 text-white' to="/clientes/nuevo">Nuevo Cliente</Link>
          </nav>
        </aside>
        
        <main className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
          <Outlet />
        </main>
      </div>
    )
  }
  export default Layout
```

## Resaltar la Pagina Actual
Esto lo logramos mediante un Hook propio de React Router DOM, el cual cuenta con una gran cantidad de Hooks propios. **Este Hook es useLocation**.

El Hook de useLocation devuelve un objeto con las siguientes propiedades:
- Hash: Si en la URL se encuentra una seccion tal como #nosotros
- Key: Automaticamente va cambiando a medida que el usuario navega tal como hjubfl54
- Pathname: Ruta en la que nos encontramos actualmente tal como /clientes/nuevo
- Search: Si en la URL se encuentran parametros como una busqueda tal como cliente=20

En Layout.jsx
```jsx
  import { Outlet, Link, useLocation } from 'react-router-dom'
  const Layout = () => {
    const location = useLocation()
    return (
      <div className='md:flex md:min-h-screen'>
        <aside className='md:w-1/4 bg-blue-900 px-5 py-10'>
          <h2 className='text-4xl font-black text-center text-white'>CRM - Clientes</h2>
          <nav className='mt-10'>
            <Link 
              className={`${location.pathname === '/' ? 'text-blue-300' : 'text-white'} text-2xl block mt-2 hover:text-blue-300`}
              to="/"
            >
              Clientes
            </Link>
            <Link 
              className={`${location.pathname === '/clientes/nuevo' ? 'text-blue-300' : 'text-white'} text-2xl block mt-2 hover:text-blue-300`}
              to="/clientes/nuevo"
            >
              Nuevo Cliente
            </Link>
          </nav>
        </aside>
        
        <main className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
          <Outlet />
        </main>
      </div>
    )
  }
```

Tambien se puede utilizar el Hook de NavLink:
```jsx
  import { Outlet, NavLink, useLocation } from 'react-router-dom'
  const Layout = () => {
    const location = useLocation()
    return (
      <div className='md:flex md:min-h-screen'>
        <aside className='md:w-1/4 bg-blue-900 px-5 py-10'>
          <h2 className='text-4xl font-black text-center text-white'>CRM - Clientes</h2>
          <nav className='mt-10'>
            <NavLink
              className={({isActive}) => isActive ? 'text-blue-300 text-2xl block mt-2' : 'text-white text-2xl block mt-2'}
              to={'/'}
            >
              Clientes
            </NavLink>

            <NavLink
              className={({isActive}) => isActive ? 'text-blue-300 text-2xl block mt-2' : 'text-white text-2xl block mt-2'}
              to={'/clientes/nuevo'}
            >
              Nuevo Cliente
            </NavLink>
          </nav>
        </aside>
        
        <main className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
          <Outlet />
        </main>
      </div>
    )
  }
```

## Creando un Loader
Cuando este en la Pagina de Nuevo Cliente deberia aparecer un Formulario para la carga de un Nuevo Cliente, mientras que si me encuentro en la Pagina de Clientes deberia aparecer un Listado con los Clientes actuales ya guardados. Usualmente en React, estos Clientes se almacenarian en un State de React (`const [clientes, setClientes] = useState([])`) luego de consultar la API mediante un Hook de useEffect al momento de cargar y estar listo el Componente. 

Pero en el caso de React Router DOM esto es un poco diferente, nos brinda una **Funcion llamada Loader**, esta Funcion es muy similar a un useEffect y es una Funcion que se va a ejecutar cuando el Componente cargue y este listo, y es ideal para cargar un State o consultar una API. **Esta Funcion de Loader siempre debe retornar algo**.

En main.jsx
```jsx
  import Index, { loader as clientesLoader } from './pages/Index'
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Index />,
          loader: clientesLoader
        },
        {
          path: '/clientes/nuevo',
          element: <NuevoCliente />
        }
      ]
    },
  ])
```

En Index.jsx
```jsx
  export const loader = () => {
    return 'Desde Loader'
  }
  const Index = () => {
    return (
      <>
        <h1 className='font-black text-4xl text-blue-900'>Clientes</h1>
        <p className='mt-3'>Administra tus Clientes</p>
      </>
    )
  }
  export default Index
```

## Obtener los Datos del Loader con useLoaderData
El Loader actua muy similar a un useEffect de React, se va a ejecutar cuando el Componente este listo. Tambien la Funcion de loader() declarada en el Index.jsx debe estar SIEMPRE en minuscula y SIEMPRE debe retornar algo y usualmente siempre va a ser el State del Componente.

Exportamos la Funcion del Loader() hacia el main.jsx donde le decimos dentro del createBrowserRouter que para el Componente de Index.jsx su loader va a ser clientesLoader que lo importamos y renombramos en la parte superior junto con el Import del Componente Index.jsx y de esta manera ya va a estar disponible en el Componente de Index.jsx. 

Dentro del Index.jsx no hay que poner un Import a ningun archivo, tampoco lo mandas a llamar directamente al Loader, sino que se utiliza un Hook totalmente nuevo que se va a encargar de obtener lo que retornes en el Loader que esta asociado a ese Componente (Index.jsx).

En Index.jsx
```jsx
  import { useLoaderData } from 'react-router-dom'
  export const loader = () => {
    const clientes = [
      {
        id: 1,
        nombre: 'Juan',
        telefono: 102013313,
        email: "juan@juan.com",
        empresa: 'Codigo Con Juan'
      },
      {
        id: 2,
        nombre: 'Karen',
        telefono: 138198313,
        email: "karen@juan.com",
        empresa: 'Codigo Con Juan'
      },
    ]
    return clientes
  }

  const Index = () => {
    const datos = useLoaderData()
    console.log( datos )
    return (
      <>
        <h1 className='font-black text-4xl text-blue-900'>Clientes</h1>
        <p className='mt-3'>Administra tus Clientes</p>
      </>
    )
  }
```

## Iterando sobre Clientes y Mostrando la Informacion
Iteramos el Arreglo de Clientes y creamos un Nuevo Componente por cada Cliente, donde por medio de Props enviamos el Key y el Objeto Cliente del Array recorrido.

En Index.jsx
```jsx
  import { useLoaderData } from 'react-router-dom'
  import Cliente from '../components/Cliente'
  export const loader = () => {
    const clientes = [
    ]
    return clientes
  }

  const Index = () => {
    const clientes = useLoaderData()
    return (
      <>
        <h1 className='font-black text-4xl text-blue-900'>Clientes</h1>
        <p className='mt-3'>Administra tus Clientes</p>

        {clientes.length ? 
        (
          <table className='w-full bg-white shadow mt-5 table-auto'>
            <thead className='bg-blue-800 text-white'>
              <tr>
                <th className='p-2'>Clientes</th>
                <th className='p-2'>Contacto</th>
                <th className='p-2'>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map(cliente => (
                <Cliente 
                  key={cliente.id}
                  cliente={cliente}
                />
              ))}
            </tbody>
          </table>
        ) : (
          <p className='text-center mt-10'>No hay clientes aun</p>
        )}
      </>
    )
  }
```

En Cliente.jsx
```jsx
  const Cliente = ({cliente}) => {
    const { id, nombre, telefono, email, empresa } = cliente
    return (
      <tr>
        <td className='p-6'>{nombre}</td>
      </tr>
    )
  }
```

## Mostrando el Resto de la Informacion
En Cliente.jsx
```jsx
  const Cliente = ({cliente}) => {
    const { id, nombre, telefono, email, empresa } = cliente
    return (
      <tr className="border-b">
        <td className="p-6 space-y-2">
          <p className="text-2xl text-gray-800">{nombre}</p>
          <p>{empresa}</p>
        </td>
        <td className="p-6">
          <p className="text-gray-600">
            <span className="text-gray-800 uppercase font-bold">Email: </span>
            {email}
          </p>
          <p className="text-gray-600">
            <span className="text-gray-800 uppercase font-bold">Tel: </span>
            {telefono}
          </p>
        </td>
        <td className="p-6 flex gap-3">
          <button
            type="button"
            className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
          >
            Editar
          </button>

          <button
            type="button"
            className="text-red-600 hover:text-red-700 uppercase font-bold text-xs"
          >
            Eliminar
          </button>
        </td>
      </tr>
    )
  }
```

## Primeros pasos creando el Formulario de Clientes
Vamos a utilizar un Nuevo Hook llamado useNavigate proporcionado por React Router DOM el cual nos va a permitir navegar de forma programada, es decir no de forma fija como los Link o NavLink, sino cuando el Usuario presiona un Button o pasa una Validacion.

Existe otro Hook de React Router DOM llamado `redirect` el cual es ideal cuando trabajamos con Loaders(useEffects de React Router DOM).

En NuevoCliente.jsx
```jsx
  import { useNavigate } from 'react-router-dom'
  const NuevoCliente = () => {
    const navigate = useNavigate()
    return (
      <>
        <h1 className='font-black text-4xl text-blue-900'>Nuevo Cliente</h1>
        <p className='mt-3'>Llena todos los campos para registrar un nuevo cliente</p>

        <div className='flex justify-end'>
          <button
            type='button'
            className='bg-blue-800 text-white px-3 py-1 font-bold uppercase'
            onClick={() => navigate('/')}
            // onClick={() => navigate(-1)}
          >
            Volver
          </button>
        </div>

        <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10'>
          <p>Formulario</p>
        </div>
      </>
    )
  }
  export default NuevoCliente
```

## Agregando el Formulario
Agregamos un Formulario el cual tiene los diferentes Campos con su Label y su Input asociado, ademas el mismo Componente de Formulario toma por medio de Props un Objeto de Cliente, ya que este Componente va a ser reutilizado no solamente para Registrar Nuevos Clientes (Objeto de Cliente vacio), sino tambien para Editar Clientes Existentes (por ello se le pasa al Componente de Formulario por medio de Props un Objeto Cliente con los datos cargados del Cliente a Editar para llenar lso campos del Formulario con estos).

Colocamos el Submit en el Componente de NuevoCliente.jsx (donde se encuentra la etiqueda del Form) por fuera del Componente de Formulario.jsx para hacerlo reutilizable.

Generalmente para asociarle una Funcion al Evento Submit del Formulario se le colocaba al Mismo un Evento OnSubmit de React que detecte el Momento en el que se Envian los datos para llamar una Funcion de HandleSubmit la cual prevenia la accion por default, validaba los datos y mostraba error o los enviaba. Pero con React Router DOM no requieres nada de esto.

En Formulario.jsx
```jsx
  const Formulario = ({ cliente }) => {
    return (
      <>
        <div className="mb-4">
          <label className="text-gray-800" htmlFor="nombre">
            Nombre:
          </label>
          <input
            id="nombre"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Nombre del Cliente"
            name="nombre"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-800" htmlFor="empresa">
            Empresa:
          </label>
          <input
            id="empresa"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Empresa del Cliente"
            name="empresa"
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-800" htmlFor="email">
            E-mail:
          </label>
          <input
            id="email"
            type="email"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Email del Cliente"
            name="email"
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-800" htmlFor="telefono">
            Teléfono:
          </label>
          <input
            id="telefono"
            type="tel"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Teléfono del Cliente"
            name="telefono"
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-800" htmlFor="notas">
            Notas:
          </label>
          <textarea
            as="textarea"
            id="notas"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self"
            placeholder="Notas del Cliente"
            name="notas"
          />
        </div>
      </>
    )
  }
```

En NuevoCliente.jsx
```jsx
  import { useNavigate } from 'react-router-dom'
  import Formulario from '../components/Formulario'

  const NuevoCliente = () => {
    const navigate = useNavigate()
    return (
      <>
        <h1 className='font-black text-4xl text-blue-900'>Nuevo Cliente</h1>
        <p className='mt-3'>Llena todos los campos para registrar un nuevo cliente</p>
        <div className='flex justify-end'>
          <button
            type='button'
            className='bg-blue-800 text-white px-3 py-1 font-bold uppercase'
            onClick={() => navigate('/')}
            // onClick={() => navigate(-1)}
          >
            Volver
          </button>
        </div>

        <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20'>
          <form>
            <Formulario />
            <input 
              type="submit" 
              value="Registrar Cliente" 
              className='mt-5 w-full bg-blue-800 uppercase font-bold text-white text-lg'  
            />
          </form>
        </div>
      </>
    )
  }
```

## Creando un Action para el Formulario
En esta nueva Version de React Router DOM se agrego ademas de Manejo de Rutas, Manejo de Peticiones HTTP (GET (utilizando los Loaders), POST, PUT, PATCH, DELETE), tambien agregando un Componente nuevo para Formularios (`import { Form } from 'react-router-dom'`) y una Funcion para manejar las Peticiones de Tipo POST mediante la creacion de una Funcion action() la cual debemos hacerle saber al Formulario que se mande a llamar al momento en el que el Usuario hace click en el Boton y se manda a llamar el Evento Submit del Formulario. 

En el main.jsx le asociamos dentro del `createBrowserRouter` la Funcion action() que extraemos del Componente de NuevoCliente.jsx renombrandola al Componente de NuevoCliente.jsx donde se encuentra el Form que requiere del action(), de esta manera gracias a React Router DOM se asocia de forma automatica el action que definimos al Formulario y se ejecuta de forma inmediata al momento de que el Usuario hace click en el Input Submit.

En main.jsx
```jsx
  import NuevoCliente, { action as nuevoClienteAction } from './pages/NuevoCliente'
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Index />,
          loader: clientesLoader
        },
        {
          path: '/clientes/nuevo',
          element: <NuevoCliente />,
          action: nuevoClienteAction
        }
      ]
    },
  ])
```

En NuevoCliente.jsx
```jsx
  import { useNavigate, Form } from 'react-router-dom'
  import Formulario from '../components/Formulario'

  export const action = () => {
    console.log( 'Submit al Formulario' )
    return { ok: true }
  }

  const NuevoCliente = () => {
    const navigate = useNavigate()
    return (
      <>
        <h1 className='font-black text-4xl text-blue-900'>Nuevo Cliente</h1>
        <p className='mt-3'>Llena todos los campos para registrar un nuevo cliente</p>
        <div className='flex justify-end'>
          <button
            type='button'
            className='bg-blue-800 text-white px-3 py-1 font-bold uppercase'
            onClick={() => navigate('/')}
            // onClick={() => navigate(-1)}
          >
            Volver
          </button>
        </div>

        <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20'>
          <Form
            method='POST'
          >
            <Formulario />
            <input 
              type="submit" 
              value="Registrar Cliente" 
              className='mt-5 w-full bg-blue-800 uppercase font-bold text-white text-lg'  
            />
          </Form>
        </div>
      </>
    )
  }
```

## Leer la Informacion Ingresada a un Formulario con FormData
En NuevoCliente.jsx
```jsx
  export const action = async ({ request }) => {
    console.log( request )

    const formData = await request.formData()
    console.log( ...formData )

    const datos = Object.fromEntries(formData)
    console.log( datos )

    return { ok: true }
  }
```

## Añadir Validacion al Formulario
