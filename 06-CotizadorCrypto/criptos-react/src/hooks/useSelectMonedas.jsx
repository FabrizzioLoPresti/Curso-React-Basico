import { useState, useEffect } from 'react'

const useSelectMonedas = () => {
  
  const selectMonedas = () => {
    console.log('Desde Custom Hook')
  }

  return [
    selectMonedas
  ]
}

export default useSelectMonedas