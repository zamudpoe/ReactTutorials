/* snippet: rce -> */
import React, { Component } from 'react'

class EventBind extends Component {
  /* snippet: rconst */
  constructor (props) {
    super(props)

    this.state = {
      message1 : 'Ola K Ase?',
      message2 : ''
    }

    this._clickHandler = this._clickHandler.bind(this) /*  Binding03 */

  }

  /* BINDING con la forma 1-Binding03  */
  /*
  _clickHandler () {
    console.log(this)
    this.setState({
      message2 : 'Aprendiendo ReactJs Tutorial'
    }, () => console.log('Eureka!!!!'))
  }
  */

  /* BINDING con la forma  4 funciona con la Binding03 tambien */
  _clickHandler = () => {
    this.setState({
      message2 : 'Aprendiendo "Binding" en curso ReactJs Tutorial'
    }, () => console.log('Eureka!!!!'))
  }

  render () {
    return (
      <div>
        <h1 style={style.msg1Style}>{this.state.message1} <span style={ this.state.message2 ? style.msg2Style : style.msg1Style }> {this.state.message2 ? this.state.message2 : 'Tirandola a Gusto' } </span> <span>ó k Ase?</span> </h1>

        {/* Binding 01 */} {/*
        <button onClick = { this._clickHandler.bind(this) } >
          Click <span role="img" aria-label='mira'> 👈🏻</span>
        </button>
        */}


        {/* Binding 02  */} {/*
        <button onClick = { () => this._clickHandler() } >
          Click <span role="img" aria-label='mira'> 👈🏻</span>
        </button>
        */}

        {/* Binding03 y 04  */}
        <button onClick = { this._clickHandler } >
          Click <span role="img" aria-label='mira'> 👈🏻</span>
        </button>
      </div>
    )
  }
}

const style = {
  msg1Style :{
    color: 'teal'
  },
  msg2Style : {
    color: 'tomato'
  }
}

export default EventBind

/*

  NOTAS : BINDING
    la forma 1: BINDING en Render , directamente en el metodo onClick

      <button onClick = { this._clickHandler.bind(this) } >
        Click <span role="img" aria-label='mira'> 👈🏻</span>
      </button>

    La forma 2: ARROW FUNCTION En el metodo Render directamente en el metodo onClick pero le quitamos el .bind(this) y lo metemos en un arrow function

      <button onClick = { () => this._clickHandler() } >
        Click <span role="img" aria-label='mira'> 👈🏻</span>
      </button>

    la forma 3: BINDING en la clase del constructor. LA MEJOR OPCION HASTA EL MOMENTO!.
        this._clickHandler = this._clickHandler.bind(this)
      Y en el metodo Render
        <button onClick = { this._clickHandler } >
          Click <span role="img" aria-label='mira'> 👈🏻</span>
        </button>

    La forma 4 : ARROW FUNCTION como propiedad de Clase, se encuentra aun en fase experimental

      _clickHandler = () => {
        this.setState({
          message2 : 'Aprendiendo ReactJs Tutorial'
        }, () => console.log('Eureka!!!!'))
      }


  ::::: CONSIDERACIONES para hacer el BINDING :::::

    La forma 1 : Se debe evitar por cuestiones de performance
    La forma 2 : Las misma observaciones que la forma 1 , aunque esta sea posiblemente la forma mas simple
                  de pasara parametros, siempre  y cuando no se vayan a renderizar componentes children anidados
    LS forma 3 : La documentacion de React sugiere esta forma para realizar el binding o la forma 4.


*/
