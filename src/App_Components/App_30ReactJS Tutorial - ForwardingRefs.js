import React, { Component } from 'react'
import './App.css'

import { Logo } from './components/funcionales/Logo'
import FRParentInput from './components/classComponents/FRParentInput'

class App extends Component {
  render () {
    console.log('%cReactJS Tutorial: %c30 - Forwarding Refs\n%c .', 'color:teal; font-size:2.5em;', 'color: tomato; font-size: 2em;', 'color: orange; font-size: 1.4em;')
    return (
      <div className='App'>
        <Logo />
        <FRParentInput />
      </div>
    )
  }
}

export default App
