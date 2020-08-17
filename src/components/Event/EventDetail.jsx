import React from "react";
import "./EventDetail.css";
import "../EventUi.css"

export const EventDetail = (props) => {
  const {
    id,
    title,
    description,
    price,
    date,
    tickets_remaining,
    city,
    state,
  } = props.event;

    return (
      <div className="event-card" onClick={() => props.filterEvents()}>
        <img src={"https://www.alpha.network/sites/default/files/2019-07/alpha-spring-cocktail-party-event-thumbnail-new_0.jpg"} alt=""></img>
          <h2>Event title: {title}</h2>
        <div className="card-info">
          <h4>Event price: ${price}</h4>
          <h4>Tickets left for sale:{tickets_remaining}</h4>
          <h4>Description: {description}</h4>
          <div>Date: {date}</div>
          <div>City: {city}</div>
          <div>State: {state}</div>
          <button onClick={() => console.log("You clicked the buy a ticket button, this event ID is:", {id})}>CLICK HERE TO GET A TICKET!</button>
        </div>
      </div>
    );
}

export default EventDetail
