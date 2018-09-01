import React, { Component } from 'react';

import { Link } from "react-router-dom";

class NavButtons extends Component {

  render() {
    let prev_url = this.props.prev;
    let next_url = this.props.next;

    return(
      <div className='proceedButtons'>
        <Link to={prev_url} className='previous'>Vorige</Link>
        <Link to={next_url} className='next'>Bevestigen</Link>
      </div>
    )
  }
}

export default NavButtons;
