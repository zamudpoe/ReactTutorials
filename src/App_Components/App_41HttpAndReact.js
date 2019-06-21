import React, { Component } from 'react'
import { Logo }             from './components/funcionales/Logo'
import './App.css'

class App extends Component {
  render () {
    console.log('%cReactJS Tutorial: %c41 - HTTP and React\n\n\t%c !', 'color:teal; font-size:2em;', 'color: tomato; font-size: 1.8em;','color: orange; font-size: 1.6em;')

    return (
      <div className='App'>
        <Logo />

      </div>
    )
  }
}

export default App

/*
  :::::::::::::::::::::::::::::::::::: 41 HTTP and React ::::::::::::::::::::::::::::::::::::

        ( React App )
        Web App  <---------------------------------------- fetch
                                          ?                       S E R V E R
        Web App  send ----------------------------------------->

  Con librerias React se lleva muy bien

        ( React App )
        Web App  <---------------------------------------- fetch
                              HTTP Library                       S E R V E R
        Web App  send ----------------------------------------->

  Vamos a usar la libreria Axios
      npm install axios


  En el package.json:

      {
        "name": "hello-world",
        "version": "0.1.0",
        "private": true,
        "dependencies": {
          "axios": "^0.19.0",
          "react": "^16.8.6",
          "react-dom": "^16.8.6",
          "react-scripts": "3.0.1"
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
        },
        "devDependencies": {
          "eslint-plugin-react-hooks": "^1.6.0"
        }
      }


*/
