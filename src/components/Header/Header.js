import React from 'react';
import NavButton from './NavButton';
import './Header.css';
import logo from './logofinal.png';
import { NavLink } from 'react-router-dom'

export default function Header() {
    
    return (
        <div className="Header-container">
            <img src={logo} alt=''></img>
            <div>
               <NavLink to="/login" > <NavButton name={"Login"} />   </NavLink> 
               <NavLink to="/event_form"><NavButton name={"Create Event"}/></NavLink>
                <NavLink to="/events" > <NavButton name={"Browse"}/> </NavLink>   
            </div>
        </div>
    )
}

