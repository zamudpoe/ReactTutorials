/* ::::::::::::::::::: Declaraciones GLOBALES ::::::::::::::::::::: */
import React, { useReducer } from 'react'

/* ESTADO INICIAL CON DOS ESTADOS */
const initialState = {
  firstCounter  : 0,
  secondCounter : 10,
  thirdCounter : 0
}

/* El reductor recibe una action y retorna un nuevo STATE. */
const reducer = ( state, action ) => {
  console.log('\nState BEFORE action apply: %o\n ', state)

  switch (action.type) {
    case 'increment':
      return { ...state, firstCounter: state.firstCounter + action.value }
    case 'decrement':
      return { ...state, firstCounter: state.firstCounter - action.value }
    case 'plusFive':
      return { ...state, firstCounter: state.firstCounter + action.value }
    case 'minusFive':
      return { ...state, firstCounter: state.firstCounter - action.value }
    case 'increment2':
      return { ...state, secondCounter: state.secondCounter + action.value }
    case 'decrement2':
      return { ...state, secondCounter: state.secondCounter - action.value }
    case 'reset':
      return { ...state, firstCounter: 0, secondCounter: 0 }
    default:
      throw new Error()
  }

}

/* ::::::::::::: COMPONENTE  FUNCIONAL <CounterOne /> ::::::::::::: */
function CounterTwo () {
  const [ count , dispatch ] = useReducer(reducer, initialState)

  console.log('State: %s AFTER action apply\n', count.firstCounter)
  return (
    <div>
      <hr/>
      <h2>firstCounter "State Updated" -> { count.firstCounter }</h2>
      <button onClick={() => dispatch({type: 'increment', value: 1 })} >+1</button>
      <button onClick={() => dispatch({type: 'decrement', value: 1 })} >-1</button>
      <span> | </span>
      <button onClick={() => dispatch({type: 'plusFive',  value: 5})} >+5</button>
      <button onClick={() => dispatch({type: 'minusFive', value: 5})} >-5</button>

      <h2>secondCounter "State Updated" -> { count.secondCounter }</h2>
      <button onClick={() => dispatch({type: 'increment2', value: 1 })} >+1</button>
      <button onClick={() => dispatch({type: 'decrement2', value: 1 })} >-1</button>

      <hr/>
      <button onClick={() => dispatch({type: 'reset'})} >Reset</button>
    </div>
  )
}

export default CounterTwo
