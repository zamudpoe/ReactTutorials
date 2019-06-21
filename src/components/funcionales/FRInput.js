import React from 'react'

/* function RFInput () {
  return (
    <div>
      <input type="text"/>
    </div>
  )
} */

const RFInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type='text'  ref = {ref} />
    </div>
  )
})

export default RFInput
