import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
	constructor (props) {
		super(props)

		this.state = {
      users   : [],
      errorMsg: ''
		}
	}

	componentDidMount () {
		axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then(response => {
				console.dir(response)
				this.setState({ users: response.data })
			})
			.catch(error => {
        console.log(error)
        this.setState({ errorMsg: 'Error retrieving data' })
			})
	}

	render () {
    const { users, errorMsg } = this.state

		return (
			<div>
				<h1>List of users</h1>
				{
          users.length ? users.map(user => <h3 style={ styles.NameStyles } key={user.id}>{user.name} <span style={styles.usrNameStyles} > "{user.username}" </span> </h3> ) : null
        }
        { errorMsg ? <h1>{ errorMsg }</h1> : null }
			</div>
		)
	}
}

const styles = {
  NameStyles : {
    color: 'teal'
  },
  usrNameStyles : {
    color: 'tomato'
  },
}

export default PostList
