import React from 'react'

function MemoComp ({ name, styles }) {
  console.log('\n\t%cRendering Memo Component', 'color: tomato; font-size: 2em;')
  return (
    <div>
      <h2 style={ styles.nameStyles }>{name}</h2>
      <p>Componente Memo</p>
    </div>
  )
}

/* export default MemoComp */
export default React.memo(MemoComp)

/*
  React.memo hace que un componente funcional se comporte como un
  componente puro ( que es un class Component) y su funcionalidad es evitar el renderizado


  React.memo es un componente de orden superior. Es similar a React.PureComponent pero para
  componentes de función en vez de clases.

    "En concreto, un componente de orden superior (HOC) es una función que recibe un componente
    y devuelve un nuevo componente"

  Si el componente de función renderiza el mismo resultado dados los mismos props,
  se puede envolver en una llamada a React.memo para una mejora en el desempeño en
  algunos casos memoizando el resultado. Esto significa que React OMITIRA renderizar
  el componente y RE-USARA el último resultado renderizado.

  Por defecto solo comparará superficialmente objetos complejos en el objeto de props.
  Si se desea controlar la comparación, se puede proporcionar también una función de
  comparación personalizada como el segundo argumento.

    function MyComponent(props) {
    //renderiza usando props
    }
    function areEqual(prevProps, nextProps) {

      // retorna true si al pasar los nextProps a renderizar retorna
      // el mismo resultado que al pasar los prevProps a renderizar,
      // de otro modo retorna false

    }
    export default React.memo(MyComponent, areEqual);

*/


