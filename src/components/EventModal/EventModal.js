import React from 'react';
import './EventModal.css';

const EventModal = (props) =>{
    const {
        id,
        title,
        price,
        date,
        location
    } = props.event;
    return(

        <div className="Modal">
            {console.log(props)}
            <div className="title-and-picture">
                <h2>Title: { title }</h2>
                <img src={"https://www.alpha.network/sites/default/files/2019-07/alpha-spring-cocktail-party-event-thumbnail-new_0.jpg"} alt=""></img>
            </div>
            <div className="ModalInfo">
                <ul>
                    <li>Price: { price }</li>
                    <li>Location: { location }</li>
                    <li>Date: { date }</li>
                </ul>
            </div>
            <div className="Buy-Button">
                <button>
                    Purchase Tickets?
                </button>
            </div>
        </div>





        // <div className="event-card" onClick={(event) => props.filterEvents(props.event)}>
        //     <img src={"https://www.alpha.network/sites/default/files/2019-07/alpha-spring-cocktail-party-event-thumbnail-new_0.jpg"} alt=""></img>
        //     <h2>Event title: {title}</h2>
        //     <div className="card-info">
        //     <h4>Event price: ${price}</h4>
        //     <h4>Tickets left for sale:" "</h4>
        //     <h4>Description: " "</h4>
        //     <div>Date: {date}</div>
        //     <div>Location: {location}</div>
        //     <button onClick={() => console.log("You clicked the buy a ticket button, this event ID is:", {id})}>CLICK HERE TO GET A TICKET!</button>
        //     </div>
        // </div>
    )
}

export default EventModal
