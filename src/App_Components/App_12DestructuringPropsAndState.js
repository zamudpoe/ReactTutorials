import React, { Component } from 'react'
import './App.css'

import { Logo } from '../components/funcionales/Logo'
import Counter from '../components/classComponents/Counter'
import Greet from '../components/funcionales/Greet_DestructuringPropsAndState'
import Welcome from '../components/funcionales/Welcome_DestructuringPropsAndState'

/* Class Component */
class App extends Component {
  render () {
    console.log('%cReactJS Tutorial : %c12 - Destructuring props and state', 'color:teal; font-size:3em;', 'color: tomato; font-size: 2em;')

    return (
      <div className="App" >
        <Logo />    {/* Functional component */}
        <Counter addValue = { 1 } />
        <Greet name="Clark Kent" heroName="Superman" styles= { Styles } />
        <Greet name="Diana" heroName="Wonder Woman" >   {/* Functional component with props */}
          <button>Accion</button> <span> This button its a childreen too!</span>    {/* <--  this is a children props */}
        </Greet>
        <Welcome name= "Steve Rogers" heroName="Captain America"  />
        <Welcome name= "Kal-El" heroName="Superman" styles={Styles} />
      </div>
    )
  }

}

const Styles = {
  nameStyle: {
    color : 'lightblue'
  },
  heroNameStyle : {
    color    : 'silver',
    fontStyle: 'italic',
    fontSize: '.7em'
  },
  heroKalElStyle : {
    color     : 'tomato',
    fontStyle : 'italic',
    fontSize  : '.8em'
  },
  akaStyles: {
    color: 'teal'
  }
}
export default App
