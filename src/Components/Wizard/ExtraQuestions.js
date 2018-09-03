import React, { Component } from 'react';

import ExtraQuestion from './ExtraQuestion';

class ExtraQuestions extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        let title = this.props.title;

        let extraQuestions1 = this.props.userData.shirt1[title].extra_questions;
        let extraQuestions = [];
        for (var i in extraQuestions1) {
            extraQuestions.push([i, extraQuestions1[i][0]]);
        }
        console.log(extraQuestions);

        return(
          <div className='extraQuestions'>
            {extraQuestions.map((question) => <ExtraQuestion key={question[0]} questionNo={question[0]} onSizeChange={this.props.onSizeChange} userData={this.props.userData} title={title} shirtShort='shirt1' question={question[1]} />)}
          </div>
        )
    }

}

export default ExtraQuestions;
