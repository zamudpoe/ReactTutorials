import React        from 'react'
import { Logo }     from './components/funcionales/Logo'
import './App.css'
import CounterThree from './components/funcionales/CounterThree';

function App () {
  console.log('%cReactJS Tutorial: %c64 React Hooks Tutorial: 21 - Multiple useReducer:\n\nAl hacer uso de multiples Reducers podemos evitar duplicar codigo en la funcion reductora\n%ccomo se hizo en el componente <CounterTwo />. que duplico codigo en el selector.', 'color:teal; font-size:1.9em;', 'color: tomato; font-size: 1.8em;', 'color: orange; font-size: 1.6em;')

  return (
    <div className='App'>
      <Logo />
      <CounterThree />
    </div>
  )

}

export default App

/*
  :::::::::::::::::::::::::::::::::::: 64 React Hooks Tutorial: 21 - Multiple useReducer ::::::::::::::::::::::::::::::::::::
Lunes 9:00 AM
Julio 8 del 2019


*/
