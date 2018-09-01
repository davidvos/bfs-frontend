import React, { Component } from 'react';

import Suggestion from './Suggestion';

import * as GetShirts from '../../Data/GetShirts.js';

class Suggestions extends Component {

    constructor() {
        super();
        this.state = {

        }
    }

    componentDidMount() {
        var shirts;
        GetShirts.getShirts(this.props.userData)
        .then((res) => res.json())
          .then((json) => {
              shirts = json;
              this.setState(shirts);
              console.log(shirts);
          })
        .catch((error) => {
              console.log('Error.');
          });
    }

    render() {
        return(
          <section className='suggestions'>
            <div className='wrapper'>

              <h3>Suggesties</h3>



            </div>
          </section>
        )
    }

}

export default Suggestions;
