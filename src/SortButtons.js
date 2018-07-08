import React, { Component } from 'react';

export default class Header extends Component {
	constructor(props) {
		super(props)
	}

	// event handlers

	render() {
		return(
			<div className="sortButtons">
				<button>Home</button>
				<button>By Name</button>
				<button>By Show</button>
			</div>
		)
	}

}