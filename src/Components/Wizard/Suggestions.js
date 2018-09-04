import React, { Component } from 'react';

import Suggestion from './Suggestion';

import * as GetShirts from '../../Data/GetShirts.js';

class Suggestions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'data': {},
            'suggestions': []
        }
    }

    componentWillMount() {
        this.setState({
            'data': this.props.shirtData
        })
    }


    render() {

        console.log('rerender!');

        if (this.state.data == {}) {
            return <div />
        }


        var suggestions = [];

        for (var i in Object.keys(this.state.data.data)) {
            suggestions.push(<Suggestion suggestionData={this.state.data.data[i]} />)
        }
        console.log(suggestions);
        return(
          <section className='suggestions'>
            <div className='wrapper'>

              <h3>Suggesties</h3>

              {suggestions}

            </div>
          </section>
        )
    }

}

export default Suggestions;
