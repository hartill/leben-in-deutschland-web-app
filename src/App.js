import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import PracticeQuiz from './containers/PracticeQuiz'
import MockExam from './containers/MockExam'
import { Switch, Route } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={PracticeQuiz}/>
          <Route path='/ubung' component={PracticeQuiz}/>
          <Route path='/prufung' component={MockExam}/>
        </Switch>
      </div>
    );
  }

}

export default App;
