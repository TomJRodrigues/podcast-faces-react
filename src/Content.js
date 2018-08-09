import React, { Component } from 'react';
import FaceCard from './FaceCard.js';
import ShowCard from './ShowCard.js';

export default class Content extends Component {
	constructor(props) {
		super(props)

		// function binding

	}

	// event handlers

	render() {
    if (this.props.state.showByShow === true) {
      return(
        <div className="row">
          {
            this.props.state.resources.map((show, index) => {
            return(
                <ShowCard
                  index={index}
                  show={show.show}
                  showurl={show.showurl}
                  resource={show}
                  globalState={this.props.state}
                />
              )
            })
          }
        </div>
      )
    }
    if (this.props.state.showByName === true) { 
      return(
        <div className="row">
        {
          this.props.state.hosts.map((host, index) => {
            return (
              <FaceCard
                index={index}
                host={host}
                firstName={host.firstName}
                lastName={host.lastName}
                personurl={host.personurl}
                globalState={this.props.state}
              />
            )
          })
        }
        </div>
        )
    }
    else {
      throw "Please select an option";
    }
	}
}



