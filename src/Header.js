import React, { Component } from 'react';

export default class Header extends Component {
	constructor(props) {
		super(props)
	}

	// event handlers

	render() {
		let title = "Podcast Faces"
		return(
			<header>
				<h1>{title}</h1>
			</header>
		)
	}

}