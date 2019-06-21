import React from 'react'

function Example () {
  const [count, setCount] = React.useState(0)
  const [name, setName]   = React.useState('Guest')
  const [age, setAge]     = React.useState(42)
  const [fruit, setFruit] = React.useState('banana')
  const [todos, setTodos] = React.useState([{ text: 'Learn Hooks' }])

  React.useEffect (() => {

    // componentDidMount(), componentDidUpdate()
    // Update the document title using the browser API
    document.title = `${name} clicked ${count} times`

    return React.cleanUp = () => {
      // componentWillUnmount()
      console.log('\ncomponentWillUnmount')
    }
  // effect dependency array
  }, [count, name])  // Only re-run the effect if count or name changes

  return (
    <div>
      <h1>{name}</h1>
      { name == 'Engel' & count > 0 ? <p>{name} The button has been clicked {count} times</p> : <p>Welcome ignoto!</p> }
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>

      <button onClick={() => setName('Engel')}>
        Cambia el nombre
      </button>
    </div>
  )
}

export default Example

/*
  :::::: HOOK useState ::::::

  Que hace useState :
    * Declara una Variable de Estado (En nuestro caso 'count') con un valor inicial, la cual puede ser llamada directamente
      desde cualquier parte del componente funcional,

  Que argumento recibe useState:
    * El unico argumento es el Estado Inicial; En nuestro ejemplo fue '0' : useState(0)

  Que devuelve useState:
    * El Estado Actual el cual se almacena en UNA VARIABLE DE ESTADO que en nuestro caso 'count'
    * La FUNCION DE ESTADO para actualizar el Estado: En nuestro caso setCount()

  LEER EL ESTADO:
    Solo invocamos la variable de estado 'count' en cualquier parte del condigo del componente funcional.

  ACTUALIZANDO EL ESTADO:
    Para actualizar el estado lo hacemos atraves de la funcion setCount() .
    En nuestro ejemplo ya tenemos 'setCount()' 'count' como Variables de Estado


  :::::::::::: ✌️ Rules of Hooks ::::::::::::

  HOOKS son funciones Javascripts, pero imponen 2 reglas adicionales
    *. UNICAMENTE INVOCA o declara TUS HOOKS en el Top-Level de tu componente funcional.
      NOTA: NUNCA lo invoques dentro de LOOPS, CONDICIONES, ó FUNCIONES ANIDADAS.
    *. UNICAMENTE INVOCA TUS HOOKS desde Componentes Funcionales.
      NOTA: No invoques HOOKS desde funciones regulares de JS (Solo hay otro sitio donde INVOCAR tus HOOKS , en tus propios HOOKS)

    There are two common kinds of side effects in React components:
    those that don’t require cleanup, and those that do. Let’s look at this
    distinction in more detail.


*/

