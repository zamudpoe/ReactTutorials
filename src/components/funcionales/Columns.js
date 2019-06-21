import React from 'react'

function Columns () {
  /* const items = ['uno','dos'] */
  return (
    <>
      <td>Name</td>
      <td>Vishwas</td>
    </>
  )
}

export default Columns

/*

  Este codigo tiene la limitacion que no se le puede pasar la propiedad 'key'

  <>
    <td>Name</td>
    <td>Vishwas</td>
  </>

*/


/*
  este otro codigo si se le puede pasar 'key'

  items.map( (item ) => (
    <React.Fragment key={item.id}>
      <h1>Title</h1>
      <p>{item.title}</p>
    </React.Fragment>
  ))

 */

