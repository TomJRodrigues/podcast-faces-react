import React, { Component } from 'react';
import FaceCard from './FaceCard.js';
import ShowCard from './ShowCard.js';

export default class Content extends Component {
	constructor(props) {
		super(props)
	}

	render() {
    // rendering when user clicks to sort by Show
    if (this.props.state.showByShow === true) {
      return(
        <div className="contentBox">
          {
            this.props.state.contentToRender.map((show, index) => {
            return(
                <ShowCard
                  key={index}
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
    // rendering for when user clicks to sort by Name instead
    if (this.props.state.showByName === true) { 
      return(
        <div className="contentBox">
        {
          this.props.state.contentToRender.map((host, index) => {
            return (
              <FaceCard
                key={index}
                host={host}
                firstName={host.firstName}
                lastName={host.lastName}
                personurl={host.personurl}
                hostshow={host.hostshow}
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



