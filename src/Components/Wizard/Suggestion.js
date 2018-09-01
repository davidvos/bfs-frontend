import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Suggestion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'data': this.props.suggestionData
        }
    }

  render() {

    var image = this.state.data.photo;
    return(
      <div className='suggestion'>
        <div className='modelHemd'>
          <img src={image} alt='' />
        </div>
        <div className='specificatiesHemd'>
          <h3>{this.state.data.brand} - {this.state.data.name}</h3>
          <p className='fittingPercentage'><span>{this.state.data.fit.fit_percentage}%</span> passend</p>
          <div className='specificatieLijst'>
            <ul>
              <li>Kraag:</li>
              <li>Schouders:</li>
              <li>Mouw:</li>
              <li>Borst:</li>
              <li>Middel:</li>
              <li>Lengte:</li>
            </ul>
            <ul>
              <li><FontAwesomeIcon
                icon="check"
              /></li>
              <li><FontAwesomeIcon
                icon="check"
              /></li>
              <li><FontAwesomeIcon
                icon="check"
              /></li>
              <li><FontAwesomeIcon
                icon="check"
              /></li>
              <li><FontAwesomeIcon
                icon="check"
              /></li>
              <li><FontAwesomeIcon
                icon="check"
              /></li>
            </ul>
          </div>
          <h3><br/>€{this.state.data.price}</h3>
        </div>
      </div>
    )
  }
}

export default Suggestion;
