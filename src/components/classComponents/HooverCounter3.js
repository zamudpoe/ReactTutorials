import React, { Component } from 'react'
import WithCounter from '../funcionales/WithCounter2'

class HooverCounter extends Component {
  render () {
    const { count, incrementCount } = this.props

    return (
      <div>
        <h2 onMouseOver = { incrementCount }>Hoover { count } Times</h2>
      </div>
    )
  }
}

export default WithCounter(HooverCounter, 10)
