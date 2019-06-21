import React from 'react'

/*
  ReactJS Tutorial - 8 - JSX
  URL: https://www.youtube.com/watch?v=7fPXI_MnBOY&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=8
  */

/* ES6  */
export const Hello = () => {
  /* return (
    <div>
      <h1 style ={styles.titulo}>Hey Engel</h1>
    </div>
  ) */

  return React.createElement(
    'div',
    { id: 'hello', className: 'dummyClass' },
    React.createElement('h1', { style: { color: 'peru' }}, `Hello Engel`))
}

/* const styles = {
  titulo: {
    color: 'peru'
  }
} */
