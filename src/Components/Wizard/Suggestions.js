import React, { Component } from 'react';

import Suggestion from './Suggestion';

import * as GetShirts from '../../Data/GetShirts.js';

class Suggestions extends Component {

    constructor(props) {
        super(props);
}

    render() {

        if (this.props.shirtData == {}) {
            return <div />
        }

        let suggestions = this.props.shirtData.data;
        return(
          <section className='suggestions'>
            <div className='wrapper'>

              <h3>Suggesties</h3>

              {suggestions.map((suggestion, i) => <Suggestion key={i} suggestionData={suggestion} />)}

            </div>
          </section>
        )
    }

}

export default Suggestions;
