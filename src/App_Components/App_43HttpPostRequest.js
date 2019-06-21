import React, { Component } from 'react'
import { Logo }             from './components/funcionales/Logo'
import './App.css'
import PostForm from './components/classComponents/PostForm'

class App extends Component {
  render () {
    console.log('%cReactJS Tutorial: %c43 - HTTP Post Request\n\n\t%c !', 'color:teal; font-size:2em;', 'color: tomato; font-size: 1.8em;','color: orange; font-size: 1.6em;')

    return (
      <div className='App'>
        <Logo />
        <PostForm />
      </div>
    )
  }
}

export default App

/*
  :::::::::::::::::::::::::::::::::::: 41 HTTP and React ::::::::::::::::::::::::::::::::::::

        ( React App )
        Web App  <---------------------------------------- fetch
                                          ?                       S E R V E R
        Web App  send ----------------------------------------->

  Con librerias React se lleva muy bien

        ( React App )
        Web App  <---------------------------------------- fetch
                              HTTP Library                       S E R V E R
        Web App  send ----------------------------------------->

  Vamos a usar la libreria Axios
      npm install axios




*/
