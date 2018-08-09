import React, { Component } from 'react';

export default class Header extends Component {
	constructor(props) {
		super(props)

		// function binding
		this.handleName = this.handleName.bind(this);
		this.handleShow = this.handleShow.bind(this);
	}

	// event handlers

  handleName(event) {         // packages event input into object notation, calls bound function from app.js to filter by name
    event.preventDefault();
    this.props.showByName();
  }

  handleShow(event) {         // packages event input into object notation, calls bound function from app.js to filter by show
    event.preventDefault();
    this.props.showByShow();
  }

	render() {
		return(
			<div className="sortButtons">
				<button type="button" className="btn btn-primary btn-lg" onClick={this.handleShow}>By Show</button>
				<button type="button" className="btn btn-primary btn-lg" onClick={this.handleName}>By Name</button>
			</div>
		)
	}

}