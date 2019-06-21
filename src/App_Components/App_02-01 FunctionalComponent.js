import React from './node_modules/react'
import logo from './logo.svg'
import './App.css'

/* Stateless Functional Components */
function App () {
  return (
    <div className="App">
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="pStyle">
          Hello World
        </p>
        <p style={pStyle}>
          Ola K Ase?
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

const pStyle = {
  margin: '40px',
  color : 'tomato',

}

export default App
