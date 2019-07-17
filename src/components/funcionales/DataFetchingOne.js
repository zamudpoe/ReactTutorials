import React from 'react'
import axios from 'axios'

function DataFetchingOne () {
  const [loading, setLoading] = React.useState(true)
  const [error, setError]     = React.useState('')
  const [post, setPost]       = React.useState({})

  React.useEffect(() => {
    setLoading(true)
    axios.get('https://jsonplaceholder.typicode.com/posts/10')
      .then ( response => {
        setTimeout(() => {
          setPost(response.data)
          setError('')
          setLoading(false)
          console.log({post})
        }, 4000)
      })
      .catch ( error => {
        setLoading(false)
        setPost({})
        setError('Something went wrong!')
        console.log(error)
      })
  }, [])

  return (
    <div>
      <h2 style = { loading ? styles.h2Message : styles.h2Loading } >{ loading ? 'Loading...' : post.title }</h2>
      <h1 style = { error ? styles.h1Error : styles.h1Success }>{ error ? error : null }</h1>
    </div>
  )
}

const styles = {
  h2Message: {
    color   : 'teal',
    fontSize: '3em',
  },
  h2Loading : {
    fontSize: '2em',
    color   : 'silver'
  },
  h1Success:{
    color: 'blue'
  },
  h1Error: {
    fontSize: '4em',
    color   : 'red'
  }
}

export default DataFetchingOne
