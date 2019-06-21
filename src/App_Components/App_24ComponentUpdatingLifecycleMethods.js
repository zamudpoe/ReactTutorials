import React from 'react'
import './App.css'

import { Logo } from './components/funcionales/Logo'
import LifeCycleA from './components/classComponents/LifeCycleA2'

class App extends React.Component {
  render () {
    console.log('%cReactJS Tutorial: %c24 - Component Updating Lifecycle Methods', 'color:teal; font-size:2.5em;', 'color: tomato; font-size: 2em;')
    return (
      <div className="App" >
        <Logo />
        <LifeCycleA />
      </div>
    )
  }
}

export default App

/*
  ::::::: Updating Lifecycle Methods :::::::

  1. static getDerivedStateFromProps (props, state) :
      Este metodo se usa cuando el ESTADO depende de las PROPS DEL COMPONENTE.
      Este nos retorna un objeto con el ESTADO ACTUALIZADO,
      Este metodo es llamada cada vez que el componente es re-renderizado
      NO SE DEBEN CAUSAR EFECTOS SECUNDARIOS. Como HTTP requests

  2. shouldComponentUpdate(nextProps, nextState) :
    *. Es invocado ANTES de RENDERIZAR cuando las nuevas props ó el state esta siendo recibidos.
    *. Este metodo recibe las PROPS ACTUALIZADAS y el ESTADO ACTUALIZADO.
    *. Su principal proposito le dio el nombre a este metodo, dictaminar si el componente debe ser re-renderizado o no!
    *. Por default todos los Class Components seran renderizados cuando sus props o su estado cambien,
        en este metodo se puede evitar este comportamiento con retornar FALSE
    *. Lo que se debe hacer es comparar las props existentes con las proximas y decidir si se debe o no re-renderizar
      el componente.
    *. NO CAUSA SIDE-EFFECTS :
        *. HTTP REQUESTS
        *. Metodo setState


  3. Metodo Render() :
    *. El único metodo requerido.
    *. Lee las props & statte y retorna JSX.
    *. NO-ACTUALIZA EL ESTADO
    *. NO-INTERACTUA CON EL DOM
    *. NO-HACE LLAMADAS AJAX.


  4. getSnapshotBeforeUpdate (prevProps, prevState):
    *. Es invocado ANTES de los cambios en el VIRTUAL DOM, sean reflejados en el DOM.
    *. Capturar alguna informacion del DOM,para calculos y mejorar el performance.
    *. RETORNA null o retorna un valor.
    *. El valor retornado sera pasado como el 3er parametro para el proximo metodo "componentWillUpdate"

  5. componentWillUpdate (prevProps, prevState, snapshot)
    *. El 3er parametro snapshot es el retornado por el metodo 'getSnapshotBeforeUpdate'
    *. Es invocado despues del render  esta terminado en el ciclo de re--render
    *. Este metodo se invoca garantizado SOLO UNA VEZ en cada ciclo del re-render.
    *. Causa SIDE EFFECTS "HTTP Request", pero antes se necesita hacer comparaciones de las viejas props vs las nuevas props.


  :::::::::::::: Unmounting Phase Method ::::::::::::::
    *. componentWillUnmount(): el metodo es invocado inmediatamente antes que un componente
        sea desmontado y destruido.
        *  CANCELANDO cualquier solicitud de red,
        *. Removiendo handlers,
        *. Cancelando cualquier subscripcción
        *. Tambien invalidando timers.
        *. NO INVOCAR EL METODO SETSTATE
        *.

  :::::::::::::: ERROR HANDLING PHASE METHODS ::::::::::::::

    1. static getDerivedStateFromError = (error)
    2. componentDidCatch(error, info)

  Cuando hay un error durante el renderizado , en un metodo de ciclo de vida del componente,
  ó en el constructor de cualquier Componente HIJO.



*/
