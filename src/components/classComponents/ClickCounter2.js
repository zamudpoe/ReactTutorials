import React, { Component } from 'react'
import WithCounter from '../funcionales/WithCounter'

class ClickCounter extends Component {
  render () {
    const { count, incrementCount, decrementCount, styles } = this.props

    return (
      <div>
        <h1> Clicked { count } times!</h1>
        <button style={styles.btnStyles} onClick = { incrementCount } >
          <span style= {styles.spanBtn}> clicked { count }</span> times<span role="img" aria-label='mira'> 👈🏻</span>
        </button>

        <button style={styles.btnStyles} onClick = { decrementCount } >
          <span style= {styles.spanBtn}> clicked { count }</span> times<span role="img" aria-label='mira'> 👈🏻</span>
        </button>

      </div>
    )
  }
}

export default WithCounter(ClickCounter)

