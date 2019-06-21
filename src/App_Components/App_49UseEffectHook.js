import React, { Component } from 'react'
import { Logo }             from './components/funcionales/Logo'
import './App.css'
import HookCounterFour from './components/funcionales/HookCounterFour';

class App extends Component {
  render () {
    console.log('%cReactJS Tutorial: %c49 - useEffect Hook\n\n%c* Los Effect HOOK nos permite realizar EFECTOS LATERALES en COMPONENTES FUNCIONALES!\n\n* Es similar a componentDidMount y componentDidUpdate de un componente de Clase\n\n* Combina ambos efectos laterales componentDidMount y componentDidUpdate en una sola funcion, y asi evitamos repetir codigo. DRY', 'color:teal; font-size:2em;', 'color: tomato; font-size: 1.8em;','color: orange; font-size: 1.6em;')

    return (
      <div className='App'>
        <Logo />
        <br />
        <HookCounterFour />
      </div>
    )
  }
}

export default App

/*
  :::::::::::::::::::::::::::::::::::: 49  useEffect Hook ::::::::::::::::::::::::::::::::::::

  Los Effect HOOK nos permite realizar EFECTOS LATERALES en COMPONENTES FUNCIONALES!.

  * Es similar a componentDidMount y componentDidUpdate de un componente de Clase
  * Combina ambos efectos laterales componentDidMount y componentDidUpdate
    en una sola funcion, y asi evitamos repetir codigo. DRY


*/
