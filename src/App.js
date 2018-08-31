import React, { Component } from 'react';

import Header from './Components/Header';
import Footer from './Components/Footer.js';
import Wizard from './Components/Wizard.js';


import './Assets/css/reset.css';
import './Assets/css/fonts.css';
import './Assets/css/App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faDraftingCompass, faShoppingCart, faTruck, faImage, faVideo, faCheck } from '@fortawesome/free-solid-svg-icons';

library.add(faBars, faDraftingCompass, faShoppingCart, faTruck, faImage, faVideo, faCheck);

class App extends Component {

  render() {
    return(
        <div>
          <Header />

            <Wizard />

          <Footer />
        </div>
    )
  }

}

export default App;
