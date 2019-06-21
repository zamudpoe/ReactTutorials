import React, { Component } from 'react'

class ClickCounter extends Component {
  constructor (props) {
    super(props)

    this.state = {
      count       : 0
    }
  }

    _handleIncrement = () => {
      this.setState(prevState  => {
        return { count: prevState.count + 1 }
      })
    }

    _handleDecrement = () => {
      this.setState(prevState  => {
        return { count: prevState.count - 1 }
      })
    }


  render () {
    const { count } = this.state

    return (
      <div>
        <h1> Clicked { count } times!</h1>
        <button style={Styles.btnStyles} onClick = { this._handleIncrement } >
          Incremented <span style= {Styles.spanBtn}>{ count }</span> times<span role="img" aria-label='mira'> 👈🏻</span>
        </button>

        <button style={Styles.btnStyles} onClick = { this._handleDecrement } >
          Decremented <span style= {Styles.spanBtn}>{ count }</span> times<span role="img" aria-label='mira'> 👈🏻</span>
        </button>

      </div>
    )
  }
}

const Styles  = {
  spanBtn: {
    color: 'tomato',
    fontSize: '1.4em'
  },
  btnStyles: {
    color: 'teal',
    fontSize: '1.4em'
  }


}

export default ClickCounter
