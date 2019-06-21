import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  render () {
    console.log('\n\t%c[ Pure Comp render ]', 'color: orange; font-Size : 2em;')
    return (
      <div>
        <p style={ this.props.styles && this.props.styles.pStyles} >
          Pure Component <span style={this.props.styles && this.props.styles.nameStyles } >{this.props.name}</span>
        </p>
      </div>
    )
  }
}

export default PureComp

/*


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



  ::::::::::::::::::::::::   R  E  S  U  M  E  N   ::::::::::::::::::::::::

  *. En react podemos crear un componente extendiendo de la clase PureComponent.

      import React, { PureComponent } from 'react'

      class PureComp extends PureComponent {
        render () {
          ...
        }
      }

  *. Un componente puro "PureComponent" implementa el metodo de ciclo de vida shouldcomponentUpdate
    con hacer 'Shallow Comparison (SC)' en las props y state del componente.

  *. Si no existen difeerencias , el componente NO es re-renderizado mejorando el rendimiento del componente.

  *. Cuando creamos un componente puro , debemos asegurarnos que todos los componentes HIJOS sean tambien
    componentes puros para evitar comportamientos inesperados.

  *. NUNCA MUTAR el ESTADO. SIEMPRE retornar un NUEVO OBJETO que refleje el nuevo ESTADO

*/
