import React from 'react'

const withCounter = ( WrappedComponent ) => {
  class WithCounter extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        count       : 0,
        name        : 'Engelbert'
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
      return (
        <WrappedComponent
          name           = { this.state.name }
          count          = { this.state.count }
          incrementCount = { this._handleIncrement }
          decrementCount = { this._handleDecrement }
          styles         = { Styles }
        />)
    }
  }
  return WithCounter
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

export default withCounter




/*

  withCounter es nuestro HOC , que toma OriginalComponent y nos retorna WithCounter

*/

