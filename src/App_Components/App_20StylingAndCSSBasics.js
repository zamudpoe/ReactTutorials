import React, { Component } from 'react'
import './App.css'

import { Logo } from '../components/funcionales/Logo'
import Stylesheet from '../components/funcionales/Stylesheet'
import Inline from '../components/funcionales/Inline'

import './appStyles.css'  /* al importar los estilo asi, todos sus estilos tambien estan a disposicion de los componentes hijos */
import styles from './appStyles.module.css'

/* Class Component */
class App extends Component {

  render () {
    console.log('%cReactJS Tutorial: %c20 - Styling And CSS Basics', 'color:teal; font-size:3em;', 'color: tomato; font-size: 2em;')
    return (
      <div className="App" >
        <Logo />    {/* Functional component */}
        <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1>
        <Stylesheet primary= {true} />
        <Inline />
      </div>
    )
  }

}

export default App

/*
  :::::: Styling React Components :::::::

      1. CSS Stylesheets
      2. Inline stylings
      3. CSS Modules
      4. CSS in JS Libraries ( Styled Components )

  CSS MODULES esta disponible a partir de la version 2 de react-scripts  , revisar el package.json

      {
        "name": "hello-world",
        "version": "0.1.0",
        "private": true,
        "dependencies": {
          "react": "^16.8.6",
          "react-dom": "^16.8.6",
          "react-scripts": "3.0.1"    // <---- es mayor que 2
        },
        "scripts": {
          "start": "react-scripts start",
          "build": "react-scripts build",
          "test": "react-scripts test",
          "eject": "react-scripts eject"
        },
        "eslintConfig": {
          "extends": "react-app"
        },
        "browserslist": {
          "production": [
            ">0.2%",
            "not dead",
            "not op_mini all"
          ],
          "development": [
            "last 1 chrome version",
            "last 1 firefox version",
            "last 1 safari version"
          ]
        }
      }

*/
