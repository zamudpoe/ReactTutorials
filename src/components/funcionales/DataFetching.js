import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {
  const [posts, setPosts]       = useState([])
  const [errorMsg, setErrorMsg] = useState([])

  // Want to use async/await? Add the `async` keyword to your outer function/method.
  async function getPosts () {
    try {
      const resp = await axios.get('https://jsonplaceholder.typicode.com/posts');
      console.log(resp)
      setPosts(resp.data)
    } catch (error) {
      console.error(error)
      setErrorMsg({ errorMsg: 'Error retrieving data' })
    }
  }

  useEffect(() => {

    /*
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(resp => {
        console.dir(resp.data)
        setPosts(resp.data)
      })
      .catch(error => {
        console.log(error)
        setErrorMsg({ errorMsg: 'Error retrieving data' })
      })
      .finally(() => {
        console.log('\n\n%cFINISHED!\n\n', 'color: lightblue; font-Size: 3em; font-Weight: bolder;')
      })
    */

    getPosts()

  }, [])

  return (
    <div>
      <h1>List of Posts</h1>
      {
        posts.length
        ? posts.map(post =>
                      <li style={styles.titleStyles} key={post.id}> "{post.title}
                        <br/> <span style= {styles.bodyStyles} > {post.body}</span>
                      </li> )
        : ''
      }
      { errorMsg ? <h1 style= {styles.errorMsg} >{ errorMsg }</h1> : null }
    </div>
  )
}

const styles = {
  titleStyles : {
    color: 'green'
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
