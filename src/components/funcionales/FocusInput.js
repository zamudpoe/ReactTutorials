import React, { useEffect, useRef } from 'react'

function FocusInput () {
  const inputRef = useRef(null)

  useEffect(() => {
    console.log('\n\n\t%cEn este ejemplo solo hacemos focus en el elemento input haciendo uso del hook useRef\n', 'color: teal; font-size: 1.5em; ')
    // Focus the input element
    inputRef.current.focus()
  }, [])

  return (
    <div>
      <label htmlFor="idInput">Id: </label>
      <input id="idInput" ref={ inputRef } type="text" />
    </div>
  )
}

export default FocusInput
