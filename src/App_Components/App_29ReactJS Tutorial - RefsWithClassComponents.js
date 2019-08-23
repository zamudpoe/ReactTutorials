import React, { Component } from 'react'
import './App.css'

import { Logo } from './components/funcionales/Logo'
import FocusInput from './components/classComponents/FocusInput'

class App extends Component {
  render () {
    console.log('%cReactJS Tutorial: %c29 - Refs with Class Components \n%c .', 'color:teal; font-size:3em;', 'color: tomato; font-size: 2em;','color: orange; font-size: 1.6em;')
    return (
      <div className='App'>
        <Logo />
        <FocusInput />
      </div>
    )
  }
}

export default App
