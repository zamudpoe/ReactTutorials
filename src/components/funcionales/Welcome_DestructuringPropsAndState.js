/* Class Component */
import React, { Component } from 'react'

class Welcome extends Component {
  render () {
    const { name, heroName, styles, children } = this.props  /*  hacer destructuring de this.props  */
    console.log('\nUse the props "this.props" in the Welcome Class Component\n')
    return (
      <div>
        <h1 style={ name === "Kal-El"  ? styles.nameStyle : estilos.titulo} >Welcome {name} a.k.a {heroName}</h1>
        { children }
      </div>
    )
  }
}

const estilos = {
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
