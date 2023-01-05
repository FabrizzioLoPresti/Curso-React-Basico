import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'

const InputSubmit = styled.input`
margin-top: 30px;
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
  transition-duration: .3s;
  transition-timing-function: ease-in;
  &:hover {
    background-color: #7A7DFE;
    cursor: pointer;
  }
`

const Formulario = () => {

  const [SelectMonedas] = useSelectMonedas('Elige tu moneda', monedas)
  // const [SelectCriptomonedas] = useSelectMonedas('Elige tu Criptomoneda')
  // SelectMonedas()
  return (
    <form>
      <SelectMonedas />
      {/* <SelectCriptomonedas /> */}
      <InputSubmit type="submit" value="Cotizar" />
    </form>
  )
}

export default Formulario