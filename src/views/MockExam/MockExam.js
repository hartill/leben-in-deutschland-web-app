import React, { Component } from 'react'
import Header from './../../components/Header'
import ExamFooter from './ExamFooter/'
import Exam from './../../components/Exam/'
import Cookies from 'universal-cookie'

class MockExam extends Component {
  constructor(props){
    super(props)
    this.cookies = new Cookies()
    this.questions = this.props.questions
    this.images = this.props.images
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
    this.onAnswerSelected = this.onAnswerSelected.bind(this)
    this.displayAnswers = this.displayAnswers.bind(this)
    this.generateNextQuestion = this.generateNextQuestion.bind(this)
    this.nextQuestion = this.nextQuestion.bind(this)
    this.restart = this.restart.bind(this)
    this.generateThreeQuestionsFromState = this.generateThreeQuestionsFromState.bind(this)
    this.generateQuestionArray = this.generateQuestionArray.bind(this)
    this.shuffleArray = this.shuffleArray.bind(this)
    this.examQuestions = this.cookies.get('examQuestions') || []
    if (this.examQuestions.length === 0) {
      this.examQuestions = this.generateQuestionArray()
    }
  }

  componentWillMount() {
    if ((this.numberOfQuestions === 30) && (this.examQuestions.length > 30)) {
      this.restart()
    }
    if ((this.numberOfQuestions === 33) && (this.examQuestions.length < 33)) {
      this.restart()
    }
    this.setState({
      question: this.questions[this.examQuestions[this.state.examProgress.length]]
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
    this.cookies.set('examQuestions', this.examQuestions, {expires: expires, path: '/' })
  }

  shuffleArray(array) {
    let currentIndex = array.length, temporaryValue, randomIndex
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1
      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }
    return array
  }

  generateQuestionArray() {
    let output = []
    for (let n=0; n<300; n++) {
      output.push(n)
    }
    this.shuffleArray(output)
    let QuestionArray = output.slice(0, 30)
    if (this.numberOfQuestions === 33) {
      let stateQuestions = this.generateThreeQuestionsFromState()
      QuestionArray.push.apply(QuestionArray, stateQuestions)
      this.shuffleArray(QuestionArray)
    }
    return QuestionArray
  }

  generateThreeQuestionsFromState() {
    let stateQuestions = []
    let maxNumber = 10
    let minNumber = 1
    let randNumber1 = Math.floor((Math.random() * maxNumber) + minNumber)
    let randomNumbersIndex1 = 300 + (randNumber1 - 1)
    stateQuestions.push(randomNumbersIndex1)

    let randNumber2 = Math.floor((Math.random() * maxNumber) + minNumber)
    while (randNumber2 === randNumber1) {
      randNumber2 = Math.floor((Math.random() * maxNumber) + minNumber)
    }
    let randomNumbersIndex2 = 300 + (randNumber2 - 1)
    stateQuestions.push(randomNumbersIndex2)

    let randNumber3 = Math.floor((Math.random() * maxNumber) + minNumber)
    while ((randNumber3 === randNumber2) || (randNumber3 === randNumber1)) {
      randNumber3 = Math.floor((Math.random() * maxNumber) + minNumber)
    }
    let randomNumbersIndex3 = 300 + (randNumber3 - 1)
    stateQuestions.push(randomNumbersIndex3)
    return stateQuestions
  }

  onAnswerSelected(event) {
    event.preventDefault()
    const target = event.target
    let questionId = target.name
    let questionCategory = this.questions[(questionId - 1)].category
    this.setState((prevState, props) => {
      return {
        selectedAnswer: target.id,
        showAnswer: true
      }
    })
    if (target.value === '1') {
      let data = {
        questionId: questionId,
        userScore: 1,
        category: questionCategory
      }
      this.setState(prevState => ({
          examProgress: [...prevState.examProgress, data]
      }))
    } else {
      let data = {
        questionId: questionId,
        userScore: 0,
        category: questionCategory
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
          question: this.questions[this.examQuestions[this.state.examProgress.length]],
          selectedAnswer: null,
          showAnswer: false,
        }
      })
    }
  }

  generateNextQuestion(questions) {
    let examProgress = [...this.state.examProgress]

    examProgress.sort(function(a, b) {
        return parseFloat(a.questionId) - parseFloat(b.questionId)
    })

    let maxNumber = this.numberOfQuestions > 30 ? 310 : 300
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
    this.cookies.remove('examQuestions')
    this.cookies.remove('examProgress')
    this.examQuestions = this.generateQuestionArray()
    this.setState({
        examProgress: [],
        examCompleted: false,
        showAnswer: false,
        selectedAnswer: null,
        lightBoxIsOpen: false,
        viewProgress: false,
    }, function () {
        this.nextQuestion()
    })
  }

  render() {
    let title = this.state.viewProgress ? 'Fragenübersicht' : 'Probeprüfung'
    return (
      <div className="App">
        <Header
          title={title}
          viewProgress={this.state.viewProgress}
          handleViewProgress={this.handleViewProgress}
          buttonsDisabled={false}
          userLastPage={this.props.userLastPage}
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
          images={this.images}
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
