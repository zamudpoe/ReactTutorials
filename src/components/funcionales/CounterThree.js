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

/* ::::::::::::: Componente Funcional CounteThree ::::::::::::: */
function CounterThree () {
  const [ count, dispatch ]       = useReducer(reducer, initialState)
  const [ countTwo, dispatchTwo ] = useReducer(reducer, initialState)

  console.log('State: %s AFTER action apply', count)

  return (
    <div>
      <section>
        <h2>Count "State Updated" -> { count }</h2>
        <button onClick={() => dispatch('increment')} >+</button>
        <button onClick={() => dispatch('decrement')} >-</button>
        <button onClick={() => dispatch('reset')} >Reset</button>
      </section>
      <section>
        <h2>Count Two -> { countTwo }</h2>
        <button onClick={() => dispatchTwo('increment')} >+</button>
        <button onClick={() => dispatchTwo('decrement')} >-</button>
        <button onClick={() => dispatchTwo('reset')} >Reset</button>
      </section>
    </div>
  )

}

export default CounterThree
