import React, { Component } from 'react';

export default class ModalFaceCard extends Component {
	constructor(props) {
		super(props)

		// function binding
	}

	// event handlers

	render() {
		{ // the offset is applied to every first host to center the image if there is one host
			if (this.props.index === 0) {
				return(
					<div className="modalFaceCard col-md-offset-3 col-md-6">
						<img src={this.props.personurl}></img>
						<h5>{this.props.firstName} {this.props.lastName}</h5>
						<h5>{this.props.show}</h5>
					</div>
				)
			}
			else {
				// the offset is then removed if there is more than one host for side by side images
				let e = document.getElementsByClassName('col-md-offset-3');  // searches for elements with the offset 
				for (var i = 0; i < e.length; i++) {
				   e[i].classList.remove('col-md-offset-3');  // removes the class
				}
				return(
					<div className="modalFaceCard col-md-6">
						<img src={this.props.personurl}></img>
						<h5>{this.props.firstName} {this.props.lastName}</h5>
						<h5>{this.props.show}</h5>
					</div>
				)
			}
		}
	}

}

