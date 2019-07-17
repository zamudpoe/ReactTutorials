import React , { useState, useEffect } from 'react'
import { Logo }            from './components/funcionales/Logo'
import './App.css'

function App () {
  const [message, setMessage] = useState('Hey Tú!, si tú!, Dame un click')
  console.log('%cReactJS Tutorial: %c61 React Hooks Tutorial - 18 - useReducer Hook:\n\n%cuseReducer es un Hook que se usa para manejo del ESTADO,Es una alternatica a useState\n', 'color:teal; font-size:1.9em;', 'color: tomato; font-size: 1.8em;','color: orange; font-size: 1.6em;')

  useEffect (() => {
    console.log('\n\t%cHEY -> side Effects !!', 'color: tomato; font-size: 1.8em;')
  }, [])

  return (
    <div className='App'>
      <Logo />
      <p onClick={() => setMessage('Mira el archivo "App_60UseReducer Hook.js" para leer la teoria en los comentarios del codigo.')} >{ message }</p>
    </div>
  )
}

export default App

/*
  :::::::::::::::::::::::::::::::::::: 61 React Hooks Tutorial - 18 - useReducer Hook ::::::::::::::::::::::::::::::::::::
Lunes 9:00 AM
Julio 1 del 2019

  Additional Hooks [ useReducer ]

  useReducer : ¿Que es useReducer?<div className=""></div>

    *. useReducer es un Hook que se usa para manejo del ESTADO,
    *. Es una alternatica a useState

  ¿Cual es la diferencia?
    R: useState esta construido usando useReducer

  ¿Cuando usar uno o el otro?
    R: Hasta este momento del curso no estamos en la posicion para contestar dicha pregunta.
      Lo que haremos es volver a los ejemplos usando este hook.


  Hooks vistos hasta ahora:
    *. useState    - state
    *. useEffect   -  side effects
    *. useContext  - context API
    *. useReducers - reducers

  ¿QUE ES UN REDUCTOR?
    R: No necesitas conocer reducer redux para comprender el hook useReducer

  RESUMEN:
    *. useReducer es un Hook que se usa para manejo del ESTADO,
    *. Esta relacionado a funciones reductoras.
    *. useReducer(reducer, initialState)
    *. reducer(currentState, action)

    OJO: dependiendo del initialState y action la funcion reductora nos retornara el ESTADO.

*/
