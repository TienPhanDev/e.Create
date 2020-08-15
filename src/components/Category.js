import React, { Component } from 'react'
import Event from './Event'
import'../Category.css'
import EventDetail from './Event/EventDetail'

export default function Category(props) {

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
}

