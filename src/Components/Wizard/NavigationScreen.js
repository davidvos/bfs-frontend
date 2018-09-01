import React, { Component } from 'react';

import NavButtons from './NavButtons'

class NavigationScreen extends Component {

  constructor() {
    super();
    this.state = {
      'preference': 'collar'
    }
    this.updateNext = this.updateNext.bind(this)
  }

  updateNext(e) {
    let newPreference = e.target.id;
    this.setState({
      'preference': newPreference
    });
  }

  render() {
    var nextPage = '/wizard/' + this.state.preference;

    var classNames = {
      'collar': '',
      'shoulders': '',
      'chest': '',
      'waist': '',
      'length': ''
    }

    classNames[this.state.preference] += 'active';

    return(
      <div className='explanationScreen'>
        <h3>Met welk onderdeel wil je beginnen?</h3>
        <ul>
          <li><a className={classNames.collar} id='collar' onClick={this.updateNext}>Kraag</a></li>
          <li><a className={classNames.shoulders} id='shoulders' onClick={this.updateNext}>Schouders</a></li>
          <li><a className={classNames.chest} id='chest' onClick={this.updateNext}>Borst</a></li>
          <li><a className={classNames.waist} id='waist' onClick={this.updateNext}>Middel</a></li>
          <li><a className={classNames.length} id='length' onClick={this.updateNext}>Lengte</a></li>
        </ul>
        <NavButtons next={nextPage} prev='/wizard/explanation' />
      </div>
    )
  }

}

export default NavigationScreen;
