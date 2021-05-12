import React, { Component } from 'react'

import { Switch, Route } from 'react-router-dom'
import Cookies from 'universal-cookie'

import PracticeQuiz from './views/PracticeQuiz/'
import MockExam from './views/MockExam/'
import QuestionCatalogue from './views/QuestionCatalogue/'
import Home from './views/Home/'

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

import image_021 from './static/images/021.png'
import image_055 from './static/images/055.png'
import image_070 from './static/images/070.png'
import image_130 from './static/images/130.png'
import image_176 from './static/images/176.png'
import image_181 from './static/images/181.png'
import image_187 from './static/images/187.png'
import image_209 from './static/images/209.png'
import image_216 from './static/images/216.png'
import image_226 from './static/images/226.png'
import image_235 from './static/images/235.png'
import image_301 from './static/images/badenWurttemberg/301.png'
import image_308 from './static/images/badenWurttemberg/308.png'
import image_311 from './static/images/bayern/311.png'
import image_318 from './static/images/bayern/318.png'
import image_321 from './static/images/berlin/321.png'
import image_328 from './static/images/berlin/328.png'
import image_331 from './static/images/brandenburg/331.png'
import image_338 from './static/images/brandenburg/338.png'
import image_341 from './static/images/bremen/341.png'
import image_348 from './static/images/bremen/348.png'
import image_351 from './static/images/hamburg/351.png'
import image_358 from './static/images/hamburg/358.png'
import image_361 from './static/images/hessen/361.png'
import image_368 from './static/images/hessen/368.png'
import image_371 from './static/images/mecklenburgVorpommern/371.png'
import image_378 from './static/images/mecklenburgVorpommern/378.png'
import image_381 from './static/images/niedersachsen/381.png'
import image_388 from './static/images/niedersachsen/388.png'
import image_391 from './static/images/nordrheinWestfalen/391.png'
import image_398 from './static/images/nordrheinWestfalen/398.png'
import image_401 from './static/images/rheinlandPfalz/401.png'
import image_408 from './static/images/rheinlandPfalz/408.png'
import image_411 from './static/images/saarland/411.png'
import image_418 from './static/images/saarland/418.png'
import image_421 from './static/images/sachsen/421.png'
import image_428 from './static/images/sachsen/428.png'
import image_431 from './static/images/sachsenAnhalt/431.png'
import image_438 from './static/images/sachsenAnhalt/438.png'
import image_441 from './static/images/schleswigHolstein/441.png'
import image_448 from './static/images/schleswigHolstein/448.png'
import image_451 from './static/images/thuringen/451.png'
import image_458 from './static/images/thuringen/458.png'

class App extends Component {
  constructor(props) {
    super(props)
    this.cookies = new Cookies()
    this.state = {
      userLocation: this.cookies.get('userLocation') || 'none',
      userCurrentPage: this.props.location.pathname,
      userLastPage: '',
    }
    this.questions = quizQuestions
    this.numberOfQuestions = 300
    this.handleLocationChange = this.handleLocationChange.bind(this)
    this.loadQuestionOptions = this.loadQuestionOptions.bind(this)
    this.restart = this.restart.bind(this)
    this.images = {
      image_021: image_021,
      image_055: image_055,
      image_070: image_070,
      image_130: image_130,
      image_176: image_176,
      image_181: image_181,
      image_187: image_187,
      image_209: image_209,
      image_216: image_216,
      image_226: image_226,
      image_235: image_235,
      image_301: image_301,
      image_308: image_308,
      image_311: image_311,
      image_318: image_318,
      image_321: image_321,
      image_328: image_328,
      image_331: image_331,
      image_338: image_338,
      image_341: image_341,
      image_348: image_348,
      image_351: image_351,
      image_358: image_358,
      image_361: image_361,
      image_368: image_368,
      image_371: image_371,
      image_378: image_378,
      image_381: image_381,
      image_388: image_388,
      image_391: image_391,
      image_398: image_398,
      image_401: image_401,
      image_408: image_408,
      image_411: image_411,
      image_418: image_418,
      image_421: image_421,
      image_428: image_428,
      image_431: image_431,
      image_438: image_438,
      image_441: image_441,
      image_448: image_448,
      image_451: image_451,
      image_458: image_458,
    }
  }

  componentWillMount() {
    this.loadQuestionOptions()
  }

  componentDidUpdate(prevProps, prevState) {
    this.loadQuestionOptions()
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState((prevState) => ({
        userLastPage: this.state.userCurrentPage,
        userCurrentPage: this.props.location.pathname,
      }))
    }
  }

  restart() {
    this.cookies.remove('examQuestions')
    this.cookies.remove('examProgress')
    this.cookies.remove('progress')
    this.cookies.remove('incorrect')
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
    /*if (window.confirm('Fortschritt wird verloren gehen')) {
      this.restart()
      this.setState(prevState => ({
          userLocation: target.value
      }))
      const expires = new Date()
      expires.setTime(expires.getTime()+(365*24*60*60*1000))
      expires.toUTCString()
      this.cookies.set('userLocation', target.value, {expires: expires, path: '/' })
    }*/
    this.restart()
    this.setState((prevState) => ({
      userLocation: target.value,
    }))
    const expires = new Date()
    expires.setTime(expires.getTime() + 365 * 24 * 60 * 60 * 1000)
    expires.toUTCString()
    this.cookies.set('userLocation', target.value, { expires: expires, path: '/' })
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <Home
              {...props}
              userLocation={this.state.userLocation}
              handleLocationChange={this.handleLocationChange}
              userLastPage={this.state.userLastPage}
            />
          )}
        />
        <Route
          exact
          path="/trainieren"
          render={(props) => (
            <PracticeQuiz
              {...props}
              questions={this.questions}
              numberOfQuestions={this.numberOfQuestions}
              userLastPage={this.state.userLastPage}
              images={this.images}
            />
          )}
        />
        <Route
          exact
          path="/probeprufung"
          render={(props) => (
            <MockExam
              {...props}
              questions={this.questions}
              numberOfQuestions={this.numberOfQuestions}
              userLastPage={this.state.userLastPage}
              images={this.images}
            />
          )}
        />
        <Route
          exact
          path="/fragenkatalog"
          render={(props) => (
            <QuestionCatalogue
              {...props}
              questions={this.questions}
              numberOfQuestions={this.numberOfQuestions}
              userLastPage={this.state.userLastPage}
              images={this.images}
            />
          )}
        />
      </Switch>
    )
  }
}

export default App
