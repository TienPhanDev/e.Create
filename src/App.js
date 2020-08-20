import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Body from './containers/Body';
import Footer from "./components/Footer/Footer";
import { Route } from 'react-router-dom';
import UserForm from './components/UserForm/UserForm';
import EventForm from './components/EventForm/EventForm';
import UserHome from "./components/UserHomepage/UserLanding";
import AllCategories from './containers/AllCategories';

class App extends React.Component {
  state = { 
    loggedIn: false,
    currentUser: null
  }

  // componentDidMount(){
  //   if (localStorage.token) {
  //     let request = {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${localStorage.token}`
  //       }
  //     }
  //     fetch(`http://localhost:3000/api/users/${localStorage.current}`, request)
  //     .then(r => r.json())
  //     .then(data => this.setState({ 
  //       loggedIn: true,
  //       current_user: data.user
  //     }))
  //   }
  // }

  handleLogin = () => {
    if(this.state.loggedIn === false){
      this.setState({
        loggedIn: true, 
        currentUser: {username: 'Princeton', user_id: 1}})
    } else {
      this.setState({
        loggedIn: false,
        currentUser: null
      })
    }
  } 


  render() {
    return (
      <div className="App">
        <Header handleLogin={this.handleLogin} loggedIn={this.state.loggedIn}/>
        <Route exact path='/' component={Body}/>
        <Route path="/events" component={Body}/>
        <Route path="/home" component={UserHome}/>
        <Route path="/login" component={UserForm}/>
        <Route path="/event_form" component={EventForm}/>
        <Footer/>
      </div>
    );
  }
}


export default App;
