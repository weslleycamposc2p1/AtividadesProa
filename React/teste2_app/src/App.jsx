import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import filme from './assets/img/De volta Para o Futuro.jpg'


import './App.css'
function App() {
  let nome = "lançamento"
  let idade = 1985

  return (
    <>
      <h1>Filme do Ano!</h1>
      <img src={filme} alt="De volta Para o Futuro" />
      {nome} = {typeof(nome)}
      <br />
      {idade} = {typeof(idade)}
    </>
  )
}

export default App
