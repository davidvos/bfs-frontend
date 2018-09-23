import React, { Component } from 'react';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Header extends Component {

    constructor() {
        super();
        this.state = {
            'showMenu': false
        }
        this.showMenu = this.showMenu.bind(this);

    }

    showMenu() {
        this.setState({
            'showMenu': !this.state.showMenu
        })
    }

  render() {

    var menu;
    if(this.state.showMenu) {
        menu =  <div className='menuMobile'>
                    <ul>
                        <li>Gegevens opslaan</li>
                        <li>Inloggen</li>
                        <li>Over Ons</li>
                        <li>Team</li>
                        <li>Webshop</li>
                    </ul>
                </div>
    } else {
        menu = <div></div>
    }

    return(
        <div>
      <header className='wrapper'>
        <div className='logoBox'>
          <img src={require('../Assets/img/logo.png')} alt='logo' className='logo' />
          <h1>Best fitting shirt</h1>
        </div>
        <FontAwesomeIcon
          icon="bars"
          className='menuIcon'
          onClick={this.showMenu}
        />
      </header>
      {menu}
      </div>
    )
  }

}

export default Header;
