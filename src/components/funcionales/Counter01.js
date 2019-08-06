import React from 'react'
import useCounter from '../CustomHooks/useCounter'

function Counter01 () {
  const [ count, increment, decrement, reset ] = useCounter(0, 1)

  return (
    <div>
      <h2>Count = { count }</h2>
      <button onClick={increment} >Increment</button>
      <button onClick={decrement} >Decrement</button>
      <button onClick={reset} >reset</button>
    </div>
  )
}

export default Counter01
