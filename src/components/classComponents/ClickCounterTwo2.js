import React, { Component } from 'react'

class ClickCounterTwo extends Component {

  render () {
    const { count, incrementCount } = this.props
    return  (
      <div>
        <button onClick = { incrementCount }>
          Click { count } times <span role="img" aria-label='mira'> 👈🏻</span>
        </button>
      </div>
    )
  }
}

export default ClickCounterTwo
