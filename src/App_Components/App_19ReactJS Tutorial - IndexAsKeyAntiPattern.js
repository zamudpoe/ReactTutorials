import React, { Component } from 'react'
import './App.css'

import { Logo } from './components/funcionales/Logo'
/* import ParentComponent from './components/classComponents/ParentComponent' */
import NameList from './components/funcionales/NameList3'

/* Class Component */
class App extends Component {

  render () {
    console.log('%cReactJS Tutorial: %c19 - Index as Key Anti-pattern', 'color:teal; font-size:3em;', 'color: tomato; font-size: 2em;')
    return (
      <div className="App" >
        <Logo />    {/* Functional component */}
        {/* <ParentComponent /> */}
        <NameList />
      </div>
    )
  }

}

export default App


/*
  ::::::  :::::::
*/
