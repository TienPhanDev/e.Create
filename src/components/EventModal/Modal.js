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
                <img src={"https://study.com/cimages/course-image/big-picture-thinking-in-business_183979_large.jpg"} alt=""></img>
            </div>
            <div className="ModalInfo">
                <ul>
                    <li><strong>Price: </strong> { 'props.event.price' }</li>
                    <li><strong>Location: </strong> { 'props.event.location' }</li>
                    <li><strong>Date: </strong> {' props.event.date '}</li>
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