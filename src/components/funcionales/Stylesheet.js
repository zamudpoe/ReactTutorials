import React from 'react'
import './myStyles.css'

function Stylesheet (props) {
  let className = props.primary && 'primary'
  /*let className = props.primary ? 'primary' : 'secondary'*/

  return (
    <div>
      <h1 className = {`${className} font-xl`} >Stylesheets</h1>

    </div>
  )
}

export default Stylesheet

/*
  Si vamos a pasar multiples valores usamos Template-literals
    <h1 className = {`${className} font-xl`} >Stylesheets</h1>


*/
