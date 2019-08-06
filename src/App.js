import React from 'react'
import { Logo }     from './components/funcionales/Logo'
import './App.css'
import Counter01 from './components/funcionales/Counter01'
import Counter02 from './components/funcionales/Counter02'

function App () {
  console.log('%cReactJS Tutorial: %c75 React Hooks Tutorial: 32 usecounter Custom Hook\n\n%c', 'color:teal; font-size:1.9em;', 'color: tomato; font-size: 1.8em;', 'color: orange; font-size: 1.6em;')

  return (
    <div className='App'>
      <Logo />
      <Counter01 />
      <Counter02 />
    </div>
  )
}

export default App
/*
  :::::::::::::::::::::::::::::::::::: 75  React Hooks Tutorial:32  usecounter Custom Hook ::::::::::::::::::::::::::::::::::::
                                                                                      Lunes 9:00 AM
                                                                                  Agosto 06 del 2019

*/
