import React, { Component } from 'react'
import './App.css'
import { Logo }      from './components/funcionales/Logo'

import ClickCounterTwo from './components/classComponents/ClickCounterTwo'
import HoverCounterTwo from './components/classComponents/HoverCounterTwo'

class App extends Component {
  render () {
    console.log('%cReactJS Tutorial: %c36 - Render Props (Part 1)\n%cAparte del Patron HOC exite el Patron Render Props es otra manera de compartir funcionalidad entre componentes .', 'color:teal; font-size:2em;', 'color: tomato; font-size: 1.8em;','color: orange; font-size: 1.6em;')

    return (
      <div className='App'>
        <Logo />
        <ClickCounterTwo />
        <HoverCounterTwo />
      </div>
    )
  }
}

export default App

/*
  :::::::::::::::::: 36 Render Props (Part 1) ::::::::::::::::::

  Aparte del Patron HOC exite el Patron Render Props es otra manera de compartir
  funcionalidad entre componentes

*/
