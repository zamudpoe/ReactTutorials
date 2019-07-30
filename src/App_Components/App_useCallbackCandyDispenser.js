import React from 'react'
import { Logo }     from './components/funcionales/Logo'
import './App.css'
import CandyDispenser from './components/funcionales/CandyDispenser';


function App () {
  console.log('%cuseMemo and useCallback: %c69 PROS Y CONTRAS: 26 useCallback:\n\n%c https://kentcdodds.com/blog/usememo-and-usecallback .', 'color:teal; font-size:1.9em;', 'color: tomato; font-size: 1.8em;', 'color: orange; font-size: 1.6em;')
  return (
    <div className='App'>
      <Logo />
      <CandyDispenser />
    </div>
  )
}

export default App
/*
  :::::::::::::::::::::::::::::::::::: 69 React Hooks Tutorial: 26 useCallback ::::::::::::::::::::::::::::::::::::
                                                                                      Lunes 9:00 AM
                                                                                  Julio 29 del 2019

*/
