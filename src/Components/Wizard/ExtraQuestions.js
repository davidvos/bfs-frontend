import React, { Component } from 'react';

import ExtraQuestion from './ExtraQuestion';

class ExtraQuestions extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        let title = this.props.title;
        let extraQuestions1 = this.props.userData.shirt1[title].extra_questions;
        let extraQuestions2 = this.props.userData.shirt2[title].extra_questions;

        const extraQuestionsShirt1 = Object.keys(extraQuestions1);
        const extraQuestionsShirt2 = Object.keys(extraQuestions2);

        return(
          <div className='extraQuestions'>
            {extraQuestionsShirt1.map((question) => <ExtraQuestion key={question} onSizeChange={this.props.onSizeChange} title={title} shirtShort='shirt1' question={question} />)}
            {extraQuestionsShirt2.map((question) => <ExtraQuestion key={question} onSizeChange={this.props.onSizeChange} title={title} shirtShort='shirt2' question={question} />)}
          </div>
        )
    }

}

export default ExtraQuestions;
