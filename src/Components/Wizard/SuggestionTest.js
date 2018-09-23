import React, { Component } from 'react';

import WebshopPopup from './WebshopPopup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SuggestionTest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'fit_comparison': {
                'collar': ['-', this.props.comparison_collar, this.props.attributes_collar],
                'shoulders': ['-', this.props.comparison_shoulders, this.props.attributes_shoulders],
                'sleeve': ['-', this.props.comparison_sleeve, this.props.attributes_sleeve],
                'chest': ['-', this.props.comparison_chest, this.props.attributes_chest],
                'waist': ['-', this.props.comparison_waist, this.props.attributes_waist],
                'length': ['-', this.props.comparison_length, this.props.attributes_length]
            },
            'showPopup': false
        }
        this.showPopup = this.showPopup.bind(this);

    }

    showPopup() {
        console.log('das');
        this.setState({
            'showPopup': !this.state.showPopup
        })
    }

    render() {

        var collar;
        if (this.props.attributes_collar == 0) {
            collar = <FontAwesomeIcon icon="check" />;
        } else if (this.props.attributes_collar != null) {
            collar = this.props.comparison_collar.explanation;
        } else {
            collar = '-';
        }

        var shoulders;
        if (this.props.attributes_shoulders == 0) {
            shoulders = <FontAwesomeIcon icon="check" />;
        } else if (this.props.attributes_shoulders != null) {
            shoulders = this.props.comparison_shoulders.explanation;
        } else {
            shoulders = '-';
        }

        var sleeve;
        if (this.props.attributes_sleeve == 0) {
            sleeve = <FontAwesomeIcon icon="check" />;
        } else if (this.props.attributes_sleeve != null) {
            sleeve = this.props.comparison_sleeve.explanation;
        } else {
            sleeve = '-';
        }

        var chest;
        if (this.props.attributes_chest == 0) {
            chest = <FontAwesomeIcon icon="check" />;
        } else if (this.props.attributes_chest != null) {
            chest = this.props.comparison_chest.explanation;
        } else {
            chest = '-';
        }

        var waist;
        if (this.props.attributes_waist == 0) {
            waist = <FontAwesomeIcon icon="check" />;
        } else if (this.props.attributes_waist != null) {
            waist = this.props.comparison_waist.explanation;
        } else {
            waist = '-';
        }

        var length;
        if (this.props.attributes_length == 0) {
            length = <FontAwesomeIcon icon="check" />;
        } else if (this.props.attributes_length != null) {
            length = this.props.comparison_length.explanation;
        } else {
            length = '-';
        }

        var popUp;
        if(this.state.showPopup) {
            popUp = <WebshopPopup fit={this.props.fit_description} size={this.props.size} hidePopup={this.showPopup} url={this.props.url} />
        } else {
            popUp = <div></div>;
        }

        return(
            <div>
            <div className='suggestion' onClick={this.showPopup}>
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
                    <li>{collar}</li>
                    <li>{shoulders}</li>
                    <li>{sleeve}</li>
                    <li>{chest}</li>
                    <li>{waist}</li>
                    <li>{length}</li>
                  </ul>
                </div>
                <h3><br/>Maat: {this.props.size}</h3>
                <h3>€{this.props.price}</h3>
              </div>
              </div>
              {popUp}
            </div>
        )
    }

}

export default SuggestionTest;
