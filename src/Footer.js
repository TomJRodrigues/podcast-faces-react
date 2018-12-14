import React, { Component } from 'react';

export default class Footer extends Component {
	constructor(props) {
		super(props)
	}

	// event handlers

	render() {
		return(
			<footer>
				<h6>By Tom Rodrigues: <a href="https://github.com/TomJRodrigues">GitHub</a>, <a href="mailto:tomjrodrigues@gmail.com">tomjrodrigues@gmail.com</a></h6>
			</footer>
		)
	}

}