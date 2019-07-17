import React, { Component } from 'react'

class ClassCounter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  _incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <button onClick={ this._incrementCount }>
          Click {this.state.count} times
        </button>
      </div>
    )
  }
}

export default ClassCounter
