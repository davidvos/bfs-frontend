import React, { Component } from 'react';

import { Route, BrowserRouter } from 'react-router-dom'

import Homepage from './Homepage';
import WizardQuestion from './Wizard/WizardQuestion';
import NavigationScreen from './Wizard/NavigationScreen';
import ExplanationScreen from './Wizard/ExplanationScreen';

import * as PostSizes from '../Data/PostSizes.js';
import * as GetShirts from '../Data/GetShirts.js';

import QuestionData from '../Data/QuestionData.js';

class Wizard extends Component {

  constructor() {
    super();
    this.state = {
      'userData': {

          'shirt1': {
                'title': 'Tommy',
                'collar': {
                  'size': QuestionData('collar').sizes[0],
                  'review': 'strak',
                  'extra_questions': {
                  }
                },
                'shoulders': {
                  'size': QuestionData('shoulders').sizes[0],
                  'review': 'strak',
                  'extra_questions': {
                  }
                },
                'sleeve': {
                  'size': QuestionData('sleeve').sizes[0],
                  'review': 'strak',
                  'extra_questions': {
                  }
                },
                'chest': {
                  'size': QuestionData('chest').sizes[0],
                  'review': 'strak',
                  'extra_questions': {
                  }
                },
                'waist': {
                  'size': QuestionData('waist').sizes[0],
                  'review': 'strak',
                  'extra_questions': {
                  }
                },
                'length': {
                  'size': QuestionData('length').sizes[0],
                  'review': 'strak',
                  'extra_questions': {
                  }
                }
          },
          'shirt2': {
                'title': 'Hugo',
                'collar': {
                  'size': QuestionData('collar').sizes[0],
                  'review': 'strak',
                  'extra_questions': {
                  }
                },
                'shoulders': {
                  'size': QuestionData('shoulders').sizes[0],
                  'review': 'strak',
                  'extra_questions': {
                  }
                },
                'sleeve': {
                  'size': QuestionData('sleeve').sizes[0],
                  'review': 'strak',
                  'extra_questions': {
                  }
                },
                'chest': {
                  'size': QuestionData('chest').sizes[0],
                  'review': 'strak',
                  'extra_questions': {
                  }
                },
                'waist': {
                  'size': QuestionData('waist').sizes[0],
                  'review': 'strak',
                  'extra_questions': {
                  }
                },
                'length': {
                  'size': QuestionData('length').sizes[0],
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
        },
    'shirts': {}
    }
    this.dataHandler = this.dataHandler.bind(this);
    this.loadShirts = this.loadShirts.bind(this);
  }

  loadShirts() {
      GetShirts.getShirts(this.state.userData)
      .then((res) => res.json())
        .then((json) => {
            this.setState({
              'shirts': json
          });
        })
  }

  dataHandler(shirt, bodyPart, desc, value, answerQuestion) {
    let newState = this.state.userData;
    if(answerQuestion) {
        newState[shirt][bodyPart][desc][value] = answerQuestion;
        this.setState({
            'userData': newState
        });
    } else if (bodyPart === '') {
        newState[shirt][desc] = value;
        this.setState({
            'userData': newState
        });
        return;
    } else {
        newState['shirt1'][bodyPart]['extra_questions'] = [];
        newState['shirt2'][bodyPart]['extra_questions'] = [];
        newState[shirt][bodyPart][desc] = value;
        this.setState({
            'userData': newState
        });
    }
    console.log(newState);
      PostSizes.postSize(newState, bodyPart)
      .then((res) => res.json())
        .then((json) => {
            newState = json;
            this.setState({
                'userData': newState
            });
        })
    	.catch((error) => {
            console.log('Error in authenticating session.');
        });
}

    componentWillMount() {
        this.loadShirts();
    }

  render() {
    return(
      <BrowserRouter>
        <div>

          <Route
            exact={true} path='/'
            render={() => <Homepage
              onShirtChange={this.dataHandler}
              userData={this.state.userData}
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
              userData={this.state.userData}
              shirtData={this.state.shirts}
              loadShirts={this.loadShirts}
            />}
          />

          <Route
            exact={true}
            path='/wizard/shoulders'
            render={() => <WizardQuestion
              onShirtChange={this.dataHandler}
              partData={QuestionData('shoulders')}
              userData={this.state.userData}
              shirtData={this.state.shirts}
              loadShirts={this.loadShirts}
            />}
          />

          <Route
            exact={true}
            path='/wizard/sleeve'
            render={() => <WizardQuestion
              onShirtChange={this.dataHandler}
              partData={QuestionData('sleeve')}
              userData={this.state.userData}
              shirtData={this.state.shirts}
              loadShirts={this.loadShirts}
            />}
          />

          <Route
            exact={true}
            path='/wizard/chest'
            render={() => <WizardQuestion
              onShirtChange={this.dataHandler}
              partData={QuestionData('chest')}
              userData={this.state.userData}
              shirtData={this.state.shirts}
              loadShirts={this.loadShirts}
            />}
          />

          <Route
            exact={true}
            path='/wizard/waist'
            render={() => <WizardQuestion
              onShirtChange={this.dataHandler}
              partData={QuestionData('waist')}
              userData={this.state.userData}
              shirtData={this.state.shirts}
              loadShirts={this.loadShirts}
            />}
          />

          <Route
            exact={true}
            path='/wizard/length'
            render={() => <WizardQuestion
              onShirtChange={this.dataHandler}
              partData={QuestionData('length')}
              userData={this.state.userData}
              shirtData={this.state.shirts}
              loadShirts={this.loadShirts}
            />}
          />

        </div>
      </BrowserRouter>
    )
  }

}

export default Wizard;
