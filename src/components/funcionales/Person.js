import React from 'react'

function Person (props) {
  return (
    <div>
      <h2>{props.person.id} { props.person.name }</h2>
    </div>
  )
}

export default Person
