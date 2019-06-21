import React from 'react'

function FragmentDemo () {
  return (
    <React.Fragment>
      <h1 style={styles.h1Styles}>Fragment Demo</h1>
      <p style={styles.pStyles}>This describes the Fragment Demo component</p>
    </React.Fragment>
  )
}

const styles = {
  h1Styles: {
    color: 'teal'
  },
  pStyles: {
    color   : 'silver',
    fontSize: '1.5em'
  }
}

export default FragmentDemo


/*
  ::::::::: React.Fragment :::::::::

  A common pattern in React is for a component to return multiple elements.
  React Fragments let you group a list of children without adding extra nodes to the DOM

  React.Fragment nos permite envolver un grupo de elementos en el DOM como elementos react
  y eliminamos el elmento <DIV />

    EJEMPLO:
      En vez de renderizar esto en el DOM:

        <React.Fragment>
          <div>
            <h1 style={styles.h1Styles}>Fragment Demo</h1>
            <p style={styles.pStyles}>This describes the Fragment Demo component</p>
          </div>
        </React.Fragment>


      Reenderizamos esto otro:

        <React.Fragment>
          <h1>Fragment Demo</h1>
          <p>This describes the Fragment Demo component</p>
        </React.Fragment>


  NOTA: Con el uso de React.Fragment elminamos el div adicional y asi evitamos un nodo extra en el DOM.


*/
