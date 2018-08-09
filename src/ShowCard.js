import React, { Component } from 'react';
import Modal from './react-bootstrap/lib/Modal.js';
import Button from './react-bootstrap/lib/Button.js';
import ModalFaceCard from './ModalFaceCard.js';

export default class ShowCard extends Component {
	constructor(props, context) {
		super(props, context);

		// function binding
		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.state = {
			show: false
		};
	}

	// event handlers

	handleClose() {
		this.setState({ show: false });
		console.log("closed");
	}

	handleShow() {
		this.setState({ show: true });
		console.log("showed");
	}

	render() {
		return(
			<div className="col-md-3">
				<div className="cardHolder" onClick={this.handleShow}>
          <img src={this.props.showurl}></img>
  				<h5>{this.props.show}</h5>
        </div>
				<Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.show}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              {
                this.props.resource.hosts.map((host, index) => {
                  return (
                    <ModalFaceCard
                      index={index}
                      host={host}
                      firstName={host.firstName}
                      lastName={host.lastName}
                      personurl={host.personurl}
                    />
                  )
                })
              }
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
			</div>
		)
	}

}

