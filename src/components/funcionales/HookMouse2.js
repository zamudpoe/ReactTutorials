import React, { useState, useEffect } from 'react'

function HookMouse () {

  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const logMousePosition = e => {
    console.log('\n\t%c[ Mouse event: mousemove ]', 'color: tomato; font-size: 1.8em;')
    setX(e.clientX)
    setY(e.clientY)
  }

	useEffect (() => {
    console.log('\n\t%c[ SUSCRIBIENDO - EVENT LISTENER : mousemove ] useEffect invocado SOLO UNA VEZ gracias al 2do parametro de useEffect()\n', 'color: tomato; font-size: 1.8em;')
    window.addEventListener('mousemove', logMousePosition)

    /* Retornamos el codigo de LIMPIEZA que solo se ejecuta cuando se desmonta el componente */
    return () => {
      console.log('\n\t%c[ C O D I G O   D E   L I M P I E Z A - REMOVIENDO EVENT LISTENER: "mousemove" ]\n\tComponent unmounting code\n\n\t%cEl codigo de limpieza solo se ejecuta cuando se desmonta el componente y se usa para: \n\n\t* Realizar Cancelar Suscribtions, \n\t* Timers, \n\t* Event Removing Event Handlers,\n\t* etc', 'color: orange; font-size: 1.6em', 'color: purple; font-size: 1.5em')
      window.removeEventListener('mousemove', logMousePosition)
    }
  }, [])

  /*
    Con este array vacio [] '2do parametro' le decimos a React
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

  ::::::::::::::::::::::::::::::  C O D I G O   D E   L I M P I E Z A  ::::::::::::::::::::::::::::::

    El codigo de limpieza se usa para :
      * Realizar Cancelar Suscribtions
      * Timers
      * Event Removing Event Handlers


*/
