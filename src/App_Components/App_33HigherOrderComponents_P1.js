import React, { Component } from 'react'
import './App.css'

import  { Logo } from './components/funcionales/Logo'

import ClickCounter from './components/classComponents/ClickCounter'
import HooverCounter from './components/classComponents/HooverCounter'

class App extends Component {
  render () {
    console.log('%cReactJS Tutorial: %c33 - Higher Order Components (Part 1)\n%c .', 'color:teal; font-size:2em;', 'color: tomato; font-size: 1.8em;','color: orange; font-size: 1.6em;')

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

  :::::::::::::::::::::::::::::::: COMPONENT TREE ::::::::::::::::::::::::::::::::

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


*/
