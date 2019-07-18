import React from 'react'
import { Logo }     from './components/funcionales/Logo'
import './App.css'

function App () {
  console.log('%cReactJS Tutorial: %c68 React Hooks Tutorial: 25 Fetching data with useReducer Part 3:\n\n%cMIRA EL ARCHIVO APP.JS para ver el resumen de lo aprendido useState vs useReducer.', 'color:teal; font-size:1.9em;', 'color: tomato; font-size: 1.8em;', 'color: orange; font-size: 1.6em;')
  return (
    <div className='App'>
      <Logo />

    </div>
  )
}

export default App
/*
  :::::::::::::::::::::::::::::::::::: 68 React Hooks Tutorial: 25 Fetching data with useReducer Part 3 ::::::::::::::::::::::::::::::::::::
  Lunes 9:00 AM
  Julio 18 del 2019

                                      useState VS useReducer

        Scenario                        useState                               useReducer
        =============================   ====================================   =====================
        Type of state                   number, String, Boolean                Object or Array
        Number of state transitions     One or Two                             Too many
        Related state transitions?      No                                     Yes
        Bussiness logic                 No bussiness logic                     complex bussiness logic
        Local vs Global State           Local                                  Global

*/
