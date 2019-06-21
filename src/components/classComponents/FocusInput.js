import React, { Component } from 'react'
import Input from './Input'

class FocusInput extends Component {
  constructor (props) {
    super(props)
    /* 1. Creamos la referencia al componente <Input /> */
    this.componentRef = React.createRef()
  }

  /* 3. Creamos el handler  _clickHandler e invocamos el metodo focusInput()
     de la referencia creada en el constructor. */
  _clickHandler = () => {
    this.componentRef.current.focusInput()
  }

  render () {
    return (
      <div>
        {/* 2. Definimos el componente <Input /> con el attributo ref
            y le asignamos la referencia creada en el constructor. <Input ref={ this.componentRef } /> */}
        <Input ref={ this.componentRef } />

         {/* 4. Definimos la propiedad onclick y le asignamos el handler _clickHandler */}
        <button onClick = { this._clickHandler } >
          Focus Input <span role="img" aria-label='focus'> 👈🏻</span>
        </button>
      </div>
    )
  }
}

export default FocusInput
