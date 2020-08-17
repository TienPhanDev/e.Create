import React, { Component } from "react";
import Category from "../components/Category";
import "../Body.css";

const url = "http://localhost:3000/api/events";

export default class Body extends Component {
  constructor() {
    super();

    this.state = {
      events: [],
      displayEvents: [],
    };
  }

  componentDidMount() {
    this.fetchEvents();
  }

  fetchEvents = () => {
    fetch(url)
      .then((res) => res.json())
      .then((eventsData) =>
        this.setState({
          events: eventsData,
          displayEvents: eventsData,
        })
      );
  };

  filterEvents = (event) => {
    console.log(event);
    // this.setState({
    //     displayEvents: newCategory
    // })
  };

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

      </div>
    );
  }
}
