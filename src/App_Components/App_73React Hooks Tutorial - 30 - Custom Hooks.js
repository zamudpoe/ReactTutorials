import React from 'react'
import { Logo }     from './components/funcionales/Logo'
import './App.css'


function App () {
  console.log('%cReactJS Tutorial: %c73 React Hooks Tutorial: 30 Custom Hooks Hook\n\n%c\n\t* Un Custom Hook es basicamente una funcion JS cuyo nombre comienza con "use"\n\t* Un custom Hook puede llamar otro Hook si lo requiere\n\n\nPor que?\n\n\tCompartir logica - Alternativa a los patrones de  HOCs y Renders Props', 'color:teal; font-size:1.9em;', 'color: tomato; font-size: 1.8em;', 'color: orange; font-size: 1.6em;')

  return (
    <div className='App'>
      <Logo />
      <p>Custom Hooks</p>
    </div>
  )
}

export default App
/*
  :::::::::::::::::::::::::::::::::::: 73  React Hooks Tutorial: 30 Custom Hooks Hook::::::::::::::::::::::::::::::::::::
                                                                                      Lunes 9:00 AM
                                                                                  Agosto 06 del 2019

  * Un Custom Hook es basicamente una funcion JS cuyo nombre comienza con "use"
  * Un custom Hook puede llamar otro Hook si lo requiere

  Por que?
  Compartir logica - Alternativa a los patrones de  HOC's y Renders Props.

*/
