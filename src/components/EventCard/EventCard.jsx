import React from "react";
import "./EventCard.scss";
import useModal from "../EventModal/useModal";
import Modal from "../EventModal/Modal";

const EventCard = (props) => {
  const { title, image_url, date, location, price, tickets_remaining } = props.event;
  const {isShowing, toggle} = useModal();
    return (
      <div class="container-main">
        <div onClick={toggle} class="card">
          <h5 className='card-title'>{title}</h5>
          <i class="fas fa-arrow-right"></i>
          <p>Ticket price: ${price}</p>
          <p className='p2'>Admit One</p>
          <div class="pic"></div>
          <button></button>

          <Modal 
          isShowing={isShowing} 
          event={props.event} 
          hide={toggle}
          getTicket={props.getTicket}/>
        </div>
      </div>
    );
}

export default EventCard
