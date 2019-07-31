import React, { Component } from 'react'

class ClassTimer extends Component {

  interval

  constructor(props) {
    super(props)
    this.state = {
      timer: 0
    }
  }

  componentDidMount () {
    console.warn('Componente de Clase Montado!')
    this.interval = setInterval(() => {
      this.setState(prevState => ({ timer: prevState.timer + 1 }))
      console.log('Timer: %s', this.state.timer)
    }, 1000)
  }

  componentWillUnmount () {
    console.warn('Desmontando componente!')
    clearInterval(this.interval)
  }

  render() {
    return (
      <div>
        <h3>Class Timer - { this.state.timer } Segs</h3>
        <button onClick={ () => clearInterval( this.interval) } >Clear Timer</button>
      </div>
    )
  }
}

export default ClassTimer
