import React from 'react';
import NavButton from './NavButton';
import './Header.css';
import logo from './logofinal.png';
import { NavLink } from 'react-router-dom'
import Logo from './lastlogo.png'
import ecreate from './ecreate.png'

export default function Header(props) {
    const loginLogout= () => {
        return props.loggedIn? "Logout" : "Login"; 
    }
    return (
        <div className="Header-container">
            <NavLink to="/home" ><img className="logo" src={Logo} alt=''></img></NavLink>
            <img className="ecreate" src={ecreate} alt=''></img>
            <div>
               <NavLink to="/login" onClick={() => props.handleLogin()}> <NavButton name={loginLogout()} /></NavLink> 
               <NavLink to="/event_form"><NavButton name={"Create Event"}/></NavLink>
                <NavLink to="/events" > <NavButton name={"Browse"}/> </NavLink>   
            </div>
        </div>
    )
}

