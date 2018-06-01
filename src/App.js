import React, { Component } from 'react'

import { Switch, Route } from 'react-router-dom'
import Cookies from 'universal-cookie'

import PracticeQuiz from './scenes/PracticeQuiz/'
import MockExam from './scenes/MockExam/'
import QuestionCatalogue from './scenes/QuestionCatalogue/'
import Home from './scenes/Home/'

import quizQuestions from './api/quizQuestions'
import badenWurttembergQuestions from './api/badenWurttembergQuestions'
import bayernQuestions from './api/bayernQuestions'
import berlinQuestions from './api/berlinQuestions'
import brandenburgQuestions from './api/brandenburgQuestions'
import bremenQuestions from './api/bremenQuestions'
import hamburgQuestions from './api/hamburgQuestions'
import hessenQuestions from './api/hessenQuestions'
import mecklenburgVorpommernQuestions from './api/mecklenburgVorpommernQuestions'
import niedersachsenQuestions from './api/niedersachsenQuestions'
import nordrheinWestfalenQuestions from './api/nordrheinWestfalenQuestions'
import rheinlandPfalzQuestions from './api/rheinlandPfalzQuestions'
import saarlandQuestions from './api/saarlandQuestions'
import sachsenQuestions from './api/sachsenQuestions'
import sachsenAnhaltQuestions from './api/sachsenAnhaltQuestions'
import schleswigHolsteinQuestions from './api/schleswigHolsteinQuestions'
import thuringenQuestions from './api/thuringenQuestions'


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

  componentDidUpdate(prevProps, prevState) {
    this.loadQuestionOptions()
    if (this.props.location.pathname !== prevProps.location.pathname) {
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
        case 'brandenburg':
          this.questions = this.questions.concat(brandenburgQuestions)
          break
        case 'bremen':
          this.questions = this.questions.concat(bremenQuestions)
          break
        case 'hamburg':
          this.questions = this.questions.concat(hamburgQuestions)
          break
        case 'hessen':
          this.questions = this.questions.concat(hessenQuestions)
          break
        case 'mecklenburgVorpommern':
          this.questions = this.questions.concat(mecklenburgVorpommernQuestions)
          break
        case 'niedersachsen':
          this.questions = this.questions.concat(niedersachsenQuestions)
          break
        case 'nordrheinWestfalen':
          this.questions = this.questions.concat(nordrheinWestfalenQuestions)
          break
        case 'rheinlandPfalz':
          this.questions = this.questions.concat(rheinlandPfalzQuestions)
          break
        case 'saarland':
          this.questions = this.questions.concat(saarlandQuestions)
          break
        case 'sachsen':
          this.questions = this.questions.concat(sachsenQuestions)
          break
        case 'sachsenAnhalt':
          this.questions = this.questions.concat(sachsenAnhaltQuestions)
          break
        case 'schleswigHolstein':
          this.questions = this.questions.concat(schleswigHolsteinQuestions)
          break
        case 'thuringen':
          this.questions = this.questions.concat(thuringenQuestions)
          break
        default:
          this.questions = this.questions.concat(sachsenQuestions)
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
    this.cookies.set('userLocation', target.value, {expires: expires, path: '/' })
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
        <Route exact path='/trainieren' render={(props) => (
          <PracticeQuiz {...props}
            questions={this.questions}
            numberOfQuestions={this.numberOfQuestions}
            userLastPage={this.state.userLastPage}
          />
        )}/>
        <Route exact path='/probeprufung' render={(props) => (
          <MockExam {...props}
            questions={this.questions}
            numberOfQuestions={this.numberOfQuestions}
            userLastPage={this.state.userLastPage}
            userLocation={this.state.userLocation}
          />
        )}/>
        <Route exact path='/fragenkatalog' render={(props) => (
          <QuestionCatalogue {...props}
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
