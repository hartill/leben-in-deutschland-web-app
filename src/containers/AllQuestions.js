import React, { Component } from 'react'
import AllQuestionQuiz from './../components/AllQuestionQuiz'
import AQFooter from './../components/AllQuestionQuiz/AQFooter'
import Header from './../components/Header'
import quizQuestions from './../api/quizQuestions'
import badenWurttembergQuestions from './../api/badenWurttembergQuestions'
import Cookies from 'universal-cookie'

class AllQuestions extends Component {
  constructor(props){
    super(props)
    this.questions = quizQuestions
    this.numberOfQuestions = 300
    this.cookies = new Cookies()
    this.state = {
      question: {},
      viewProgress: false,
      selectedAnswer: null,
      showAnswer: false,
      userLocation: this.cookies.get('userLocation') || 'none',
    }
    if (this.state.userLocation !== 'none') {
      this.numberOfQuestions = 310
      this.questions = this.questions.concat(badenWurttembergQuestions);
    }
    this.onAnswerSelected = this.onAnswerSelected.bind(this)
    this.displayAnswers = this.displayAnswers.bind(this)
    this.handleViewProgress = this.handleViewProgress.bind(this)
    this.nextQuestion = this.nextQuestion.bind(this)
    this.handleQuestionSelected = this.handleQuestionSelected.bind(this)
  }

  componentWillMount() {
    this.setState({
      question: this.questions[0],
    })
  }

  handleQuestionSelected(questionId) {
    this.setState({
      viewProgress: false,
      selectedAnswer: null,
      showAnswer: false,
      question: this.questions[(questionId - 1)]
    })
  }

  onAnswerSelected(event) {
    event.preventDefault()
    const target = event.target
    this.setState((prevState, props) => {
      return {
        selectedAnswer: target.id,
        showAnswer: true
      }
    })
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
    this.setState((prevState, props) => {
      let nextQuestion = parseFloat(prevState.question.id)
      if (nextQuestion >= this.numberOfQuestions) {
        nextQuestion = 0
      }
      return {
        question: this.questions[nextQuestion],
        selectedAnswer: null,
        showAnswer: false,
        viewProgress: false
      }
    })
  }

  render() {
    let title = this.state.viewProgress ? 'Frage auswählen' : 'Alle Fragen'
    return (
      <div className="App">
        <Header
          title={title}
          viewProgress={this.state.viewProgress}
          handleViewProgress={this.handleViewProgress}
        />
        <AllQuestionQuiz
          viewProgress={this.state.viewProgress}
          showAnswer={this.state.showAnswer}
          onAnswerSelected={this.onAnswerSelected}
          numberOfQuestions={this.numberOfQuestions}
          displayAnswers={this.displayAnswers}
          selectedAnswer={this.state.selectedAnswer}
          question={this.state.question}
          questions={this.questions}
          handleQuestionSelected={this.handleQuestionSelected}
        />
        <AQFooter
          numberOfQuestions={this.numberOfQuestions}
          nextQuestion={this.nextQuestion}
          showAnswer={this.state.showAnswer}
          displayAnswers={this.displayAnswers}
          viewProgress={this.state.viewProgress}
        />
      </div>
    )
  }
}

export default AllQuestions
