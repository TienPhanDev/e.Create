import React, { Component } from 'react'

export default class EventForm extends Component {
    state = {
          title: '',
          category: 'music',
          description: '',
          location: '',
          image_url: '',
          date: '',
          price: ''
    }

    handleInput = (event) => {
        const name = event.target.name;
        const newState = {};
        newState[name] = event.target.value;
        this.setState(newState);
    }

    handleCategory = (e) => {
      this.setState({
        category: e.target.value
      });
    }

    handleSubmit = (e) => {
      e.preventDefault();
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
        console.log(response)
        this.resetForm()
        alert('Event Successfully created!')
      })
      .catch(error => console.log(error))
    }

    resetForm = () => {
      this.setState({
        title: '',
        category: 'music',
        description: '',
        location: '',
        image_url: '',
        date: '',
        price: ''
      })
    }

    render () {
        return (
          <div>
            <h1 style={{ color: 'white' }}>Create an event:</h1>

            <form onSubmit={this.handleSubmit}>
              <input type="text" name="title" placeholder="Event Title" 
              value={this.state.title} onChange={this.handleInput}/>

              <input type="text" name="description" placeholder="Event Description" 
              value={this.state.description} onChange={this.handleInput}/>

              <input type="text" name="location" placeholder="Location" 
              value={this.state.location} onChange={this.handleInput}/>

              <input type="text" name="image_url" placeholder="Upload image preview of event" 
              value={this.state.image_url} onChange={this.handleInput}/>

              <input type="text" name="date" placeholder="Date" 
              value={this.state.date} onChange={this.handleInput}/>

              <input type="text" name="price" placeholder="Ticket Price" 
              value={this.state.price} onChange={this.handleInput}/><br></br>

              <label style={{ color: 'white' }}> Event Category: <br></br>
                <select value={this.state.category} onChange={this.handleCategory}>
                  <option value="music">Music</option>
                  <option value="sports">Sports</option>
                  <option value="educational">Educational</option>
                  <option value="networking">Networking</option>
                  <option value="social">Social</option>
                  <option value="business">Business</option>
                </select></label><br></br>
              <button type="submit">Create Event</button>
            </form>
          </div>
        )
    }
}
