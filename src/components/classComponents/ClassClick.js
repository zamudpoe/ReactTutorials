import React, { Component } from 'react'

class ClassClick extends Component {
  _clickHandler () {
    console.log ('Clicked the button')
  }

  render () {
    return (
      <div>
        <button onClick= { this._clickHandler } >
          Click me <span role="img" aria-label='mira'> 👈🏻</span>
        </button>
      </div>
    )
  }
}

export default ClassClick

/*

  En un componente de clase instanciamos el handler con la palabra reservada 'this'
    <button onClick= { this._clickHandler } >

*/

