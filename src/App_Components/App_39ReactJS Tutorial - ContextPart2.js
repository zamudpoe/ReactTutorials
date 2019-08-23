import React, { Component } from 'react'
import './App.css'
import { Logo }             from './components/funcionales/Logo'

import ComponentC from './components/classComponents/ComponentC'
import { UserProvider } from './components/UserContext/userContext'

class App extends Component {

  render () {
    console.log('%cReactJS Tutorial: %c39 - Context (Part 2)\n\n\t%cContext es primariamente usado cuando algunos datos necesitan ser accesibles por muchos componenetes en diferentes niveles de anidacion!.\n\tAplíquela con moderación porque hace que la reutilización de componentes sea más difícil.', 'color:teal; font-size:2em;', 'color: tomato; font-size: 1.8em;','color: orange; font-size: 1.6em;')

    return (
      <div className='App'>
        <Logo />
        <UserProvider value= 'Engel' >
          <ComponentC />
        </UserProvider>
      </div>
    )
  }
}


export default App

/*
  :::::::::::::::::::::::::::::::::::: 39 Context (Part 2) ::::::::::::::::::::::::::::::::::::

  CONTEXTO nos provee una forma de pasar datos atraves del arbol de componentes sin tener que
  pasar propiedades manualmente hacia abajo a cada nivel.

  En una aplicacion React la data es pasada TOP-DOWN (Padres-Hijos).

  CONTEXTO esta diseñado para compartir data que pueda ser considerada 'GLOBAL' para un
  arbol de componentes de React,


  PASOS PARA CREAR CONTEXTO ( Para nuestro caso )

    1. Crear el Contexto del usuario :
          userContext.js

    2. Proveer un valor de Contexto en App.js :
        El componente proveedor es el responsable de proveer un valor para todos los
        componentes descendientes.

        import { UserProvider } from './components/UserContext/userContext'

        <UserProvider>
          <ComponentC value='Vishwas' />
        </UserProvider>


    3. Consume el valor de Contexto  :
      Para nuestro demo nosotros vamos a consumir el valor en el <ComponentF />


  \nContext es primariamente usado cuando algunos datos necesitan ser accesibles
  por muchos componenetes en diferentes niveles de anidacion!.\n Aplíquela con moderación porque hace que la reutilización de componentes sea más difícil.

*/
