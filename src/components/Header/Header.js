import React from 'react';
import NavButton from './NavButton';
import './Header.css';
import logo from './logofinal.png';

export default function Header() {
    
    return (
        <div className="Header-container">
            <img src={logo} alt=''></img>
            <div>
                <NavButton name={"Sign up"}/>
                <NavButton name={"Login"}/>
                <NavButton name={"Browse"}/>
            </div>
        </div>
    )
}

