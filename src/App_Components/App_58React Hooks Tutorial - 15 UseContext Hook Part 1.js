import React        from 'react'
import { Logo }     from './components/funcionales/Logo'
import './App.css'


function App () {
  console.log('%cReactJS Tutorial: %c58 React Hooks Tutorial - 15 - useContext Hook Part 1:\n\n%cContexto provee una forma de pasar datos atraves del arbol de componentes sin tener que pasar hacia abajo manualmente las props en cada nivel, como normalmente se venia haciendo! GENIAL NO?\n\n\tAhora ya sabemos que problema puede resolver al usar Context (useContext), continuemos con \n\n\tuseContext Hook Part 2\n', 'color:teal; font-size:1.9em;', 'color: tomato; font-size: 1.8em;','color: orange; font-size: 1.6em;')

  return (
    <div className='App'>
      <Logo />

    </div>
  )
}

export default App

/*
  :::::::::::::::::::::::::::::::::::: 58 React Hooks Tutorial - 15 - useContext Hook Part 1 ::::::::::::::::::::::::::::::::::::
                                                                          Lunes 9:00 AM
                                                                          Julio 1 del 2019

  [ Context ]
  URL: https://reactjs.org/docs/legacy-context.html#how-to-use-context

  Contexto provee una forma de pasar datos atraves del arbol de componentes sin tener que pasar
  hacia abajo manualmente las props en cada nivel, como normalmente se venia haciendo! GENIAL NO?

  Ahora ya sabemos que problema puede resolver al usar Context (useContext)


  Imaginemos que deseamos pasar el username a los componentes anidados A D y F ,



                                    <AppComponent />

            <ComponentA />            <ComponentB />          <ComponentC />

                                      <ComponentD />          <ComponentE />

                                                              <ComponentF />



*/
