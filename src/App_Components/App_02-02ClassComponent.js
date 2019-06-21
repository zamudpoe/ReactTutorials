import React, { Component } from './node_modules/react'
import logo from './logo.svg'
import './App.css'

/* Statefull Class Component */
class App extends Component {

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="pStyle">
            Hello World
          </p>
          <p style={Styles.pStyle}>
            Ola K Ase?  <code style={Styles.codeStyle}>"An Statefull Class Component"</code>  o K ase ?
          </p>
          <a
            className = "App-link"
            href      = "https://reactjs.org"
            target    = "_blank"
            rel       = "noopener noreferrer"
          >
            Learn React
          </a>
        </header>
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
