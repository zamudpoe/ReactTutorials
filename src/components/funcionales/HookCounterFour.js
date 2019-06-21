import React, { useState } from 'react'

function HookCounterFour () {
  const [items, setItems] = useState([])   /* le pasamos un array vacio */

  const addItem = () => {
    setItems ([...items, {
      id    : items.length,
      value : Math.floor(Math.random() * 10) + 1
    }])
  }

  console.log(...items)

  return (
    <div>
      <button onClick={ addItem }>Add a random number</button>
        <ul>
          {items.map( item => (
            <li key={item.id}>{item.value}</li>
          ))}
        </ul>
    </div>
  )
}

export default HookCounterFour

/*

  * El HOOK useState te permite aagregar ESTADO a componentes funcionales.
  * En Clases, el ESTADO es SIEMPRE un OBJETO
  * Con useState Hook , el ESTADo no tiene que ser un OBJETO
  * El HOOK useState retorna un arreglo con 2 elementos.
  * El primer elemento es el valor actual del estado, y el segundo elemento es una
      funcion seteadora del ESTADO.

  * El NUEVO valor del ESTADO depende del VALOR del ESTADO ANTERIOR??,
      R: Se puede pasar una FUNCION A LA FUNCION SETEADORA DEL ESTADO.

        Funcion Seteadora : setItems
        Funcion Envoltura : addItem

  * Cuando estamos lidiando con OBJECTOS ó ARRAY, siempre asegurate de propagar
      tu variable de ESTADO y entonces llama a la FUNCION seteadora

*/
