import React from 'react';
import ReactDOM from 'react-dom';
import EventModal from './EventModal'

const Modal = ({ isShowing, hide }, props) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <p>
          <div className="title-and-picture">
                <h2>Title: { "props.event.title" }</h2>
                <img src={"https://www.alpha.network/sites/default/files/2019-07/alpha-spring-cocktail-party-event-thumbnail-new_0.jpg"} alt=""></img>
            </div>
            <div className="ModalInfo">
                <ul>
                    <li>Price: { 'props.event.price' }</li>
                    <li>Location: { 'props.event.location' }</li>
                    <li>Date: {' props.event.date '}</li>
                </ul>
            </div>
            <div className="Buy-Button">
                <button onClick={() =>console.log(props.event)}>
                    Purchase Tickets?
                </button>
            </div>
        </p>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;