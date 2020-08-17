import React, { Component } from 'react'
import EventDetail from '../components/Event/EventDetail';
import EventCard from '../components/EventCard/EventCard.jsx';

export default class EventCollection extends Component {
    // showEvents = () => {
    //     return this.props.displayEvents.map(event => {
    //         return <EventDetail 
    //         key = {event.id}
    //         event = {event}
    //         filterEvents = {this.props.filterEvents}
    //         />
    //     })
    // }

    render() {
        return (
            <div>
                {/* {this.showEvents()} */}
                {this.props.displayEvents.map(event =>  <EventCard key = {event.id} event = {event} filterEvents={this.props.filterEvents}/>)}
            </div>
        )
    }
}