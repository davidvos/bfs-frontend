import React, { Component } from 'react';

class ExtraQuestion extends Component {

  constructor(props) {
    super(props);
    this.state = {
      'userChoice': 'yes'
    }
    this.toggleYesNo = this.toggleYesNo.bind(this);
  }

  toggleYesNo(choice) {
    var newChoice;
    if (choice === 'yes') {
      newChoice = 'yes'
    } else {
      newChoice = 'no'
    }
    this.setState(function(prevState, props) {
      return {
        'userChoice': newChoice
      };
    });
    this.props.onSizeChange(this.props.shirtShort, this.props.title, 'extra_questions', this.props.question, newChoice);
  }

  render() {

    var classNames = {
      'yes': '',
      'no': '',
    }

    classNames[this.state.userChoice] += 'active';

    return(
      <div className='extraQuestion'>
        <p>{this.props.question}</p>
        <div className='yesnoSelector'>
          <a className={classNames.yes} onClick={this.toggleYesNo.bind(this, 'yes')}>Ja</a>
          <a className={classNames.no} onClick={this.toggleYesNo.bind(this, 'no')}>Nee</a>
        </div>
      </div>
    )
  }
}

export default ExtraQuestion;
