import React from 'react'
import loginImage from './loginimage.jpg'
import "./login.css";

export default class Login extends React.Component {
    render() {
      return (
        <div>
          <div className="wrapper fadeInDown">
            <div id="formContent">
              {this.props.active ? <h2 className="active">Sign In</h2> : <h2 className="active">Sign Up</h2>}
                <div>
                <button className={this.props.active && 'active'}
                  onClick={() => this.props.handleStateChange()}>{!this.props.active ? "Have a account? Click to log in" : "Click here to register"}</button>
                </div>
                <div className="fadeIn first">
                  <img src={loginImage} id="icon" alt="User Icon" />
                </div>
                <form onSubmit={(e) => this.props.handleSubmit(e)}>
                  <input type="text" id="login" className="fadeIn second" name="username" placeholder="username"
                  value={this.props.loginState.username}
                  onChange={(e) => this.props.handleChange(e)}/>
                  <input type="text" id="password" className="fadeIn third" name="password" placeholder="password"
                  value={this.props.loginState.password}
                  onChange={(e) => this.props.handleChange(e)}/>
                  <input type="submit" className="fadeIn fourth" value={this.props.active ? "Login" : "Submit registration"}/>
                </form>
              </div>
          </div>    
        </div>
      )
  }
}
