import React, { Component } from 'react'
import './App.css'

import { Logo } from './components/funcionales/Logo'

import ParentComponent from './components/classComponents/ParentComponent'
import UserGreeting from './components/classComponents/UserGreeting'

/* Class Component */
class App extends Component {

  render () {
    console.log('%cReactJS Tutorial: %c16 - Conditional Rendering', 'color:teal; font-size:3em;', 'color: tomato; font-size: 2em;')
    return (
      <div className="App" >
        <Logo />    {/* Functional component */}
        {/* <ParentComponent /> */}
        <UserGreeting />
      </div>
    )
  }
}

export default App

