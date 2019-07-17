import React        from 'react'
import { Logo }     from './components/funcionales/Logo'
import './App.css'
import DataFetching from './components/funcionales/DataFetching2';



function App () {
  console.log('%cReactJS Tutorial: %c56 - Fetching data with useEffect Part 2:\n\n%c', 'color:teal; font-size:1.9em;', 'color: tomato; font-size: 1.8em;','color: orange; font-size: 1.6em;')

  return (
    <div className='App'>
      <Logo />
      <DataFetching />
    </div>
  )
}

export default App

/*
  :::::::::::::::::::::::::::::::::::: 56 Fetching data with useEffect Part 2 ::::::::::::::::::::::::::::::::::::




*/
