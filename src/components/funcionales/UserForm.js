import React from 'react'
import useInput from '../CustomHooks/useInput'

function UserForm() {
  const [firstName, bindFirstName, resetFirstName] = useInput('')
  const [lastName, bindLastName, resetLastName]    = useInput('')

  const _submitHandler = e => {
    e.preventDefault()
    alert(`Hello ${firstName} ${lastName} `)
  }

  return (
    <div>
      <form onSubmit={_submitHandler}  >
        <div>
          <label htmlFor="id_firstName">Firt Name: </label>
          <input id="id_firstName" name="firstName" type="text"  {...bindFirstName} />
        </div>
        <div>
          <label htmlFor="id_lastName">Last Name: </label>
          <input id="id_lastName" name="lastName" type="text"  {...bindLastName} />
        </div>
        <button>Submit</button>
      </form>

    </div>
  )
}

export default UserForm
