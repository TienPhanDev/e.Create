import React, { Component } from 'react'
import Category from '../components/Category'
import '../Body.css'

const url = "http://localhost:3000/api/events";

export default class Body extends Component {
    constructor() {
        super()

        this.state = {
            events: [],
            displayEvents: [],
        }
    }

    componentDidMount(){
        this.fetchEvents()
    }

    fetchEvents = () => {
        fetch(url)
        .then(res => res.json())
        .then(eventsData => this.setState({
            events: eventsData,
            displayEvents: eventsData
        }))
    }

    filterEvents = (event) => {
        console.log(event)
        // this.setState({
        //     displayEvents: newCategory
        // })
    }



    render(){
    return (
        <div className="Body-container">
            <div className="category-rows">
                <div className="category-columns">
                    <div>1</div>
                    <div>2</div>
                </div>  
            </div>

            <div className="category-rows">
                <div className="category-columns">
                    <div>3</div>
                    <div>4</div>
                </div>  
            </div>
            
            <div className="category-rows">
                <div className="category-columns">
                    <div>1</div>
                    <div>2</div>
                </div>  
            </div>

            <div className="category-rows">
                <div className="category-columns">
                    <div>1</div>
                    <div>2</div>
                </div>  
            </div>

            <div className="category-rows">
                <div className="category-columns">
                    <div>3</div>
                    <div>4</div>
                </div>  
            </div>
            
            <div className="category-rows">
                <div className="category-columns">
                    <div>1</div>
                    <div>2</div>
                </div>  
            </div>
        </div>
        )
    }
}

