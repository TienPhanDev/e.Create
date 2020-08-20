 import React from 'react';
import './NavButton.css';
import { Button, Segment } from 'semantic-ui-react'

export default function NavButton(props) {
    return (
        <div >
              <div className="headerButtons">
            <Button inverted> {props.name}</Button>
            </div>
            {/* <div className="box-3">
                <div className="btn btn-three">
                <span> {props.name}</span>
                </div>
            </div>  */}
        </div>
    )
}


