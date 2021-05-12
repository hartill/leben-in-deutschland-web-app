import React, { Component } from 'react'
import Header from './../../components/Header'
import Footer from './../../components/Footer'
import Quiz from './../../components/Quiz/Quiz'
import Cookies from 'universal-cookie'

class PracticeQuiz extends Component {
  constructor(props){
    super(props)
    this.cookies = new Cookies()
    this.questions = this.props.questions
    this.numberOfQuestions = this.props.numberOfQuestions
    this.images = this.props.images
    this.state = {
      question: {},
      completed: false,
      viewProgress: false,
      progress: this.cookies.get('progress') || [],
      incorrect: this.cookies.get('incorrect') || [],
      selectedAnswer: null,
      showAnswer: false,
    }

    this.handleViewProgress = this.handleViewProgress.bind(this)
    this.onAnswerSelected = this.onAnswerSelected.bind(this)
    this.displayAnswers = this.displayAnswers.bind(this)
    this.generateNextQuestion = this.generateNextQuestion.bind(this)
    this.nextQuestion = this.nextQuestion.bind(this)
    this.restart = this.restart.bind(this)
  }

  componentWillMount() {
    this.setState({
      question: this.generateNextQuestion(this.questions),
    })
  }

  componentDidUpdate(nextProps, nextState) {
    this.state.progress.sort(function (a, b){return a-b})
    this.state.incorrect.sort(function (a, b){return a-b})
    const expires = new Date()
    expires.setTime(expires.getTime()+(365*24*60*60*1000))
    expires.toUTCString()
    this.cookies.set('progress', this.state.progress, {expires: expires, path: '/' })
    this.cookies.set('incorrect', this.state.incorrect, {expires: expires, path: '/' })
  }

  onAnswerSelected(event) {
    event.preventDefault()
    const target = event.target
    let questionId = target.name
    this.setState((prevState, props) => {
      return {
        selectedAnswer: target.id,
        showAnswer: true
      }
    })
    if (target.value === '1') {
      this.setState(prevState => ({
          progress: [...prevState.progress, questionId]
      }))
    } else {
      this.setState(prevState => ({
          incorrect: [...prevState.incorrect, questionId]
      }))
    }
  }

  displayAnswers() {
    this.setState(prevState => ({
      showAnswer: true
    }))
  }

  handleViewProgress() {
    if (this.state.viewProgress === true) {
      this.setState(prevState => ({
        viewProgress: false
      }))
    } else {
      this.setState(prevState => ({
        viewProgress: true
      }))
    }
  }

  nextQuestion() {
    if (this.state.progress.length >= this.numberOfQuestions) {
      this.setState({
        completed: true
      })
    } else {
      this.setState((prevState, props) => {
        return {
          question: this.generateNextQuestion(this.questions),
          selectedAnswer: null,
          showAnswer: false
        }
      })
    }
  }

  generateNextQuestion(questions) {
    let correctAnswers = this.state.progress
    let maxNumber = this.numberOfQuestions - correctAnswers.length
    let minNumber = 1
    let randNumber = Math.floor((Math.random() * maxNumber) + minNumber);
    for (let i = 0; i < correctAnswers.length; i++) {
      if (randNumber >= correctAnswers[i]) {
        randNumber += 1
      }
    }
    let randomNumbersIndex = randNumber - 1
    return questions[randomNumbersIndex]
  }

  restart() {
    this.setState({
        progress: [],
        incorrect: [],
        completed: false,
        showAnswer: false,
        selectedAnswer: null,
        lightBoxIsOpen: false,
        viewProgress: false
    })
  }

  render() {
    let title = this.state.viewProgress ? 'Fragenübersicht' : 'Trainieren'
    return (
      <div className="App">
        <Header
          title={title}
          viewProgress={this.state.viewProgress}
          handleViewProgress={this.handleViewProgress}
          buttonsDisabled={false}
          userLastPage={this.props.userLastPage}
        />
        <Quiz
          viewProgress={this.state.viewProgress}
          progress={this.state.progress}
          incorrect={this.state.incorrect}
          showAnswer={this.state.showAnswer}
          onAnswerSelected={this.onAnswerSelected}
          numberOfQuestions={this.numberOfQuestions}
          displayAnswers={this.displayAnswers}
          selectedAnswer={this.state.selectedAnswer}
          question={this.state.question}
          questions={this.questions}
          completed={this.state.completed}
          images={this.images}
        />
        <Footer
          progress={this.state.progress}
          numberOfQuestions={this.numberOfQuestions}
          nextQuestion={this.nextQuestion}
          showAnswer={this.state.showAnswer}
          displayAnswers={this.displayAnswers}
          viewProgress={this.state.viewProgress}
          restart={this.restart}
          completed={this.state.completed}
        />
      </div>
    )
  }
}

export default PracticeQuiz
