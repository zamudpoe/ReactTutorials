import React        from 'react'
import { Logo }     from './components/funcionales/Logo'
import './App.css'
/* import ClassCounterOne from './components/classComponents/ClassCounterOne'
import HookCounterOne from './components/funcionales/HookCounterOne' */
import ClassMouse from './components/classComponents/ClassMouse';
import HookMouse from './components/funcionales/HookMouse';


function App () {
  console.log('%cReactJS Tutorial: %c52 - Run effects only once:\n\n%cComo queremos que solo se invoque UNA SOLA OCASION cuando el componente se reenderize inicialmente la primera vez, le pasaremos en su 2do parametro un array vacio\n', 'color:teal; font-size:2em;', 'color: tomato; font-size: 1.8em;','color: orange; font-size: 1.6em;')

  return (
    <div className='App'>
      <Logo />
      {/* <ClassMouse /> */}
      <HookMouse />
    </div>
  )
}

export default App

/*
  :::::::::::::::::::::::::::::::::::: 52 Run effects only once ::::::::::::::::::::::::::::::::::::


*/
