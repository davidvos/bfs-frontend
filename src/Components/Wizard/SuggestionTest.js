import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SuggestionTest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'fit_comparison': {
                'collar': '-',
                'shoulders': '-',
                'sleeve': '-',
                'chest': '-',
                'waist': '-',
                'length': '-'
            }
        }
        this.loadComparison = this.loadComparison.bind(this);
    }

    loadComparison() {
       let current_part = Object.keys(this.state.fit_comparison);
       let newState = this.state;
       for(var i in current_part) {
           if (this.props.fit_attributes[current_part[i]] == 0) {
               newState.fit_comparison[current_part[i]] = <FontAwesomeIcon icon="check" />;
           } else if (this.props.fit_attributes[current_part[i]] != null) {
               newState.fit_comparison[current_part[i]] = this.props.fit_comparison[0][current_part[i]].explanation;
           }
       }
       this.setState({
           newState
       });
   }

   componentDidMount() {
        this.loadComparison();
    }

    render() {
        return(
            <div className='suggestion'>
              <div className='modelHemd'>
                <img src={this.props.photo} alt='' />
              </div>
              <div className='specificatiesHemd'>
                <h3>{this.props.brand} - {this.props.name}</h3>
                <p className='fittingPercentage'><span>{this.props.fit_percentage}%</span> passend</p>
                <div className='specificatieLijst'>
                  <ul>
                    <li>Kraag:</li>
                    <li>Schouders:</li>
                    <li>Mouw:</li>
                    <li>Borst:</li>
                    <li>Middel:</li>
                    <li>Lengte:</li>
                  </ul>
                  <ul>
                    <li>{this.state.fit_comparison.collar}</li>
                    <li>{this.state.fit_comparison.shoulders}</li>
                    <li>{this.state.fit_comparison.sleeve}</li>
                    <li>{this.state.fit_comparison.chest}</li>
                    <li>{this.state.fit_comparison.waist}</li>
                    <li>{this.state.fit_comparison.length}</li>
                  </ul>
                </div>
                <h3><br/>€{this.props.price}</h3>
              </div>
            </div>
        )
    }

}

export default SuggestionTest;
