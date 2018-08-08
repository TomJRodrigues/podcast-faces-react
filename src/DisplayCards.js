import React, { Component } from 'react';
import FaceCard from './FaceCard.js';

export default class DisplayCards extends Component {
	constructor(props) {
		super(props)

		// function binding

	}

	// event handlers

	render() {
		if (this.props.isShowByShow === true) {
      return(
        <div className="faceCardHolder"> 
          { 
            this.props.hosts.hosts.map((host, index) => {
              return (
                <FaceCard
                index={index}
                host={host}
                firstName={host.firstName}
                lastName={host.lastName}
                personurl={host.personurl}
                show={this.props.hosts.show}
                />
              )
            })
          }
        </div>
      )
    }
    else {
    	return(<p>second option</p>)
    }
	}
}