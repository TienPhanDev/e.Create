import React, { Component } from "react";
import TicketContainer from "./TicketContainer";

class UserHome extends Component {
    state = {
        tickets: [],
        currentUser: {}
    }
      
      componentDidMount() {
        fetch("http://localhost:3000/api/tickets")
        .then(resp => resp.json())
        .then(ticketData => this.setState({
          tickets: ticketData.filter(ticket => ticket.user_id === 1)
        }))
      }
      
  render() {
    return (
      <div className="ui vertical segment compact raised segments">
        <div className="ui segment inverted">
          <h2>Welcome home, Princeton!</h2>
        </div>
        <div className='ui vertical segment'>
          <TicketContainer tickets={this.state.tickets}/>
        </div>
      </div>
    );
  }
}

export default UserHome;