import React from 'react'
import axios from 'axios'
import { statement } from '@babel/template';

const initialState = {
  loading: true,
  error  : '',
  posts   : {}
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      console.log('%c\n\tTitle: %s \n\tBody: %c%s\n', 'color: teal; font-size: 2em;', action.payload.title, 'color: silver; font-size: 1.6em;', action.payload.body)
      return {
        loading: false ,
        posts   : action.payload ,
        error  : ''
      }
    case 'FETCH_ERROR':
      console.log('%c\n\t\[ Error: %s ]\n', 'color: red; font-size: 2em;', action.payload)
      return {
        loading: false ,
        posts   : {} ,
        error  : action.payload
      }
    default:
      return state
  }
}

function DataFetchingTwo () {
  const [ state, dispatch ] = React.useReducer( reducer, initialState )

  React.useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/10')
      .then( response => {
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data })
      })
      .catch( error => {
        dispatch({ type: 'FETCH_ERROR', payload: 'Something went wrong!' })
      })
  }, [])

  return (
    <div>
      {/* { state.error !== '' ? 'NO EXISTEN!' : 'EXISTENS POSTS' } */}
      {
        ( state.posts.length && state.posts.length > 1 ) ?
          state.posts.map (
              post =>
                <li style={ styles.h2Message } key={post.id}> "{post.title}
                  <br/> <span style= {styles.pBody} > {post.body}</span>
                </li>
            )
          : <div>
              <h2 style = { state.loading ? styles.h2Loading : styles.h2Message } >{ state.loading ? 'Loading...' : state.posts.title }</h2>
              <p  style = { state.loading ? styles.h2Loading : styles.pBody } >{ state.loading ? '. . .' : state.posts.body}</p>
              <h1 style = { state.error   ? styles.h1Error   : styles.h1Success }>{ state.error ? state.error : null }</h1>
            </div>
      }

      {/*
      <h2 style = { state.loading ? styles.h2Loading : styles.h2Message } >{ state.loading ? 'Loading...' : state.posts.title }</h2>
      <p  style = { state.loading ? styles.h2Loading : styles.pBody } >{ state.loading ? '. . .' : state.posts.body}</p>
      <h1 style = { state.error   ? styles.h1Error   : styles.h1Success }>{ state.error ? state.error : null }</h1>
      */}
      {/* { state.loading ? 'LOADING...' : state.posts.title } */}
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
