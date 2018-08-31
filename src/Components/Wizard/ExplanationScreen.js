import React, { Component } from 'react';

import NavButtons from './NavButtons'

class ExplanationScreen extends Component {

  render() {
    return(
      <div className='explanationSteps'>
        <h1>Hoe werkt het?</h1>
        <ul>
          <li>
            <img src={require('../../Assets/img/measure_tape.png')} alt='measure' className='explImg' />
            <h2>Meet</h2>
            <p>Voer de afmetingen in van je twee favoriete business overhemden (±10 min)</p>
          </li>
          <li>
            <img src='https://uploads-ssl.webflow.com/5b3ce619a79cac271fc5c65a/5b3e3f62aa9722ca9bd6b14e_desktop.png' alt='order' className='explImg' />
            <h2>Bestel</h2>
            <p>Kies jouw nieuwe, best passende overhemd</p>
          </li>
          <li>
            <img src='https://uploads-ssl.webflow.com/5b3ce619a79cac271fc5c65a/5b3e3f62b90c1f6cd6ff3756_truck.png' alt='deliver' className='explImg' />
            <h2>Ontvang</h2>
            <p>Kies jouw nieuwe, best passende overhemd</p>
          </li>
        </ul>
        <NavButtons next='/wizard/navigation' prev='' />
      </div>
    )
  }

}

export default ExplanationScreen;
