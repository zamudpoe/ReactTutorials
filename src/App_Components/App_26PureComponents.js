import React, { Component } from 'react'
import './App.css'

import { Logo } from './components/funcionales/Logo'
import ParentComp from './components/classComponents/ParentComp'

class App extends Component {
  render () {
    console.log('%cReactJS Tutorial: %c26 - Pure Components \n%c .', 'color:teal; font-size:3em;', 'color: tomato; font-size: 2em;','color: orange; font-size: 1.6em;')
    return (
      <div className="App">
        <Logo />
        <ParentComp />
      </div>
    )
  }
}



export default App
