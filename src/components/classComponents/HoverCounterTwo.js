import React, { Component } from 'react'

class HoverCounterTwo extends Component {
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
    return (
      <h2 onMouseOver={ this._incrementCountHandler }  >Hovered { count } Times</h2>
    )
  }
}

export default HoverCounterTwo
