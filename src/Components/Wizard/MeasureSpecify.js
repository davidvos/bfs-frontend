import React, { Component } from 'react';

class MeasureSpecify extends Component {

  constructor(props) {
    super(props);
    this.onShirtChange = this.onShirtChange.bind(this);
  }

  togglereview(choice) {
    var newChoice;
    if (choice === 'past') {
      newChoice = 'past'
    } else if (choice === 'strak') {
      newChoice = 'strak'
    } else {
      newChoice = 'wijd'
    }
    this.props.onSizeChange(this.props.shirtShort, this.props.title, 'review', newChoice);
  }

  onShirtChange(e) {
    this.props.onSizeChange(this.props.shirtShort, this.props.title, 'size', parseFloat(e.target.value));
  }

  render() {

    var classNames = {
      'strak': '',
      'past': '',
      'wijd': '',
    };

    classNames[this.props.userData[this.props.shirtShort][this.props.title].review] += 'active';

    return(
      <div>
        <p className='measureSpecify'><span>{this.props.title}</span> van {this.props.userData[this.props.shirtShort].title} in cm</p>
        <div className='clothing1'>
          <select id='sizePicker' value={this.props.userData[this.props.shirtShort][this.props.title].size} onChange={this.onShirtChange}>
            <option value="39.5">39,5</option>
            <option value="40.0">40,0</option>
            <option value="40.5">40,5</option>
            <option value="41.0">41,0</option>
          </select>
          <div className='preferencePicker'>
            <a className={classNames.strak} onClick={this.togglereview.bind(this, 'strak')}>te strak</a>
            <a className={classNames.past} onClick={this.togglereview.bind(this, 'past')}>past</a>
            <a className={classNames.wijd} onClick={this.togglereview.bind(this, 'wijd')}>te wijd</a>
          </div>
        </div>
      </div>
    )
  }
}

export default MeasureSpecify;
