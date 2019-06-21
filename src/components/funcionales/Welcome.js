/* Class Component */
import React, { Component } from 'react'

class Welcome extends Component {
  render () {
    console.log('\nUse the props "this.props" in the Welcome Class Component\n')
    return ( <h1 style={ this.props.name === "Kal-El"  ? this.props.styles.titulo : Styles.titulo} >{this.props.name} a.k.a {this.props.heroName}</h1>)
  }
}

const Styles = {
  titulo: {
    color : 'teal'
  }
}

export default Welcome

/*
  Functional VS Class Components

  Functional
  * Los componentes funcionales son simples funciones JS que reciben props y regresan declaraciones.
  * Se recomienda usar los componentes funcionales tanto como sea posible.
  * Ausencia de la palabra reservada 'this'
  * Solucion sin usar un 'Estado'
  * Principalmente responsables del UI
  * Conocidos tambien como 'Stateless' , 'Dumb', 'Presentational'

  Class Components
  * Son mas ricos en caracteristicas
  * Mantienen su propio DATA-STATE
  * Contienen Logica compleja UI
  * Proveen lifecycle hooks
  *


*/

/*
  props VS state

  props
  * props get passed to the component
  * Function parameteres
  * props are inmmutable, cannot be changed by the childreen.
    * props - Functional Components
    * this.props in "Class Components"
  *

  state
  * state is managed within the component
  * Variables declared in the function body
  * state can be changed.
    * useState Hook - Functional Components.
    * this.state - Class Components
    *


*/
