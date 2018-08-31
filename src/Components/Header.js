import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Header extends Component {

  render() {
    return(
      <header className='wrapper'>
        <div className='logoBox'>
          <img src={require('../Assets/img/logo.png')} alt='logo' className='logo' />
          <h1>Best fitting shirt</h1>
        </div>
        <FontAwesomeIcon
          icon="bars"
          className='menuIcon'
        />
      </header>
    )
  }

}

export default Header;
