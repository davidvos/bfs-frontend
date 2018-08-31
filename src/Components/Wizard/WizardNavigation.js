import React, { Component } from 'react';

import { Link } from "react-router-dom";

class WizardNavigation extends Component {

  componentDidMount() {
    document.getElementById(this.props.partData).classList.add("active");
  }

  render() {
    return (
      <div className='organisationButtons' id='organisationButtons'>
          <li id='collar'><Link to='/wizard/collar'><img src={require('../../Assets/img/collar.png')} alt='kraag' />Kraag</Link></li>
          <li id='shoulders'><Link to='/wizard/shoulders'><img src={require('../../Assets/img/shoulder.png')} alt='shoulders' />Schouders</Link></li>
          <li id='sleeve'><Link to='/wizard/sleeve'><img src={require('../../Assets/img/sleeve.png')} alt='sleeve' />Mouw</Link></li>
          <li id='chest'><Link to='/wizard/chest'><img src={require('../../Assets/img/chest.png')} alt='chest' />Borst</Link></li>
          <li id='waist'><Link to='/wizard/waist'><img src={require('../../Assets/img/waist.png')} alt='waist' />Middel</Link></li>
          <li id='length'><Link to='/wizard/length'><img src={require('../../Assets/img/length.png')} alt='length' />Lengte</Link></li>
      </div>
    )}

}

export default WizardNavigation;
