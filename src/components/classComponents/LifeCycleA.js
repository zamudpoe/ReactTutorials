import React, { Component } from 'react'

/* Componentes */
import LifeCycleB from '../classComponents/LifeCycleB'

class LifeCycleA extends Component {
  constructor(props) {
    super(props)

    this.state = {
       name     : 'Padre',
       fuente   : 'Desde Padre',
       hasError : false
    }
    console.log('%c\tLifeCycleA Constructor', 'color: green; font-Size: 1.5em;')
  }

  static getDerivedStateFromProps = (props, state) => {
    console.log('%c\tLifeCycleA getDerivedStateFromProps', 'color: green; font-Size: 1.5em;')
    return null
  }

  static getDerivedStateFromError = (error) => {
    console.log('%c\tLifeCycleA getDerivedStateFromError', 'color: green; font-Size: 1.5em;')
    return  { hasError: true }
  }

  componentDidCatch(error, info) {
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
    console.log(info.componentStack);
  }

  componentDidMount = () => {
    console.log('%c\tLifeCycleA %ccomponentDidMount', 'color: green; font-Size: 1.5em;', 'color: orange; font-size:1.5em;')
  }

  render () {
    console.log('%c\tLifeCycleA Render', 'color: green; font-Size: 1.5em;')
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return (
      <div>
        <h1>Componente LifeCycleA</h1>
        <LifeCycleB origen = { this.state.fuente } />
      </div>
    )
  }
}

export default LifeCycleA

/*
  :::::::::: Mountin Lifecycle Method ::::::::::

    1. Constructor(props) :
          Es una Funcion especial que es llamada cuando un NUEVO Componente es creado.
          Es utilizado para :
            *. INICIALIZAR el ESTADO
            *. Para el BINDING de los Event Handlers a las instancias de la CLASE.
            *. No causa efectos secundarios como : Solicitudes HTTP.
                NUNCA HACER SOLICITUDES HTTP DESDE EL CONSTRUCTOR.

          NOTA: HAY DOS PUNTOS IMPORTANTES ANTES DE DEFINIR TU PROPIO CONSTRUCTOR.
            1. Invocar la funcion especial llamada super(props), sobreescribe directamente this.state
            2. El constructor es el unico sitio donde esperar cambiar o setear el ESTADO directamente seteando estos campos.
                En otros escenarios se tiene que usar this.setState

        El constructor inicializa el ESTADO y busca los EVENT HANDLERS y no causa ningun efecto secundario.

    2. METODO STATIC 'static getDerivedStateFromProps (props, state)' :

        La documentacion de React menciona que este ciclo de vida 'lifeCycle' es raramente usado.
        Este ciclo de vida es especialmente usado cuando el 'ESTADO' del componente depende
        de los cambios en los 'props' a lo largo del tiempo.

        Dicho de otra manera cuando el ESTADO depende de los valores que recibe por los props.

        En este escenario podemos setear el ESTADO, este metodo no tiene acceso a la palabra reservada 'this',
        asi que no podemos llamar a this, en su lugar lo que hace el metodo es devolver un OBJETO que representa el NUEVO ESTADO.


    3. Metodo render() :
        *. Es el unico metodo requerido.
        *. Solo Lee 'props' y el 'estado' y regresa JSX
        *. No cambia el ESTADO o interactua con el DOM o hacer llamadas AJAX
        *. Los metodos del ciclo de vida los hijos tambien son ejectuados


    4. Metodo componentDidMount()
        *. Se invoca inmediatamente DESPUES que un componente y todos sus hijos han sido renderizados en el DOM.
        *. EFECTOS SECUNDARIOS: Este metodo es PERFECTO para causar EFECTOS SECUNDARIOS,
            o lo que es lo mismo inicializar los nodos del DOM que lo necesiten como cargar datos
            haciendo solicitudes AJAX.
            *. Interactuar con el DOM: una vez que todos los componentes estan cargados en el DOM , podemos manipular el mismo.
            *. Realizar solicitudes AJAX´s para cargar datos.










  El Timing se ejecucion durante el montaje :

    LifeCycleA Constructor
    LifeCycleA.js:15 	LifeCycleA getDerivedStateFromProps
    LifeCycleA.js:24 	LifeCycleA Render
    LifeCycleA.js:20 	LifeCycleA componentDidMount

  Que pasa si el componente A tiene un hijo B?
    R: Se ejecuta el mismo pero cuando se van a montar primero se monta el componente B y luego el A.

*/
