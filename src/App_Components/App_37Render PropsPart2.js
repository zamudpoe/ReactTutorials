import React, { Component } from 'react'
import './App.css'
import { Logo }             from './components/funcionales/Logo'

import Counter              from './components/classComponents/Counter2'
import ClickCounterTwo      from './components/classComponents/ClickCounterTwo2'
import HoverCounterTwo      from './components/classComponents/HoverCounterTwo2'

class App extends Component {

  render () {
    console.log('%cReactJS Tutorial: %c37 - Render Props (Part 2)\n%cAparte del Patron HOC exite el Patron Render Props es otra manera de compartir funcionalidad entre componentes .', 'color:teal; font-size:2em;', 'color: tomato; font-size: 1.8em;','color: orange; font-size: 1.6em;')

    return (
      <div className='App'>
        <Logo />
        {/*


          <Counter
            render = { (count, incrementCount) =>  (
              <ClickCounterTwo count = { count } incrementCount = { incrementCount } />
            )}
          />
        */}

        <Counter>
          {(count, incrementCount) =>  (
            <ClickCounterTwo count = { count } incrementCount = { incrementCount } />
          )}
        </Counter>
        <Counter>
          { (count, incrementCount) =>  (
            <HoverCounterTwo count = { count } incrementCount = { incrementCount } />
          )}
        </Counter>

        {/* <User render = { ( isLoggedIn ) => isLoggedIn === true ? <h1 style={styles.h1LoggedStyle}>Hello Engel</h1> : <h1>Hello <span style={styles.h1GuestStyle}> GUEST </span></h1> } /> */}
      </div>
    )
  }
}

export default App

/* const styles = {
  h1LoggedStyle: {
    color: 'teal'
  },
  h1GuestStyle: {
    color: 'tomato'
  }
} */

/*
  :::::::::::::::::: 36 Render Props (Part 2) ::::::::::::::::::

  Aparte del Patron HOC exite el Patron Render Props es otra manera de compartir
  funcionalidad entre componentes

  Este patron 'Render Props ' hace referencia a una tecnica para COMPARTIR CODIGO
  entre componentes React usando una PROP CUYO VALOR ES UNA FUNCION.

  Un componente con un prop render, toma una función que devuelve un elemento React
  y lo llama en lugar de implementar su propia lógica render

    <User render = { ( isLoggedIn ) => isLoggedIn === true ? 'Engel' : 'Guest' } />

  En el componente hijo :

      render () {

        const { render } = this.props

        return (
          <div>
            { render(true) }
          </div>
        )
      }

    tambien podemos pasar las props por children , para esto en vez de usar el atributo props
    en el componente padre lo que hacemos es no usarlo y usarlo asi :

        En vez de render props:

          <Counter
            render = { (count, incrementCount) =>  (
              <ClickCounterTwo count = { count } incrementCount = { incrementCount } />
            )}
          />

        Usamos las children props asi:

          <Counter>
            {(count, incrementCount) =>  (
              <ClickCounterTwo count = { count } incrementCount = { incrementCount } />
            )}
          </Counter>


*/
