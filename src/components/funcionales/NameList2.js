import React from 'react'
import Person from './Person2'

function NameList () {
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React"
    },
    {
      id: 2,
      name: "Kal-El",
      age: 33,
      skill: "Angular"
    },
    {
      id: 3,
      name: "Diana",
      age: 400,
      skill: "Vue"
    }
  ]

  const personList  = persons.map( (person ) =>  (
    <Person key={person.id} person= {person} />
  ))

  return <div> {personList} </div>
}

export default NameList

/*
  :::::: INDEX AS KEY ::::::
  ¿When to use index as a key?

    1. The items in your list DO NOT HAVE A UNIQUE ID
    2. The list is a STATIC LIST and will NOT CHANGE.
    3. The list will never be reordered or filtered.
    4.
*/

