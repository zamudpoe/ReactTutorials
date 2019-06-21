/* Class Component */
import React, { Component } from 'react'

class Messages extends Component {
  constructor (props) {
    super(props)
    this.state = {
      message: '¡Welcome Pulseeras!'
    }
  }

  _changeMessage () {
    this.setState({
      message: 'Thank You 4 Subscribing!'
    }, console.log('\n%cHas cambiado el estado {message}', 'color: teal; font-size: 2em;'))
  }

  render () {
    console.log(this.props)
    return (
      <div>
        <h1 style={ Styles.titulo } > { this.state.message } </h1>
        <button onClick= { () => this._changeMessage() } >
          Subscribe <span role="img" aria-label='mira'>👈🏻</span>
        </button>
      </div>
    )
  }
}

const Styles = {
  titulo: {
    color : 'tomato'
  }
}

export default Messages
