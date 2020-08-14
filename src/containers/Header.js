import React, { Component } from 'react'
import NavButton from '../components/NavButton'
import '../Header.css'

export default function Header() {
    
    return (
        <div className="Header-container">
            <p>App Name</p>
            <div>
                <NavButton />
                <NavButton />
                <NavButton />
            </div>
        </div>
    )
}

