import React, { Component } from 'react'

class HooverCounter extends Component {
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


  render () {
    const { count } = this.state

    return (
      <div>
        <h2 onMouseOver = { this._handleIncrement }>Hoover { count } Times</h2>
      </div>
    )
  }
}

export default HooverCounter
