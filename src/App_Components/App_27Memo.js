import React, { Component } from 'react'
import './App.css'

import { Logo } from './components/funcionales/Logo'
import ParentComp from './components/classComponents/ParentComp2'

class App extends Component {
  render () {
    console.log('%cReactJS Tutorial: %c27 - memo \n%c .', 'color:teal; font-size:3em;', 'color: tomato; font-size: 2em;','color: orange; font-size: 1.6em;')
    return (
      <div className="App">
        <Logo />
        <ParentComp name="Bobby Fisher"/>
      </div>
    )
  }
}

export default App
