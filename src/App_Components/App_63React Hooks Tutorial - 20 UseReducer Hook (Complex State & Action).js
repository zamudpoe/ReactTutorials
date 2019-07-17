import React        from 'react'
import { Logo }     from './components/funcionales/Logo'
import './App.css'
import CounterTwo from './components/funcionales/CounterTwo'

function App () {
  console.log('%cReactJS Tutorial: %c63 React Hooks Tutorial: 20 - useReducer(complex state & action):\n\nComponente Funcional que hace uso del hook useReducer con uso complejo del ESTADO y el ACTION\n\n%cCuando el "ESTADO" lo convertimos en un objeto podemos manejar MULTIPLES ESTADOS\nCuando el "Action" lo convertimos en un objeto podemos pasar DATOS ADICIONALES a la funcion reductora\n', 'color:teal; font-size:1.9em;', 'color: tomato; font-size: 1.8em;','color: orange; font-size: 1.6em;')

  return (
    <div className='App'>
      <Logo />
      <CounterTwo /> {/* Componente Funcional que hace uso del hook useReducer con uso complejo del ESTADO y el ACTION */}
    </div>
  )

}

export default App

/*
  :::::::::::::::::::::::::::::::::::: 63 React Hooks Tutorial: 20 - useReducer(complex state & action) ::::::::::::::::::::::::::::::::::::
Lunes 9:00 AM
Julio 1 del 2019

  El Hook useReducer se usa para manejo del ESTADO
    *. Como Alternativa a "useState" acepta un reductor del tipo "(state, action) => newState",
        y RETORNA el ESTADO ACTUAL con un metodo DESPACHADOR "DISPATCH".
    *. Es una alternatica usualmente preferible a useState, cuando tenemos logica de ESTADO mas
        compleja que envuelve multiple sub-valores o cuando el PROXIMO ESTADO depende del ANTERIOR!.
    *. Tambien permite optimizar el performance para componentes que disparan ACTUALIZACIONES PROFUNDAS,
        por que podemos pasar "dispatch" hacia abajo en vez de callbacks.

  En esta ocacion haremos uso del ACTION como un OBJETO con dos propiedades "type" y "value"

  Cuando el action lo convertimos en un objeto podemos pasar DATOS ADICIONALES a la funcion  reductora

    action = {
      action: "increment | decrement | plusFive \ minusFive | reset",
      value: 1 ó 5
    }

*/
