import React, { Component, Pure } from 'react'

import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from '../funcionales/MemoComp'

class ParentComp extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name:  /* this.props.name ? this.props.name : */ 'Vishwas'
    }
  }

  componentDidMount () {
    console.log('\n\t%cDespues de 4 segs cambiaremos el estado name por "Engel"', 'color: teal; font-size: 1.5em;')

    setInterval(() => {
      this.setState({
        name : 'Engel'
      }, console.log('\n\t%cHey!!, Ya pasaron  segs! y si el estado no ha cambiado no se re-renderizara el componente puro , de lo contrario shouldComponentUpdate regresara TRUE debido a sus (SC) qeu detectaran que las props o el state tuvieron cambios  ', 'color: red; font-size: 1.4em;'))
    }, 3000)
  }

  render () {
    console.log('************************ Parent Comp render ***************************')
    return (
      <div>
        <h2 style={ styles.h2Styles } >Parent Component</h2>
        <MemoComp name={ this.props.name ? this.props.name : this.state.name } styles={styles} />

        {/*
        <RegComp name={ this.state.name } />
        <PureComp name={ this.state.name } />
        */}

        <PureComp name={ this.state.name } styles={styles} />

      </div>
    )
  }
}

const styles = {
  nameStyles : {
    color   : 'orange',
    fontSize: '2em'
  },
  pStyles: {
    color: 'teal'
  },
  h2Styles:{
    color: 'teal',
  }
}

export default ParentComp
/*

::::::::: Un Componente Regular :::::::::
  *. Un componente Regular no implemente el metodo shouldComponentUpdate. siempre regresa TRUE por default.

::::::::: Un Componente PURO :::::::::
  *. Un componente Puro implementa superficialmente shouldComponentUpdate con unas PROPS y ESTADO en comparacion.
    *. SC of prevState with currentState
                                            DIFFERENCE?
                                              ======>        re-render component.
    *. SC of prevProps with currentProps


::::::::::  Shallow comparison (SC) ::::::::::
  *. Primitive Types:
      a (SC) b Retorna true Sí a y  b tienen el mismo valor y el mismo tipo

        EJ:
          string 'Vishwas' (SC) string 'Engel' return TRUE

  *. complex Types:
    a (SC) b retorna TRUE si a y b hacen referencia exactamente al mismo objeto.
        EJ:
          var a = {x: 1, y: 2}
          var b = {x: 1, y: 2}
          var c = a

          var ab_eq = (a === b) // FALSE : Por que NO hacen referencia al MISMO OBJETO.
          var ac_eq = (a === c) // TRUE  : Por que SI hacen referencia al MISMO OBJETO.



  ¿POR QUE USAR COMPONENTES PUROS?
  R: Previenen renderizados innecesarios, mejorando el aumento de rendimiento de ciertos escenarios.

  OJO : Cuando estemos lidiando con componentes puros , cuando necesitemos actualizar un array o un objeto ,
        siemrpe debemos hacerlo retornando un nuevo objeto o un nuevo array. para que los (SC) retorne true y entonces
        el componente sea re-renderizado.

*/
