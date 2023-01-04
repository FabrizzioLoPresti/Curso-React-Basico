import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'

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
  transition-duration: .3s;
  transition-timing-function: ease-in;
  &:hover {
    background-color: #7A7DFE;
    cursor: pointer;
  }
`

const Formulario = () => {

  const [selectMonedas] = useSelectMonedas()
  selectMonedas()
  return (
    <form>

      <InputSubmit type="submit" value="Cotizar" />
    </form>
  )
}

export default Formulario