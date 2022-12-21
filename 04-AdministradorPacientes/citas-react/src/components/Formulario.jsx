import React from 'react'

const Formulario = () => {
  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
      <p className='text-lg mt-5 mb-10 text-center'>
        Agrega Pacientes y {''}
        <span className='font-bold text-indigo-600'>Administralos</span>
      </p>

      <form className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
        <div className="campo mb-5">
          <label 
            htmlFor="mascota" 
            className='block text-gray-700 uppercase font-bold'
          >
            Nombre Mascota
          </label>
          <input 
            type="text" 
            placeholder='Nombre de la mascota'
            name="mascota" 
            id="mascota" 
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          />
        </div>

        <div className="campo mb-5">
          <label 
            htmlFor="propietario" 
            className='block text-gray-700 uppercase font-bold'
          >
            Nombre Propietario
          </label>
          <input 
            type="text" 
            placeholder='Nombre del propietario'
            name="propietario" 
            id="propietario" 
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          />
        </div>

        <div className="campo mb-5">
          <label 
            htmlFor="email" 
            className='block text-gray-700 uppercase font-bold'
          >
            E-Mail
          </label>
          <input 
            type="email" 
            placeholder='E-Mail del propietario'
            name="email" 
            id="email" 
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          />
        </div>

        <div className="campo mb-5">
          <label 
            htmlFor="alta" 
            className='block text-gray-700 uppercase font-bold'
          >
            Fecha de Alta
          </label>
          <input 
            type="date" 
            name="alta" 
            id="alta" 
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          />
        </div>

        <div className="campo mb-5">
          <label 
            htmlFor="sintomas" 
            className='block text-gray-700 uppercase font-bold'
          >
            Sintomas
          </label>
          <textarea 
            name="sintomas" 
            id="sintomas" 
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md resize-none'
            placeholder='Describe los sintomas'
          />
        </div>

        <input 
          type="submit" 
          value="Agregar Paciente"
          className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all'
        />
      </form>
    </div>
  )
}

export default Formulario