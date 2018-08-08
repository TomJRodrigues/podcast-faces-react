import React, { Component } from 'react';

export default class ShowCard extends Component {
	constructor(props) {
		super(props)

		// function binding
	}

	// event handlers

	render() {
		return(
			<div className="col-md-3">
				<img src={this.props.personurl}></img>
				<h5>{this.props.firstName} {this.props.lastName}</h5>
				<h5>{this.props.show}</h5>
			</div>
		)
	}

}

