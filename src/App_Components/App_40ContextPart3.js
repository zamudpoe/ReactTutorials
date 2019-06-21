import React, { Component } from 'react'
import './App.css'
import { Logo }             from './components/funcionales/Logo'

import ComponentC from './components/classComponents/ComponentC'
import { UserProvider } from './components/UserContext/userContext'

class App extends Component {

  render () {
    console.log('%cReactJS Tutorial: %c40 - Context (Part 3)\n\n\t%c !', 'color:teal; font-size:2em;', 'color: tomato; font-size: 1.8em;','color: orange; font-size: 1.6em;')

    return (
      <div className='App'>
        <Logo />
        {/* <UserProvider value='Engel' > */}
          <ComponentC />
        {/* </UserProvider> */}
      </div>
    )
  }
}

export default App

/*
  :::::::::::::::::::::::::::::::::::: 40 Context (Part 3) ::::::::::::::::::::::::::::::::::::

  CONTEXTO nos provee una forma de pasar datos atraves del arbol de componentes sin tener que
  pasar propiedades manualmente hacia abajo a cada nivel.

  En una aplicacion React la data es pasada TOP-DOWN (Padres-Hijos).

  CONTEXTO esta diseñado para compartir data que pueda ser considerada 'GLOBAL' para un
  arbol de componentes de React,

  Si queremos usar el valor por default en el contexto userContext.js pasamos como parametro 'Engelbert'

    'const UserContext  = React.createContext('Engelbert')'


  Solo comentamos el componente   <UserProvider /> en App.js

      //<UserProvider value= 'Engel' >
        <ComponentC />
      //</UserProvider>



*/
