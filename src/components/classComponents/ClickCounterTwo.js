import React, { Component } from 'react'

class ClickCounterTwo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count : 0
    }
  }

  _incrementCountHandler = () => {
    this.setState( prevState => {
      return { count: prevState.count + 1 }
    })
  }

  render () {
    const { count } = this.state
    return  (
      <div>
        <button onClick = { this._incrementCountHandler }>
          Click { count } times <span role="img" aria-label='mira'> 👈🏻</span>
        </button>
      </div>
    )

  }
}

export default ClickCounterTwo
