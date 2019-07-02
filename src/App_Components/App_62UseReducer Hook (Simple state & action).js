import React        from 'react'
import { Logo }     from './components/funcionales/Logo'
import './App.css'
import CounterOne from './components/funcionales/CounterOne'

function App () {
  console.log('%cReactJS Tutorial: %c62 React Hooks Tutorial:  19 - useReducer (simple state & action):\n\n%cEl Hook useReducer se usa para manejo del ESTADO\n\n\t*. Como Alternativa a "useState" acepta un reductor del tipo "(state, action) => newState", y RETORNA el ESTADO ACTUAL con un metodo DESPACHADOR "DISPATCH".  \n\t*. Es una alternatica usualmente preferible a useState, cuando tenemos logica de ESTADO mas compleja que envuelve multiple sub-valores o cuando el PROXIMO ESTADO depende del ANTERIOR!. \n\t*. Tambien permite optimizar el performance para componentes que disparan ACTUALIZACIONES PROFUNDAS, por que podemos pasar "dispatch" hacia abajo en vez de callbacks.\n', 'color:teal; font-size:1.9em;', 'color: tomato; font-size: 1.8em;','color: orange; font-size: 1.6em;')

  return (
    <div className='App'>
      <Logo />
      <CounterOne /> {/* Componente Funcional que hace uso del hook useReducer  */}
    </div>
  )

}

export default App

/*
  :::::::::::::::::::::::::::::::::::: 62 React Hooks Tutorial: 19 - useReducer (simple state & action) ::::::::::::::::::::::::::::::::::::
Lunes 9:00 AM
Julio 1 del 2019


El Hook useReducer se usa para manejo del ESTADO
  *. Como Alternativa a "useState" acepta un reductor del tipo "(state, action) => newState",
      y RETORNA el ESTADO ACTUAL con un metodo DESPACHADOR "DISPATCH".
  *. Es una alternatica usualmente preferible a useState, cuando tenemos logica de ESTADO mas
      compleja que envuelve multiple sub-valores o cuando el PROXIMO ESTADO depende del ANTERIOR!.
  *. Tambien permite optimizar el performance para componentes que disparan ACTUALIZACIONES PROFUNDAS,
      por que podemos pasar "dispatch" hacia abajo en vez de callbacks.


*/
