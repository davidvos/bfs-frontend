import React, { Component } from 'react';

import { Link } from "react-router-dom";

import AnchorLink from 'react-anchor-link-smooth-scroll'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Homepage extends Component {

  constructor(props) {
    super(props);
    this.onFormChange = this.onFormChange.bind(this)
  }

  onFormChange(e) {
    this.props.onShirtChange(e.target.name, '', 'title', e.target.value);
  }

  render() {
    return(
      <section className='homePage'>

        <div className='callToAction'>
          <div className='wrapper'>
            <h2>Vind het perfect passende overhemd</h2>
            <AnchorLink href='#startNow' className='button'>Aan de slag</AnchorLink>
          </div>
        </div>

        <div className='firstForm wrapper' id='startNow'>
          <h3>Benoem jouw favoriete twee overhemden</h3>
          <p>Pak twee verschillende zakelijke overhemden die lekker
          zitten. Geef ze hieronder een passende naam waar je ze tijdens
          het proces aan kan herkennen.</p>

          <form>
            <label>
              <p>Overhemd 1:</p>
              <input type="text" name="shirt1" value={this.props.userData.shirt1.title} onChange={this.onFormChange} placeholder="e.g. Tommy Hilfiger" />
            </label>
            <label>
              <p>Overhemend 2:</p>
              <input type="text" name="shirt2" value={this.props.userData.shirt2.title} onChange={this.onFormChange} placeholder="e.g. Hugo Boss" />
            </label>
            <Link to={'/wizard/explanation'}><input type="submit" value="Volgende" /></Link>
          </form>

        </div>

        <div className='explanationSteps'>
          <h1>Hoe werkt het?</h1>
          <ul>
            <li>
              <img src={require('../Assets/img/measure_tape.png')} alt='measure' className='explImg' />
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
          <AnchorLink href='#startNow' className='button'>Aan de slag</AnchorLink>
        </div>

      </section>
    )
  }

}

export default Homepage;
