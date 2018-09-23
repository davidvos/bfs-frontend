import React, { Component } from 'react';

import NavButtons from './NavButtons'

import { Link } from "react-router-dom";

class ExplanationScreen extends Component {

  render() {
    return(
      <div className='explanationSteps'>
        <h1>Wat heb je nodig?</h1>
        <ul>
          <li>
            <img src={require('../../Assets/img/measure_tape.png')} alt='measure' className='explImg' />
            <h2>Meetlint</h2>
          </li>
          <li>
            <img src={require('../../Assets/img/shirt_logo_double.png')} alt='order' className='explImg' />
            <h2>Twee overhemden</h2>
          </li>
          <li>
            <img src={require('../../Assets/img/time-black.png')} alt='deliver' className='explImg' />
            <h2>10 minuten de tijd</h2>
          </li>
        </ul>
        <div className='proceedButtons'>
          <Link to='/' className='previous'>Vorige</Link>
          <Link to='/wizard/navigation' className='next'>Volgende</Link>
        </div>

      </div>
    )
  }

}

export default ExplanationScreen;
