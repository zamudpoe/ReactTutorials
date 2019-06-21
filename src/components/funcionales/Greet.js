/* Functional Component */
import React from './node_modules/react'

/* Vanilla JS */
/*
function Greet () {
  return <h1>Hello Engel!</h1>
}
*/

/* ES6  */
/*
export const Greet = () =>  <h1 style={ Styles.titulo } >Hello Engel!</h1>

  And in the app.js we need to import like this
    import {Greet} from './components/Greet'
  And we dont need : export default Greet
*/

const Greet = () =>  <h1 style={ Styles.titulo } >Hello Engel!</h1>

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

