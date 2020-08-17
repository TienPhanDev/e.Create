import React from 'react';
import './App.css';
import Header from './containers/Header'
import Body from './containers/Body';
import  Login from './components/login/Login';
import { Register } from './components/login/Register';


const usersUrl = 'http://localhost:3000/api/v1/users'
const eventsUrl = 'http://localhost:3000/api/v1/events'


class App extends React.Component { 


 constructor(props) {
   super(props)
 
   this.state = {
      isLoginActive: false,

   }
 }
 
  // componentDidMount(){
  //   fetch(eventsUrl)
  //   .then(res => res.json())
  //   .then(console.log)
  // }


  render(){
    
    return (
     
      <div className="App">
        <Header />
        <br></br>
       
        <Body />
      </div>
    );
  }
}

export default App;
