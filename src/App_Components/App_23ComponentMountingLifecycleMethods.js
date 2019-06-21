import React from 'react'
import './App.css'

import { Logo } from './components/funcionales/Logo'
import LifeCycleA from './components/classComponents/LifeCycleA'

class App extends React.Component {
  render () {
    console.log('%cReactJS Tutorial: %c23 - Component Mounting Lifecycle Methods', 'color:teal; font-size:3em;', 'color: tomato; font-size: 2em;')
    return (
      <div className="App" >
        <Logo />
        <LifeCycleA />
      </div>
    )
  }
}

export default App

/*
  ::::::: Component Mounting Lifecycle Methods :::::::

  :::::::::::::: METODOS EN LA FASE DE MONTAJE ::::::::::::::

    *. Mounting :
        *. constructor
        *. static getDerivedStateFromProps
        *. render
        *. componentDidMount

    *. Updating :
        *. static getDerivedStateFromProps
        *. shouldComponentUpdate
        *. render
        *. getSnapshotBeforeUpdate
        *. componentDidUpdate

    *. Unmounting :
        *. componentWillUnmount

    *. Error Handling :
        * static getDerivedStateFromError
        * componentDidCatch

*/
