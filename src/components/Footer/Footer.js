import React, { Component } from 'react'
//import { IconButton, Toolbar } from "@material-ui/core";
//import LinkedInIcon from '@material-ui/icons/LinkedIn';
//import GitHubIcon from '@material-ui/icons/GitHub';
import "./Footer.css"

export default class Footer extends Component {
    render() {
        return (
            <section className='footer'>
                <div>
                    <p>
                        ©2020 Event Application, Made by Danny/Diego/Tien
                    </p>
                </div>
                <div className="button-div">
                    <a href="/" className="button-div">Terms & Conditions</a>
                    <a href="/" className="button-div">Flatiron School</a>
                </div>                   
            </section>
        )
    }
}