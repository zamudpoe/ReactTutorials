import React, { Component } from 'react'
import ChildComponent from '../funcionales/ChildComponent'

class ParentComponent extends Component {
  constructor (props) {
    super(props)

    this.state = {
      parentName : 'Padre'
    }

    this.greetParent = this.greetParent.bind(this)

  }

  greetParent (childName) {
    console.log(`Alooo ${this.state.parentName} from ${childName}`)
  }

  render () {
    return (
      <div>
        <ChildComponent _greetHandler = { this.greetParent } />
      </div>
    )
  }
}

export default ParentComponent
