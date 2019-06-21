import React, { Component } from 'react'

class Counter extends Component {
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
    return (
      <div>
        { this.props.children( this.state.count, this._incrementCountHandler )}
      </div>
    )
  }
}

export default Counter

      /* { this.props.render( this.state.count, this._incrementCountHandler )} */
