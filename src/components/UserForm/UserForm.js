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
            fetch(`${usersUrl}/find_user/${this.state.username}`)
            .then(resp => resp.json())
            .then(user => console.log(user))
            .catch(error => {console.log(error)})
            e.preventDefault()
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
        .then(user => console.log(user))
        .catch(error => {console.log(error)})
        e.preventDefault()
        }
    }

    // LogUserIn = (user) => {
    //     clearContainer();
    //     userId = user.id;
    //     userName = user.name;
    //     userGames = user['owned_games'];
    //     userWishlists = user['wishlist_games'];
    //     userReviews = user['reviews'];
    
    //     const h1 = document.createElement('h1');
    //     h1.classList.add('title');
    //     h1.classList.add('is-1');
    //     h1.innerText = `Welcome, ${user.name}!`;
    
    //     container.append(h1);
    // }

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
