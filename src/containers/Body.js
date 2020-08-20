import React, { Component } from "react";
import "./Body.css";
import EventCollection from './EventCollection';
import AllCategories from "./AllCategories.jsx";

const eventsUrl = "http://localhost:3000/api/events";

export default class Body extends Component {
    state = {
      category: null,
      displayEvents: [],
      allEvents: [],
      currentUser: {username: 'Princeton', user_id: 1}
    }

    componentDidMount(){
      fetch(eventsUrl)
      .then(res => res.json())
      .then(eventsData => this.setState({
        displayEvents: eventsData,
        allEvents: eventsData
      }))
    }

    resetDisplay = () => {
      this.setState({
        category: null
      })
    }

    filterEvents = (e) => {
      if(e.target.id === 'music'){
        let filteredEvents = this.state.allEvents.filter(event => event.category === 'music');
        this.setState({
          category: "music",
          displayEvents: filteredEvents})
      } else if(e.target.id === 'sports'){
        let filteredEvents = this.state.allEvents.filter(event => event.category === 'sports');
        this.setState({
          category: "sports",
          displayEvents: filteredEvents})
      } else if(e.target.id === 'social'){
        let filteredEvents = this.state.allEvents.filter(event => event.category === 'social');
        this.setState({
          category: "social",
          displayEvents: filteredEvents})
      } else if(e.target.id === 'networking'){
        let filteredEvents = this.state.allEvents.filter(event => event.category === 'networking');
        this.setState({
          category: "networking",
          displayEvents: filteredEvents})
      } else if(e.target.id === 'educational'){
        let filteredEvents = this.state.allEvents.filter(event => event.category === 'educational');
        this.setState({
          category: "educational",
          displayEvents: filteredEvents})
      } else if(e.target.id === 'business'){
        let filteredEvents = this.state.allEvents.filter(event => event.category === 'business');
        this.setState({
          category: "business",
          displayEvents: filteredEvents})
      }
    }

    getTicket = () => {
      fetch(`http://localhost:3000/api/tickets`, {
        method: 'POST',
        headers : {
            'accept': 'application/json',
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            user_id: 1,
            event_id: 1
        })
    })
      .then(response => response.json())
      .then(ticket => console.log(ticket))
      .catch(error => alert(error))
    }


    renderHomepage = () => this.state.category ? 
    <EventCollection 
    getTicket={this.getTicket}
    displayEvents={this.state.displayEvents}
    resetDisplay={this.resetDisplay} 
    category={this.state.category}/> :
    <AllCategories filterEvents={this.filterEvents}/>

    render() {
      return (
        <>
          {this.renderHomepage()}
        </>
    );
  }
}
