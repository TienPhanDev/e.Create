import React from 'react';
import './NavButton.css';

export default function NavButton(props) {
    return (
        <div >
            <div className="box-3">
                <div className="btn btn-three">
                <span> {props.name}</span>
                </div>
            </div> 
        </div>
    )
}


