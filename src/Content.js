import React, { Component } from 'react';
import FaceCard from './FaceCard.js';
import DisplayCards from './DisplayCards.js';

export default class Content extends Component {
	constructor(props) {
		super(props)

		// function binding

	}

	// event handlers

	render() {
    if (this.props.state.showByShow === true) {
      console.log("show by show true");
      return(
        <div className="row">
          {
            this.props.state.resources.map((host, index) => {
            return(
                <DisplayCards
                  index={index}
                  isShowByName={this.props.state.showByName}
                  isShowByShow={this.props.state.showByShow}
                  isShowHome={this.props.state.showHome}
                  hosts={host}
                  state={this.props.state}
                />
              )
            })
          }
        </div>
      )
    }
    if (this.props.state.showByName === true) { 
      return(
        <div className="sortByName">
        {
          this.props.state.hosts.map((host, index) => {
            return (
              <FaceCard
                index={index}
                host={host}
                firstName={host.firstName}
                lastName={host.lastName}
                personurl={host.personurl}
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



