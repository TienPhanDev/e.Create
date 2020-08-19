import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Body from './containers/Body';
import Footer from "./components/Footer/Footer"
import { Route } from 'react-router-dom';
import UserForm from './components/UserForm/UserForm';
import EventForm from './components/EventForm/EventForm';

const App = () => { 
    return (
      <div className="App">
        <Header/>
        <Route path="/events" component={Body}/>
        <Route path="/login" component={UserForm}/>
        <Route path="/event_form" component={EventForm}/>
        <Footer/>
      </div>
    );
}

export default App;
