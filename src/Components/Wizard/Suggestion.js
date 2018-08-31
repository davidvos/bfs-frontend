import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Suggestion extends Component {

  render() {
    return(
      <div className='suggestion'>
        <div className='modelHemd'>
          <img src={require('../../Assets/img/hemdTest.jpg')} alt='' />
        </div>
        <div className='specificatiesHemd'>
          <h3>SuitSupply - White Herriag</h3>
          <p className='fittingPercentage'><span>95%</span> passend</p>
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
          <h3><br/>€59.95</h3>
        </div>
      </div>
    )
  }
}

export default Suggestion;
