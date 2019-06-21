import React, { Component } from 'react'
import './App.css'

/* import Greet from './components/funcionales/Greet' */
import Greet_PropsFunctional from '../components/funcionales/Greet_PropsFunctional'
import Welcome from '../components/funcionales/Welcome'
import { Logo } from '../components/funcionales/Logo'
import { Hello } from '../components/funcionales/Hello'

/* Props Class Component */
class App extends Component {

  render () {
    console.log('%cReactJS Tutorial: %c09 - PROPS', 'color:teal; font-size:3em;', 'color: tomato; font-size: 2em;')
    return (
      <div className="App" >
        <Logo />    {/* Functional component */}
        {/* <Greet /> */}   {/* Functional component */}
        <Greet_PropsFunctional name="Bruce" heroName="Batman" styles= {styles} >    {/* Functional component with props */}
          <p style={ styles.pStyles } >This is childreen props</p>           {/* <--  this is a children props */}
        </Greet_PropsFunctional>
        <Greet_PropsFunctional name="Diana" heroName="Wonder Woman">   {/* Functional component with props */}
          <button>Accion</button> <span> This button its a childreen too!</span>    {/* <--  this is a children props */}
        </Greet_PropsFunctional>
        <Greet_PropsFunctional name="Clark" heroName="Kal-El" />   {/* Functional component with props */}
        <Welcome name= "Bruce" heroName="Batman" />         {/* Class component */}
        <Welcome name= "Kal-el" heroName="Superman" />      {/* Class component */}
        <Welcome name= "Diana" heroName="Wonder Woman" />   {/* Class component */}
        <Hello />   {/* Functional component */}
      </div>
    )
  }

}

const styles = {
  titulo: {
    color : 'tomato',
    fontSize: '3em'
  },
  pStyles : {
    color : 'teal',
    fontSize: '2em'
  }
}

export default App
