import React, { Component } from 'react';

import SuggestionsTest from './SuggestionTest';

import * as GetShirts from '../../Data/GetShirts.js';

class Suggestions extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        var suggestionsList = [];
        for (var i in this.props.shirtData.data) {
            var name = this.props.shirtData.data[i].name;
            var price = this.props.shirtData.data[i].price;
            var fit_percentage = this.props.shirtData.data[i].fit.fit_percentage;
            var fit_comparison = this.props.shirtData.data[i].fit.fit_comparison;
            var fit_attributes = this.props.shirtData.data[i].fit.fit_attributes;
            var photo = this.props.shirtData.data[i].photo;
            var brand = this.props.shirtData.data[i].brand;
            suggestionsList.push(<SuggestionsTest
                                    name={name}
                                    price={price}
                                    fit_percentage={fit_percentage}
                                    fit_attributes={fit_attributes}
                                    fit_comparison={fit_comparison}
                                    brand={brand}
                                    photo={photo}
                                />);
        }

        return(
          <section className='suggestions'>
            <div className='wrapper'>

              <h3>Suggesties</h3>

              {suggestionsList}

            </div>
          </section>
        )
    }

}

export default Suggestions;
