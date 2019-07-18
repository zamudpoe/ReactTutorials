import React from 'react'
import axios from 'axios'

const initialState = {
  loading: true,
  error  : '',
  post   : {}
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        post   : action.payload,
        error  : ''
      }
    case 'FETCH_ERROR':
      return {
        loading: false,
        post   : {},
        error  : 'Something went wrong!'
      }
    default:
      return state
  }
}

function DataFetchingTwo () {
  const [ state, dispatch ] = React.useReducer (reducer, initialState)

  React.useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then ( response => {
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data })
        console.log(state.post.title)
      })
      .catch ( error => {
        dispatch({ type: 'FETCH_ERROR'})
        console.log(state.error)
      })
  }, [])

  return (
    <div>
      <h2 style = { state.loading ? styles.h2Loading : styles.h2Message } >{ state.loading ? 'Loading...' : state.post.title }</h2>
      <p  style = { state.loading ? styles.h2Loading : styles.pBody } >{ state.loading ? '. . .' : state.post.body}</p>
      <h1 style = { state.error ? styles.h1Error : styles.h1Success }>{ state.error ? state.error : null }</h1>
      {/* { state.loading ? 'LOADING...' : state.post.title } */}
      {/* { state.error ? state.error : null } */}
    </div>
  )
}

const styles = {
  h2Message: {
    color   : 'teal',
    fontSize: '1.5em',
  },
  h2Loading : {
    fontSize: '3em',
    color   : 'green'
  },
  pBody: {
    fontSize: '.8em',
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

export default DataFetchingTwo
