/*
  Funciones HOOKS importadas: useState, useEffect
*/
import React, { useState, useEffect } from 'react'

/*
  HOOKS DOCUMENTATION
  URL:  https://reactjs.org/docs/hooks-overview.html

  useState Hook se usa en Componentes Funcionales

*/

/* Functional Component */
const Example = () => {
  const [count, setCount] = useState(0)

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`
    console.log("\n%cYou’re telling React to run your “effect” function after flushing changes to the DOM,\nafter: %c\n\tcomponentDidMount \n\tcomponentDidUpdate \n\tcomponentWillUnmount", 'color: teal; font-size: 2em', 'color: tomato; font-size: 2em;font-weight: bold;')
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me <span role="img" aria-label= 'mira'>👈🏻</span>
      </button>
    </div>
  )
}

export default Example

/*
  You’ve likely performed data fetching, subscriptions, or manually changing the DOM
  from React components before. We call these operations “side effects” (or “effects” for short)
  because they can affect other components and can’t be done during rendering.

  The Effect Hook, useEffect, adds the ability to perform side effects from a function component.
  It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount
  in React classes, but unified into a single API. (We’ll show examples comparing useEffect to these
    methods in Using the Effect Hook.)
 */

