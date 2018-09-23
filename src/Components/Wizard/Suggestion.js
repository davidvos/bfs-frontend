import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Suggestion extends Component {

    constructor(props) {
        super(props);
    }


  render() {
    var image = this.props.suggestionData.photo;
    console.log(this.props.suggestionData);
    return(
      <div className='suggestion'>
        <div className='modelHemd'>
          <img src={image} alt='' />
        </div>
        <div className='specificatiesHemd'>
          <h3>{this.props.suggestionData.brand} - {this.props.suggestionData.name}</h3>
          <p className='fittingPercentage'><span>{this.props.suggestionData.fit.fit_percentage}%</span> passend</p>
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
              <li style={this.props.suggestionData.fit_comparisons.collar[1]}>{this.props.suggestionData.fit_comparisons.collar[0]}</li>
              <li>{this.props.suggestionData.fit_comparisons.shoulders[0]}</li>
              <li>{this.props.suggestionData.fit_comparisons.sleeve[0]}</li>
              <li>{this.props.suggestionData.fit_comparisons.chest[0]}</li>
              <li>{this.props.suggestionData.fit_comparisons.waist[0]}</li>
              <li>{this.props.suggestionData.fit_comparisons.length[0]}</li>
            </ul>
          </div>
          <h3>Yes</h3>
          <h3><br/>€{this.props.suggestionData.price}</h3>
        </div>
      </div>
    )
  }
}

export default Suggestion;
