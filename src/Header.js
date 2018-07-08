import React, { Component } from 'react';

export default class Header extends Component {
	constructor(props) {
		super(props)
	}

	// event handlers

	render() {
		let title = "Podcast Faces"
		return(
			<div>
				<h1>{title}</h1>
				<h6>By Tom Rodrigues: <a href="https://github.com/TomJRodrigues">GitHub</a>, <a href="mailto:tomjrodrigues@gmail.com">tomjrodrigues@gmail.com</a></h6>
			</div>
		)
	}

}