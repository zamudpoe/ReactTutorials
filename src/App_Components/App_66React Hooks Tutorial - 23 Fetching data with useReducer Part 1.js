import React from 'react'
import { Logo }     from './components/funcionales/Logo'
import './App.css'
import DataFetchingOne from './components/funcionales/DataFetchingOne'

function App () {
  console.log('%cReactJS Tutorial: %c66 React Hooks Tutorial: 23 Fetching data with useReducer Part 1:\n\nTenemos UN SOLO ESTADO "count" y es modificado desde cualquiera de los hijos, esto lo logramos haciendo uso de useReducer y useContext.\n\n%cCreamos el contexto \n\n\t<CountContext.Provider value={{ countState: count, countDispatch: dispatch }}> \n\ny como valor le pasamos el ESTADO "count" y la funcion DISPATCH del reductor la cual recibira las acciones desde cualquiera de los hijos.', 'color:teal; font-size:1.9em;', 'color: tomato; font-size: 1.8em;', 'color: orange; font-size: 1.6em;')
  return (
    <div className='App'>
      <Logo />
      <DataFetchingOne />
    </div>
  )
}

export default App
/*
  :::::::::::::::::::::::::::::::::::: 66 React Hooks Tutorial: 23 Fetching data with useReducer Part 1 ::::::::::::::::::::::::::::::::::::
  Lunes 9:00 AM
  Julio 8 del 2019


*/
