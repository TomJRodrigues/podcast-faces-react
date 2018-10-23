import React, { Component } from 'react';
import {Typeahead} from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'react-bootstrap-typeahead/css/Typeahead-bs4.css';

export default class TypeAheadContainer extends Component {
	constructor(props) {
		super(props)

		//function binding
		this.handleChange = this.handleChange.bind(this);
	}

	// event handlers
	handleChange(selected) {
		console.log(selected);
		this.props.handleChangeHelper(selected);
	}

	render() {
		if (this.props.state.showByShow === true) {
			return(
				<div className="typeahead-container">
					<Typeahead
						onChange={this.handleChange}
		        labelKey={(option) => `${option.show}`}
		        options={this.props.state.typeAheadOptions}
		        placeholder="Enter a show"
		        highlightOnlyResult={true}
		        selectHintOnEnter={true}
		        clearButton
		        selected={this.props.state.selected}
		      />
	      </div>
			)
		}
		if (this.props.state.showByName === true) {
			return(
				<div className="typeahead-container">
					<Typeahead
						onChange={this.handleChange}
		        labelKey={(option) => `${option.firstName} ${option.lastName}`}
		        options={this.props.state.typeAheadOptions}
		        placeholder="Enter a name"
		        highlightOnlyResult={true}
		        selectHintOnEnter={true}
		        clearButton
		        selected={this.props.state.selected}
		      />
		    </div>
			)
		}
		else{
			return 0;
		}
		
	}

}