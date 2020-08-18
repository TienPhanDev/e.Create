import React from 'react'
import loginImage from './loginimage.jpg'
import "./login.css";

export default class Login extends React.Component {
    buttonDisplay = () => this.props.active ? <h2 className="active"> Sign In </h2> : <h2 className="inactive underlineHover">Sign Up </h2>;

    render() {
    return (
      <div>
        <div className="wrapper fadeInDown">
      <div id="formContent">
    
    {this.buttonDisplay()}

    <div>
    <button className={this.props.active && 'active'}
      onClick={() => this.props.handleStateChange()}>Have a account? </button>
    </div>
    
    <div className="fadeIn first">
      <img src={loginImage} id="icon" alt="User Icon" />
    </div>

    <form onSubmit={(e) => this.props.handleSubmit(e)}>
      <input type="text" id="login" className="fadeIn second" name="username" placeholder="login"
      onChange={(e) => this.props.handleChange(e)}/>
      <input type="text" id="password" className="fadeIn third" name="password" placeholder="password"onChange={(e) => this.props.handleChange(e)}/>
      <input type="submit" className="fadeIn fourth" value="Log In"/>
    </form>
    </div>
    </div>    
    </div>
    )
  }
}
