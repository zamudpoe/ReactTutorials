import React, { Component } from 'react'
import Message from './components/stateFull/Messages'

class App extends Component {
  render () {
    console.log('%cReactJS Tutorial : %c10 - State', 'color:teal; font-size:3em;', 'color: tomato; font-size: 2em;')
    return (
      <div className='App'>
        <Message />
      </div>
    )
  }
}

export default App
