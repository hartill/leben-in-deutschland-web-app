import React, { Component } from 'react'
import PracticeQuiz from './containers/PracticeQuiz'
import MockExam from './containers/MockExam'
import AllQuestions from './containers/AllQuestions'
import Home from './containers/Home'
import { Switch, Route } from 'react-router-dom'
import Cookies from 'universal-cookie'
import quizQuestions from './api/quizQuestions'
import badenWurttembergQuestions from './api/badenWurttembergQuestions'
import bayernQuestions from './api/bayernQuestions'
import berlinQuestions from './api/berlinQuestions'


class App extends Component {
  constructor(props) {
    super(props)
    this.cookies = new Cookies()
    this.state = {
      userLocation: this.cookies.get('userLocation') || 'none',
      userCurrentPage: this.props.location.pathname,
      userLastPage: ''
    }
    this.questions = quizQuestions
    this.numberOfQuestions = 300
    this.handleLocationChange = this.handleLocationChange.bind(this)
    this.loadQuestionOptions = this.loadQuestionOptions.bind(this)
  }

  componentWillMount() {
    this.loadQuestionOptions()
  }

  componentDidUpdate(nextProps, nextState) {
    this.loadQuestionOptions()
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.setState(prevState => ({
          userLastPage: this.state.userCurrentPage,
          userCurrentPage: this.props.location.pathname
      }))
    }
  }

  loadQuestionOptions() {
    this.questions = quizQuestions
    this.numberOfQuestions = 300
    if (this.state.userLocation !== 'none') {
      this.numberOfQuestions = 310
      let location = this.state.userLocation
      switch (location) {
        case 'badenWurttemberg':
          this.questions = this.questions.concat(badenWurttembergQuestions)
          break
        case 'bayern':
          this.questions = this.questions.concat(bayernQuestions)
          break
        case 'berlin':
          this.questions = this.questions.concat(berlinQuestions)
          break
        default:
          this.questions = this.questions.concat(badenWurttembergQuestions)
      }
    }
  }

  handleLocationChange(event) {
    event.preventDefault()
    const target = event.target
    this.setState(prevState => ({
        userLocation: target.value
    }))
    const expires = new Date()
    expires.setTime(expires.getTime()+(365*24*60*60*1000))
    expires.toUTCString()
    this.cookies.set('userLocation', this.state.userLocation, {expires: expires, path: '/' })
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' render={(props) => (
          <Home {...props}
            userLocation={this.state.userLocation}
            handleLocationChange={this.handleLocationChange}
            userLastPage={this.state.userLastPage}
          />
        )}/>
        <Route exact path='/ubung' render={(props) => (
          <PracticeQuiz {...props}
            questions={this.questions}
            numberOfQuestions={this.numberOfQuestions}
            userLastPage={this.state.userLastPage}
          />
        )}/>
        <Route exact path='/prufung' render={(props) => (
          <MockExam {...props}
            questions={this.questions}
            numberOfQuestions={this.numberOfQuestions}
            userLastPage={this.state.userLastPage}
          />
        )}/>
        <Route exact path='/alle-fragen' render={(props) => (
          <AllQuestions {...props}
            questions={this.questions}
            numberOfQuestions={this.numberOfQuestions}
            userLastPage={this.state.userLastPage}
          />
        )}/>
      </Switch>
    );
  }

}

export default App;
