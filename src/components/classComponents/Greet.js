/* Class Component */
import React, { Component } from './node_modules/react'

class Greet extends Component {

  render () {
    return (
      <h1 style={ Styles.titulo } >Hello Engel!</h1>
    )
  }
}

const Styles = {
  titulo: {
    color : 'tomato'
  }
}

export default Greet

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

