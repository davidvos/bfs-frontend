import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';
import Wizard from './Wizard';

class Home extends Component {
	render() {
		return(
			<div>
	          <Header />

	            <Wizard />

	          <Footer />
	        </div>
		);
	}
}

export default Home;