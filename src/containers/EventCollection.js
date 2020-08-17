import React, { Component } from 'react'
import EventDetail from '../components/Event/EventDetail';

export default class EventCollection extends Component {
    render() {
        return (
            <div>
                {this.props.displayEvents.map(event =>  <EventDetail key = {event.id} event = {event} filterEvents={this.props.filterEvents}/>)}
            </div>
        )
    }
}

let showEvents = () => {
    return props.displayEvents.map(event => {
        return <EventDetail 
        key = {event.id}
        event = {event}
        filterEvents = {props.filterEvents}
        />
    })
}

return (
    <div className="Category">
        {showEvents()}
    </div>
)