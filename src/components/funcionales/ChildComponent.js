import React from 'react'

function ChildComponent (props)  {
  return (
    <div>
      <button style={ styles.button } onClick = { () =>  props._greetHandler('Child') }  >
        <span role="img" aria-label='mira'>👋🏻</span> Greet Parent
      </button>
    </div>
  )
}

export default ChildComponent

const styles = {
  button: {
    padding     : '.6em',
    color       : 'tomato',
    border      : '2px solid #4CAF50',
    fontSize    : '2em',
    borderRadius: ' 12px',
    boxShadow   : '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
  }
}
/*
  Aprenderemos como un componente hijo invoca un metodo del componente padre y pasa parametros al padre

  Para pasar parametros desde el hijo se usan las ARROW FUNCTIONS pero ahora con parentesis y le pasamos el valor "Child" como unico parametro.
    onClick = { () =>  props._greetHandler('child') }

*/
