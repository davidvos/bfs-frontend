import React, { Component } from 'react';

import SuggestionsTest from './SuggestionTest';

import * as GetShirts from '../../Data/GetShirts.js';

class Suggestions extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        var suggestionsList = [];
        console.log(this.props.shirtData.data);
        for (var i in this.props.shirtData.data) {
            var name = this.props.shirtData.data[i].name;
            var price = this.props.shirtData.data[i].price;
            var fit_percentage = this.props.shirtData.data[i].fit.fit_percentage;

            var comparison_collar = this.props.shirtData.data[i].fit.fit_comparison[0]['collar'];
            var comparison_shoulders = this.props.shirtData.data[i].fit.fit_comparison[0]['shoulders'];
            var comparison_sleeve = this.props.shirtData.data[i].fit.fit_comparison[0]['sleeve'];
            var comparison_chest = this.props.shirtData.data[i].fit.fit_comparison[0]['chest'];
            var comparison_waist = this.props.shirtData.data[i].fit.fit_comparison[0]['waist'];
            var comparison_length = this.props.shirtData.data[i].fit.fit_comparison[0]['length'];

            var attributes_collar = this.props.shirtData.data[i].fit.fit_attributes.collar;
            var attributes_shoulders = this.props.shirtData.data[i].fit.fit_attributes.shoulders;
            var attributes_sleeve = this.props.shirtData.data[i].fit.fit_attributes.sleeve;
            var attributes_chest = this.props.shirtData.data[i].fit.fit_attributes.chest;
            var attributes_waist = this.props.shirtData.data[i].fit.fit_attributes.waist;
            var attributes_length = this.props.shirtData.data[i].fit.fit_attributes.length;

            var photo = this.props.shirtData.data[i].photo;
            var brand = this.props.shirtData.data[i].brand;
            suggestionsList.push(<SuggestionsTest
                                    name={name}
                                    price={price}
                                    fit_percentage={fit_percentage}
                                    size={this.props.shirtData.data[i].size}
                                    fit_description={this.props.shirtData.data[i].fit_type}
                                    url={this.props.shirtData.data[i].link}

                                    comparison_collar={comparison_collar}
                                    comparison_shoulders={comparison_shoulders}
                                    comparison_sleeve={comparison_sleeve}
                                    comparison_chest={comparison_chest}
                                    comparison_waist={comparison_waist}
                                    comparison_length={comparison_length}

                                    attributes_collar={attributes_collar}
                                    attributes_shoulders={attributes_shoulders}
                                    attributes_sleeve={attributes_sleeve}
                                    attributes_chest={attributes_chest}
                                    attributes_waist={attributes_waist}
                                    attributes_length={attributes_length}

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
