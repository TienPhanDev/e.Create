import React, { Component } from 'react'
import '../NavButton.css'

export default function NavButton(props) {
    return (
        <div >
            <div class="box-3">
             <div class="btn btn-three">
           <span> {props.name}</span>
          </div>
            </div>
            
        </div>
    )
}


