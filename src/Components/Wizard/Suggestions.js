import React, { Component } from 'react';

import Suggestion from './Suggestion'

class Suggestions extends Component {

  render() {
    return(
      <section className='suggestions'>
        <div className='wrapper'>

          <h3>Suggesties</h3>

          <Suggestion />

          <Suggestion />

        </div>
      </section>
    )
  }

}

export default Suggestions;
