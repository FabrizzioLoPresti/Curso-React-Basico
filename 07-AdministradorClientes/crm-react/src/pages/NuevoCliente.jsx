import { useNavigate, Form } from 'react-router-dom'
import Formulario from '../components/Formulario'

export const action = async ({ request }) => {
  // console.log( request )

  const formData = await request.formData()
  // console.log( ...formData )

  const datos = Object.fromEntries(formData)
  // console.log( datos )

  // Validacion

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

export default NuevoCliente