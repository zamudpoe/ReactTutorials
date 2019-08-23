import React from './node_modules/react'
import './App.css'

import { Logo } from '../components/funcionales/Logo'
import Greet from '../components/funcionales/Greet'
import GreetClassComponent from '../components/classComponents/Greet'

function App () {
  console.log('%cReactJS Tutorial: %c5 - Functional Components', 'color:teal; font-size:3em;', 'color: tomato; font-size: 2em;')
  return (
    <div className="App" >
      <Logo />    {/* Functional component */}
      <Greet />   {/* Functional component */}
      <GreetClassComponent />  {/* Class component */}
    </div>
  )
}

export default App

/*
  Functional VS Class Components

  Functional
  * Los componentes funcionales son simples funciones JS que reciben props y regresan declaraciones.
  * Se recomienda usar los componentes funcionales tanto como sea posible.
  * Ausencia de la palabra reservada 'this'
  * Solucion sin usar un 'Estado'
  * Principalmente responsables del UI
  * Conocidos tambien como 'Stateless' , 'Dumb', 'Presentational'

  Class Components
  * Son mas ricos en caracteristicas
  * Mantienen su propio DATA-STATE
  * Contienen Logica compleja UI
  * Proveen lifecycle hooks
  *


*/
