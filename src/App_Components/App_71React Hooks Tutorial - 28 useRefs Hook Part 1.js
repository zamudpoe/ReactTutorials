import React from 'react'
import { Logo }     from './components/funcionales/Logo'
import './App.css'
import FocusInput from './components/funcionales/FocusInput';

function App () {
  console.log('%cReactJS Tutorial: %c71 React Hooks Tutorial: 28 useRef Hook Part 1:\n\n%c', 'color:teal; font-size:1.9em;', 'color: tomato; font-size: 1.8em;', 'color: orange; font-size: 1.6em;')

  return (
    <div className='App'>
      <Logo />
      <FocusInput />
    </div>
  )
}

export default App
/*
  :::::::::::::::::::::::::::::::::::: 71  React Hooks Tutorial: 28 useRef Hook Part 1 ::::::::::::::::::::::::::::::::::::
                                                                                      Lunes 9:00 AM
                                                                                  Julio 29 del 2019

*/
