import React, { Component } from 'react'
import './App.css'

import { Logo } from '../components/funcionales/Logo'

import ParentComponent from '../components/classComponents/ParentComponent'

/* Class Component */
class App extends Component {

  render () {
    console.log('%cReactJS Tutorial: %c15 - Methods as props', 'color:teal; font-size:3em;', 'color: tomato; font-size: 2em;')
    return (
      <div className="App" >
        <Logo />    {/* Functional component */}
        <ParentComponent />
      </div>
    )
  }

}

export default App


/*
  ::::::  :::::::
*/
