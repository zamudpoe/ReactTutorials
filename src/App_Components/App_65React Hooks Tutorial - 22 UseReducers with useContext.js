import React, { useReducer } from 'react'

import { Logo }     from './components/funcionales/Logo'
import './App.css'

import ComponentA from './components/funcionales/ComponentA'
import ComponentB from './components/funcionales/ComponentB'
import ComponentC from './components/funcionales/ComponentC'

export const CountContext =  React.createContext()

const initialState = 0
const reducer = ( state, action ) => {
  console.log('State: %s BEFORE action apply', state)
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      throw new Error()
  }
}

function App () {
  const [ count, dispatch ] = useReducer(reducer, initialState)

  console.log('%cReactJS Tutorial: %c65 React Hooks Tutorial: 22 - useReducer with useContext:\n\nTenemos UN SOLO ESTADO "count" y es modificado desde cualquiera de los hijos, esto lo logramos haciendo uso de useReducer y useContext.\n\n%cCreamos el contexto \n\n\t<CountContext.Provider value={{ countState: count, countDispatch: dispatch }}> \n\ny como valor le pasamos el ESTADO "count" y la funcion DISPATCH del reductor la cual recibira las acciones desde cualquiera de los hijos.', 'color:teal; font-size:1.9em;', 'color: tomato; font-size: 1.8em;', 'color: orange; font-size: 1.6em;')
  return (
    <CountContext.Provider
      value={{
        countState   : count ,
        countDispatch: dispatch
      }}
    >
      <div className='App'>
        <Logo />
        <h3>App Counter: [ { count } ]</h3>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </CountContext.Provider >
  )

}

export default App

/*
  :::::::::::::::::::::::::::::::::::: 65 React Hooks Tutorial: 22 - useReducer with useContext ::::::::::::::::::::::::::::::::::::
  Lunes 9:00 AM
  Julio 8 del 2019

  *. useReducer - Local state management:
                  Hasta ahora hemos visto como se usa useReducer para el uso del Estado a nivel componente .
  *. Share state between components - Global state managment:
                  De alguna forma deseamos compartir el ESTADO entre los componentes, para esto tenemos "Global state managment"

  *. useReducer + useContext :



                                    <AppComponent />  GLOBAL COUNTER  Count=0
                                          | PROPS
                                          |
          <ComponentA />            <ComponentB />          <ComponentC />
            useReducer()              useReducer()             useReducer()
              Counter                     |
                                          |                       |
                                          |                       |
                                    <ComponentD />          <ComponentE />
                                      Counter                   Counter
                                                                  |
                                                            <ComponentF />
                                                                Counter



  1. Crear el ESTADO 'count'  con useReducer

  2. Creamos el contexto para el ESTADO GLOBAL : 'countState' y la FUNCION DESPACHADORA: 'countDispatch'

        export const CountContext =  React.createContext()

      Creamos la envoltura para los componentes anidados.

        <CountContext.Provider
          value={{ countState: count, countDispatch: dispatch }}
        >
          <div className='App'>
          <Logo />
          <h3>App Counter: [ { count } ]</h3>
          <ComponentA />
          <ComponentB />
          <ComponentC />
        </div>
      </CountContext.Provider >

  EN LOS COMPONENTES HIJOS
  1. En cualquiera de los hijos Consumir el ESTADO  y DESPACHAR LAS ACCIONES declaradas en la funcion reductora del componente padre.

        import { CountContext } from '../../App'

  2. Usamos el contexto 'countContext'

        function ComponentA () {
        const countContext = useContext(CountContext)
        return (
          <div>
            <h3>Component A: [ {countContext.countState} ]</h3>
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
          </div>
        )
      }

    NOTA: Como podemos ver desde el componente hijo despachamos las ACCIONES


*/
