import React, { Component } from 'react'
import Category from '../components/Category'
import '../Body.css'

const url = "http://localhost:3000/api/events";

export default class Body extends Component {
    constructor() {
        super()

        this.state = {
            events: []
        }
    }
    render(){
    return (
        <div className="Body-container">
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
        </div>
        )
    }
}

