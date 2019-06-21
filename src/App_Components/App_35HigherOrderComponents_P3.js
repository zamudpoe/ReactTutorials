import React, { Component } from 'react'
import './App.css'

import { Logo }      from './components/funcionales/Logo'
import ClickCounter  from './components/classComponents/ClickCounter3'
import HooverCounter from './components/classComponents/HooverCounter3'

class App extends Component {
  render () {
    console.log('%cReactJS Tutorial: %c35 - Higher Order Components (Part 3)\n%c .', 'color:teal; font-size:2em;', 'color: tomato; font-size: 1.8em;','color: orange; font-size: 1.6em;')

    return (
      <div className='App'>
        <Logo />
        <ClickCounter name="Engelbert" />
        <HooverCounter />
      </div>
    )

  }

}

export default App

/*
  :::::::::::::::::: C O M P O N E N T E S   D E   A L T O   O R D E N  ( H O C ) (Part 2) ::::::::::::::::::

  Levantar la lógica del 'counter' al padre y pasar los 'props'


                                          PARENT
                                            ⬆ ︎
              ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
              |                                                         |
            props                                                     props
              ︎⬇                                                     ︎   ︎⬇︎
        <ClickCounter /> ---------------- STATE ---------------- <HooverCounter />

  Este concepto es bueno para componentes hijos que comparten codigo repetitivo y se resuelve con HOC Componentes de Alto Orden .

  Componentes de Alto Orden: Es la mejor forma para compartir funcionalidad entre componentes.


  Pasaremos valores a los componentes que usen el HOC
    props      : Desde la instancia del objeto como siempre lo hacemos hacia abajo desde el componente padre.
        OJO: en la envoltura "componente original" pasamos {...this.props} al final para que los
            componentes hijos que usen el HOC puedan ver la props name como siemrpe por medio de this.props.name
            ó haciendo destructuring.

    Parametros : En la funcion HOC por parametro , este parametro lo usaremos en los metodos handler para setState


  En los componentes

*/
