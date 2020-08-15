import React, { useState, useEffect } from 'react'

const eventsUrl = 'http://localhost:3000/api/v1/events'

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

    const showEvents = () => {
    return events.map(event => <p>{event.title}</p>)
    }

    return (
        <div>
            {showEvents()}
        </div>
    )
}

