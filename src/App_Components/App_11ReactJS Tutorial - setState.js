import React, { Component } from 'react'
import './App.css'

import { Logo } from '../components/funcionales/Logo'
import Counter from '../components/classComponents/Counter'

/* Class Component */
class App extends Component {

  render () {
    console.log('%cReactJS Tutorial : %c11 - setState', 'color:teal; font-size:3em;', 'color: tomato; font-size: 2em;')
    return (
      <div className="App" >
        <Logo />    {/* Functional component */}
        <Counter addValue = { 1 } />
      </div>
    )
  }

}

export default App
