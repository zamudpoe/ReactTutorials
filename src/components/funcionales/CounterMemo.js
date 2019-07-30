import React, { useState, useMemo } from 'react'

function Counter() {
  const initialState = 0

  const [counterOne, setCounterOne] = useState(initialState)
  const [counterTwo, setCounterTwo] = useState(initialState)

  const incrementOne = () => {
    console.log('incrementOne ')
    setCounterOne( counterOne + 1)
  }

  const incrementTwo = () => {
    console.log('incrementTwo ')
    setCounterTwo( counterTwo + 1)
  }

  const isEven = useMemo (() => {
    console.log('useMemo Hook in Action!.')

    let i = 0
    while ( i < 2000000000 ) i++
    return counterOne % 2 === 0
  }, [counterOne])

  return (
    <div>
      <div>
        <button onClick = { incrementOne } > Count One - { counterOne } </button>
        <span>{isEven ?  ' - Par' : ' - Impar'}</span>
      </div>
      <div>
        <button onClick= { incrementTwo } >Count Two - { counterTwo } </button>
      </div>
    </div>
  )
}

export default Counter
