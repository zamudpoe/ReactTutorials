import React, { Component } from 'react'
import { Logo }             from './components/funcionales/Logo'
import './App.css'
import HookCounterFour from './components/funcionales/HookCounterFour';

class App extends Component {
  render () {
    console.log('%cReactJS Tutorial: %c48 - useState with array\n\n\t%c', 'color:teal; font-size:2em;', 'color: tomato; font-size: 1.8em;','color: orange; font-size: 1.6em;')

    return (
      <div className='App'>
        <Logo />
        <br />
        <HookCounterFour />
      </div>
    )
  }
}

export default App

/*
  :::::::::::::::::::::::::::::::::::: 48 useState with Array ::::::::::::::::::::::::::::::::::::

  ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: RESUMEN - useState

   * El HOOK useState te permite aagregar ESTADO a componentes funcionales.
   * En Clases, el ESTADO es SIEMPRE un OBJETO
   * Con useState Hook , el ESTADo no tiene que ser un OBJETO
   * El HOOK useState retorna un arreglo con 2 elementos.
   * El primer elemento es el valor actual del estado, y el segundo elemento es una
      funcion seteadora del ESTADO.

   * El NUEVO valor del ESTADO depende del VALOR del ESTADO ANTERIOR??,
      R: Se puede pasar una FUNCION A LA FUNCION SETEADORA DEL ESTADO.

   * Cuando estamos lidiando con OBJECTOS ó ARRAY , siempre asegurate de propagar
      tu variable de ESTADO y entonces llama a la FUNCION seteadora


*/
