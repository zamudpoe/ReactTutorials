import React, { Component } from 'react'

class UserGreeting extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoggedIn: true
    }
  }

  render () {
    return (
      this.state.isLoggedIn && <div style= {styles.titulo}>'¡Welcome Engelbert! '</div>
    )
  }
}

const styles = {
  titulo: {
    color     : 'blue',
    fontSize  : '3em'
  }
}

export default UserGreeting

/*
  :::::: CONDITIONAL RENDERING :::::::

  1. if/else

      if (this.state.isLoggedIn) {
        message = '¡Welcome Engelbert! '
      } else {
        message = '¡Welcome Guess!'
      }

  2. Element Variables

    let message

    this.state.isLoggedIn ? message = <div>'¡Welcome Engelbert! '</div>  : message = <div>'¡Welcome Guest! '</div>

    return (
      <div>
        <br/><hr/>
        { message }
      </div>
    )


  3. Ternary conditional operator:

    render () {
      return (
        this.state.isLoggedIn ? message = <div>'¡Welcome Engelbert! '</div>  : message = <div>'¡Welcome Guest! '</div>
      )
    }


  4. Short Circuit Operator

    render () {
      return (
        this.state.isLoggedIn && <div>'¡Welcome Engelbert! '</div>
      )
    }

  */
