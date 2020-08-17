import React, { Component } from "react";
import "./EventCard.scss";
import useModal from "../EventModal/useModal"
import Modal from "../EventModal/Modal"

const EventCard = () => {
  
    const {isShowing, toggle} = useModal();
    return (
      <div class="container">

        <div onClick={toggle} class="card">
          <h2>North</h2>
          <i class="fas fa-arrow-right"></i>
          <p>a lonely trip.</p>
          <div class="pic"></div>
          <div class="social">
          </div>
          <button  > CLick here</button>
          <Modal isShowing={isShowing} hide={toggle}/>
        </div>


        <div class="card card2">
          <h2>Vauxhall</h2>
          <i class="fas fa-arrow-right"></i>
          <p>a lonely trip.</p>
          <div class="pic"></div>
          <div class="social">
          </div>
          <button></button>
        </div>

        <div class="card card2">
          <h2>EVENT 3</h2>
          <i class="fas fa-arrow-right"></i>
          <p>a lonely trip.</p>
          <div class="pic"></div>
          <div class="social">
          </div>
          <button></button>
        </div>

        <div class="card card2">
          <h2>EVENT 4</h2>
          <i class="fas fa-arrow-right"></i>
          <p>a lonely trip.</p>
          <div class="pic"></div>
          <div class="social">
          </div>
          <button></button>
        </div>
      </div>
    );
 
}

export default EventCard
