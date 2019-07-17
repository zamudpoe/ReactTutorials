import React, { Component } from 'react'
import { Logo }             from './components/funcionales/Logo'
import './App.css'
import ClassCounter from './components/classComponents/ClassCounter'
import HookCounter from './components/funcionales/HookCounter';

class App extends Component {
  render () {
    console.log('%cReactJS Tutorial: %c45 - useState Hook \n\n\t%cPrequisitos:\n\t\t* Basics of React\n\t\t* Functional and class components, props, state, etc. \n\t\t* React Tutorial for Beginners on the channel.', 'color:teal; font-size:2em;', 'color: tomato; font-size: 1.8em;','color: orange; font-size: 1.6em;')

    return (
      <div className='App'>
        <Logo />
        <br />
        <ClassCounter />
        <HookCounter />
      </div>
    )
  }
}

export default App

/*
  :::::::::::::::::::::::::::::::::::: 45 useState Hook ::::::::::::::::::::::::::::::::::::

  Reglas de los Hooks

  1. "Solo llama Hooks en el Top Level"
    No invocar los Hooks dentro de Loops, condiciones, o funciones anidadas.
  2. Solo invoca Hooks desde Fuciones React
    Invocalos desde componentes Funcionales React y no desde cualquier funcion JS regular



*/
