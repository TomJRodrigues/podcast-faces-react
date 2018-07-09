import React, { Component } from 'react';
import FaceCard from './FaceCard.js';

export default class DisplayCards extends Component {
	constructor(props) {
		super(props)

		// function binding

	}

	// event handlers

	render() {
		if (this.props.isShowByName === true) {
      return(
      	<FaceCard 
      		show={this.props.show}
      	/>
      )
    }
    else {
    	return(<p>second option</p>)
    }
	}
}