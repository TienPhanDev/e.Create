import React from 'react';
import "./Body.css";
import EventCard from '../components/EventCard/EventCard.jsx';
import EventCardTwo from '../components/EventCard/EventCard2.jsx';

const EventCollection = (props) => {
    return (
        <>
        <h1 style={{ color: 'white' }}>Upcoming events</h1>
        <button onClick={() => props.resetDisplay()}>Click to go back</button>
        <div className="hello">
            {props.displayEvents.map(event =>  
            <EventCard
            key={event.id} 
            event={event}
            getTicket={props.getTicket}
            />)}
        </div>
        </>
    )
}

export default EventCollection
