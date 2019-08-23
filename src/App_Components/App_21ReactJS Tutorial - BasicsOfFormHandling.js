import React from 'react'
import './App.css'

import { Logo } from './components/funcionales/Logo'
import Form from './components/classComponents/Form'

class App extends React.Component {
  render () {
    console.log('%cReactJS Tutorial: %c21 - Basics of Form Handling', 'color:teal; font-size:3em;', 'color: tomato; font-size: 2em;')

    return (
      <div className="App" >
        <Logo />
        <Form />
      </div>
    )

  }
}

export default App

/*
  ::::::: CONTROLLED COMPONENT :::::::

  Los componentes controlados son los que cambian su valor de acuerdo a las entradas del usuario tales como :
    * Textarea
    * Input
    * select
    * Forms


*/
