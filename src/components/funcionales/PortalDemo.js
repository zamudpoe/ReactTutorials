import React from 'react'
import ReactDOM from 'react-dom'

/* function PortalDemo () {
  return (<h1>Portals Demo</h1>)
} */


function PortalDemo () {
  return ReactDOM.createPortal(
    <h1 style={ styles.h1Styles } >Portals Demo</h1> ,
      document.getElementById('portal-root')
    )
}

const styles = {
  h1Styles : {
    color    : 'tomato',
    textAlign: 'center'
  }
}

export default PortalDemo


/*
  ::::::::::::::::::::::::::::: REACT PORTALS ::::::::::::::::::::::::::::::::::::::

  Este Elemento <h1>Portals Demo</h1> se renderiza dentro del componente raiz 'root' y no bajo el 'poratal-root'. esto puede apreciar en index.html.

    function PortalDemo () {
        return <h1>Portals Demo</h1>
      }

  De esta forma React Renderizara el elemento bajo el elemento raiz 'portal-root'

    function PortalDemo () {
      return ReactDOM.createPortal(
        <h1>Portals Demo</h1>,
          document.getElementById('portal-root')
        )
    }

    para que nos sirve? , cuando necesitemos que un componenete sea renderizado aparte

*/
