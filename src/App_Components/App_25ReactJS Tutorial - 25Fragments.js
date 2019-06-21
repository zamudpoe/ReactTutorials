import React, { Component } from 'react'
import './App.css'

import { Logo } from './components/funcionales/Logo'
/* import FragmentDemo from './components/funcionales/FragmentDemo' */
import Table from './components/funcionales/Table'

class App extends Component {
  render () {
    console.log('%cReactJS Tutorial: %c25 - Fragments \n%cA common pattern in React is for a component to return multiple elements.React Fragments let you group a list of children without adding extra nodes to the DOM.', 'color:teal; font-size:3em;', 'color: tomato; font-size: 2em;','color: orange; font-size: 1.6em;')
    return (
    <div className= "App">
      <Logo />
      <Table />
      {/* <FragmentDemo /> */}
    </div>
    )
  }
}

export default App
