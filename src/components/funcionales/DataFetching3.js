import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching () {
  const [post, setPost]                           = useState({})
  const [id, setId]                               = useState(1)
  const [idFromButtonClick, setIdFromButtonClick] = useState(1)
  const [errorMsg, setErrorMsg]                   = useState('')

    useEffect (() => {
      async function getPost () {
        try {
          const resp = await axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
          console.log(resp)
          setPost(resp.data)
          setErrorMsg('')
        } catch (error) {
          /* console.error(error) */
          setErrorMsg(error.message)
          setPost([])
        }
      }
      getPost()
    }, [idFromButtonClick]) /* Lista de dependencias */

    const _handleClick = () => {
      setIdFromButtonClick (id)
    }

    const _handleChange = (e) => {
      setErrorMsg('')
      setPost([])
      setId(e.target.value)
    }

  return (
    <div>
      <h1>List of Posts</h1>
      <hr/>
      <input type="text" style={styles.titleStyles} value= { id } onChange={ e => { _handleChange(e) }} />
      <button tyope='button' onClick={ _handleClick } >Fetch Post</button>
      <div>
        <p style={styles.titleStyles}>{post.title}</p>
      </div>
      { errorMsg !== '' && <h2 style={styles.errorMsg}>{errorMsg}</h2> }
      <hr/>
    </div>
  )
}

const styles = {
  titleStyles : {
    color     : 'green',
    fontWeight: 'bolder'
  },
  bodyStyles:{
    color   : 'purple',
    fontSize: '.8em',
    fontStyle: 'italic'
  },
  errorMsg :{
    color   : 'tomato',
    fontSize: '2em'
  }
}

export default DataFetching
