import React, { Component } from 'react'
import './App.css'

import { Logo } from './components/funcionales/Logo'

import UserGreeting from './components/classComponents/UserGreeting'
import NameList from './components/funcionales/NameList'

/* Class Component */
class App extends Component {

  render () {
    console.log('%cReactJS Tutorial: %c17 - List Rendering', 'color:teal; font-size:3em;', 'color: tomato; font-size: 2em;')
    return (
      <div className="App" >
        <Logo />         {/* Functional component */}
        <UserGreeting /> {/* Class component */}
        <NameList />     {/* Functional component */}
      </div>
    )
  }
}

export default App

