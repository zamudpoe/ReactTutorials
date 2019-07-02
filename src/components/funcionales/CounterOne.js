import React, { useReducer } from 'react'

/* ::::::::::::::::::: Declaraciones GLOBALES ::::::::::::::::::::: */
  const initialState = 0 /* ESTADO no es un OBJETO es un valor NUMERICO  */
  const reducer = ( state, action ) => {

    console.log('State: %s BEFORE action apply', state)
    switch (action) {
      case 'increment':
        return state + 1
      case 'decrement':
        return state - 1
      case 'reset':
        return initialState
      default:
        throw new Error()
    }
  }

/* ::::::::::::: Componente Funcional CounterOne ::::::::::::: */
function CounterOne () {
  const [ count, dispatch ] = useReducer(reducer, initialState)
  console.log('State: %s AFTER action apply', count)
  return (
    <div>
      <h2>Count "State Updated" -> { count }</h2>
      <button onClick={() => dispatch('increment')} >+</button>
      <button onClick={() => dispatch('decrement')} >-</button>
      <button onClick={() => dispatch('reset')} >Reset</button>
    </div>
  )
}

export default CounterOne
