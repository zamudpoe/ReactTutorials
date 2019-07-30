import React from 'react'
import { Logo }     from './components/funcionales/Logo'
import './App.css'
import CounterMemo from './components/funcionales/CounterMemo'

function App () {
  console.log('%cReactJS Tutorial: %c70 React Hooks Tutorial: 27 useMemo:\n\n%cif you need to cache a function - useCallback. but if you need to cache the result of invoked function - useMemo', 'color:teal; font-size:1.9em;', 'color: tomato; font-size: 1.8em;', 'color: orange; font-size: 1.6em;')

  return (
    <div className='App'>
      <Logo />
      <CounterMemo />
    </div>
  )
}

export default App
/*
  :::::::::::::::::::::::::::::::::::: 70  React Hooks Tutorial: 27 useMemo ::::::::::::::::::::::::::::::::::::
                                                                                      Lunes 9:00 AM
                                                                                  Julio 29 del 2019

    * if you need to cache a function - useCallback
    * if you need to cache the result of invoked function - useMemo

*/
