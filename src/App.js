import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Body from './containers/Body';
import  Login from './components/login/Login';
import { Register } from './components/login/Register';
import Footer from "./components/Footer/Footer"

const usersUrl = 'http://localhost:3000/api/v1/users';
const eventsUrl = 'http://localhost:3000/api/v1/events';

class App extends React.Component { 
  render(){
    return (
      <div className="App">
        <Header />
        <Body/>
        <Footer/>
      </div>
    );
  }
}

export default App;
