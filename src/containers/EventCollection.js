import React from 'react';
import EventCard from '../components/EventCard/EventCard.jsx';

const EventCollection = (props) => {
    return (
        <div>
            {this.props.displayEvents.map(event =>  
            <EventCard 
            key={event.id} 
            event={event}
            getTicket={props.getTicket}
            />)}
        </div>
    )
}

export default EventCollection
