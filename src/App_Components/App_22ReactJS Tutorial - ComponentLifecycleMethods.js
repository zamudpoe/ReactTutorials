import React from 'react'
import './App.css'

import { Logo } from './components/funcionales/Logo'
import LifeCycleA from './components/classComponents/LifeCycleA'

class App extends React.Component {
  render () {
    console.log('%cReactJS Tutorial: %c22 - Component Lifecycle Methods', 'color:teal; font-size:2.5em;', 'color: tomato; font-size: 2em;')
    return (
      <div className="App" >
        <Logo />
        <LifeCycleA />
      </div>
    )
  }
}

export default App

/*
  ::::::: Component Lifecycle Methods :::::::

  Estos metodos no existen en los Componentes Funcionales,
  para los componentes funcionales existe los Metodos HOOKS.

    *. MOUNTING : El metodo del ciclo de vida 'mounting' se invoca cuando una intancia
                 de un componente esta siendo creado e insertada en el DOM.

    *. UPDATING : El metodo de ciclo de vida updating() es invocado cuando un componente esta
                 siendo Re-Renderizado como un resultado de cambios a cualquiera de sus
                 PROPS ó su ESTADO

    *. UNMOUNTING : Cuando un componente esta siendo REMOVIDO desde el DOM

    *. ERROR HANDLING: Cuando existe un error durante el renderizado en un ciclo de vida del
                       componente ó en el constructor de cualquiera de sus componentes hijos.


  :::::::::::::: METODOS EN LA FASE DE MONTAJE ::::::::::::::

    *. Mounting :
        *. constructor
        *. static getDerivedStateFromProps
        *. render
        *. componentDidMount

    *. Updating :
        *. static getDerivedStateFromProps
        *. shouldComponentUpdate
        *. render
        *. getSnapshotBeforeUpdate
        *. componentDidUpdate

    *. Unmounting :
        *. componentWillUnmount

    *. Error Handling :
        * static getDerivedStateFromError
        * componentDidCatch

*/
