import React, { Component } from 'react'
import './App.css'

import { Logo } from '../components/funcionales/Logo'
import FnClick from  '../components/funcionales/FnClick'
import ClassClick from '../components/classComponents/ClassClick'

/* Class Component */
class App extends Component {

  render () {
    console.log('%cReactJS Tutorial: %c13 - Event Handling', 'color:teal; font-size:3em;', 'color: tomato; font-size: 2em;')
    return (
      <div className="App" >
        <Logo />    {/* Functional component */}
        <FnClick />
        <ClassClick />
      </div>
    )
  }

}

export default App
