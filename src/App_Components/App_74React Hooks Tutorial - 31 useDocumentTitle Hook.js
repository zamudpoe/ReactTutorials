import React from 'react'
import { Logo }     from './components/funcionales/Logo'
import './App.css'
import DocTitleOne from './components/funcionales/DocTitleOne'
import DocTitleTwo from './components/funcionales/DocTitleTwo'

function App () {
  console.log('%cReactJS Tutorial: %c74 React Hooks Tutorial: 31 useDocumentTitle Hooks Hook\n\n%c', 'color:teal; font-size:1.9em;', 'color: tomato; font-size: 1.8em;', 'color: orange; font-size: 1.6em;')

  return (
    <div className='App'>
      <Logo />
      <DocTitleOne />
      <DocTitleTwo />
    </div>
  )
}

export default App
/*
  :::::::::::::::::::::::::::::::::::: 74  React Hooks Tutorial: 31 useDocumentTitle Hooks Hook::::::::::::::::::::::::::::::::::::
                                                                                      Lunes 9:00 AM
                                                                                  Agosto 06 del 2019

*/
