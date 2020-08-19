import React from "react";


const Ticket = (props) => {
  const {date, title, category, location} = props.ticket.event;
  return (
    <tr>
      <td>{date}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td>{location}</td>
    </tr>
  );
};

export default Ticket;