import React        from 'react'
import { Logo }     from './components/funcionales/Logo'
import './App.css'

import MouseContainer from "./components/funcionales/MouseContainer";


function App () {
  console.log('%cReactJS Tutorial: %c53 - useEffect with cleanup:\n\n%c', 'color:teal; font-size:2em;', 'color: tomato; font-size: 1.8em;','color: orange; font-size: 1.6em;')

  return (
    <div className='App'>
      <Logo />
      <MouseContainer />
    </div>
  )
}

export default App

/*
  :::::::::::::::::::::::::::::::::::: 53 useEffect with cleanup ::::::::::::::::::::::::::::::::::::

  El codigo de limpieza solo se ejecuta cuando se desmonta el componente!

      useEffect (() => {
        window.addEventListener('mousemove', logMousePosition)
        return () => {
          window.removeEventListener('mousemove', logMousePosition)
        }
      }, [])


    OJO: Para que se ejecute solo una vez pasamos como segundo parametro un array vacio []
        y en el HOOK en su funcion useEffect() le creamos un retorno de una funcion,
        funcion que solo se ejecutara cuando se desmonte el componente.

*/
