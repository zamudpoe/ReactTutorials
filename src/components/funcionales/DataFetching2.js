import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {
  const [post, setPost]         = useState({})
  const [id, setId]             = useState(1)
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    // Want to use async/await? Add the `async` keyword to your outer function/method.
    async function getPost () {
      try {
        const resp = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        console.log(resp)
        setPost(resp.data)
        setErrorMsg('')
      } catch (error) {
        /* debugger */
        console.error(error)
        setErrorMsg( error.message )
        setPost([])
      }
    }
    getPost()
  }, [id, errorMsg]) /* Lista de dependencias */

  return (
    <div>
      <h1>List of Posts</h1>
      <hr/>
      <input type="text" style={styles.titleStyles} value= { id } onChange={ e => { setId(e.target.value) }} />
      {/* <ul>
        { posts.map(post => (
          <li key={post.id} > {post.title} </li>
        ))}
      </ul> */}
      <div>
        <p style={styles.titleStyles}>{post.title}</p>
      </div>
        {/* <li key={post.id} style={styles.titleStyles} > {post.title} <br/> <span style={styles.bodyStyles}>{post.body} </span> </li> */}
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
