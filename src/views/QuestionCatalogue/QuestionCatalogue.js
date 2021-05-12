import React, { Component } from 'react'
import AllQuestionQuiz from './../../components/AllQuestionQuiz'
import FooterQc from './FooterQc/'
import Header from './../../components/Header'

class QuestionCatalogue extends Component {
  constructor(props){
    super(props)
    this.questions = this.props.questions
    this.numberOfQuestions = this.props.numberOfQuestions
    this.images = this.props.images
    this.state = {
      question: {},
      viewProgress: false,
      selectedAnswer: null,
      showAnswer: true,
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
      showAnswer: true,
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
        showAnswer: true,
        viewProgress: false
      }
    })
  }

  render() {
    let title = this.state.viewProgress ? 'Frage auswählen' : 'Fragenkatalog'
    return (
      <div className="App">
        <Header
          title={title}
          viewProgress={this.state.viewProgress}
          handleViewProgress={this.handleViewProgress}
          buttonsDisabled={false}
          userLastPage={this.props.userLastPage}
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
          images={this.images}
        />
        <FooterQc nextQuestion={this.nextQuestion} />
      </div>
    )
  }
}

export default QuestionCatalogue
