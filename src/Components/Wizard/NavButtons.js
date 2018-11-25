import React, { Component } from 'react';

import { Link, withRouter } from "react-router-dom";



class NavButtons extends Component {

    constructor(props) {
        super(props);
        this.dataConfirmation = this.dataConfirmation.bind(this);
        this.state = {
            'errors': '',
            'previous_step_error': ''
        }
    }

    dataConfirmation() {
        var title = this.props.partData.title;
        var extraQuestions = this.props.userData.shirt1[title].extra_questions;
        var warning = false;
        var error = false;
        var shoulder_empty = false;

        for(var i in extraQuestions) {
            if(extraQuestions[i][1] == '') {
                error = true;
            }
        }

        if(this.props.partData.title == 'sleeve') {
            if(!(this.props.completed.indexOf('shoulders') >= 0)) {
                shoulder_empty = true;
            }
        }

        if(this.props.userData.error) {
            warning = true;
        }

        console.log(shoulder_empty);

        let errors = '';
        if(shoulder_empty === true) {
            this.setState({
              'previous_step_error': 'Voordat je \'mouw\' invult, dien je \'schouder\' in te vullen.'
            })
        } else if(error === true) {
            this.setState({
              'errors': 'Je hebt een vraag niet ingevuld. Vul deze in om door te gaan.'
            })
        } else if (warning === true) {
            console.log('warning');
        } else {
            this.props.loadShirts(title);
            this.props.setCompleted(title);
        }


    }

    render() {

        let prev_url = this.props.prev;
        let next_url = this.props.next;

        return(
            <div>
            <p className='error_message'>{this.props.userData.error}</p>
            <p className='error_message'>{this.state.errors}</p>
            <p>{this.state.previous_step_error}</p>
              <div className='proceedButtons'>
                <Link to={prev_url} className='previous'>Vorige</Link>
                <a onClick={this.dataConfirmation} className='next'>Bevestigen</a>
              </div>
              </div>
        )
    }
}

export default withRouter(NavButtons);
