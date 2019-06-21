import React, { Component } from 'react'

export default class Form extends Component {
  constructor (props) {
    super(props)

    this.state = {
      username: ''
    }

    /* BINDING */
    this._handleUsernameChange = this._handleUsernameChange.bind(this)
    this._handleSubmit         = this._handleSubmit.bind(this)
  }

  _handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  _handleSubmit = (event) => {
    console.log ('%cA name was submitted: %c%s' , 'color: blue; font-size:2em;', 'color: teal;font-size: 1.8em;', this.state.username)
    event.preventDefault()
  }

  render () {
    return (
      <form onSubmit={this._handleSubmit}>

        <label style={style.userName_lblStyle}>
          Username:
          <input style={style.userName_inpStyle} type="text" value={this.state.username} onChange={this._handleUsernameChange}  />
        </label>

        <input type="submit" value="Submit" />
      </form>
    )
  }
}

const style = {
  userName_lblStyle :{
    color: 'tomato',
    fontWeight: 'bold'
  },
  userName_inpStyle: {
    color: 'teal',
    fontStyle: 'italic'
  }
}


/*

*/
