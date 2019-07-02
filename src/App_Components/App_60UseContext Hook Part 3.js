import React        from 'react'
import { Logo }     from './components/funcionales/Logo'
import './App.css'
import ComponentC from './components/funcionales/ComponenteC'

/* const userObject = {
  name     : 'Engelbert Zamudio Ponzzi',
  shortName: 'Engel',
  email    : 'engel_zamudio@icloud.com'
} */

export const UserContext    = React.createContext()
export const ChannelContext = React.createContext()

function App () {
  console.log('%cReactJS Tutorial: %c60 React Hooks Tutorial - 17 - useContext Hook Part 3:\n\n%cContexto provee una forma de pasar datos atraves del arbol de componentes sin tener que pasar hacia abajo manualmente las props en cada nivel, como normalmente se venia haciendo! GENIAL NO?\n\n\n\tNuestra meta sera pasar el "username" hacia los componentes E y F\n', 'color:teal; font-size:1.9em;', 'color: tomato; font-size: 1.8em;','color: orange; font-size: 1.6em;')

  return (
    <div className='App'>
      <Logo />
      {/* <UserContext.Provider value={ userObject }> */}
      <UserContext.Provider value={ 'Angelo' }>
        <ChannelContext.Provider value={'Codevolution'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  )

}


export default App

/*
  :::::::::::::::::::::::::::::::::::: 60 React Hooks Tutorial - 17 - useContext Hook Part 3  ::::::::::::::::::::::::::::::::::::
                                                                          Lunes 9:00 AM
                                                                          Julio 1 del 2019

  [ Context ]
  URL: https://reactjs.org/docs/context.html

  Contexto provee una forma de pasar datos atraves del arbol de componentes sin tener que pasar
  hacia abajo manualmente las props en cada nivel, como normalmente se venia haciendo! GENIAL NO?

  Ahora ya sabemos que problema puede resolver al usar Context (useContext)


  Imaginemos que deseamos pasar el username a los componentes anidados A D y F ,


                                    <AppComponent />


            <ComponentA />            <ComponentB />          <ComponentC />

                                      <ComponentD />          <ComponentE />

                                                              <ComponentF />



  Hay tres simples pasos para consumir el valor desde los componentes hijos anidados , veamos esto en el <ComponentC />

    1. Importar  userContext desde la libreria react.
        import React, { useContext } from 'react'

    2. instanciamos la funcion hook useContext para cada contexto que necesitemos
        const user    = useContext(UserContext)
        const channel = useContext(ChannelContext)

    3. USAMOS el CONTEXTO en nuestro codigo JSX - Que simple!!!
        { user } - { channel }

  LISTOOOO COMO PODEMOS VER ES MAS SIMPLE USAR EL CONTEXTO DE ESTA FORMA QUE HACIENDO
  USO DE CONTEXTO ANIDADO COMO EN EL <ComponenteF />




*/
