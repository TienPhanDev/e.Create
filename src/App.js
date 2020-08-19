import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Body from './containers/Body';
import Footer from "./components/Footer/Footer";
import { Route } from 'react-router-dom';
import UserForm from './components/UserForm/UserForm';
import EventForm from './components/EventForm/EventForm';
import UserHome from "./components/UserHomepage/UserLanding";

const App = () => { 
  
    return (
      <div className="App">
        <Header/>
        <Route path="/events" component={Body}/>
        <Route path="/home" component={UserHome}/>
        <Route path="/login" component={UserForm}/>
        <Route path="/event_form" component={EventForm}/>
        <Footer/>
      </div>
    );
}

export default App;
