import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import Greet from './components/Greet'

/* Statefull Class Component */
class App extends Component {

  render () {
    return (
      <div className="App">
        <Greet />  {/* functional component */}
      </div>
    )
  }

}

const Styles = {
  pStyle: {
    margin: '40px',
    color : 'tomato'
  },
  codeStyle: {
    color: 'white'
  }

}

export default App
