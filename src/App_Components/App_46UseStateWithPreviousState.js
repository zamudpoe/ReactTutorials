import React, { Component } from 'react'
import { Logo }             from './components/funcionales/Logo'
import './App.css'
import ClassCounterTwo from './components/funcionales/HookCounterTwo';


class App extends Component {
  render () {
    console.log('%cReactJS Tutorial: %c46 - useState with previous state \n\n\t%cPrequisitos:\n\t\t* Basics of React\n\t\t* Functional and class components, props, state, etc. \n\t\t* React Tutorial for Beginners on the channel.', 'color:teal; font-size:2em;', 'color: tomato; font-size: 1.8em;','color: orange; font-size: 1.6em;')

    return (
      <div className='App'>
        <Logo />
        <br />
        <ClassCounterTwo />
      </div>
    )
  }
}

export default App

/*
  :::::::::::::::::::::::::::::::::::: 46 useState with previous state ::::::::::::::::::::::::::::::::::::


*/
