import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class WebshopPopup extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div className='popupOverlay'>
                <div className='webshopPopup'>
                    <span className='awayX' onClick={this.props.hidePopup}>&#9447;</span>
                    <p>Vul bij de desbetreffende webshop de volgende gegevens in:</p>
                    <p><br/>Fit: {this.props.fit}</p>
                    <p>Maat: {this.props.size}</p>
                    <a href={this.props.url} className='button' target='_blank'>Go to webshop</a>
                </div>
            </div>
        )
    }

}

export default WebshopPopup;
