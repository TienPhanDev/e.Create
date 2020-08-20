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
                <button className='button'>
                    Purchase Tickets?
                </button>
            </div>
        </div>
    )
}

export default EventModal
