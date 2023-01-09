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
