import React, { Component } from 'react';

import WizardNavigation from './WizardNavigation'
import ExplanationSwitcher from './ExplanationSwitcher'
import MeasureSpecify from './MeasureSpecify'
import ExtraQuestions from './ExtraQuestions'
import NavButtons from './NavButtons'
import Suggestions from './Suggestions'

class WizardQuestion extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showImage: true
    }
  }

  render() {

    return(
      <div>
      <section className='question'>
        <div className='wrapper'>

          <p>Meet de {this.props.partData.title} van {this.props.userData.shirt1.title} en {this.props.userData.shirt2.title} en druk op volgende.</p>

          <ExplanationSwitcher partData={this.props.partData} />

          <MeasureSpecify
            title={this.props.partData.title}
            partData = {this.props.partData}
            userData={this.props.userData}
            shirtShort='shirt1'
            onSizeChange={this.props.onShirtChange}
          />

          <MeasureSpecify
            title={this.props.partData.title}
            partData = {this.props.partData}
            userData={this.props.userData}
            shirtShort='shirt2'
            onSizeChange={this.props.onShirtChange}
          />

          <ExtraQuestions
            title={this.props.partData.title}
            userData={this.props.userData}
            shirtShort='shirt2'
            onSizeChange={this.props.onShirtChange}
          />

          <NavButtons
            prev={this.props.partData.prev}
            next={this.props.partData.next}
            partData = {this.props.partData}
            userData={this.props.userData}
            loadShirts={this.props.loadShirts}
          />

          <WizardNavigation
            partData={this.props.partData}
          />

        </div>

      </section>
      <Suggestions
        userData={this.props.userData}
        shirtData={this.props.shirtData}
        loadShirts={this.props.loadShirts}
      />
      </div>
    );

  }

}

export default WizardQuestion;
