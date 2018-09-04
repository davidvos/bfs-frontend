import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Suggestion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'data': this.props.suggestionData,
            'fit_comparisons': {
                'collar': ['-', {color: '#000'}],
                'shoulders': ['-', {color: '#000'}],
                'sleeve': ['-', {color: '#000'}],
                'chest': ['-', {color: '#000'}],
                'waist': ['-', {color: '#000'}],
                'length': ['-', {color: '#000'}],
            },
            'refresh': true
        }
        this.loadComparison = this.loadComparison.bind(this);
    }

    loadComparison() {
        let current_part = Object.keys(this.state.fit_comparisons);
        let newState = this.state;
        for(var i in current_part) {
            if (this.state.data.fit.fit_attributes[current_part[i]] == 0) {
                newState.fit_comparisons[current_part[i]][0] = <FontAwesomeIcon icon="check" />;
                newState.fit_comparisons[current_part[i]][1] = {color: '#2ecc71'};
            } else if (this.state.data.fit.fit_attributes[current_part[i]] != null) {
                newState.fit_comparisons[current_part[i]][0] = this.state.data.fit.fit_comparison[0][current_part[i]].explanation;
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
    var image = this.state.data.photo;
    return(
      <div className='suggestion'>
        <div className='modelHemd'>
          <img src={image} alt='' />
        </div>
        <div className='specificatiesHemd'>
          <h3>{this.state.data.brand} - {this.state.data.name}</h3>
          <p className='fittingPercentage'><span>{this.state.data.fit.fit_percentage}%</span> passend</p>
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
              <li style={this.state.fit_comparisons.collar[1]}>{this.state.fit_comparisons.collar[0]}</li>
              <li>{this.state.fit_comparisons.shoulders[0]}</li>
              <li>{this.state.fit_comparisons.sleeve[0]}</li>
              <li>{this.state.fit_comparisons.chest[0]}</li>
              <li>{this.state.fit_comparisons.waist[0]}</li>
              <li>{this.state.fit_comparisons.length[0]}</li>
            </ul>
          </div>
          <h3><br/>€{this.state.data.price}</h3>
        </div>
      </div>
    )
  }
}

export default Suggestion;
