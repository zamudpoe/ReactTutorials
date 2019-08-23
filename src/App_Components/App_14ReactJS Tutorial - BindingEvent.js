import React, { Component } from 'react'
import './App.css'

import { Logo } from '../components/funcionales/Logo'

import EventBind from '../components/classComponents/EventBind'

/* Class Component */
class App extends Component {

  render () {
    console.log('%cReactJS Tutorial: %c14 - Bind Event', 'color:teal; font-size:3em;', 'color: tomato; font-size: 2em;')
    return (
      <div className="App" >
        <Logo />    {/* Functional component */}
        <EventBind />
      </div>
    )
  }

}

export default App
