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
                <div> 
                    <button>
                        <link href=''/>
                        Terms & Conditions
                    </button>
                    <button>
                        <link href=''/>
                        Flatiron School
                    </button>
                </div>                   
            </section>
        )
    }
}