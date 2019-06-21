/* Functional Component */
import React from 'react'

const Greet = (props) =>  {
  console.dir(props, {colors: true})

  return (
    <div>
      <h1 style={ props.styles ? props.styles.titulo : Styles.titulo } >
        Hello {props.name}! <span style={props.heroName === "Kal-El" ? Styles.heroKalElStyle : Styles.heroNameStyle }> <span style = { Styles.akaStyles} >a.k.a</span> "{ props.heroName }"</span>
      </h1>

      {/*
        Renderizando los hijos podemos desde el componente padre agregarle al componente mas componentes hijos y seran reenderizados independientemente
      */}

      {props.children}
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
  heroKalElStyle : {
    color     : 'red',
    fontStyle : 'italic',
    fontSize  : '.8em'
  },
  akaStyles: {
    color: 'teal'
  }
}

export default Greet
