import React from "react";
import "./EventCardTwo.scss";
import useModal from "../EventModal/useModal";
import Modal from "../EventModal/Modal";

const EventCardTwo = (props) => {
  const {
    title,
    image_url,
    date,
    location,
    price,
    tickets_remaining,
  } = props.event;

  const { isShowing, toggle } = useModal();
  return (
    <div className="example">
      <widget type="ticket" class="--flex-column">
        <div class="top --flex-column">
          <div class="bandname -bold">{title}</div>
          <div class="tourname">Tickets left: {tickets_remaining}</div>
          <img
            src={`${image_url}`}
            alt=""
            className='card-image'
          />
          <div class="deetz --flex-row-j!sb">
            <div class="event --flex-column">
              <div class="date">{date}</div>
              <div class="location -bold">{location}</div>
            </div>
            <div class="price --flex-column">
              <div class="label">Price</div>
              <div class="cost -bold">${price} per ticket</div>
            </div>
          </div>
        </div>
        <div class="rip"></div>
        <div class="bottom --flex-row-j!sb">
          <div class="barcode" onClick={() => props.getTicket()}> </div>
          <button class="buy" onClick={toggle}>
            {" "}
            <Modal
              isShowing={isShowing}
              event={props.event}
              hide={toggle}
              getTicket={props.getTicket}
            />
            Click for more details!
          </button>
        </div>
      </widget>
    </div>
  );
};

export default EventCardTwo;
