import React, { Component } from 'react'
import '../Body.css'
import EventCollection from './EventCollection'

const url = "http://localhost:3000/api/event_categories";
const exampleEvents = [{title: "hello", price: "$45", location: "Bmore"},
{title: "hello again", price: "$25", location: "DC"},
{title: "goodbye", price: "$5", location: "Maryland"}];

export default class BodyExample extends Component {
    state = {
        category: null,
        displayEvents: [exampleEvents],
        allEvents: []
    }

    componentDidMount(){
        this.fetchCategories()
    }

    fetchCategories = () => {
        fetch(url)
        .then(res => res.json())
        .then(eventsData => this.setState({
            displayEvents: eventsData,
            allEvents: eventsData
        }))
    }

    filterEvents = (e) => {
        console.log(e.categorie.name)
        let newCategory = e.categorie.name;
        let filteredEvents = this.state.allEvents.filter(event => event.categorie.name === newCategory);
        this.setState({
            category: newCategory,
            displayEvents: filteredEvents
        })
    }

    render(){
    return (
        <div className="Body-container">
            <EventCollection filterEvents={this.filterEvents} displayEvents = {this.state.displayEvents} /> 
        </div>
        )
    }
}