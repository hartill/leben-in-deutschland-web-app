import React, { Component } from 'react'
import Header from './../components/Header'
import ExamFooter from './../components/Exam/ExamFooter/'
import Exam from './../components/Exam/'
import Cookies from 'universal-cookie'

class MockExam extends Component {
  constructor(props){
    super(props)
    this.cookies = new Cookies()
    this.questions = this.props.questions
    this.state = {
      question: {},
      examProgress: this.cookies.get('examProgress') || [],
      showAnswer: false,
      selectedAnswer: null,
      examCompleted: false,
      viewProgress: false
    }
    this.numberOfQuestions = this.props.numberOfQuestions
    if (this.props.numberOfQuestions > 300) {
      this.numberOfQuestions = 33
    } else {
      this.numberOfQuestions = 30
    }
    this.handleViewProgress = this.handleViewProgress.bind(this)
    this.onAnswerSelected = this.onAnswerSelected.bind(this);
    this.displayAnswers = this.displayAnswers.bind(this);
    this.generateNextQuestion = this.generateNextQuestion.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.restart = this.restart.bind(this);
  }

  componentWillMount() {
    this.setState({
      question: this.generateNextQuestion(this.questions),
    })
    if(this.state.examProgress.length >= this.numberOfQuestions) {
      this.setState({
        examCompleted: true
      })
    }
  }

  componentDidUpdate(nextProps, nextState) {
    const expires = new Date()
    expires.setTime(expires.getTime()+(365*24*60*60*1000))
    expires.toUTCString()
    this.cookies.set('examProgress', this.state.examProgress, {expires: expires, path: '/' })
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
      let data = {
        questionId: questionId,
        userScore: 1
      }
      this.setState(prevState => ({
          examProgress: [...prevState.examProgress, data]
      }))
    } else {
      let data = {
        questionId: questionId,
        userScore: 0
      }
      this.setState(prevState => ({
          examProgress: [...prevState.examProgress, data]
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
    if (this.state.examProgress.length >= this.numberOfQuestions) {
      this.setState({
        examCompleted: true
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
    let examProgress = [...this.state.examProgress]
    examProgress.sort(function(a, b) {
        return parseFloat(a.questionId) - parseFloat(b.questionId)
    })
    let maxNumber = this.numberOfQuestions > 31 ? 310 : 300
    maxNumber = maxNumber - examProgress.length
    let minNumber = 1
    let randNumber = Math.floor((Math.random() * maxNumber) + minNumber)
    for (let i = 0; i < examProgress.length; i++) {
      if (randNumber >= parseFloat(examProgress[i].questionId)) {
        randNumber += 1
      }
    }
    let randomNumbersIndex = randNumber - 1
    return questions[randomNumbersIndex]
  }

  restart() {
    this.setState({
        examProgress: [],
        examCompleted: false,
        showAnswer: false,
        selectedAnswer: null,
        lightBoxIsOpen: false,
        viewProgress: false
    })
  }

  render() {
    let title = this.state.viewProgress ? 'Fragenübersicht' : 'Prüfung'
    return (
      <div className="App">
        <Header
          title={title}
          viewProgress={this.state.viewProgress}
          handleViewProgress={this.handleViewProgress}
        />
        <Exam
          viewProgress={this.state.viewProgress}
          examProgress={this.state.examProgress}
          showAnswer={this.state.showAnswer}
          onAnswerSelected={this.onAnswerSelected}
          displayAnswers={this.displayAnswers}
          selectedAnswer={this.state.selectedAnswer}
          question={this.state.question}
          questions={this.questions}
          restart={this.restart}
          numberOfQuestions={this.numberOfQuestions}
          examCompleted={this.state.examCompleted}
        />
        <ExamFooter
          examProgress={this.state.examProgress}
          numberOfQuestions={this.numberOfQuestions}
          nextQuestion={this.nextQuestion}
          showAnswer={this.state.showAnswer}
          displayAnswers={this.displayAnswers}
          viewProgress={this.state.viewProgress}
          restart={this.restart}
          examCompleted={this.state.examCompleted}
        />
      </div>
    )
  }
}

export default MockExam
