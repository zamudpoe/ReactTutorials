import React        from 'react'
import { Logo }     from './components/funcionales/Logo'
import './App.css'
/* import ClassCounterOne from './components/funcionales/ClassCounterOne' */
import HookCounterOne from './components/funcionales/HookCounterOne'

function App () {
  console.log('%cReactJS Tutorial: %c50 - useEffect after render \n\n%c* Los Effect HOOK nos permite realizar EFECTOS LATERALES en COMPONENTES FUNCIONALES!\n\n* Es similar a componentDidMount y componentDidUpdate de un componente de Clase\n\n* Combina ambos efectos laterales componentDidMount y componentDidUpdate en una sola funcion, y asi evitamos repetir codigo. DRY', 'color:teal; font-size:2em;', 'color: tomato; font-size: 1.8em;','color: orange; font-size: 1.6em;')

  return (
    <div className='App'>
      <Logo />
      {/* <ClassCounterOne /> */}
      <HookCounterOne />
    </div>
  )
}

export default App

/*
  :::::::::::::::::::::::::::::::::::: 50 useEffect after render  ::::::::::::::::::::::::::::::::::::


*/
