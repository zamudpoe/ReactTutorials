import React, { Component } from 'react'
import LifecycleB from './LifecycleB3'

class LifecycleA extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: 'Vishwas'
		}
		console.log('LifecycleA constructor')
	}

	static getDerivedStateFromProps(props, state) {
		console.log('LifecycleA getDerivedStateFromProps')
		return null
	}

	componentDidMount() {
		console.log('LifecycleA componentDidMount')
	}

	shouldComponentUpdate() {
		console.log('LifecycleA shouldComponentUpdate')
		return true
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('LifecycleA getSnapshotBeforeUpdate')
    return null
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('LifecycleA componentDidUpdate')
	}

	_changeState = () => {
		this.setState({
			name: 'Codevolution'
		})
	}

	render() {
		console.log('LifecycleA render')
		return (
			<div>
        <h2>LifecycleA</h2>

        <button onClick = { this._changeState } >
          Change state <span role="img" aria-label='mira'> 👈🏻</span>
        </button>


        <LifecycleB />
			</div>
		)
	}
}

export default LifecycleA
