import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import './App.css';
import Header from './components/Header/Header';
import Body from './containers/Body';
import  Login from './components/login/Login';
import { Register } from './components/login/Register';
import Footer from "./components/Footer/Footer"
import {BrowserRouter, Route} from 'react-router-dom'
import EventForm from './components/EventForm/EventForm';


ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter> 
       
       
        <App />
        
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

