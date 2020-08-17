import React, { Component } from 'react'
import EventDetail from '../components/Event/EventDetail';
import EventCard from '../components/EventCard/EventCard.jsx';
import EventModal from '../components/EventModal/EventModal'

export default class EventCollection extends Component {


    render() {
        return (
            <div className="trigger">
                {/* {this.showEvents()} */}
                {this.props.displayEvents.map(event =>  <EventCard key = {event.id} event = {event} filterEvents={this.props.filterEvents}/>)}
                {this.props.displayEvents.map(event =>  <EventModal key = {event.id} event = {event} filterEvents={this.props.filterEvents}/>)}
            </div>
        )
    }
}
