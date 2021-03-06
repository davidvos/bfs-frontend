import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './Components/Home.js';
import RedirectHome from './Components/RedirectHome.js'

import './Assets/css/reset.css';
import './Assets/css/fonts.css';
import './Assets/css/App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faDraftingCompass, faShoppingCart, faTruck, faImage, faVideo, faCheck } from '@fortawesome/free-solid-svg-icons';

library.add(faBars, faDraftingCompass, faShoppingCart, faTruck, faImage, faVideo, faCheck);

class App extends Component {

  render() {
    return(
    	<BrowserRouter>
    		<Switch>
    			<Route exact path={"/"} component={ Home }/>
    			<Route component={ RedirectHome }/>
    		</Switch>
    	</BrowserRouter>
    );
  }

}

export default App;
