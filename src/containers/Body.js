import React, { Component } from "react";
import "./Body.css";
import EventCollection from './EventCollection';

const eventsUrl = "http://localhost:3000/api/events";
const categoryUrl = "http://localhost:3000/api/event_categories";
const exampleEvents = [{title: "hello", price: "$45", location: "Bmore"},
{title: "hello again", price: "$25", location: "DC"},
{title: "goodbye", price: "$5", location: "Maryland"}];

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

  render() {
    return (
      <div class="container">

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


        <div id="art" class="section">
          <div class="content">
            <h1>Art Shows</h1>
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
