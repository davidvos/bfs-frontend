import React, { Component } from 'react';

import { Link, withRouter } from "react-router-dom";



class NavButtons extends Component {

    constructor(props) {
        super(props);
        this.dataConfirmation = this.dataConfirmation.bind(this);
        this.state = {
            'errors': ''
        }
    }

    dataConfirmation() {
        var title = this.props.partData.title;
        var extraQuestions = this.props.userData.shirt1[title].extra_questions;
        var error = false;
        for(var i in extraQuestions) {
            if(extraQuestions[i][1] == '') {
                error = true;
            }
        }

        let errors = '';
        if(error === true) {
            this.setState({
              'errors': 'Je hebt een vraag niet ingevuld. Vul deze in om door te gaan.'
            })
        } else {
            this.props.loadShirts();
            this.props.history.push(this.props.next);
        }
    }

    render() {

        let prev_url = this.props.prev;
        let next_url = this.props.next;

        return(
            <div>
            <p>{this.props.userData.error}</p>
            <p>{this.state.errors}</p>
              <div className='proceedButtons'>
                <Link to={prev_url} className='previous'>Vorige</Link>
                <a onClick={this.dataConfirmation} className='next'>Bevestigen</a>
              </div>
              </div>
        )
    }
}

export default withRouter(NavButtons);
