import React, { Component } from 'react'
import './App.css'

import { Logo }      from './components/funcionales/Logo'
import ClickCounter  from './components/classComponents/ClickCounter2'
import HooverCounter from './components/classComponents/HooverCounter2'

class App extends Component {
  render () {
    console.log('%cReactJS Tutorial: %c34 - Higher Order Components (Part 2)\n%c .', 'color:teal; font-size:2em;', 'color: tomato; font-size: 1.8em;','color: orange; font-size: 1.6em;')

    return (
      <div className='App'>
        <Logo />
        <ClickCounter />
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


  Son un PATRON donde una funcion toma un componente como argumento y retorna un nuevo componente.

    const NewComponent = higherOrderComponent(OriginalComponent)

  Tambien se le conoce como :
    const EnhacementComponent = higherOrderComponent(OriginalComponent)

  Podemos entenderlo así:
    const IronMan = withSuit( TonyStark )

  Comprendamoslo asi:

    TonyStark: Es el OriginalComponent.
    withSuit : Es la funcion HOC que nos mejorara el Componente Original 'TonyStark' y retornara un NUEVO COMPONENT 'IronMan'
    IronMan  : Es el nuevo componente MEJORADO!.


*/
