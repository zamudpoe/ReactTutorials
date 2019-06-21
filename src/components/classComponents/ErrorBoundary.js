import React, { Component } from 'react'

class ErrorBoundary extends Component {
  constructor (props) {
    super(props)

    this.state = {
      hasError : false
    }
  }

  static getDerivedStateFromError (error) {
    return {
      hasError : true
    }
  }

  render () {
    if ( this.state.hasError === true ) {
      return ( <h1>Algo salio mal, Abusado el JOKER solo quiere ver arder el mundo!</h1> )
    }
    return this.props.children
  }
}

export default ErrorBoundary
