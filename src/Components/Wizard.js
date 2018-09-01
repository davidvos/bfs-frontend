import React, { Component } from 'react';

import { Route, BrowserRouter } from 'react-router-dom'

import Homepage from './Homepage';
import WizardQuestion from './Wizard/WizardQuestion';
import NavigationScreen from './Wizard/NavigationScreen';
import ExplanationScreen from './Wizard/ExplanationScreen';

import * as PostSizes from '../Data/PostSizes.js';

import QuestionData from '../Data/QuestionData.js';

class Wizard extends Component {

  constructor() {
    super();
    this.state = {
      'shirt1': {
        'title': 'asd',
        'collar': {
          'size': '',
          'review': 'strak',
          'extra_questions': {
          }
        },
        'shoulders': {
          'size': '',
          'review': 'strak',
          'extra_questions': {
          }
        },
        'sleeve': {
          'size': '',
          'review': 'strak',
          'extra_questions': {
          }
        },
        'chest': {
          'size': '',
          'review': 'strak',
          'extra_questions': {
          }
        },
        'waist': {
          'size': '',
          'review': 'strak',
          'extra_questions': {
          }
        },
        'length': {
          'size': '',
          'review': 'strak',
          'extra_questions': {
          }
        }
      },
      'shirt2': {
        'title': 'dsa',
        'collar': {
          'size': '',
          'review': 'strak',
          'extra_questions': {
          }
        },
        'shoulders': {
          'size': '',
          'review': 'strak',
          'extra_questions': {
          }
        },
        'sleeve': {
          'size': '',
          'review': 'strak',
          'extra_questions': {
          }
        },
        'chest': {
          'size': '',
          'review': 'strak',
          'extra_questions': {
          }
        },
        'waist': {
          'size': '',
          'review': 'strak',
          'extra_questions': {
          }
        },
        'length': {
          'size': '',
          'review': 'strak',
          'extra_questions': {
          }
        }
        },
        "margins": {
        "shoulders": {
            "UL": null,
            "LL": null
        },
        "waist": {
            "UL": null,
            "LL": null
        },
        "sleeve": {
            "UL": null,
            "LL": null
        },
        "chest": {
            "UL": null,
            "LL": null
        },
        "length": {
            "UL": null,
            "LL": null
        },
        "collar": {
            "UL": null,
            "LL": null
        }
    }
    }
    this.dataHandler = this.dataHandler.bind(this)
  }

  dataHandler(shirt, bodyPart, desc, value, answerQuestion) {
    let newState = this.state;
    if(answerQuestion) {
        newState[shirt][bodyPart][desc][value] = answerQuestion;
        this.setState(newState);
    } else if (bodyPart === '') {
        newState[shirt][desc] = value;
        this.setState(newState);
    } else {
        newState[shirt][bodyPart][desc] = value;
    }

      PostSizes.postSize(newState, bodyPart)
      .then((res) => res.json())
        .then((json) => {
            newState = json;
            this.setState(newState);
            console.log(newState);
        })
    	.catch((error) => {
            console.log('Error in authenticating session.');
        });
  }

  render() {
    return(
      <BrowserRouter>
        <div>

          <Route
            exact={true} path='/'
            render={() => <Homepage
              onShirtChange={this.dataHandler}
              userData={this.state}
            />}
          />

          <Route
            exact={true}
            path='/wizard/explanation'
            render={() => <ExplanationScreen />}
          />

          <Route
            exact={true}
            path='/wizard/navigation'
            render={() => <NavigationScreen />}
          />

          <Route
            exact={true}
            path='/wizard/collar'
            render={() => <WizardQuestion
              onShirtChange={this.dataHandler}
              partData={QuestionData('collar')}
              userData={this.state}
            />}
          />

          <Route
            exact={true}
            path='/wizard/shoulders'
            render={() => <WizardQuestion
              onShirtChange={this.dataHandler}
              partData={QuestionData('shoulders')}
              userData={this.state}
            />}
          />

          <Route
            exact={true}
            path='/wizard/sleeve'
            render={() => <WizardQuestion
              onShirtChange={this.dataHandler}
              partData={QuestionData('sleeve')}
              userData={this.state}
            />}
          />

          <Route
            exact={true}
            path='/wizard/chest'
            render={() => <WizardQuestion
              onShirtChange={this.dataHandler}
              partData={QuestionData('chest')}
              userData={this.state}
            />}
          />

          <Route
            exact={true}
            path='/wizard/waist'
            render={() => <WizardQuestion
              onShirtChange={this.dataHandler}
              partData={QuestionData('waist')}
              userData={this.state}
            />}
          />

          <Route
            exact={true}
            path='/wizard/length'
            render={() => <WizardQuestion
              onShirtChange={this.dataHandler}
              partData={QuestionData('length')}
              userData={this.state}
            />}
          />

        </div>
      </BrowserRouter>
    )
  }

}

export default Wizard;
