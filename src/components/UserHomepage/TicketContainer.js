import React from 'react';
import Ticket from "./Ticket";

const TicketContainer = (props) => {

    return (
      <>
        <div className="ui red inverted segment">
          <h4>My tickets</h4>
        </div>
        <div className="ui placeholder compact segment">
        <table className="ui celled striped padded table">
          <tbody>
            <tr>
              <th>
                <h3 className="ui center aligned header">Date</h3>
              </th>
              <th>
                <h3 className="ui center aligned header">Title</h3>
              </th>
              <th>
                <h3 className="ui center aligned header">Category</h3>
              </th>
              <th>
                <h3 className="ui center aligned header">Location</h3>
              </th>
            </tr>
            {props.tickets.map(ticket => <Ticket ticket={ticket} key={ticket.id}/>)}
          </tbody>
        </table>
        </div>
        </>
    );
};

export default TicketContainer
