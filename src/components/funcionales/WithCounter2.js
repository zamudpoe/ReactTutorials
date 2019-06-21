import React from 'react'

const withCounter = ( WrappedComponent, incrementNumber ) => {
  class WithCounter extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        count       : 0
      }
    }

    _handleIncrement = () => {
      this.setState(prevState  => {
        return { count: prevState.count + incrementNumber  }
      })
    }

    _handleDecrement = () => {
      this.setState(prevState  => {
        return { count: prevState.count - 1 }
      })
    }

    render () {

      console.log(this.props.name)

      return (
        <WrappedComponent
          count          = { this.state.count }
          incrementCount = { this._handleIncrement }
          decrementCount = { this._handleDecrement }
          styles         = { Styles }
          {...this.props}
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

