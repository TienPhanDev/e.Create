import React, { Component } from 'react';
import Login from '../login/Login';

const usersUrl = 'http://localhost:3000/api/users';

export default class UserForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
          username: '',
          password: '',
          active: false
        }
    }

    handleStateChange = () => {
        this.setState({
            active: !this.state.active
        })
    }

    handleChange = (event) => {
        const name = event.target.name
        const newState = {}
        newState[name] = event.target.value
        this.setState(newState)
        event.preventDefault()
    }

    handleSubmit = (e) => {
        if(this.state.active){
            fetch(usersUrl)
            .then(resp => resp.json())
            .then(console.log())
        } else {
        fetch(`${usersUrl}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(this.state)
        })
        .then(resp => resp.json())
        .then(response => console.log(response))
        .catch(error => {console.log(error)})
        e.preventDefault()
    }
    }

    render () {
        return (
          <div>
            <Login
            handleStateChange={this.handleStateChange} 
            active={this.state.active} 
            handleSubmit={this.handleSubmit} 
            handleChange={this.handleChange}/>
          </div>
        )
    }
}
