import React, { Component } from "react";
import "./Body.css";
import EventCollection from './EventCollection';
import UserForm from '../components/UserForm/UserForm';
import EventForm from '../components/EventForm/EventForm';

const eventsUrl = "http://localhost:3000/api/events";
const categoryUrl = "http://localhost:3000/api/event_categories";
const exampleEvents = [{title: "hello", date: "2020-04-15", location: "Bmore"},
{title: "hello again", date: "2020-04-15", location: "DC"},
{title: "goodbye", date: "2020-04-15", location: "Maryland"}];

export default class Body extends Component {
  state = {
    category: null,
    displayEvents: [exampleEvents],
    allEvents: []
  }

  componentDidMount(){
    this.fetchCategories()
  }

  fetchCategories = () => {
    fetch(categoryUrl)
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

  addNewEvent = (event) => {
    const events = [event, ...this.state.allEvents].sort(function(a, b){
      return new Date(a.start_datetime) - new Date(b.start_datetime)
    })
    this.setState({allEvents: events})
  }

  render() {
    return (
      <div class="container">

        <UserForm/>
        {/* <EventForm addNewEvent={this.addNewEvent}/> */}
        <div id="music" class="section">
          <div class="content">
            <h1>Music</h1>
          </div>
          <div class="overlay"></div>
        </div>


        <div id="business" class="section">
          <div class="content">
            <h1>Business</h1>
          </div>
          <div class="overlay"></div>
        </div>


        <div id="social" class="section">
          <div class="content">
            <h1>Social</h1>
          </div>
          <div class="overlay"></div>
        </div>

        <div id="networking" class="section">
          <div class="content">
            <h1>Networking</h1>
          </div>
          <div class="overlay"></div>
        </div>

        <div id="sports" class="section">
          <div class="content">
            <h1>Sports</h1>
          </div>
          <div class="overlay"></div>
        </div>

        <div id="education" class="section">
          <div class="content">
            <h1>Education</h1>
          </div>
          <div class="overlay"></div>
        </div>

        {/* <EventCollection filterEvents={this.filterEvents} displayEvents = {this.state.displayEvents} />  */}

      </div>
    );
  }
}
