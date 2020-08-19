import React from 'react';
import "./Body.css";


const AllCategories = (props) => {
    return (
        <div className="container">

        <div id="music-div" class="section" onClick={(e) => props.filterEvents(e)}>
          <div class="content">
            <h1>Music</h1>
          </div>
          <div class="overlay" id="music"></div>
        </div>
        <div id="business-div" class="section" onClick={(e) => props.filterEvents(e)}>
          <div class="content">
            <h1>Business</h1>
          </div>
          <div class="overlay" id="business"></div>
        </div>
        <div id="social-div" class="section" onClick={(e) => props.filterEvents(e)}>
          <div class="content">
            <h1>Social</h1>
          </div>
          <div class="overlay" id="social"></div>
        </div>
        <div id="networking-div" class="section" onClick={(e) => props.filterEvents(e)}>
          <div class="content">
            <h1>Networking</h1>
          </div>
          <div class="overlay" id="networking"></div>
        </div>
        <div id="sports-div" class="section" onClick={(e) => props.filterEvents(e)}>
          <div class="content">
            <h1>Sports</h1>
          </div>
          <div class="overlay" id="sports"></div>
        </div>
        <div id="education-div" class="section" onClick={(e) => props.filterEvents(e)}>
          <div class="content">
            <h1>Education</h1>
          </div>
          <div class="overlay" id="educational"></div>
        </div>
      </div>
    )
}

export default AllCategories
