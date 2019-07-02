import React, { useContext } from 'react'

import ComponentF from './ComponenteF'

import { UserContext } from '../../App'

function ComponentE () {

  const user    = useContext(UserContext)

  return (
    <div>
      <h3>{user}</h3>
      <ComponentF />
    </div>
  )
}

export default ComponentE


/*


                                    <AppComponent />

          <ComponentA />            <ComponentB />          <ComponentC />

                                    <ComponentD />          <ComponentE />

                                                            <ComponentF />


*/
