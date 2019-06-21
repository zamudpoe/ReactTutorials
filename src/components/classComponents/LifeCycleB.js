import React, { Component } from 'react'

class LifeCycleB extends Component {
  constructor(props) {
    super(props)

    this.state = {
       name    : 'Hijo',
       nicname : 'B' ,
       origen  : '',
       hasError : false
    }
    console.log('%c\tLifeCycleB Constructor', 'color: green; font-Size: 1.5em;')
  }

  static getDerivedStateFromProps = (props, state) => {
    console.log('%c\tLifeCycleB getDerivedStateFromProps', 'color: green; font-Size: 1.5em;')

    return props  /* <- Retornamos las props pero lo que realmente estamos haciendo es actualizar el estado del componente B con las props */
  }

  static getDerivedStateFromError = (error) => {
    console.log('%c\tLifeCycleB getDerivedStateFromError', 'color: green; font-Size: 1.5em;')
    return  { hasError: true }
  }

  componentDidMount = () => {
    console.log('%c\tLifeCycleB %ccomponentDidMount', 'color: green; font-Size: 1.5em;', 'color: orange; font-size:1.5em;')
  }

  render () {
    console.log('%c\tLifeCycleB Render', 'color: green; font-Size: 1.5em;')
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return (
      <div>
        <h1>Componente LifeCycleB</h1>
        <p style = {styles.pStyles} >{ this.state.origen }</p>
      </div>
    )

  }
}

const styles = {
  pStyles : {
    color     : 'teal',
    fontSize  : '1.6em',
    fontWeight: 'italic'
  }
}

export default LifeCycleB

/*
  :::::::::: Mountin Lifecycle Method ::::::::::

  El Timing se ejecucion durante el montaje :

    LifeCycleA Constructor
    LifeCycleA getDerivedStateFromProps
    LifeCycleA Render
    LifeCycleB Constructor
    LifeCycleB getDerivedStateFromProps
    LifeCycleB Render
    LifeCycleB componentDidMount
    LifeCycleA componentDidMount


  Que pasa si el componente A tiene un hijo B?
    R: Se ejecuta el mismo pero cuando se van a montar primero se monta el componente B y luego el A.

  En el Componente LifeCycleB imprimimos el mensaje almacenado en el state 'origen' del componente B ,
  que se actualizo por medio del metodo 'getDerivedStateFromProps', que lo que hace es retornar un
  objeto (las props) que actualiza el nuevo estado 'origen'


*/
