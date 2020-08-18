import React, { Component } from 'react'
//Can put form above user profile OR browse events index
export default class EventForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
          title: '',
          date: '',
          city: ''
        }
    }

    handleInput = (event) => {
        const name = event.target.name
        const newState = {}
        newState[name] = event.target.value
        this.setState(newState)
        event.preventDefault()
    }

    handleSubmit = (e) => {
        
        fetch(`http://localhost:3000/api/events/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(this.state)
        })
        .then(resp => resp.json())
        .then((response) => {
          console.log(response) //this.addNewEvent(response.data)
          this.resetForm()
        })
        .catch(error => console.log(error))
        e.preventDefault();
        //make & invoke clearEventForm function
    }

    resetForm = () => {
      this.setState({
        title: '',
        date: '',
        city: ''
      })
    }

    render () {
        return (
          <div>
            <h4>Create an Event:</h4>
            <form onSubmit={this.handleSubmit}>
              <input type="text" name="title" placeholder="Title" 
              value={this.state.title} onChange={this.handleInput}/>
              <input type="text" name="date" placeholder="Date" 
              value={this.state.date} onChange={this.handleInput}/>
              <input type="text" name="city" placeholder="city" 
              value={this.state.city} onChange={this.handleInput}/><br></br>
              <button type="submit">Create Event</button>
            </form>
          </div>
        )
    }
}
