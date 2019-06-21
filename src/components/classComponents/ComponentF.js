import React, { Component } from 'react'
import { UserConsumer } from '../UserContext/userContext'

class ComponentF extends Component {
  render () {
    return (
      <div>
        <UserConsumer>
          {
            (username) => {
              return <h2>hello {username} </h2>
            }
          }
        </UserConsumer>
      </div>
    )
  }
}

export default ComponentF
