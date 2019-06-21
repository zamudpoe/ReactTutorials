import React, { Component } from 'react'
import './App.css'
import { Logo }             from './components/funcionales/Logo'



class App extends Component {

  render () {
    console.log('%cReactJS Tutorial: %c38 - Context (Part 1)\n%cTEORIA:\n\n\t\tCONTEXTO nos provee una forma de pasar datos atraves del arbol de componentes sin tener que pasar propiedades manualmente hacia abajo a cada nivel..', 'color:teal; font-size:2em;', 'color: tomato; font-size: 1.8em;','color: orange; font-size: 1.6em;')

    return (
      <div className='App'>
        <Logo />
      </div>
    )
  }
}


export default App

/*
  :::::::::::::::::::::::::::::::::::: 38 Context (Part 1) ::::::::::::::::::::::::::::::::::::

  CONTEXTO nos provee una forma de pasar datos atraves del arbol de componentes sin tener que
  pasar propiedades manualmente hacia abajo a cada nivel.

  En una aplicacion React la data es pasada TOP-DOWN (Padres-Hijos).

  CONTEXTO esta diseñado para compartir data que pueda ser considerada 'GLOBAL' para un
  arbol de componentes de React,

  Para nuestro estudio vamos a pasar un valor desde el componente padre hacia los hijos sin usar props ,
  todo atraves de contexto,

  Vamos a pasarle desde App.js '<AppComponent />' un valor desde el componente C '<ComponentE />' al descendiente F '<ComponentE />'


                                    <AppComponent />

            <ComponentA />           <ComponentB />         <ComponentC />

                                    <ComponentD />          <ComponentE />

                                                            <ComponentE />



*/
