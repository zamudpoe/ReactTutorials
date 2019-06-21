/* Functional Component */
import React from 'react'


/*
  Cambiamos la forma de pasar las props , en vez de pasarlo asi  (props) ahora sera asi ({ name, heroName, styles })
  o tambien : const { name, heroName, styles, children } = props
*/
const Greet = ({ name, heroName, styles, children }) =>  {
  console.dir( { name, heroName, styles, children }, {colors: true})

  return (
    <div>
      <h1 style={ styles ? styles.nameStyle : Styles.titulo } >
        Hello {name}! <span style={heroName === "Superman" ? styles.heroKalElStyle : Styles.heroNameStyle }> <span style = { Styles.akaStyles} >a.k.a</span> "{ heroName }"</span>
      </h1>
      { children }
    </div>
  )
}

const Styles = {
  titulo: {
    color : 'green'
  },
  heroNameStyle : {
    color    : 'silver',
    fontStyle: 'italic',
    fontSize: '.7em'
  },
  akaStyles: {
    color: 'teal'
  }
}

export default Greet
