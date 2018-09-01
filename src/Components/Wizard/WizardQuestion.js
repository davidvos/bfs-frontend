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
            userData={this.props.userData}
            shirtShort='shirt1'
            onSizeChange={this.props.onShirtChange}
          />

          <MeasureSpecify
            title={this.props.partData.title}
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
          />

          <WizardNavigation
            partData={this.props.partData.title}
          />

        </div>

      </section>
      <Suggestions
        userData={this.props.userData}
      />
      </div>
    );

  }

}

export default WizardQuestion;
