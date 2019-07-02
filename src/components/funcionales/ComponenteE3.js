import React, { useContext } from 'react'
/* import ComponentF from './ComponenteF' */
import { UserContext, ChannelContext } from '../../App'

function ComponentE () {

  const user    = useContext(UserContext)
  const channel = useContext(ChannelContext)

  return (
    <div>
      {/* { user } - { channel } */}
      { user.shortName } - { channel }    {/* <- aqui usamos un objeto recibido por el padre */}
      {/* <ComponentF /> */}
    </div>
  )
}

export default ComponentE


/*

                                    <AppComponent />

          <ComponentA />            <ComponentB />          <ComponentC />

                                    <ComponentD />          <ComponentE />

                                                            <ComponentF />


  Hay tres simples pasos para consumir el valor

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
