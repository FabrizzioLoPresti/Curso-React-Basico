import React from 'react'

const Paciente = () => {
  return (
    <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl'>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Nombre: {''}
        <span className='font-normal normal-case'>Hook</span>
      </p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Propietario: {''}
        <span className='font-normal normal-case'>Juan</span>
      </p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>
        E-Mail: {''}
        <span className='font-normal normal-case'>juan@gmail.com</span>
      </p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Fecha de Alta: {''}
        <span className='font-normal normal-case'>10 de Diciembre de 2022</span>
      </p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Sintomas: {''}
        <span className='font-normal normal-case'>Solo duerme</span>
      </p>
    </div>
  )
}

export default Paciente