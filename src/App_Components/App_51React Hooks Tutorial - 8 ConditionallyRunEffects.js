import React        from 'react'
import { Logo }     from './components/funcionales/Logo'
import './App.css'
import ClassCounterOne from './components/classComponents/ClassCounterOne'
import HookCounterOne from './components/funcionales/HookCounterOne'

function App () {
  console.log('%cReactJS Tutorial: %c51 - Conditionally run effects\n\n%cSecond parameter of useEffect():\n\tOnly re-run the effect if count changes\n', 'color:teal; font-size:2em;', 'color: tomato; font-size: 1.8em;','color: orange; font-size: 1.6em;')

  return (
    <div className='App'>
      <Logo />
      <ClassCounterOne />
      <hr/>
      <HookCounterOne />
    </div>
  )
}

export default App

/*
  :::::::::::::::::::::::::::::::::::: 50 Conditionally run effects ::::::::::::::::::::::::::::::::::::


*/
