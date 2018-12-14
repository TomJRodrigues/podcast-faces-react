import React, { Component } from 'react';

export default class ModalFaceCard extends Component {
	constructor(props) {
		super(props)

	}

	render() {
		return (
			<div className="modalFaceCard col-md-6 flex-basis-252">
				<img src={this.props.personurl}></img>
				<h5>{this.props.firstName} {this.props.lastName}</h5>
				<h5>{this.props.hostshow}</h5>
			</div>
		)
	}
}