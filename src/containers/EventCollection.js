import React, { Component } from 'react'
import EventCard from '../components/EventCard/EventCard.jsx';
import EventModal from '../components/EventModal/EventModal'

export default class EventCollection extends Component {
    render() {
        return (
            <div>
                {this.props.displayEvents.map(event =>  <EventCard key = {event.id} event = {event} filterEvents={this.props.filterEvents}/>)}
            </div>
        )
    }
}
