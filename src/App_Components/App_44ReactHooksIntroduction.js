import React, { Component } from 'react'
import { Logo }             from './components/funcionales/Logo'
import './App.css'

class App extends Component {
  render () {
    console.log('%cReactJS Tutorial: %c44 - React Hooks Introduccion \n\n\t%cPrequisitos:\n\t\t* Basics of React\n\t\t* Functional and class components, props, state, etc. \n\t\t* React Tutorial for Beginners on the channel.', 'color:teal; font-size:2em;', 'color: tomato; font-size: 1.8em;','color: orange; font-size: 1.6em;')

    return (
      <div className='App'>
        <Logo />

      </div>
    )
  }
}

export default App

/*
  :::::::::::::::::::::::::::::::::::: 44 React Hooks - INTRODUCCION ::::::::::::::::::::::::::::::::::::

  Prequisitos:
    Basics of React
    Functional and class components, props, state, etc.
    React Tutorial for Beginners on the channel.

    ¿QUE SON LOS HOOKS?
    Las funciones Hooks son una nueva caracteristica adicional en React.js version 16.8
    la cual nos permite usar caracteristicas React sin tener que escribir una clase.

      Ejemplo: Estado de un Componente

    HOOKS no funcionan dentro de CLASES.


    ¿POR QUE USAR HOOKS?

      RAZON 1.
        1. Commprension de como funcion la palabra clave 'this' en JS
        2. Recuerda hacer el bindin en los componentes de Clase.
        3. Las clases no se minimizan muy bien y hacen que la recarga en caliente no sea confiable.

      Razon 2.
        1. NO EXISTE una manera particular para reutilizar logica de un componente stateful.
        2. los patrones HOC y render props abordan este problema.
        3. Make the code harder to Follow.
        4. Existe necesidad en compartir logica stateful en una mejor manera.
        5.

      Razon 3.
        1. Crear componentes para escenarios complejos tales como obtencino de data ( HTTP Requests, AJAX )
            y subscribir en eventos. el Codigo relacionado no esta organizado en un solo sitio.

            Ej: Data fetching   - Se realiza en componentDidMount y algunas veces tambien en componentDidUpdate
            Ej: Event Listeners - Se realiza en componentDidMount y los dessubscribimos en componentWillUnmount
        3. Por que la logica stateful -  No puede ser descompuesta en componentes mas pequeños.



    PUNTOS NOTABLES.
      *. Version de React 16.8 o mayor.
      *. Completamente opt in
      *. HOOKS no contienen cambios de última hora y la versión es 100% compatible con versiones anteriores
      *. Las clases no seran eliminadas de React.
      *. NO pueden usarse HOOKS dentro de un componente Clase.
      *. Hooks no reemplaza tus conocimientos existentes de conceptos de React.
      *. En su lugar , HOOKS proveen una API mas directa a los conceptos de React que tu ya conoces.

*/
