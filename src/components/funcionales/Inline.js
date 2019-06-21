import React from 'react'

function Inline () {
  const {Heading} = {...Styles}

  return (
    <div>
      <h1 className='error'>Estilo de la clase .error que se obtiene del archivo appStyles.css instanciado en App.js</h1>  {/* <-- este estilo error lo toma del archivo appStyles.css quye se instancio en App.js */}
      <h1 style= { Heading }>Inline</h1>
    </div>
  )
}

/* Inline Styles */
const Styles = {
  Heading : {
    color   : 'teal',
    fontSize: '4.5em'
  },
}

export default Inline
