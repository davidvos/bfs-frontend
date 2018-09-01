import React, { Component } from 'react';

import Suggestion from './Suggestion';

import * as GetShirts from '../../Data/GetShirts.js';

class Suggestions extends Component {

    constructor() {
        super();
        this.state = {
            'data': null
        }
    }

    componentWillMount() {
        this.loadShirts();
    }

    loadShirts() {
        GetShirts.getShirts(this.props.userData)
        .then((res) => res.json())
          .then((json) => {
              this.setState({
                'data': json
            });
          })
    }

    render() {

        if (!this.state.data) {
            return <div />
        }

        console.log(this.state);

        let suggestions = this.state.data.data.slice(0,5);

        return(
          <section className='suggestions'>
            <div className='wrapper'>

              <h3>Suggesties</h3>

              {suggestions.map((suggestion) => <Suggestion key={suggestion.uuid} suggestionData={suggestion} />)}

            </div>
          </section>
        )
    }

}

export default Suggestions;
