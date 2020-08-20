import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
          <div className="title-and-picture">
                <h2>Title: Weeknd After Hours Tour</h2>
                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSooPkrB5gNCcm_QBJCtHNMzx1JbjQ-FFvgjw&usqp=CAU"} alt=""></img>
            </div>
            <div className="ModalInfo">
                <ul>
                    <li><strong>Price: $</strong>125</li>
                    <li><strong>Location: </strong> Jiffy Lube Live, Bristow Virginia 29310</li>
                    <li><strong>Date: </strong> November 2, 2020</li>
                </ul>
            </div>
            <div className="Buy-Button">
                <button onClick={() => alert('Ticket Bought =) Click your homepage')}>
                    Buy Ticket
                </button>
            </div>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;


export default Modal;