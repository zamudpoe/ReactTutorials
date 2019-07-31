import React from 'react'
import { Logo }     from './components/funcionales/Logo'
import './App.css'
import FocusInput from './components/funcionales/FocusInput'
import ClassTimer from './components/classComponents/ClassTimer'
import HookTimer from './components/funcionales/HookTimer';

function App () {
  console.log('%cReactJS Tutorial: %c72 React Hooks Tutorial: 29 useRef Hook Part 2:\n\n%c', 'color:teal; font-size:1.9em;', 'color: tomato; font-size: 1.8em;', 'color: orange; font-size: 1.6em;')

  return (
    <div className='App'>
      <Logo />
      {/* <FocusInput /> */}
      <ClassTimer />
      <HookTimer />
    </div>
  )
}

export default App
/*
  :::::::::::::::::::::::::::::::::::: 72  React Hooks Tutorial: 29 useRef Hook Part 2 ::::::::::::::::::::::::::::::::::::
                                                                                      Lunes 9:00 AM
                                                                                  Julio 29 del 2019

*/
