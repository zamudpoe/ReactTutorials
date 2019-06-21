import React, { Component } from 'react'

class RegComp extends Component {
  render () {
    console.log('\tRegular Comp render')
    return (
      <div>
        Regular Component {this.props.name}
      </div>
    )
  }
}

export default RegComp


/*
  ::::::::: Un componente Regular :::::::::

  Un componente Regular no implemente el metodo shouldComponentUpdate. siempre regresa TRUE por default.

    import React, { Component } from 'react'
    class RegComp extends Component {
      ...
    }

*/
