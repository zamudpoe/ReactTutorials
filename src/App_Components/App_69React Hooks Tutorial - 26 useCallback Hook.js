import React from 'react'
import { Logo }     from './components/funcionales/Logo'
import './App.css'
import ParentComponent from './components/funcionales/ParentComponent'

function App () {
  console.log('%cReactJS Tutorial: %c69 React Hooks Tutorial: 26 useCallback:\n\n%c .', 'color:teal; font-size:1.9em;', 'color: tomato; font-size: 1.8em;', 'color: orange; font-size: 1.6em;')
  return (
    <div className='App'>
      <Logo />
      <ParentComponent />
    </div>
  )
}

export default App
/*
  :::::::::::::::::::::::::::::::::::: 69 React Hooks Tutorial: 26 useCallback ::::::::::::::::::::::::::::::::::::
                                                                                      Lunes 9:00 AM
                                                                                  Julio 29 del 2019

  QUE?

  useCallback es un hook que retorna una version de la funcion callback que solamente
  cambia si una de las dependencias ha cambiado


  POR QUE?

  Es muy util cuando pasamos callbacks a componentes hijos optimizados que descansan en igualdad
  de referencias para prevenir renders innecesarios.


  ¿COMO IMPLEMENTARLO?

    1. Importamos useCallback
      import React, { useState, useCallback } from 'react'

    2. Implementamos useCallback en la funciones que tendran dependencias
        Ej: este ejemplo nos muestra la implementacion de useCallback con las dependencias a y b ,

            const memoizedCallback = useCallback(
              () => {
                doSomething(a, b);
              },
              [a, b],
            )

        En nuestro caso vamos a implementar

            const incrementAge = useCallback (
              () => {
                setAge( age  + 1 )
              },
              [age]
            )

            const incrementSalary =  useCallback (() => {
              setSalary( salary + 1000 )
            }, [salary])


    3.  En la consola del navegador podremos ver que cuando le demos click
        a los botones que tengan asignadas las funciones incrementSalary ó incrementAge
        solo nos mandara a consola los mensajes correspondientes al estado que fue actualizado.

*/
