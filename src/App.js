import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Body from './containers/Body';
import  Login from './components/login/Login';
import { Register } from './components/login/Register';
import Footer from "./components/Footer/Footer"
import {BrowserRouter, Route} from 'react-router-dom'
import EventForm from './components/EventForm/EventForm';

const eventsUrl = 'http://localhost:3000/api/v1/events';

class App extends React.Component { 
  render(){
    return (
      // <BrowserRouter> 

      <div className="App">
        <Header />
        <Route path="/events" component={Body}/>
        <Route path="/login" component={Login}/>
        <Route path="/event_form" component={EventForm}/>
        
        <Footer/>
      </div>
      
      // </BrowserRouter>
      
    );
  }
}

export default App;
