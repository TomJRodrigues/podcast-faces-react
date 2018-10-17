import React, { Component } from 'react';
import {Typeahead} from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'react-bootstrap-typeahead/css/Typeahead-bs4.css';

export default class TypeAheadContainer extends Component {
	constructor(props) {
		super(props)

	}

	// event handlers

	render() {
		if (this.props.state.showByShow === true) {
			return(
				<Typeahead
	        labelKey={(option) => `${option.show}`}
	        options={this.props.state.typeAheadOptions}
	      />
			)
		}
		if (this.props.state.showByName === true) {
			return(
				<Typeahead
	        labelKey={(option) => `${option.firstName} ${option.lastName}`}
	        options={this.props.state.typeAheadOptions}
	      />
			)
		}
		else{
			return 0;
		}
		
	}

}