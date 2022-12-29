import { useState } from 'react'
import CerrarBtn from '../assets/img/cerrar.svg'

const Modal = ({setModal, animarModal, setAnimarModal}) => {

  const [nombre, setNombre] = useState('')
  const [cantidad, setCantidad] = useState('')
  const [categoria, setCategoria] = useState('')

  const handleSubmit = e => {
    e.preventDefault()



  }

  const handleCerrarModal = () => {
    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)
    }, 500)
  }

  return (
    <div className='modal'>
      <div className="cerrar-modal">
        <img 
          src={CerrarBtn} 
          alt="Cerrar modal" 
          onClick={handleCerrarModal}
        />
      </div>

      <form 
        className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}
        onSubmit={handleSubmit}
      >
        <legend>Nuevo Gasto</legend>

        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
          <input 
            type="text" 
            name="nombre" 
            id="nombre" 
            placeholder='Agrega el Nombre del Gasto'
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>

        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input 
            type="number" 
            name="cantidad" 
            id="cantidad" 
            placeholder='Agrega la cantidad del gasto: ej. 300'
            value={cantidad}
            onChange={e => setCantidad(Number(e.target.value))}
          />
        </div>

        <div className="campo">
          <label htmlFor="categoria">Categoria</label>
          <select 
            name="categoria" 
            id="categoria"
            value={categoria}
            onChange={e => setCategoria(e.target.value)}
          >
            <option value="" disabled>-- Seleccione --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="subscripciones">Subscripciones</option>
          </select>
        </div>

        <input 
          type="submit" 
          value="Agregar Gasto" 
        />
      </form>
    </div>
  )
}

export default Modal