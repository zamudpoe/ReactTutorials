import React, { useState, useEffect } from 'react'

function HookMouse () {

  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const logMousePosition = e => {
    console.log('\n\t%cMouse event', 'color: tomato; font-size: 1.8em;')
    setX(e.clientX)
    setY(e.clientY)
  }

	useEffect (() => {
    console.log('\n\t%cuseFffect called ONLY ONCE????', 'color: tomato; font-size: 1.8em;')
    window.addEventListener('mousemove', logMousePosition)

  }, [])

  /*
    Con este array vacio [] '2do parametro' le decimos a react
    Hey este EFECTO EN PARTICULAR NO DEPENDE DE NINGUNA PROPS O STATE.
    Por lo tanto no hay ninguna razon para que se le invoque en
    los re-renderizados. SOLO EL RENDERIZADO INICIAL!.
  */

  return (
    <div>
      Hooks X - { x } Y - { y }
    </div>
  )

}

export default HookMouse

/**
  Como queremos que solo se invoque UNA SOLA OCASION cuando el componente se
  reenderize inicialmente la primera vez, le pasaremos en su 2do parametro un array vacio
*/
