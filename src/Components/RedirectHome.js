import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

class RedirectHome extends Component {
	render() {
		return(
			<Redirect to="/" />
		)
	}
}

export default RedirectHome;
