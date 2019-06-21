import React, { useState, useEffect } from 'react'

function IntervalHookCounter () {
    const [ count, setCount ] = useState(0)

    const tick = () => {
      setCount(prevCount =>  prevCount + 1) /* <- useEffect with CORRECT dependency, and for this example a [] in the useEffect Hook */
      /* setCount( count + 1)  */  /* <- useEffect with INCORRECT dependency and for this example a [count] in the useEffect Hook */
    }

    /* useEffect (() => {
      function doSometing () {
        console.log(someProp)
      }
      doSometing()
      const intervalId = setInterval(tick, 1000)
      return () => clearInterval(intervalId)
    }, [someProp]) */

    useEffect (() => {
      const intervalId = setInterval(tick, 1000)
      return () => clearInterval(intervalId)  /* <--- cleanup logic for the unmount component  */
    }, [])

    /*
      NO es necesario pasar dependencia '[count]' ya que estamos haciendo uso del prevState
      'prevCount' que ya tenemos en la funcion useEffect
    */

  return (
    <div>
      { count > 0 ? <h3 style={styles.h3Styles} ><span style={styles.spanStyles}>{count} </span>  Segs...</h3>  : <span style={styles.spanStyles}>⏱ Espere..</span>  }
    </div>
  )
}

const styles = {
  h3Styles :{
    color: 'lightblue',
  },
  spanStyles : {
    color   : 'tomato' ,
    fontSize: '1.3em'
  }
}

export default IntervalHookCounter


/*
  ::::::::::::::::::::::::::::::::::  Multiples Efectos  ::::::::::::::::::::::::::::::::::
    Para hacer uso de multiples efectos dentro de nuestro componente Hook ,
    tenemos que definir dichas funcionalidades dentro de la funcion 'useEffect' ,
    y en la lista de dependencias pasamos la dependencia de la funcion 'someProp'

        useEffect (() => {
          function doSometing () {
            console.log(someProp)
          }
          doSometing()
          const intervalId = setInterval(tick, 1000)
          return () => clearInterval(intervalId)
        }, [someProp])


*/
