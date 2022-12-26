import { useEffect } from 'react'
import Paciente from './Paciente'

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  useEffect(() => {
    if(pacientes.length > 0) {
      console.log('Se agrego un nuevo paciente')
    }
  }, [pacientes])

  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll'>

      {pacientes && pacientes.length ? 
        (
          <>
            <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
            <p className='text-lg mt-5 mb-10 text-center'>
              Administra tus {''}
              <span className='font-bold text-indigo-600'>Pacientes y Citas</span>
            </p>
            
            {pacientes.map(paciente => 
                // Return Implicito
                <Paciente 
                  key={paciente.id}
                  paciente={paciente}
                  setPaciente={setPaciente}
                  eliminarPaciente={eliminarPaciente}
                />
            )}
          </>
        ) : 
        (
          <>
            <h2 className='font-black text-3xl text-center'>No hay pacientes</h2>
            <p className='text-lg mt-5 mb-10 text-center'>
              Comienza agregando pacientes {''}
              <span className='font-bold text-indigo-600'>y apareceran aqui</span>
            </p>
          </>
        )
      }

      
    </div>
  )
}

export default ListadoPacientes