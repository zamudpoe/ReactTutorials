import React from 'react'
import { Logo }     from './components/funcionales/Logo'
import './App.css'
import UserForm from './components/funcionales/UserForm'

function App () {
  console.log('%cReactJS Tutorial: %c76 React Hooks Tutorial: 33 - useInput Custom Hook\n\n%c', 'color:teal; font-size:1.9em;', 'color: tomato; font-size: 1.8em;', 'color: orange; font-size: 1.6em;')

  return (
    <div className='App'>
      <Logo />
      <UserForm />
    </div>
  )
}

export default App
/*
  :::::::::::::::::::::::::::::::::::: 76  React Hooks Tutorial: 33 - useInput Custom Hook ::::::::::::::::::::::::::::::::::::
                                                                                      Miercoles 9:00 AM
                                                                                  Agosto 07 del 2019

*/
