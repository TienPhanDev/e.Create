import React from 'react';
import loginImage from './loginimage.jpg';
import "./login.css";
import { Icon } from 'semantic-ui-react'

const Login = (props) => {
      return (
        <div>
          <div className="wrapper fadeInDown">
            <div id="formContent">
              {props.active ? <h2 className="active">Sign In</h2> : <h2 className="active">Sign Up</h2>}
                <div>
                <button className={props.active && 'active'}
                  onClick={() => props.handleStateChange()}>{!props.active ? "Have a account? Click to log in" : "Click here to register"}</button>
                </div>
                <div className="fadeIn first">
             
                  <img className="login-image" src={loginImage} id="icon" alt="User Icon" />
                </div>

                <form onSubmit={(e) => props.handleSubmit(e)}>
                  <input type="text" id="login" className="fadeIn second" name="username" placeholder="username"
                  value={props.loginState.username}
                  onChange={(e) => props.handleChange(e)}/>

                  <input type="text" id="password" className="fadeIn third" name="password" placeholder="password"
                  value={props.loginState.password}
                  onChange={(e) => props.handleChange(e)}/>
                  
                  <input type="submit" className="fadeIn fourth" value={props.active ? "Login" : "Submit registration"}/>
                  
                </form>
              </div>
          </div>    
        </div>
      )
}

export default Login
