import React, { Component } from 'react'
import'../Event.css'
import EventDetail from "./Event/EventDetail"

export default class Event extends Component {
    
    renderEvents = () => {
        return this.props.eventData.map((event) => {
            return <EventDetail key={event.id} event={event}/>
        })
    }
    
    render() {
        
        const eventMapper = (event) => {
            return <EventDetail key={event.id} eventDetail={event}/>
        }
        return (
            <div>
                {this.renderEvents()}
            </div>
        )
    }
}

