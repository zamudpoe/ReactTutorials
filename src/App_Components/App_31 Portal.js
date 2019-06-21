import React, { Component } from 'react'
import './App.css'

import { Logo }   from './components/funcionales/Logo'
import PortalDemo from './components/funcionales/PortalDemo'

class App extends Component {

  render () {
    console.log('%cReactJS Tutorial: %c31 - Portals \n%c .', 'color:teal; font-size:3em;', 'color: tomato; font-size: 2em;','color: orange; font-size: 1.6em;')
    return (
      <div className="App">
        <Logo />
        <PortalDemo />
      </div>
    )
  }
}

export default App

/*
  ::::::::::::::::::::::::::::::::::::: PORTALS :::::::::::::::::::::::::::::::::::::

  1.- Agregamos en public/index.html
        <div id="portal-root"></div>

  2.- creamo el componente hijo funcional PortalDemo



*/




