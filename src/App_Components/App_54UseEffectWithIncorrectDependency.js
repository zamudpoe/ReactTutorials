import React        from 'react'
import { Logo }     from './components/funcionales/Logo'
import './App.css'

/* import IntervalClassCounter from './components/classComponents/IntervalClassCounter'; */
import IntervalHookCounter from './components/funcionales/IntervalHookCounter'

function App () {
  console.log('%cReactJS Tutorial: %c54 - useEffect with incorrect dependency:\n\n%c', 'color:teal; font-size:1.9em;', 'color: tomato; font-size: 1.8em;','color: orange; font-size: 1.6em;')

  return (
    <div className='App'>
      <Logo />
      {/* <IntervalClassCounter /> */}
      <IntervalHookCounter />
    </div>
  )
}

export default App

/*
  :::::::::::::::::::::::::::::::::::: 54 useEffect with incorrect dependency ::::::::::::::::::::::::::::::::::::




*/
