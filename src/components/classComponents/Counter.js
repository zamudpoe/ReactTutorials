import React, { Component } from 'react'

class Counter extends Component {

  constructor (props) {
    super(props)

    this.state = {
      count : 0
    }
  }

  _increment () {

    /* setState es asyncrono */
    this.setState((prevState, props) => {
      return { count: prevState.count + props.addValue }
    }, () => console.log('\nCallback value: ', this.state.count))
    /* Se pasa como callback un Arrow function para que se ejecutew de forma asyncrona */
    console.log('\nEstado fuera del callback: %s \n\tNOTA: esto es debido a que setState es asyncrono y este console.log esta fuera de esta funcion por lo tanto nos mostrara siempre el valor del estado anterior al usar setState ',this.state.count)
  }

  _incrementFive () {
    this._Increment()
    this._Increment()
    this._Increment()
    this._Increment()
    this._Increment()
  }

  render () {
    return (
      <div>
        <div> Count: { this.state.count } </div>
        <button onClick = { () => this._increment() } >
          Increment <span role="img" aria-label='mira'> 👈🏻</span>
        </button>
      </div>
    )
  }
}

export default Counter

/*
  :::: setState :::::

  * ALWAYS make use of setState and never modify the state directly.
  * Code has to be executed after the state has been updated? Place that code in the callback function which is the second argument to the setState method.
  * When you have to update state based on the previous state value, pass in a function as an argument  in instead of the regular object.

*/
