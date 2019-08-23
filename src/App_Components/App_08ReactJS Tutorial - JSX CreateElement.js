import React, { Component } from 'react'
import './App.css'

import { Logo } from '../components/funcionales/Logo'
import Greet from '../components/funcionales/Greet'
import Welcome from './components/stateFull/Welcome'
import { Hello } from '../components/funcionales/Hello'

/* Statefull Class Component */
class App extends Component {

  render () {
    console.log('%cReactJS Tutorial: %c08 - JSX', 'color:teal; font-size:3em;', 'color: tomato; font-size: 2em;')
    return (
      <div className="App" >
        <Logo />    {/* Functional component */}
        <Greet name="Bruce" />   {/* Functional component */}
        <Welcome /> {/* Class component */}
        <Hello />   {/* Functional component */}
      </div>
    )
  }

}

export default App
