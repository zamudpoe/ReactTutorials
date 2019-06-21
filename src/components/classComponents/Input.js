import React, { Component } from 'react'

class Input extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()  /*  1. Creamos la referencia al elemento input */
  }

  /* 3. Creamos metodo  para ser invocado desde el padre por medio de refs
        y definimos el foco del elemento input dentro del metodo */
  focusInput = () => {
    this.inputRef.current.focus()
  }

  render () {
    return (
      <div>
        {/*  2. Definimos el atributo ref y le assignamos la referencia creada en el constructor  */}
        <input type='text' ref={ this.inputRef } />
      </div>
    )
  }
}

export default Input
