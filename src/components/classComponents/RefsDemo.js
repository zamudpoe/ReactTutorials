import React, { Component } from 'react'

class RefsDemo extends Component {
  constructor (props) {
    super(props)
    this.inputRef = React.createRef()

    this.cbRef    = null   /* creamos la propiedad */
    this.setCbRef = (element) => { /*  creamos el metodo  */
      this.cbRef = element
    }

  }

  componentDidMount = () => {
  /*  this.inputRef.current.focus()
    console.log(this.inputRef) */

    if (this.cbRef) {
      this.cbRef.focus()
    }

  }

  _clickHandler = () => {
    console.warn (this.inputRef.current.value !== '' ? this.inputRef.current.value : '\n\tnull value on <input /> element' )
    console.log('\n\t%cHemos aprendido una forma a crear acceso a los %crefs, %cusando el metodo %cReact.createRef%c()', 'color: teal; font-size: 1.5em;', 'color: tomato; font-size: 2em;', 'color: teal; font-size: 2em;', 'color: green; font-size: 2em;', 'color: tomato; font-size: 2em;')
  }

  render () {
    return (
      <div>
        <input type="text" ref={ this.inputRef } />
        <input type="text" ref={ this.setCbRef } /> {/* callback refs */}
        <button onClick= { this._clickHandler } >
          Click <span role="img" aria-label='mira'>  👈🏻</span>
        </button>
      </div>
    )
  }
}

export default RefsDemo


/*
  ::::::::::::::::::::::::::::::::::::: React.createRef() - 1er caso UTIL DE USO (focus del elemento input) :::::::::::::::::::::::::::::::::::::

  Vamos a hacer uso de uno de los casos mas comunes como lo es el foco de un elemento <input /> ,
  esto lo lograremos en 3 simples pasos:

    1. CREAMOS LA REFERENCIA Usando el metodo React.createRef() en el constructor.
        class App extends Component {
          constructor (props) {
            super(props)
            this.inputRef = React.createRef()
          }
          ....
        }

    2. Adjuntar this.inputRef al elemento <input type="text"/> en el metodo Render.

      render () {
        return (
          <div>
            <input type="text" ref={ this.inputRef } />
          </div>
        )
      }


    3. Invocar el metodo focus del elemento <input type="text"/> ,
      en el ciclo de vida componentDidMount()

      componentDidMount = () => {
        this.inputRef.current.focus()
        console.log(this.inputRef)
      }

  ::::::::::::::::::::::::::::::::::::: React.createRef() - 2do caso UTIL DE USO (obtener el valor del input) :::::::::::::::::::::::::::::::::::::

    1. Creamos un boton:
        <button>
          Click <span role="img" aria-label='mira'>  👈🏻</span>
        </button>


    2. Definimos el handler del boton
        y accedemos al valor de input con : this.inputRef.current.value

        _clickHandler = () => {
          console.log(this.inputRef.current.value)
        }


    3. Instanciamos el handler en el evento 'onClick' del boton.

        <button onClick= { this._clickHandler } >
          Click <span role="img" aria-label='mira'>  👈🏻</span>
        </button>

    LISTOOOOOO!!!!!

    Hemos aprendido una forma a crear acceso a los refs, usando el metodo React.createRef()



  ::::::::::::::::::::::::::::::::::::: callbacks refs - 1er caso UTIL DE USO (foco del elemento input) :::::::::::::::::::::::::::::::::::::

  React admite otra forma de hacer refs que es usando funciones callbacks refs.

  Haremos uso de esta manera de usar refs para controlar el foco del elemento input y esto lo lograremos mediante 4 pasos:

    1. CREAMOS LA REFERENCIA: en el contructor crearemos una propiedad  cbRef ('cb' por callback) y le assignaremos un valor de null ''
        this.cbRef = null

    2. CREAMO EL METODO CALLBACK:
        this.setCbRef = (element) => {
          this.cbRef = element
        }

    3. ADJUNTAMOS esta referencia AL ELEMENTO INPUT en el metodo render.
        <input type="text" ref={ this.setCbRef } />

    4. Invocar el metodo focus del elemento <input type="text"/> ,
      en el ciclo de vida componentDidMount() , sin usar el current this.cbRef.current.focus() sino de forma directa :
        componentDidMount = () => {
          if (this.cbRef) {
            this.cbRef.focus()
          }
        }

        Algo que tienes que saber de los callback refs es que tenemos que verificar que este definido el elemento en el dom y para eso validamos asi:

          if (this.cbRef) {
            this.cbRef.focus()
          }


*/
