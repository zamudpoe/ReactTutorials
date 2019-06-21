import React, { useState } from 'react'

function HookCounterThree () {

  const [name, setName] = useState({ firstName: '', lastName: '' })  /* Esta vez pasaremos un OBJECTO. */

	return (
		<form>
			<input
        style={styles.firstName_InputStyles}
				type     = "text"
				value    = {name.firstName}
				onChange = {e => setName({ ...name, firstName: e.target.value })}
			/>
			<input
        style={styles.lastName_InputStyles}
				type     = "text"
				value    = {name.lastName}
				onChange = {e => setName({ ...name, lastName: e.target.value })}
			/>
      <br/><hr/>
			<h2 style={styles.firstName_H2Styles}>Your first name is - <span style={styles.spanStyles}>{name.firstName}</span></h2>
			<h2 style={styles.lastName_H2Styles}>Your last name is - <span style={styles.spanStyles}>{name.lastName}</span></h2>
			<h2 style={styles.object_H2Styles}>{JSON.stringify(name)}</h2>
		</form>
	)
}


const styles = {
  firstName_InputStyles : {
    color   : 'green',
    fontSize: '1.4em'
  },
  lastName_InputStyles: {
    color   : 'green',
    fontSize: '1.4em'
  },
  firstName_H2Styles: {
    color   : 'lightblue',
    fontSize: '1.5em'
  },
  lastName_H2Styles: {
    color   : 'lightblue',
    fontSize: '1.5em'
  },
  spanStyles :{
    color: 'purple'
  },
  object_H2Styles : {
    color   : 'pink',
    fontSize: '1.3em'
  }
}

export default HookCounterThree


