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
                'title': 'Naam eerste overhemd',
                'collar': {
                  'size': 38.5,
                  'review': 'past',
                  'extra_questions': '',
                },
                'shoulders': {
                  'size': 45.0,
                  'review': 'past',
                  'extra_questions': '',
                },
                'sleeve': {
                  'size': 62.0,
                  'review': 'past',
                  'extra_questions': '',
                },
                'chest': {
                  'size': 55.0,
                  'review': 'past',
                  'extra_questions': '',
                },
                'waist': {
                  'size': 49.0,
                  'review': 'past',
                  'extra_questions': '',
                },
                'length': {
                  'size': 80.0,
                  'review': 'past',
                  'extra_questions': '',
                }
          },
          'shirt2': {
                'title': 'Naam tweede overhemd',
                'collar': {
                  'size': 40.0,
                  'review': 'past',
                  'extra_questions': ''
                },
                'shoulders': {
                  'size': 48.0,
                  'review': 'past',
                  'extra_questions': ''
                },
                'sleeve': {
                  'size': 65.0,
                  'review': 'past',
                  'extra_questions': ''
                },
                'chest': {
                  'size': 58.0,
                  'review': 'past',
                  'extra_questions': ''
                },
                'waist': {
                  'size': 52.0,
                  'review': 'past',
                  'extra_questions': ''
                },
                'length': {
                  'size': 83.0,
                  'review': 'past',
                  'extra_questions': ''
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
    'shirts': {},
    'completed': []
    }
    this.dataHandler = this.dataHandler.bind(this);
    this.loadShirts = this.loadShirts.bind(this);
    this.setCompleted = this.setCompleted.bind(this);
  }

  loadShirts(title) {
      if(title) {
          var newState;
          PostSizes.postSize(this.state.userData, title)
          .then((res) => res.json())
            .then((json) => {
                newState = json;
                this.setState({
                    'userData': newState
                });
                GetShirts.getShirts(newState)
                .then((res) => res.json())
                  .then((json) => {
                      this.setState({
                        'shirts': json
                    });
                  })
            })
        	.catch((error) => {
                console.log('Error in authenticating session.');
            });
      } else {
          GetShirts.getShirts(this.state.userData)
          .then((res) => res.json())
            .then((json) => {
                this.setState({
                  'shirts': json
              });
            })
      }
  }

  dataHandler(shirt, bodyPart, desc, value, answerQuestion) {

    let newState = this.state.userData;
    if(answerQuestion) {
        newState[shirt][bodyPart][desc][value][1] = answerQuestion;
        newState[shirt][bodyPart][desc].splice(value+1, 3);
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

    setCompleted(title) {
        var newState = this.state;
        newState['completed'].push(title);
        this.setState({
             newState
        })
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
              completed={this.state.completed}
              loadShirts={this.loadShirts}
              setCompleted={this.setCompleted}
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
              completed={this.state.completed}
              loadShirts={this.loadShirts}
              setCompleted={this.setCompleted}
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
              completed={this.state.completed}
              loadShirts={this.loadShirts}
              setCompleted={this.setCompleted}
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
              completed={this.state.completed}
              loadShirts={this.loadShirts}
              setCompleted={this.setCompleted}
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
              completed={this.state.completed}
              loadShirts={this.loadShirts}
              setCompleted={this.setCompleted}
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
              completed={this.state.completed}
              loadShirts={this.loadShirts}
              setCompleted={this.setCompleted}
            />}
          />

        </div>
      </BrowserRouter>
    )
  }

}

export default Wizard;
