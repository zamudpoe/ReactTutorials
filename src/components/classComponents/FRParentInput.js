import React, { Component } from 'react'
import FRInput from '../funcionales/FRInput'

class RFParentInput extends Component {
    constructor (props) {
      super(props)
      this.inputRef = React.createRef()
    }

    _clickHandler = () => {
      this.inputRef.current.focus()
    }

  render () {
    return (
      <div>
        <FRInput ref={ this.inputRef } />
        <button onClick = { this._clickHandler } >
          Focus Input<span role="img" aria-label='mira'> 👈🏻</span>
        </button>
      </div>
    )
  }
}

export default RFParentInput
