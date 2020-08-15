import React, { useState, useEffect } from 'react'
import EventDetail from './Event/EventDetail';

const eventsUrl = 'http://localhost:3000/api/events'

export default function Event() {
    const [events, setEvents] = useState([]);

    const loadData = async() => {
        const response = await fetch(eventsUrl)
        const data = await response.json()
        setEvents(data)
    }
    
    useEffect(() => {
        loadData()

    },[])

    let showEvents = () => {
    return events.map(event => {
        return <EventDetail 
        key = {event.id}
        event = {event}
        />
    })
    }

    return (
        <div>
            {showEvents()}
        </div>
    )
}

