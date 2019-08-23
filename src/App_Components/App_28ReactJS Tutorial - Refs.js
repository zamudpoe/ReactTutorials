import React, { Component } from 'react'
import './App.css'

import { Logo } from './components/funcionales/Logo'
import RefsDemo from './components/classComponents/RefsDemo'

class App extends Component {

  render () {
    console.log('%cReactJS Tutorial: %c28 - Refs \n%c .', 'color:teal; font-size:3em;', 'color: tomato; font-size: 2em;','color: orange; font-size: 1.6em;')
    return (
      <div className="App">
        <Logo />
        <RefsDemo />
      </div>
    )
  }
}

export default App

/*
  ::::::::::::::::::::::::::::::::::::: Atributo Refs :::::::::::::::::::::::::::::::::::::

  Los refs hacen posibles acceder a los nodos del DOM desde React.

  React admite un atributo especial que puede adjuntarse a cualquier componente.
  El atributo 'refs' puede ser un objeto creado por la funcion:

    React.createRef() ó una funcion callback, o un string (en la API legado).

  Cuando el atributo ref es una funcion callback, la función recibe el elemento DOM subyacente
  ó instancia de clase (dependiendo del tipo de elemento) como argumento.
  Esto permite tener acceso directo a los elementos del DOM ó instancias de componentes.

  vamos a hacer uso de uno de los casos mas comunes como lo es el foco de un elemento <input /> ,
  esto lo lograremos en 3 simples pasos:

  ESTOS PASOS SE DOCUMENTARAN EN EL ELEMENTO <RefsDemo />




*/




