import React, { Component } from "react";
import "./Body.css";
import EventCollection from './EventCollection';
import UserForm from '../components/UserForm/UserForm';
import EventForm from '../components/EventForm/EventForm';
import EventCard from "../components/EventCard/EventCard";
import EventModal from "../components/EventModal/EventModal";


const eventsUrl = "http://localhost:3001/api/events";
const categoryUrl = "http://localhost:3000/api/event_categories";
const exampleEvents = [{title: "hello", date: "2020-04-15", location: "Bmore", category: 'social'},
{title: "hello again", date: "2020-04-15", location: "DC", category: 'sports'},
{title: "goodbye", date: "2020-04-15", location: "Maryland", category: 'music'}];

export default class Body extends Component {
  state = {
    category: undefined,
    displayEvents: [],
    allEvents: []
  }

   componentDidMount(){
     this.fetchCategories()
  }

  fetchCategories = () => {
    fetch(eventsUrl)
    .then(res => res.json())
    .then(eventsData => this.setState({
        displayEvents: eventsData,
        allEvents: eventsData
    }))
  }

  filterEvents = (e) => {
    console.log(e.target.id)
    this.setState({
         category: e.target.id
    }, this.showFilterEvents())
  }

  showFilterEvents = (e) => {
  let filteredEvents = this.state.allEvents.filter(event => event.category === this.state.category);
  console.log(filteredEvents);
  this.setState({
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

        {/* <UserForm/>
        <EventForm addNewEvent={this.addNewEvent}/> */}
        <div id="music-div" class="section" onClick={(e) => this.filterEvents(e)}>
          <div class="content">
            <h1>Music</h1>
          </div>
          <div class="overlay" id="music"></div>
        </div>


        <div id="business-div" class="section" onClick={(e) => this.filterEvents(e)}>
          <div class="content">
            <h1>Business</h1>
          </div>
          <div class="overlay" id="business"></div>
        </div>


        <div id="social-div" class="section" onClick={(e) => this.filterEvents(e)}>
          <div class="content">
            <h1>Social</h1>
          </div>
          <div class="overlay" id="social"></div>
        </div>

        <div id="networking-div" class="section" onClick={this.filterEvents}>
          <div class="content">
            <h1>Networking</h1>
          </div>
          <div class="overlay" id="networking"></div>
        </div>

        <div id="sports-div" class="section" onClick={this.filterEvents}>
          <div class="content">
            <h1>Sports</h1>
          </div>
          <div class="overlay" id="sports"></div>
        </div>

        <div id="education-div" class="section" onClick={this.filterEvents}>
          <div class="content">
            <h1>Education</h1>
          </div>
          <div class="overlay" id="education"></div>
        </div>

        {/* <EventCollection filterEvents={this.filterEvents} displayEvents = {this.state.displayEvents} /> */}

      </div>
    );
  }
}
