import React, { Component } from 'react';

export default class FaceCard extends Component {
	constructor(props) {
		super(props)

		// function binding

	}

	// event handlers

	render() {
		return(
			<div className="col-md-3">
				<img src={this.props.items.showurl}></img>
				<h4>{this.props.name}</h4>
				<h5>{this.props.items.show}</h5>
			</div>
		)
	}

}