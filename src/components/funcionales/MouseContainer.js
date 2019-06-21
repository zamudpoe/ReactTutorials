import React, { useState } from 'react'
import HookMouse           from './HookMouse2'

function MouseContainer () {
  const [display, setDisplay] = useState(false)

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {display && <HookMouse />}
    </div>
  )
}

export default MouseContainer
