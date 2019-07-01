import React        from 'react'
import { Logo }     from './components/funcionales/Logo'
import './App.css'
import ComponentC from './components/funcionales/ComponenteC'

const userObject = {
  name     : 'Engelbert Zamudio Ponzzi',
  shortName: 'Engel',
  email    : 'engel_zamudio@icloud.com'
}

export const UserContext    = React.createContext()
export const ChannelContext = React.createContext()

function App () {
  console.log('%cReactJS Tutorial: %c59 React Hooks Tutorial - 16 - useContext Hook Part 2:\n\n%cContexto provee una forma de pasar datos atraves del arbol de componentes sin tener que pasar hacia abajo manualmente las props en cada nivel, como normalmente se venia haciendo! GENIAL NO?\n\n\n\tNuestra meta sera pasar el "username" hacia los componentes E y F\n', 'color:teal; font-size:1.9em;', 'color: tomato; font-size: 1.8em;','color: orange; font-size: 1.6em;')
  console.log('%c¿Hay una manera mejor? - %cSI -> useContext Hoook :\n\n%cuseContext Hook es donde viene a ser util para manejar multiples contextos!, lo veremos en el proximo episodio \n', 'color:teal; font-size:1.9em;', 'color: tomato; font-size: 1.8em;','color: orange; font-size: 1.6em;')
  return (
    <div className='App'>
      <Logo />
      <UserContext.Provider value={ userObject }>
        <ChannelContext.Provider value={'Codevolution'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  )

}


export default App

/*
  :::::::::::::::::::::::::::::::::::: 59 React Hooks Tutorial - 16 - useContext Hook Part 2  ::::::::::::::::::::::::::::::::::::
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


  Para hacer uso del contexto

    1. CREAR el CONTEXTO
      export const UserContext    = React.createContext()

    2. Proveer al contexto con algun valor.
        Para eso envolveremos a los hijos con provider para que accedan al valor compartido
        desde su padre, en nuestro caso el componente hijo es <ComponentC />

      <UserContext.Provider  value={'Vishwas'}>
          <ComponentC />
      </UserContext.Provider>


    3. EXPORTAMOS el CONTEXTO
        export const UserContext    = React.createContext()

    4. IMPORTAMOS desde los componentes hijos ,
        import { UserContext } from '../../App'

    5. USAMOS el CONTEXTO en el componente hijo F con <UserContext.Consumer> ... </UserContext.Consumer>

        function ComponentF () {
        	return (
            <div>
              <UserContext.Consumer>
                {user => {
                  return (
                    return <div>User context value {user} </div>
                  )
                }}
              </UserContext.Consumer>
            </div>
        	)
        }


    O J O : En mi caso yo use el contexto creando un objeto
            y desde los hijos consumo los valores del objeto como cualquier objeto.



*/
