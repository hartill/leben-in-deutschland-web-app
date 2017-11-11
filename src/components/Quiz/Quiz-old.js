import React from 'react';
import './quiz.css';
import quizQuestions from './../../api/quizQuestions'
import Lightbox from 'react-image-lightbox';
import Cookies from 'universal-cookie';

class Quiz extends React.Component {
  constructor(props){
    super(props);
    this.cookies = new Cookies();
    this.questions = quizQuestions
    this.state = {
      question: {},
      progress: [],
      incorrect: [],
      showAnswer: false,
      selectedAnswer: null,
      completed: false,
      isOpen: false
    }
    this.generateNextQuestion = this.generateNextQuestion.bind(this);
    this.renderAnswerOptions = this.renderAnswerOptions.bind(this);
    this.onAnswerSelected = this.onAnswerSelected.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.displayAnswers = this.displayAnswers.bind(this);
    this.restart = this.restart.bind(this);
  }

  componentWillMount() {
    this.setState({
      question: this.generateNextQuestion(this.questions),
      progress: this.cookies.get('progress') || [],
      incorrect: this.cookies.get('incorrect') || [],
      showAnswer: false,
      selectedAnswer: null,
      completed: false,
      isOpen: false
    })
  }

  onAnswerSelected(event) {
    const target = event.target
    let questionId = target.name
    this.setState((prevState, props) => {
      return {
        selectedAnswer: target.id,
        showAnswer: true
      }
    })
    if (target.value === '1') {
      if (this.state.progress.includes(questionId) === false) {
        this.setState(prevState => ({
            progress: [...prevState.progress, questionId]
        }))
      }
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

  componentDidUpdate(nextProps, nextState) {
    this.state.progress.sort(function (a, b){return a-b})
    this.state.incorrect.sort(function (a, b){return a-b})
    const expires = new Date()
    expires.setTime(expires.getTime()+(365*24*60*60*1000))
    expires.toUTCString()
    this.cookies.set('progress', this.state.progress, {expires: expires, path: '/' })
    this.cookies.set('incorrect', this.state.incorrect, {expires: expires, path: '/' })
    if ((this.state.progress.length >= 300) && (this.state.progress !== nextState.progress)) {
      this.setState({
        completed: true
      })
    }
  }

  componentWillReceiveProps(nextProps) {
  }

  generateNextQuestion(questions) {
    let correctAnswers = this.state.progress
    let maxNumber = 300 - correctAnswers.length
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
        isOpen: false
    })
  }

  nextQuestion() {
    this.setState((prevState, props) => {
      return {
        question: this.generateNextQuestion(this.questions),
        selectedAnswer: null,
        showAnswer: false
      }
    })
  }

  renderAnswerOptions(question, showAnswer) {
    let output = []
    let answerHighlight = ''
    let disabled = false
    let checked = false
    let active = ''
    if (this.state.showAnswer === true) {
      disabled = true
      active = 'disabled'
    }
    for (let i=0; i<question.answers.length; i++) {
      if (this.state.showAnswer === true) {
        if (this.state.selectedAnswer === '' + i + '') {
          answerHighlight = "incorrectAnswer"
        }
        if (question.answers[i].key === 1) {
          answerHighlight = "correctAnswer"
        }
      }
      output.push (
            <label className={'AnswerOption ' + answerHighlight + ' ' + active} key={i}>
              <div className='AnswerInput'>
                <input
                  type="radio"
                  className="radioCustomButton"
                  name={question.id}
                  id={i}
                  value={question.answers[i].key}
                  onChange={this.onAnswerSelected}
                  disabled={disabled}
                  checked={checked}
                />
              </div>
              <div className='AnswerText'>
                {question.answers[i].content}
              </div>
            </label>
      )
      answerHighlight = ''
    }
    return output
  }

  renderImage(image) {
    let isOpen = this.state.isOpen
    return (
      <div className="QuestionImage" onClick={() => this.setState({ isOpen: true })}>
        <p>
          Bild ansehen
        </p>
      {isOpen &&
      <Lightbox
          mainSrc={image}
          onCloseRequest={() => this.setState({ isOpen: false })}
          onMovePrevRequest={() => {}}
          onMoveNextRequest={() => {}}
      />
      }
      </div>
    )
  }

  render () {
    let userProgress = this.state.progress.length
    let userProgressPercent = 100 - (userProgress / 300 * 100)
    let userProgressStyle = {
      right: userProgressPercent + '%',
    }
    if (this.state.completed === false) {
      let question = this.state.question
      let questionCountStyle = 'yellowCount'
      let incorrectCount  = this.state.incorrect.reduce(function(n, val) {
          return n + (val === question.id)
      }, 0)
      let correctCount = this.state.progress.reduce(function(n, val) {
          return n + (val === question.id)
      }, 0)
      let totalCount = correctCount - incorrectCount
      totalCount < 0 ? questionCountStyle = 'redCount' :  null
      totalCount > 0 ? questionCountStyle = 'greenCount' : null
      let image = this.state.question.image !== undefined ? require(`./../../static/images/${question.image}`) : null
      return (
        <div className="Container">
          <div className="QuizContainer">
            <div className="QuizHeader">
              <div className="QuestionNumber">
                {question.id}
              </div>
              <div className='QuestionCategory'>
                {question.category}
              </div>
              <div className={'QuestionCount' + ' ' + questionCountStyle}>
                {totalCount}
              </div>
            </div>
            <div className="QuizBodyContainer">
              <div className="QuizBody">
                <div className="QuestionText">
                  {question.question}
                </div>
                {question.image !== undefined ? this.renderImage(image) : null}
                {this.renderAnswerOptions(question, this.showAnswer)}
              </div>
            </div>
            <div className='NextQuestion'>
              <div className="UserScore">
                <div className='UserProgress' style={userProgressStyle}></div>
                <div className='Score'>
                  {userProgress} / 300
                </div>
              </div>
              <button className={ this.state.showAnswer ===  true ? 'NextQuestionButton Visible' : 'NextQuestionButton Hidden'} onClick={this.nextQuestion} >
                <img src ={require("./../../static/images/next-qu-icon-01.png")} alt='next-question' />
              </button>
              <button className={ this.state.showAnswer ===  false ? 'NextQuestionButton Visible' : 'NextQuestionButton Hidden'} onClick={this.displayAnswers} >
                <p>Ich wei&szlig; nicht</p>
              </button>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="Container">
          <div className="QuizContainer">
            <div className="QuizHeader">
              <div className="QuestionCategory">
                Alle 300 richtig!
              </div>
            </div>
            <div className="QuizBodyContainer">
              <div className="QuizBody">
                <div className="ResultBarBlack"></div>
                <div className="ResultBarRed"></div>
                <div className="ResultBarYellow"></div>
              </div>
            </div>
            <div className='NextQuestion'>
              <div className="UserScore">
                <div className='UserProgress' style={userProgressStyle}></div>
                <div className='Score'>
                  {userProgress} / 300
                </div>
              </div>
              <button className='NextQuestionButton' onClick={this.restart} >
                <p>Ne&uuml;start?</p>
              </button>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Quiz
