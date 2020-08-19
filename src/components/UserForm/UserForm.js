import React, { Component } from 'react';
import Login from '../login/Login';

const usersUrl = 'http://localhost:3000/api/users';

export default class UserForm extends Component {
    constructor() {
        super()
        this.state = {
          username: '',
          password: '',
          active: false
        }
    }

    handleStateChange = () => {
        this.setState({
            active: !this.state.active
        });
    }

    handleChange = (event) => {
        const name = event.target.name;
        const newState = {};
        newState[name] = event.target.value;
        this.setState(newState);
        event.preventDefault();
    }

    handleSubmit = (e) => {
        if(this.state.active){
        fetch(`${usersUrl}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(resp => resp.json())
        .then((user) => {
            alert("Successful signin!")
            console.log(user) //this.LoginUser(response.data)
            this.resetUserForm()
        })
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
        .then((user) => {
            alert("Successful registration!")
            console.log(user) //this.LoginUser(response.data)
            this.resetUserForm()
        })
        .catch(error => console.log(error))
        e.preventDefault()
        }
    }

    resetUserForm = () => {
        this.setState({
            username: '',
            password: '',
            active: false
        })
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
            loginState={this.state}
            handleStateChange={this.handleStateChange} 
            active={this.state.active} 
            handleSubmit={this.handleSubmit} 
            handleChange={this.handleChange}/>
          </div>
        )
    }
}
