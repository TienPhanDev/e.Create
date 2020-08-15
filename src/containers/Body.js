import React, { Component } from 'react'
import Event from '../components/Event'
import '../Body.css'

const url = "http://localhost:3000/api/events";

export default class Body extends Component {
    constructor() {
        super()
      
        this.state = {
           events: []
        }
    }
    
    componentDidMount(){
        this.fetchEvents()
    }
    
    fetchEvents = () => {
        fetch(url)
        .then(resp => resp.json())
        .then(eventData => {
          this.setState({
            events: eventData
          })
        })
    }

    render() {
        return (
            <div className="Body-container">
                <Event eventData={this.state.events}/>
            {/* <Event />
            <Event />
            <Event />
            <Event />
            <Event />
            <Event /> */}
            </div>
        )
    }
}

