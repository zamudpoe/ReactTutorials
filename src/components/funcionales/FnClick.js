/* snippet: rfce */

import React from 'react'

function fnClick () {

  function _clickHandler () {
    console.log('_clickHandler')
  }

  return (
    <div>
      <button onClick= { _clickHandler } >
        Click <span role="img" aria-label='mira'> 👈🏻</span>
      </button>
    </div>
  )
}

export default fnClick

/*
  NO AGREGAR ()
  Se define asi :
    <button onClick= { _clickHandler } >

  Y no asi:
    <button onClick= { _clickHandler() } >

  Esto es para que cuando hagamos click en ese momento se invoque la funcion
  y no cuando se cargue el componente funcional fnClick.
*/
