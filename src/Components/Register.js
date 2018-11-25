import React, { Component } from 'react';

import { Link } from "react-router-dom";

import AnchorLink from 'react-anchor-link-smooth-scroll'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as Register from '../Data/Register.js';


class RegisterPage extends Component {

  constructor(props) {
    super(props);
    this.onFormChange = this.onFormChange.bind(this);
    this.state = {
      'registerData': {
        'name': '',
        'email': '',
        'password': '',
        'password_confirmation': ''
      },
      'returnedData': {
  
      }
  }
}

  onFormChange(e) {
    var name = e.target.name
    var value = e.target.value
    this.setState({
      name: value
    });
  }

  register() {
    Register.register(this.state.registerData)
    .then((res) => res.json())
    .then((json) => {
      var newState = json;
      this.setState({
        'returnedData': newState
      });      
    })
    .catch((error) => {
          console.log(error);
    });
  }

  render() {
    return(
      <section className='registerPage'>
        <input type="text" name="name" value={this.state.registerData.name} onChange={this.onFormChange} placeholder="Full Name" />
        <input type="text" name="email" value={this.state.registerData.email} onChange={this.onFormChange} placeholder="Email Adress" />
        <input type="text" name="password" value={this.state.registerData.password} onChange={this.onFormChange} placeholder="Password" />
        <input type="text" name="password_confirmation" value={this.state.registerData.password_confirmation} onChange={this.onFormChange} placeholder="Repeat password" />
        <input onClick='register()'></input>
      </section>
    )
  }

}

export default RegisterPage;
