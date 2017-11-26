import React, { Component } from 'react'
import PracticeQuiz from './containers/PracticeQuiz'
import MockExam from './containers/MockExam'
import AllQuestions from './containers/AllQuestions'
import Home from './containers/Home'
import { Switch, Route } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/ubung' component={PracticeQuiz}/>
          <Route path='/prufung' component={MockExam}/>
          <Route path='/alle-fragen' component={AllQuestions}/>
        </Switch>
      </div>
    );
  }

}

export default App;
